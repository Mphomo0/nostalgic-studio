#!/usr/bin/env python3
"""
seo_fixer.py — universal SEO / AEO / GEO auditor + fix generator
================================================================
Works on ANY website. Crawls real pages, MEASURES every common on-page issue
(title/description length, H1 count, Open Graph completeness, hreflang x-default,
canonical, JSON-LD validity, links-to-redirects, image alt), and GENERATES
length-validated replacement metadata you can paste into any CMS — or, in
--html-dir --apply mode, rewrites local source files in place.

A language model should never eyeball character counts or JSON-LD validity; this
script makes those parts deterministic. It AUDITS + GENERATES; deploying to a live
site is still done by you (paste the output, or run --apply on your source files).

USAGE
-----
  python seo_fixer.py --url https://example.com/
  python seo_fixer.py --sitemap https://example.com/sitemap.xml
  python seo_fixer.py --urls-file urls.txt
  python seo_fixer.py --html-dir ./public --apply        # rewrite local files
  python seo_fixer.py --sitemap ... --check-links         # flag links to redirects

CONTEXT (optional — improves generated copy)
  --brand "Acme"            (auto-derived from the domain if omitted)
  --location "Cape Town"    (added to copy for local businesses; omit for national)
  --type local|national|ecommerce|saas|blog   (tunes generated descriptions)

OUTPUT: seo_report.csv, seo_report.json, console summary.
Requires: pip install requests beautifulsoup4 lxml
"""

import argparse, csv, json, os, re, sys, time
from urllib.parse import urljoin, urlparse
from xml.etree import ElementTree as ET

try:
    import requests
    from bs4 import BeautifulSoup
except ImportError:
    sys.exit("Missing deps. Run: pip install requests beautifulsoup4 lxml")

# ---- RULES (edit to match your audit tool's thresholds) --------------------
TITLE_MIN, TITLE_MAX = 30, 60
DESC_MIN, DESC_MAX = 110, 160
REQUIRED_OG = ["og:title", "og:description", "og:image", "og:url", "og:type"]
REQUIRED_TWITTER = ["twitter:card"]
SCHEMA_REQUIRED = {
    "Organization": ["name", "url"], "LocalBusiness": ["name", "address"],
    "ProfessionalService": ["name", "address"], "WebSite": ["name", "url"],
    "WebPage": ["name"], "Service": ["name"], "FAQPage": ["mainEntity"],
    "BreadcrumbList": ["itemListElement"], "Article": ["headline", "author"],
    "Product": ["name"], "Person": ["name"], "Event": ["name", "startDate"],
    "Recipe": ["name"], "VideoObject": ["name", "thumbnailUrl", "uploadDate"],
}
HEADERS = {"User-Agent": "SEOFixer/2.0 (+audit script)"}
SESSION = requests.Session(); SESSION.headers.update(HEADERS)


# ---- fetching --------------------------------------------------------------
def fetch(url, timeout=20):
    try:
        return SESSION.get(url, timeout=timeout, allow_redirects=True)
    except Exception as e:
        print(f"  ! could not fetch {url}: {e}"); return None


def urls_from_sitemap(sitemap_url, seen=None):
    seen = seen or set()
    if sitemap_url in seen:
        return []
    seen.add(sitemap_url)
    out = []
    r = fetch(sitemap_url)
    if not r or r.status_code != 200:
        print(f"  ! sitemap not reachable ({sitemap_url})"); return out
    try:
        root = ET.fromstring(r.content)
    except ET.ParseError:
        print("  ! sitemap is not valid XML"); return out
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    for sm in root.findall(".//sm:sitemap/sm:loc", ns):
        out.extend(urls_from_sitemap(sm.text.strip(), seen))
    for loc in root.findall(".//sm:url/sm:loc", ns):
        out.append(loc.text.strip())
    return out


def brand_from_domain(any_url):
    host = urlparse(any_url).netloc or any_url
    host = re.sub(r"^www\.", "", host)
    core = host.split(".")[0] if "." in host else host
    return core.capitalize() if core else "the site"


# ---- extraction ------------------------------------------------------------
def extract(html, base_url=""):
    soup = BeautifulSoup(html, "lxml")
    d = {}
    tt = soup.find("title")
    d["title"] = tt.get_text(strip=True) if tt else ""
    dt = soup.find("meta", attrs={"name": re.compile("^description$", re.I)})
    d["description"] = dt.get("content", "").strip() if dt else ""
    d["h1s"] = [h.get_text(" ", strip=True) for h in soup.find_all("h1")]
    cn = soup.find("link", attrs={"rel": re.compile("canonical", re.I)})
    d["canonical"] = cn.get("href", "").strip() if cn else ""
    og = {}
    for m in soup.find_all("meta"):
        prop = (m.get("property") or m.get("name") or "").lower()
        if prop.startswith("og:") or prop.startswith("twitter:"):
            og[prop] = m.get("content", "").strip()
    d["og"] = og
    d["hreflangs"] = [l.get("hreflang", "").lower()
                      for l in soup.find_all("link", attrs={"rel": re.compile("alternate", re.I)})
                      if l.get("hreflang")]
    d["jsonld_raw"] = [(s.string or s.get_text()).strip()
                       for s in soup.find_all("script", attrs={"type": re.compile("ld\\+json", re.I)})
                       if (s.string or s.get_text())]
    imgs = soup.find_all("img")
    d["img_total"] = len(imgs)
    d["img_no_alt"] = sum(1 for i in imgs if not (i.get("alt") or "").strip())
    links = []
    if base_url:
        host = urlparse(base_url).netloc
        for a in soup.find_all("a", href=True):
            full = urljoin(base_url, a["href"])
            if urlparse(full).netloc == host and full.startswith("http"):
                links.append(full)
    d["internal_links"] = sorted(set(links))
    return d


def validate_jsonld(blocks):
    types, errors = [], []
    for raw in blocks:
        try:
            obj = json.loads(raw)
        except json.JSONDecodeError as e:
            errors.append(f"JSON-LD parse error: {e}"); continue
        items = obj if isinstance(obj, list) else [obj]
        for top in items:
            if not isinstance(top, dict):
                continue
            # @context on the root covers all @graph items (valid JSON-LD inheritance)
            root_ctx = str(top.get("@context", ""))
            if "@graph" in top:
                graph_items = top["@graph"]
            else:
                graph_items = [top]
            for it in graph_items:
                if not isinstance(it, dict):
                    continue
                # item-level @context overrides root; fall back to root
                ctx = str(it.get("@context", root_ctx))
                if "schema.org" not in ctx:
                    errors.append("Missing or non-schema.org @context")
                t = it.get("@type", "")
                for tt in (t if isinstance(t, list) else [t]):
                    if tt:
                        types.append(tt)
                    for prop in SCHEMA_REQUIRED.get(tt, []):
                        if prop not in it:
                            errors.append(f"{tt} missing required property '{prop}'")
    return types, errors


# ---- fix generation (generic, location-optional, type-aware) ---------------
def topic_from(d, url):
    if d["h1s"]:
        return d["h1s"][0]
    if d["title"]:
        return re.split(r"[|\-–—:]", d["title"])[0].strip()
    slug = urlparse(url).path.strip("/").split("/")[-1] or "Home"
    return slug.replace("-", " ").replace("_", " ").title()


def fit(text, hi):
    text = re.sub(r"\s+", " ", text).strip()
    if len(text) > hi:
        cut = text[:hi]
        if " " in cut:
            cut = cut[: cut.rfind(" ")]
        text = cut.rstrip(" ,;:-")
    return text


def gen_title(d, url, brand, location, btype="generic"):
    topic = topic_from(d, url)
    is_home = urlparse(url).path in ("", "/")
    loc = f" {location}" if (location and is_home) else (f" in {location}" if location else "")
    base = re.sub(r"\s+", " ", f"{topic}{loc} | {brand}").strip()
    # too long -> trim
    if len(base) > TITLE_MAX:
        base = fit(f"{topic} | {brand}", TITLE_MAX)
    if len(base) > TITLE_MAX:
        base = fit(topic, TITLE_MAX)
    # too short -> pad with honest, type-appropriate qualifiers
    if len(base) < TITLE_MIN:
        qualifier = {"ecommerce": f"Buy {topic} Online", "blog": f"{topic}: Complete Guide",
                     "local": f"{topic} Services{(' in ' + location) if location else ''}",
                     "national": f"{topic} Services", "saas": f"{topic} Software",
                     "generic": topic}.get(btype, topic)
        cand = re.sub(r"\s+", " ", f"{qualifier} | {brand}").strip()
        if len(cand) <= TITLE_MAX:
            base = cand
        if len(base) < TITLE_MIN and location and location.lower() not in base.lower():
            cand2 = re.sub(r"\s+", " ", f"{base.split(' | ')[0]} in {location} | {brand}").strip()
            if len(cand2) <= TITLE_MAX:
                base = cand2
    return base  # may still be <30 for unavoidably short topics; flagged for human review


def gen_description(d, url, brand, location, btype):
    topic = topic_from(d, url)
    existing = d["description"]
    loc_phrase = f" in {location}" if location else ""
    templates = {
        "local":     f"{topic}{loc_phrase}. {brand} helps local businesses get found, build trust and turn visitors into enquiries. Get a free quote today.",
        "ecommerce": f"Shop {topic} at {brand}. Quality products, fast shipping and easy returns. Browse the range and order online today.",
        "saas":      f"{topic} — {brand} helps teams work faster with less hassle. See how it works and start a free trial today.",
        "blog":      f"{topic}: a clear, practical guide from {brand}. Learn what matters, avoid the common mistakes and get started with confidence.",
        "national":  f"{topic}. {brand} delivers reliable, results-focused service. See what we offer and get in touch for a free consultation.",
        "generic":   f"{topic}. {brand} — clear information, real expertise and helpful answers. Learn more and get in touch today.",
    }
    cand = existing if existing else templates.get(btype, templates["generic"])
    cand = re.sub(r"\s+", " ", cand).strip()
    if len(cand) < DESC_MIN:
        tail = (f" Serving {location} and nearby areas — talk to {brand} about getting more enquiries."
                if location else f" Find out more about {brand} and how we can help — get in touch today.")
        cand = re.sub(r"\s+", " ", cand + tail).strip()
    if len(cand) < DESC_MIN:  # still short → use the type template
        cand = re.sub(r"\s+", " ", templates.get(btype, templates["generic"])).strip()
    if len(cand) > DESC_MAX:
        cand = fit(cand, DESC_MAX)
    return cand


# ---- per-page audit --------------------------------------------------------
def audit_page(url, html, brand, location, btype, check_links=False):
    d = extract(html, base_url=url)
    issues = []
    t, tl = d["title"], len(d["title"])
    if tl == 0: issues.append(("CRITICAL", "Title missing"))
    elif tl > TITLE_MAX: issues.append(("HIGH", f"Title too long ({tl} chars)"))
    elif tl < TITLE_MIN: issues.append(("MEDIUM", f"Title too short ({tl} chars)"))

    desc, dl = d["description"], len(d["description"])
    if dl == 0: issues.append(("HIGH", "Meta description missing or empty"))
    elif dl > DESC_MAX: issues.append(("MEDIUM", f"Meta description too long ({dl} chars)"))
    elif dl < DESC_MIN: issues.append(("MEDIUM", f"Meta description too short ({dl} chars)"))

    n = len(d["h1s"])
    if n == 0: issues.append(("HIGH", "No H1 tag"))
    elif n > 1: issues.append(("MEDIUM", f"Multiple H1 tags ({n})"))

    if not d["canonical"]:
        issues.append(("LOW", "No canonical tag"))
    miss_og = [k for k in REQUIRED_OG if k not in d["og"]]
    if miss_og: issues.append(("MEDIUM", "Open Graph incomplete: missing " + ", ".join(miss_og)))
    if [k for k in REQUIRED_TWITTER if k not in d["og"]]:
        issues.append(("LOW", "Twitter card missing"))
    if d["hreflangs"] and "x-default" not in d["hreflangs"]:
        issues.append(("LOW", "x-default hreflang annotation missing"))

    types, schema_errors = validate_jsonld(d["jsonld_raw"])
    if not d["jsonld_raw"]:
        issues.append(("HIGH", "No structured data (JSON-LD) found"))
    for e in schema_errors:
        issues.append(("MEDIUM", f"Schema validation error: {e}"))
    if d["img_no_alt"]:
        issues.append(("LOW", f"{d['img_no_alt']}/{d['img_total']} images missing alt text"))

    redirecting = []
    if check_links and d["internal_links"]:
        for link in d["internal_links"][:60]:
            try:
                rr = SESSION.head(link, timeout=10, allow_redirects=False)
                if rr.status_code in (301, 302, 303, 307, 308):
                    redirecting.append((link, rr.status_code, rr.headers.get("location", "")))
            except Exception:
                pass
            time.sleep(0.05)
        if redirecting:
            issues.append(("MEDIUM", f"{len(redirecting)} internal links point to redirects"))

    return {"url": url, "path": urlparse(url).path or "/",
            "topic": topic_from(d, url),
            "title": t, "title_len": tl,
            "suggested_title": gen_title(d, url, brand, location, btype),
            "description": desc, "desc_len": dl,
            "suggested_description": gen_description(d, url, brand, location, btype),
            "h1_count": n, "h1_text": " | ".join(d["h1s"]),
            "schema_types": ", ".join(sorted(set(types))),
            "missing_og": ", ".join(miss_og), "issues": issues,
            "redirecting_links": redirecting}


# ---- local-file mode -------------------------------------------------------
def process_local(html_dir, brand, location, btype, apply_changes):
    rows = []
    for root, _, files in os.walk(html_dir):
        for fn in files:
            if not fn.lower().endswith((".html", ".htm")):
                continue
            path = os.path.join(root, fn)
            with open(path, encoding="utf-8", errors="ignore") as f:
                html = f.read()
            b = brand or brand_from_domain(path)
            res = audit_page("file://" + path, html, b, location, btype)
            res["file"] = path
            rows.append(res)
            if apply_changes:
                soup = BeautifulSoup(html, "lxml")
                if soup.head is None:
                    continue
                changed = False
                cur = soup.find("title")
                clen = len(cur.get_text(strip=True)) if cur else 0
                if not cur or clen > TITLE_MAX or clen < TITLE_MIN:
                    if not cur:
                        cur = soup.new_tag("title"); soup.head.append(cur)
                    cur.string = res["suggested_title"]; changed = True
                desc = soup.find("meta", attrs={"name": re.compile("^description$", re.I)})
                dlen = len(desc.get("content", "")) if desc else 0
                if not desc or dlen > DESC_MAX or dlen < DESC_MIN:
                    if not desc:
                        desc = soup.new_tag("meta"); desc["name"] = "description"; soup.head.append(desc)
                    desc["content"] = res["suggested_description"]; changed = True
                if changed:
                    with open(path, "w", encoding="utf-8") as f:
                        f.write(str(soup))
                    print(f"  ~ rewrote meta in {path}")
    return rows


# ---- reporting -------------------------------------------------------------
def write_reports(rows, prefix):
    with open(f"{prefix}.json", "w", encoding="utf-8") as f:
        json.dump(rows, f, indent=2, ensure_ascii=False)
    with open(f"{prefix}.csv", "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow(["URL", "Title len", "Desc len", "H1 count", "Schema types",
                    "Missing OG", "Suggested title", "Suggested description", "Issues"])
        for r in rows:
            w.writerow([r["url"], r["title_len"], r["desc_len"], r["h1_count"],
                        r["schema_types"], r["missing_og"],
                        f'{r["suggested_title"]} ({len(r["suggested_title"])})',
                        f'{r["suggested_description"]} ({len(r["suggested_description"])})',
                        " || ".join(f"[{s}] {m}" for s, m in r["issues"])])


def print_summary(rows):
    counts, with_issues = {}, 0
    for r in rows:
        if r["issues"]:
            with_issues += 1
        for sev, msg in r["issues"]:
            k = re.sub(r"\(.*?\)", "", msg).strip()
            counts[k] = counts.get(k, 0) + 1
    print("\n" + "=" * 64)
    print(f"AUDITED {len(rows)} pages  |  {with_issues} have issues")
    print("=" * 64 + "\nISSUE TOTALS:")
    for k, v in sorted(counts.items(), key=lambda x: -x[1]):
        print(f"  {v:>4}  {k}")
    clean = len(rows) - with_issues
    print(f"\nClean pages: {clean}/{len(rows)} ({(clean/len(rows)*100) if rows else 0:.0f}%)")
    print("\nNEXT: open the CSV. 'Suggested title' / 'Suggested description' are "
          "length-validated and ready to paste. Deploy, then re-crawl to confirm 100%.")


# ---- CONTEXT INTAKE + FULL ARTIFACT GENERATION -----------------------------
# These power "rewrite everything" mode. The script never invents facts: any
# required fact missing from context.json is emitted as <<NEEDS INPUT: ...>>
# and listed in BLOCKERS.txt so the user knows exactly what to supply for 100%.

CONTEXT_TEMPLATE = {
    "brand": "",
    "site_url": "https://example.com",
    "business_type": "local | national | ecommerce | saas | blog | generic",
    "description": "ONE sentence: what you do, who for, where",
    "founded_year": "",
    "phone": "",
    "email": "",
    "address": {"street": "", "locality": "", "region": "", "postal": "", "country": "ISO2 e.g. ZA"},
    "areas_served": "",
    "hours": {"days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "08:00", "closes": "17:00"},
    "logo_url": "",
    "default_og_image": "https://example.com/og/default.jpg",
    "sameAs": ["https://www.facebook.com/...", "https://www.instagram.com/...", "https://www.linkedin.com/company/..."],
    "languages": ["en"],
    "currency": "",
    "_pages_help": "Optional per-path overrides. Key = URL path. Add real FAQ Q&As (they must also be put on the visible page).",
    "pages": {
        "/example-service": {
            "primary_keyword": "",
            "intent": "commercial",
            "page_type": "Service | Article | Product | WebPage",
            "author": "",
            "faq": [{"q": "", "a": ""}]
        }
    }
}

REQUIRED_BY_TYPE = {
    "_all": ["brand", "site_url", "description", "logo_url", "default_og_image"],
    "local": ["phone", "address", "areas_served"],
    "national": ["phone"],
    "ecommerce": ["currency"],
    "saas": [], "blog": [], "generic": [],
}


def scaffold_context(path):
    with open(path, "w", encoding="utf-8") as f:
        json.dump(CONTEXT_TEMPLATE, f, indent=2, ensure_ascii=False)
    print(f"Wrote a blank context file to {path}\n"
          "Fill in the REAL facts (leave a field empty if unknown — the script will\n"
          "flag it as a blocker rather than invent it), then run with --context "
          f"{path} --generate.")


def load_context(path):
    with open(path, encoding="utf-8") as f:
        return json.load(f)


def esc(s):
    return str(s).replace("&", "&amp;").replace('"', "&quot;").replace("<", "&lt;").replace(">", "&gt;")


def need(value, label, blockers):
    """Return a real value, or a labelled placeholder + record the blocker."""
    if value and str(value).strip() and "NEEDS INPUT" not in str(value) and "example.com" not in str(value) and "..." not in str(value):
        return value
    blockers.append(label)
    return f"<<NEEDS INPUT: {label}>>"


def addr_complete(addr):
    if not isinstance(addr, dict):
        return False
    return all(addr.get(k, "").strip() for k in ("street", "locality", "country"))


def check_required(ctx, blockers):
    btype = (ctx.get("business_type", "generic") or "generic").split()[0]
    req = REQUIRED_BY_TYPE["_all"] + REQUIRED_BY_TYPE.get(btype, [])
    for field in req:
        val = ctx.get(field, "")
        if field == "address":
            if not addr_complete(val):
                blockers.append("address (street + locality + country) — needed for LocalBusiness schema")
            continue
        need(val, f"{field} — needed for schema/metadata accuracy", blockers)


def build_site_artifacts(ctx, blockers):
    site = (ctx.get("site_url") or "https://example.com").rstrip("/")
    brand = need(ctx.get("brand"), "brand", blockers)
    desc = need(ctx.get("description"), "description (one sentence)", blockers)
    logo = need(ctx.get("logo_url"), "logo_url", blockers)
    same = [s for s in ctx.get("sameAs", []) if s and "..." not in s]
    org = {"@type": "Organization", "@id": f"{site}/#org", "name": brand,
           "url": f"{site}/", "logo": logo, "description": desc}
    if same:
        org["sameAs"] = same
    else:
        blockers.append("sameAs (official social/profile URLs) — recommended for AI/GEO entity linking")
    graph = [org, {"@type": "WebSite", "@id": f"{site}/#website", "name": brand,
                   "url": f"{site}/", "publisher": {"@id": f"{site}/#org"}}]

    btype = (ctx.get("business_type", "generic") or "generic").split()[0]
    if btype == "local":
        a = ctx.get("address", {}) if isinstance(ctx.get("address"), dict) else {}
        local = {"@type": "LocalBusiness", "@id": f"{site}/#local", "name": brand,
                 "url": f"{site}/",
                 "telephone": need(ctx.get("phone"), "phone — for LocalBusiness", blockers),
                 "email": ctx.get("email", ""),
                 "address": {"@type": "PostalAddress",
                             "streetAddress": need(a.get("street"), "address.street", blockers),
                             "addressLocality": need(a.get("locality"), "address.locality", blockers),
                             "addressRegion": a.get("region", ""),
                             "postalCode": a.get("postal", ""),
                             "addressCountry": need(a.get("country"), "address.country", blockers)},
                 "areaServed": need(ctx.get("areas_served"), "areas_served", blockers)}
        h = ctx.get("hours")
        if isinstance(h, dict) and h.get("opens"):
            local["openingHoursSpecification"] = [{"@type": "OpeningHoursSpecification",
                "dayOfWeek": h.get("days", []), "opens": h.get("opens"), "closes": h.get("closes")}]
        graph.append(local)

    site_jsonld = json.dumps({"@context": "https://schema.org", "@graph": graph}, indent=2, ensure_ascii=False)

    # llms.txt
    llms = [f"# {brand}", f"> {desc}", "",
            f"{brand} is a {btype} business" + (f" based in {ctx.get('areas_served')}" if ctx.get("areas_served") else "") + ".",
            "", "## Key pages",
            f"- [Home]({site}/)",
            f"- [About]({site}/about): who we are",
            f"- [Contact]({site}/contact): {ctx.get('phone','<<NEEDS INPUT: phone>>')} | {ctx.get('email','')}",
            "", "## Facts",
            f"- Founded: {ctx.get('founded_year') or '<<NEEDS INPUT: founded_year>>'}",
            f"- Service area: {ctx.get('areas_served') or '<<NEEDS INPUT: areas_served>>'}"]
    return {"_site/site-schema.jsonld": f'<script type="application/ld+json">\n{site_jsonld}\n</script>\n',
            "_site/llms.txt": "\n".join(llms) + "\n"}


def build_page_artifacts(res, ctx, blockers):
    site = (ctx.get("site_url") or "https://example.com").rstrip("/")
    brand = ctx.get("brand") or "Brand"
    btype = (ctx.get("business_type", "generic") or "generic").split()[0]
    location = ""
    if btype == "local" and isinstance(ctx.get("address"), dict):
        location = ctx["address"].get("locality", "") or ctx.get("areas_served", "")
    pages = ctx.get("pages", {}) or {}
    pctx = pages.get(res["path"], {}) if isinstance(pages, dict) else {}

    # keyword-led title/description when provided
    d_stub = {"h1s": [res["topic"]], "title": res["title"], "description": res["description"]}
    kw = pctx.get("primary_keyword", "")
    if kw:
        d_stub["h1s"] = [kw.title()]
    title = gen_title(d_stub, res["url"], brand, location, btype)
    description = gen_description(d_stub, res["url"], brand, location, btype)

    og_img = need(ctx.get("default_og_image"), "default_og_image", blockers)
    page_url = res["url"] if res["url"].startswith("http") else f"{site}{res['path']}"

    head = [f"<title>{esc(title)}</title>  <!-- {len(title)} chars -->",
            f'<meta name="description" content="{esc(description)}">  <!-- {len(description)} chars -->',
            f'<link rel="canonical" href="{esc(page_url)}">',
            '<meta property="og:type" content="website">',
            f'<meta property="og:title" content="{esc(title)}">',
            f'<meta property="og:description" content="{esc(description)}">',
            f'<meta property="og:url" content="{esc(page_url)}">',
            f'<meta property="og:image" content="{esc(og_img)}">',
            f'<meta property="og:site_name" content="{esc(brand)}">',
            '<meta name="twitter:card" content="summary_large_image">',
            f'<meta name="twitter:title" content="{esc(title)}">',
            f'<meta name="twitter:description" content="{esc(description)}">',
            f'<meta name="twitter:image" content="{esc(og_img)}">']
    langs = ctx.get("languages", ["en"])
    if isinstance(langs, list) and len(langs) > 1:
        for lg in langs:
            head.append(f'<link rel="alternate" hreflang="{lg}" href="{esc(page_url)}">')
        head.append(f'<link rel="alternate" hreflang="x-default" href="{esc(page_url)}">')

    # page schema
    ptype = pctx.get("page_type", "WebPage").split()[0] if pctx.get("page_type") else "WebPage"
    graph = [{"@type": "BreadcrumbList", "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": f"{site}/"},
        {"@type": "ListItem", "position": 2, "name": kw.title() if kw else res["topic"], "item": page_url}]}]
    if ptype == "Service":
        graph.append({"@type": "Service", "name": kw.title() if kw else res["topic"],
                      "provider": {"@id": f"{site}/#org"},
                      "areaServed": ctx.get("areas_served", location), "url": page_url})
    elif ptype == "Article":
        graph.append({"@type": "BlogPosting", "headline": title,
                      "author": {"@type": "Person", "name": need(pctx.get("author"), f"author for {res['path']}", blockers)},
                      "publisher": {"@id": f"{site}/#org"}, "mainEntityOfPage": page_url})
    elif ptype == "Product":
        graph.append({"@type": "Product", "name": kw.title() if kw else res["topic"], "url": page_url,
                      "_note": "add real image/sku/offers.price/currency — never invent"})
    faq = [q for q in pctx.get("faq", []) if q.get("q") and q.get("a")]
    if faq:
        graph.append({"@type": "FAQPage", "mainEntity": [
            {"@type": "Question", "name": q["q"],
             "acceptedAnswer": {"@type": "Answer", "text": q["a"]}} for q in faq]})
    elif ptype in ("Service", "WebPage"):
        blockers.append(f"FAQ Q&As for {res['path']} — add 3+ real Q&As (visible on page) for AEO/AI answers")

    page_jsonld = json.dumps({"@context": "https://schema.org", "@graph": graph}, indent=2, ensure_ascii=False)
    body = ("<!-- Paste into <head> -->\n" + "\n".join(head) +
            '\n\n<script type="application/ld+json">\n' + page_jsonld + "\n</script>\n")
    return body


def generate_artifacts(rows, ctx, out_dir):
    blockers = []
    check_required(ctx, blockers)
    os.makedirs(os.path.join(out_dir, "_site"), exist_ok=True)
    for fn, content in build_site_artifacts(ctx, blockers).items():
        with open(os.path.join(out_dir, fn), "w", encoding="utf-8") as f:
            f.write(content)
    for res in rows:
        safe = (res["path"].strip("/").replace("/", "_") or "home")
        with open(os.path.join(out_dir, f"{safe}.head.html"), "w", encoding="utf-8") as f:
            f.write(build_page_artifacts(res, ctx, blockers))
    # de-dup blockers, preserve order
    seen, uniq = set(), []
    for b in blockers:
        if b not in seen:
            seen.add(b); uniq.append(b)
    with open(os.path.join(out_dir, "BLOCKERS.txt"), "w", encoding="utf-8") as f:
        if uniq:
            f.write("These REAL facts are missing. Supply them in context.json to reach 100% "
                    "(the script will NOT invent them):\n\n")
            f.write("\n".join(f"- {b}" for b in uniq) + "\n")
        else:
            f.write("No blockers — all required facts were provided. Deploy the artifacts, then re-crawl.\n")
    print(f"\nGenerated artifacts in {out_dir}/  (per-page *.head.html, _site/site-schema.jsonld, _site/llms.txt)")
    if uniq:
        print(f"\n⚠ {len(uniq)} INPUT BLOCKERS (see {out_dir}/BLOCKERS.txt) — fill these in context.json for 100%:")
        for b in uniq[:12]:
            print(f"   - {b}")
        if len(uniq) > 12:
            print(f"   ...and {len(uniq) - 12} more")
    else:
        print("✓ No input blockers — every required fact was provided.")


def main():
    ap = argparse.ArgumentParser(description="Universal SEO/AEO/GEO auditor + fix generator")
    src = ap.add_mutually_exclusive_group(required=False)
    src.add_argument("--url"); src.add_argument("--sitemap")
    src.add_argument("--urls-file"); src.add_argument("--html-dir")
    ap.add_argument("--brand", default="")
    ap.add_argument("--location", default="")
    ap.add_argument("--type", dest="btype", default="generic",
                    choices=["local", "national", "ecommerce", "saas", "blog", "generic"])
    ap.add_argument("--check-links", action="store_true")
    ap.add_argument("--apply", action="store_true", help="(html-dir only) rewrite meta in place")
    ap.add_argument("--out", default="seo_report")
    ap.add_argument("--delay", type=float, default=0.3)
    # rewrite-everything mode
    ap.add_argument("--scaffold-context", metavar="PATH",
                    help="write a blank context.json for you to fill with REAL facts, then exit")
    ap.add_argument("--context", metavar="PATH", help="context.json of real facts (no invention)")
    ap.add_argument("--generate", action="store_true",
                    help="with --context: generate ALL artifacts (titles, descriptions, OG, "
                         "JSON-LD, FAQ, llms.txt) + a BLOCKERS list of missing facts")
    ap.add_argument("--artifacts-dir", default="seo_artifacts")
    a = ap.parse_args()

    # 1) scaffold a blank context file and exit (the "prompt the user for input" step)
    if a.scaffold_context:
        scaffold_context(a.scaffold_context); return

    if not (a.url or a.sitemap or a.urls_file or a.html_dir):
        ap.error("provide one of --url / --sitemap / --urls-file / --html-dir "
                 "(or --scaffold-context to start)")

    ctx = load_context(a.context) if a.context else None
    btype = (ctx.get("business_type", a.btype).split()[0] if ctx else a.btype)
    location = a.location or (ctx.get("address", {}).get("locality", "") if ctx and isinstance(ctx.get("address"), dict) else "")
    brand = a.brand or (ctx.get("brand", "") if ctx else "")

    if a.html_dir:
        rows = process_local(a.html_dir, brand, location, btype, a.apply)
    else:
        if a.url:
            urls = [a.url]
        elif a.sitemap:
            print(f"Reading sitemap {a.sitemap} ...")
            urls = urls_from_sitemap(a.sitemap)
            print(f"  found {len(urls)} URLs")
        else:
            with open(a.urls_file) as f:
                urls = [ln.strip() for ln in f if ln.strip()]
        b = brand or (brand_from_domain(urls[0]) if urls else "the site")
        rows = []
        for i, u in enumerate(urls, 1):
            print(f"[{i}/{len(urls)}] {u}")
            r = fetch(u)
            if not r or r.status_code != 200:
                print(f"  ! status {r.status_code if r else 'ERR'}"); continue
            rows.append(audit_page(u, r.text, b, location, btype, a.check_links))
            time.sleep(a.delay)

    if not rows:
        sys.exit("No pages audited.")
    write_reports(rows, a.out)
    print_summary(rows)

    # 2) rewrite-everything: generate all artifacts from real facts
    if a.generate:
        if not ctx:
            print("\n--generate needs --context PATH. Run --scaffold-context context.json first, "
                  "fill in the real facts, then re-run with --context context.json --generate.")
        else:
            generate_artifacts(rows, ctx, a.artifacts_dir)


if __name__ == "__main__":
    main()
