export interface LocationInfo {
  slug: string
  name: string
  province: string
  /** Unique title tag (≤60 chars) — avoids the templated "Web Design {City} | Digital Agency" pattern */
  titleTag: string
  /** Unique meta description per city */
  metaDescription: string
  /** For cities outside Gauteng: honest disclosure that we serve them remotely from Johannesburg */
  remoteNote?: string
  description: string
  population: string
  businessHub: string
  nearby: string[]
  localBusinesses: string[]
  uniqueContent: string
  faq: { q: string; a: string }[]
  localCaseStudy?: {
    title: string
    slug: string
    description: string
  }
}

export const locations: LocationInfo[] = [
  {
    slug: 'sandton',
    name: 'Sandton',
    province: 'Gauteng',
    titleTag: 'Web Design Sandton | Corporate Sites',
    metaDescription:
      'Web design for Sandton firms — law, finance, consulting and property. Authoritative Next.js sites that rank for competitive keywords. Fixed quotes.',
    description:
      'Sandton is the financial and business hub of South Africa, home to the Johannesburg Stock Exchange and headquarters of most major corporations. Businesses in Sandton need websites that project authority, load instantly, and convert high-value corporate clients.',
    population: '222,000+',
    businessHub: 'Sandton CBD, Alice Lane, Rivonia Road',
    nearby: ['Morningside', 'Bryanston', 'Rivonia', 'Illovo', 'Melrose Arch'],
    localBusinesses: [
      'Corporate head offices and financial services',
      'Law firms and legal practices',
      'Management consulting firms',
      'Real estate and property developers',
      'Luxury retail and hospitality brands',
    ],
    uniqueContent:
      'Sandton is Africa\'s richest square mile and the corporate heartbeat of South Africa. Businesses here compete for high-value clients who expect a polished, authoritative digital presence before they ever pick up the phone. A generic template site will not cut it in Sandton — your website needs to reflect the same level of professionalism as your boardroom. We build custom Next.js websites for Sandton-based firms that load in under a second, rank for competitive keywords like "financial advisor Sandton" and "corporate law firm Johannesburg", and convert high-net-worth visitors into qualified leads. Whether you need a corporate website, a professional services platform, or an e-commerce experience for a premium brand, we design for the standard Sandton demands.',
    faq: [
      {
        q: 'Do you work with businesses in Morningside, Bryanston, and Rivonia?',
        a: 'Yes. We work with businesses across Sandton and its surrounding suburbs, including Morningside, Bryanston, Rivonia, Illovo, Melrose Arch, and the broader Sandton CBD area. Every project includes local SEO targeting your specific suburb.',
      },
      {
        q: 'How much does a business website cost in Sandton?',
        a: 'Our pricing starts from R1,500 for a simple landing page and ranges to R25,000+ for full corporate websites with multiple service pages, team profiles, blog, and advanced SEO. We provide a fixed quote — no hourly rates.',
      },
          {
        q: 'How long does it take to build a corporate website in Sandton?',
        a: 'A 5-page starter site takes 1–2 weeks. Most Sandton corporate websites — with team profiles, service pages, and a blog — take 3–6 weeks from kickoff to launch. Complex e-commerce or investor-facing platforms take 8–12 weeks. We agree the timeline in writing before we start.',
      },
      {
        q: 'Can you help my firm rank for competitive Sandton search terms?',
        a: 'Yes. Sandton is one of the most contested local search markets in South Africa. We target terms like "financial advisor Sandton" and "corporate law firm Johannesburg" through technical SEO, Google Business Profile optimisation, and content built around your practice areas. SEO packages start at R1,500/month.',
      },
      {
        q: 'Do we need to meet in person at your offices?',
        a: 'No. We run most Sandton projects over email and video calls, which keeps things moving around your schedule. That said, we are based in Johannesburg, so if you would prefer to meet at your Alice Lane or Rivonia Road offices for the kickoff or design review, we are happy to.',
      },
    ],
    localCaseStudy: {
      title: 'Sozim SEO & Digital Marketing Campaign',
      slug: 'sozim-consultancy-case-study',
      description:
        'An 8-week SEO campaign for a consultancy that generated 163+ organic clicks in 28 days with a 3.95% CTR.',
    },
  },
  {
    slug: 'fourways',
    name: 'Fourways',
    province: 'Gauteng',
    titleTag: 'Web Design Fourways | Local SEO Sites',
    metaDescription:
      'Mobile-first websites for Fourways, Douglasdale, Sunninghill & Lonehill businesses. Local SEO built in, delivered in 2–4 weeks. Free quote.',
    description:
      'Fourways is one of Johannesburg\'s fastest-growing residential and commercial nodes. With a mix of established businesses and ambitious startups, Fourways companies need modern digital experiences that stand out in a competitive northern suburbs market.',
    population: '100,000+',
    businessHub: 'Fourways Crossing, Broadacres, Cedar Square',
    nearby: ['Douglasdale', 'Sunninghill', 'Lonehill', 'Chartwell', 'Kyalami'],
    localBusinesses: [
      'Real estate agencies and property developers',
      'Retail and FMCG brands',
      'Restaurant and hospitality groups',
      'Health and fitness professionals',
      'Tech startups and SMEs',
    ],
    uniqueContent:
      'Fourways has grown from a quiet northern suburb into one of Johannesburg\'s busiest commercial nodes, with companies competing for attention across Douglasdale, Sunninghill, and Lonehill. The Fourways market is unique because it blends established businesses with ambitious startups — both need websites that perform. We build fast, SEO-optimised websites for Fourways businesses that rank for local searches like "plumber Fourways", "real estate agent Sunninghill", or "restaurant Lonehill". Every site is mobile-first (over 65% of Fourways traffic comes from phones), loads in under 1.5 seconds, and includes structured data for AI search visibility. Whether you are launching a new brand or refreshing an existing one, we give Fourways businesses the digital presence they need to win local market share.',
    faq: [
      {
        q: 'Do you work with businesses in Douglasdale, Sunninghill, and Lonehill?',
        a: 'Yes. We cover Fourways and all surrounding suburbs including Douglasdale, Sunninghill, Lonehill, Chartwell, and Kyalami. Our local SEO approach targets your specific area.',
      },
      {
        q: 'How fast can you build a website for my Fourways business?',
        a: 'Most websites are delivered within 2–4 weeks. Simple brochure sites can launch in as little as 1 week. We agree on a timeline before starting and provide weekly progress updates.',
      },
          {
        q: 'How much does a website cost for a Fourways business?',
        a: 'Starter websites begin at R1,500 for a 5-page site with mobile-responsive design and basic SEO. Most Fourways businesses — estate agencies, restaurants, and retail brands — choose the R8,000–R15,000 business package. Online stores run R10,000–R25,000+. Every quote is fixed, with no hourly billing.',
      },
      {
        q: 'Can you get my Fourways business showing on Google Maps?',
        a: 'Yes. Local SEO for Fourways includes Google Business Profile setup and optimisation, consistent name-address-phone details across directories, and location-specific content targeting Fourways Crossing, Broadacres, and Cedar Square. This is what puts you in the local map pack when nearby customers search.',
      },
      {
        q: 'Do you build websites for restaurants and fitness studios?',
        a: 'Yes. Fourways has a dense restaurant and health-and-fitness market, and both depend on the same things online: fast mobile pages, clear menus or class schedules, and frictionless booking. We build online booking, table reservations, and class sign-ups directly into the site.',
      },
    ],
  },
  {
    slug: 'rosebank',
    name: 'Rosebank',
    province: 'Gauteng',
    titleTag: 'Web Design Rosebank | Brand-Led Sites',
    metaDescription:
      'Design-forward websites for Rosebank galleries, boutiques, restaurants and studios. Visual storytelling without sacrificing speed or SEO.',
    description:
      'Rosebank is Johannesburg\'s creative and cultural district, known for its art galleries, media companies, and fashion boutiques. Businesses here need websites with stunning visual design that match the area\'s sophisticated, trendsetting character.',
    population: '30,000+',
    businessHub: 'Rosebank Mall, The Zone, Keyes Art Mile',
    nearby: ['Melrose', 'Hyde Park', 'Dunkeld', 'Parktown North', 'Saxonwold'],
    localBusinesses: [
      'Art galleries and creative studios',
      'Media and publishing companies',
      'Fashion and luxury boutiques',
      'Restaurants and cocktail bars',
      'Co-working spaces and startups',
    ],
    uniqueContent:
      'Rosebank is Johannesburg\'s creative and cultural heart — home to Keyes Art Mile, designer boutiques, media houses, and some of the city\'s best restaurants. A Rosebank business needs a website that is as visually refined as the area itself. We build design-forward websites for Rosebank brands that emphasise stunning visuals, smooth animations, and immersive storytelling — without sacrificing load speed or SEO. From luxury restaurant sites with dynamic menus and booking integration to fashion brand stores with seamless checkout, every project reflects the sophisticated, trendsetting energy of the area. We also ensure your site ranks for local searches like "best restaurant Rosebank" or "art gallery Johannesburg", helping you capture the premium local audience Rosebank attracts.',
    faq: [
      {
        q: 'Do you work with businesses in Melrose, Hyde Park, and Dunkeld?',
        a: 'Yes. We serve Rosebank and the surrounding suburbs including Melrose, Hyde Park, Dunkeld, Parktown North, and Saxonwold. We understand the unique visual standards these areas demand.',
      },
      {
        q: 'Can you build an online booking system for my Rosebank restaurant or salon?',
        a: 'Yes. We integrate online booking and reservation systems into websites for restaurants, salons, and medical practices. This includes calendar sync, automated confirmations, and mobile-friendly booking flows.',
      },
          {
        q: 'How much does a website cost for a Rosebank business?',
        a: 'Starter sites begin at R1,500. Most Rosebank studios, galleries, and boutiques choose the R8,000–R15,000 business package, which includes custom design and a portfolio or lookbook. E-commerce for fashion and retail brands runs R10,000–R25,000+. Quotes are fixed upfront.',
      },
      {
        q: 'Can you build a portfolio site that does justice to visual work?',
        a: 'Yes. Rosebank is Johannesburg\'s creative district, and galleries, studios, and fashion brands here are judged on presentation. We build image-led portfolio sites with full-resolution galleries that still load fast, because we compress and serve images properly rather than letting a template slow the page down.',
      },
      {
        q: 'How long will my Rosebank website take to launch?',
        a: 'A 5-page starter site takes 1–2 weeks. A custom design-led site for a gallery, studio, or boutique typically takes 3–6 weeks, depending on how much photography and content is ready. E-commerce takes 8–12 weeks. We confirm dates before the project starts.',
      },
    ],
  },
  {
    slug: 'midrand',
    name: 'Midrand',
    province: 'Gauteng',
    titleTag: 'Web Design Midrand & Waterfall City',
    metaDescription:
      'Websites for Midrand tech firms, dealerships and logistics companies. Our home base — meet us in person. Next.js speed, Gauteng-wide SEO reach.',
    description:
      'Midrand sits strategically between Johannesburg and Pretoria, hosting a growing number of tech companies, automotive dealerships, and logistics businesses. Midrand-based businesses benefit from websites optimized for lead generation across the broader Gauteng region.',
    population: '200,000+',
    businessHub: 'Midrand CBD, Waterfall City, Carlswald',
    nearby: ['Centurion', 'Kyalami', 'Halfway House', 'Vorna Valley', 'Noordwyk'],
    localBusinesses: [
      'Tech companies and software firms',
      'Automotive dealerships and fleet services',
      'Logistics and supply chain businesses',
      'Corporate HQs and business parks',
      'Residential service providers',
    ],
    uniqueContent:
      'Midrand businesses often compete across both Johannesburg and Pretoria, which means your website should not only look professional but also explain your services clearly for a wider Gauteng audience. We help Midrand businesses create fast, SEO-ready websites with strong service pages, local search structure, and conversion-focused contact points. Whether you run a tech company in Waterfall City, an automotive dealership in Carlswald, or a logistics firm servicing the N1 corridor, your website needs to capture enquiries from clients across the broader Gauteng region. We build on Next.js for sub-second load times, optimise for both Google and AI search engines, and include structured data that helps ChatGPT, Gemini, and Perplexity cite your business accurately.',
    faq: [
      {
        q: 'Do you work with businesses in Waterfall, Carlswald, and Kyalami?',
        a: 'Yes. We work with businesses across Midrand, including Waterfall, Carlswald, Kyalami, Halfway House, Vorna Valley, and surrounding Gauteng areas.',
      },
      {
        q: 'What is the typical cost for a Midrand business website?',
        a: 'Prices start from R1,500 for a starter site and run R8,000–R15,000 for a full business website with multiple service pages, blog, SEO, and enquiry forms. E-commerce stores range R10,000–R25,000+. We always provide a fixed, transparent quote.',
      },
          {
        q: 'How long does it take to build a Midrand business website?',
        a: 'Starter sites take 1–2 weeks. Most Midrand business websites take 3–6 weeks, including custom design, service pages, and SEO setup. Logistics or automotive sites with stock listings or fleet catalogues take longer — typically 8–12 weeks. Timelines are agreed in writing upfront.',
      },
      {
        q: 'Can you help my business rank for Waterfall City and Midrand searches?',
        a: 'Yes. We target Midrand-specific search terms through Google Business Profile optimisation and location content covering Midrand CBD, Waterfall City, and Carlswald. For logistics and tech firms competing across Gauteng, we also build service pages that rank beyond the immediate suburb. SEO from R1,500/month.',
      },
      {
        q: 'Do you build websites for logistics and automotive businesses?',
        a: 'Yes. Midrand is a logistics and automotive hub, and those businesses need more than a brochure site — searchable fleet or stock listings, quote request forms, and pages that load fast for drivers and buyers on mobile data. We build all of that on Next.js.',
      },
    ],
    localCaseStudy: {
      title: 'A-Z Truck Sales Dealership New Website',
      slug: 'az-truck-dealership',
      description:
        'A feature-rich dealership platform with 30+ vehicle listings, 308 mobile clicks and 14,618 impressions from organic search.',
    },
  },
  {
    slug: 'pretoria',
    name: 'Pretoria',
    province: 'Gauteng',
    titleTag: 'Web Design Pretoria | Trusted Sites',
    metaDescription:
      'Credible, authoritative websites for Pretoria firms serving government and corporate clients. Local SEO for Hatfield, Menlyn, Brooklyn & Waterkloof.',
    description:
      'Pretoria is South Africa\'s administrative capital, home to government departments, embassies, and established professional services firms. Pretoria businesses need professional, trustworthy websites that appeal to both government and corporate clients.',
    population: '2.9 million',
    businessHub: 'Hatfield, Menlyn, Brooklyn, Waterkloof, Centurion',
    nearby: ['Hatfield', 'Menlyn', 'Brooklyn', 'Waterkloof', 'Centurion', 'Lynnwood'],
    localBusinesses: [
      'Professional services firms (legal, accounting, consulting)',
      'Government-adjacent contractors and suppliers',
      'Embassies and international organisations',
      'Educational institutions and training centres',
      'Healthcare and medical practices',
    ],
    uniqueContent:
      'Pretoria is South Africa\'s administrative capital, and businesses here operate in a more formal, trust-driven environment than anywhere else in Gauteng. Your website is often your first interaction with government departments, embassies, and corporate decision-makers — it needs to convey credibility immediately. We build professional, authoritative websites for Pretoria-based firms that prioritise trust signals, clear service pages, and secure enquiry flows. We also focus on local SEO for Pretoria suburbs — from Hatfield and Menlyn to Brooklyn and Waterkloof — so your business appears when potential clients search for services in their area. Every site includes structured data for AI search visibility, ensuring your firm gets cited by tools like ChatGPT and Gemini alongside traditional Google rankings.',
    faq: [
      {
        q: 'Do you work with businesses in Hatfield, Menlyn, and Brooklyn?',
        a: 'Yes. We serve Pretoria and all its major suburbs including Hatfield, Menlyn, Brooklyn, Waterkloof, Centurion, and Lynnwood.',
      },
      {
        q: 'Can you help my Pretoria business rank for government-related searches?',
        a: 'Yes. We specialise in SEO for professional services firms targeting government and corporate clients. This includes optimising for specific tender-related search terms, creating authoritative service pages, and building citation trust through structured data.',
      },
          {
        q: 'How much does a website cost for a Pretoria business?',
        a: 'Starter sites begin at R1,500. Most Pretoria professional practices — legal, accounting, medical, and consulting — choose the R8,000–R15,000 business package with service pages, team profiles, and enquiry forms. E-commerce runs R10,000–R25,000+. Every quote is fixed, with no hidden fees.',
      },
      {
        q: 'How long does a Pretoria website project take?',
        a: 'A 5-page starter site takes 1–2 weeks. A professional practice website with multiple service pages and team bios typically takes 3–6 weeks. Larger platforms take 8–12 weeks. We work to a written timeline agreed before kickoff, with review points along the way.',
      },
      {
        q: 'Do you work with practices in Hatfield, Menlyn, and Waterkloof?',
        a: 'Yes. We work with professional practices, healthcare providers, and training institutions across Pretoria, including Hatfield, Menlyn, Brooklyn, Waterkloof, and Centurion. Each project includes local SEO targeting your specific suburb, which matters when patients or clients search for providers nearby.',
      },
    ],
    localCaseStudy: {
      title: 'Bidco Trucks New Website',
      slug: 'bidco-trucks',
      description:
        'A comprehensive inventory platform for a Pretoria-based truck dealership with 100+ equipment listings serving clients across Africa.',
    },
  },
  {
    slug: 'randburg',
    name: 'Randburg',
    province: 'Gauteng',
    titleTag: 'Affordable Web Design Randburg',
    metaDescription:
      'Affordable, professional websites for Randburg small businesses — plumbers, accountants, salons and more. WhatsApp integration and local SEO included.',
    description:
      'Randburg is a major residential and commercial area in Johannesburg\'s northern suburbs, home to a diverse range of small and medium businesses. Randburg companies need affordable yet professional websites that drive local customer enquiries.',
    population: '500,000+',
    businessHub: 'Randburg CBD, Cresta Shopping Centre, Ferndale',
    nearby: ['Ferndale', 'Blairgowrie', 'Kensington B', 'Bryanston', 'Northcliff'],
    localBusinesses: [
      'Small and medium retail businesses',
      'Professional services (accountants, lawyers, consultants)',
      'Health and beauty practitioners',
      'Real estate agencies',
      'Home service providers (plumbers, electricians, cleaners)',
    ],
    uniqueContent:
      'Randburg is one of Johannesburg\'s largest and most diverse commercial areas, home to thousands of small and medium businesses serving a population of over 500,000. The challenge for Randburg businesses is standing out in a crowded market where customers compare options online before deciding who to call. We build affordable, professional websites for Randburg businesses that focus on generating enquiries — not just looking good. Every site includes clear service pages, contact forms, WhatsApp integration, and local SEO targeting your specific suburb. Whether you are a plumber in Ferndale, an accountant in Blairgowrie, or a salon in Cresta, we make sure customers find you when they search online. Our starter packages from R1,500 make professional web design accessible for any Randburg business.',
    faq: [
      {
        q: 'Do you work with businesses in Ferndale, Blairgowrie, and Northcliff?',
        a: 'Yes. We cover Randburg and all surrounding suburbs including Ferndale, Blairgowrie, Kensington B, Bryanston, and Northcliff.',
      },
      {
        q: 'I run a small business — do you offer affordable website packages?',
        a: 'Absolutely. Our starter package from R1,500 is designed for small businesses. It includes 3–5 pages, mobile responsive design, a contact form, and basic SEO — everything you need to start getting enquiries online.',
      },
          {
        q: 'How long does it take to get my Randburg website live?',
        a: 'A 5-page starter site takes 1–2 weeks. Most Randburg small businesses are live within 3–6 weeks with a full custom site including service pages and SEO. If you need something urgently for a launch or campaign, tell us the date and we will confirm whether it is achievable.',
      },
      {
        q: 'How do I get my Randburg business found on Google?',
        a: 'Local SEO is the fastest route. We set up and optimise your Google Business Profile, keep your contact details consistent across directories, and build content targeting Randburg CBD, Ferndale, and Cresta. For home-service businesses, this is usually what drives the first enquiries. From R1,500/month.',
      },
      {
        q: 'Do you build websites for plumbers, electricians, and cleaners?',
        a: 'Yes. Home-service businesses across Randburg rely on being found fast and called quickly. We build sites with your service areas clearly listed, click-to-call buttons that work on mobile, and quote request forms — plus the local SEO that gets you into the map pack.',
      },
    ],
  },
  {
    slug: 'roodepoort',
    name: 'Roodepoort',
    province: 'Gauteng',
    titleTag: 'Web Design Roodepoort & West Rand',
    metaDescription:
      'Websites for West Rand businesses — construction, retail, healthcare and property. Fast on mobile networks, tuned for local Roodepoort searches.',
    description:
      'Roodepoort is a rapidly developing area on Johannesburg\'s West Rand, with growing residential estates and commercial centres. Roodepoort businesses are increasingly investing in digital presence to capture local market share.',
    population: '300,000+',
    businessHub: 'Constantia Kloof, Clearwater Mall, Key West',
    nearby: ['Honeydew', 'Constantia Kloof', 'Wilropark', 'Ruimsig', 'Florida'],
    localBusinesses: [
      'Residential construction and renovation',
      'Retail stores and shopping centre tenants',
      'Automotive services and dealerships',
      'Healthcare and dental practices',
      'Estate agents and property managers',
    ],
    uniqueContent:
      'Roodepoort and the West Rand are experiencing rapid residential and commercial growth, with new estates, shopping centres, and business parks opening regularly. For local businesses, this growth means more competition — and more customers searching online before making a decision. We help Roodepoort businesses build websites that capture this growing local demand. From construction companies in Honeydew to retail stores at Clearwater Mall, every site is optimised for local search terms like "building contractor Roodepoort" or "dentist Constantia Kloof". We focus on mobile performance (most West Rand users browse on phones), fast load times on South African networks, and clear conversion paths that turn visitors into paying customers. Our fixed pricing means no surprises.',
    faq: [
      {
        q: 'Do you work with businesses in Honeydew, Constantia Kloof, and Ruimsig?',
        a: 'Yes. We serve Roodepoort and the broader West Rand including Honeydew, Constantia Kloof, Wilropark, Ruimsig, and Florida.',
      },
      {
        q: 'My Roodepoort business needs a website quickly — what is the fastest you can deliver?',
        a: 'We can deliver a simple brochure website within 1 week. More complex sites with multiple service pages and SEO typically take 2–4 weeks. We work efficiently without cutting corners on quality.',
      },
          {
        q: 'How much does a website cost in Roodepoort?',
        a: 'Starter websites begin at R1,500 for 5 pages with mobile-responsive design and basic SEO. Most Roodepoort businesses — trades, healthcare practices, and estate agencies — choose the R8,000–R15,000 business package. Online stores run R10,000–R25,000+. All quotes are fixed upfront.',
      },
      {
        q: 'Can you help my Roodepoort business show up in local searches?',
        a: 'Yes. We optimise your Google Business Profile and build location content targeting Constantia Kloof, Honeydew, Ruimsig, and the Clearwater area. For trades and healthcare practices, appearing in the local map pack is usually what generates enquiries. SEO packages start at R1,500/month.',
      },
      {
        q: 'Do you build websites for builders and renovation companies?',
        a: 'Yes. Residential construction and renovation firms in Roodepoort win work on proof, so we build project galleries with before-and-after photography, clear service breakdowns, and quote request forms. We have built construction sites before — Didee Holdings and Jiyology are both live examples.',
      },
    ],
  },
  {
    slug: 'centurion',
    name: 'Centurion',
    province: 'Gauteng',
    titleTag: 'Web Design Centurion | Fast Websites',
    metaDescription:
      'High-performance Next.js websites for Centurion tech firms and professional services. 90+ Lighthouse scores, AI-search-ready structured data.',
    description:
      'Centurion is a key economic hub between Johannesburg and Pretoria, hosting major corporate headquarters, shopping centres, and a growing tech sector. Centurion businesses need high-performance websites that compete for attention in one of Gauteng\'s most competitive markets.',
    population: '250,000+',
    businessHub: 'Centurion CBD, Irene, Centurion Mall, Highveld',
    nearby: ['Irene', 'Midrand', 'Highveld', 'Zwartkop', 'Monument Park'],
    localBusinesses: [
      'Corporate and regional head offices',
      'Tech and software development firms',
      'Automotive and fleet management',
      'Professional services (legal, financial, consulting)',
      'Retail and hospitality',
    ],
    uniqueContent:
      'Centurion has become one of Gauteng\'s most desirable business locations, sitting at the geographic centre of the province\'s economic activity. With major corporate HQs, a thriving tech scene, and the upmarket Irene area attracting high-value clients, Centurion businesses need websites that perform at the highest level. We build for Centurion companies that compete for attention across Gauteng — not just their immediate suburb. Every project includes Next.js for 90+ Lighthouse scores, AI-optimised structured data for generative search visibility, and local SEO targeting both Centurion-specific and broader Gauteng keywords. Whether you are a tech startup in Highveld or a professional services firm near Centurion Mall, your website needs to load fast, rank well, and convert visitors into clients.',
    faq: [
      {
        q: 'Do you work with businesses in Irene, Highveld, and Zwartkop?',
        a: 'Yes. We cover Centurion and all major suburbs including Irene, Midrand, Highveld, Zwartkop, and Monument Park.',
      },
      {
        q: 'How is your approach different from a DIY website builder?',
        a: 'DIY builders give you templates that hundreds of other businesses use. We build custom Next.js websites that load in under a second, score 90+ on Lighthouse, and include proper SEO, structured data, and conversion optimisation — things template builders simply cannot match.',
      },
          {
        q: 'How much does a website cost for a Centurion business?',
        a: 'Starter sites begin at R1,500. Most Centurion businesses — professional services, tech firms, and regional head offices — choose the R8,000–R15,000 business package with custom design and advanced SEO. Larger platforms and e-commerce run R10,000–R25,000+. Quotes are fixed, never hourly.',
      },
      {
        q: 'How long does a Centurion website take to build?',
        a: 'A 5-page starter site takes 1–2 weeks. Most Centurion business websites take 3–6 weeks including custom design, service pages, and SEO setup. E-commerce and larger corporate platforms take 8–12 weeks. We agree the schedule in writing before any work begins.',
      },
      {
        q: 'Can you help my Centurion business rank locally on Google?',
        a: 'Yes. We optimise your Google Business Profile and build content targeting Centurion CBD, Irene, Highveld, and Zwartkop. Because Centurion sits between Johannesburg and Pretoria, we usually target both metros where it makes commercial sense. SEO packages start at R1,500/month.',
      },
    ],
    localCaseStudy: {
      title: 'Didee Holdings Website Redesign',
      slug: 'didee-holdings',
      description:
        'A 2-week website redesign for a Centurion-based construction and civil engineering company, indexed for 12+ search terms from launch.',
    },
  },
]

export const suburbSlugs = locations.map((l) => l.slug)
