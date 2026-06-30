export interface LocationInfo {
  slug: string
  name: string
  province: string
  description: string
  population: string
  businessHub: string
  nearby: string[]
  image: string
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
    description:
      'Sandton is the financial and business hub of South Africa, home to the Johannesburg Stock Exchange and headquarters of most major corporations. Businesses in Sandton need websites that project authority, load instantly, and convert high-value corporate clients.',
    population: '222,000+',
    businessHub: 'Sandton CBD, Alice Lane, Rivonia Road',
    nearby: ['Morningside', 'Bryanston', 'Rivonia', 'Illovo', 'Melrose Arch'],
    image: '/images/locations/sandton.webp',
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
        a: 'Our pricing starts from R3,500 for a simple landing page and ranges to R25,000+ for full corporate websites with multiple service pages, team profiles, blog, and advanced SEO. We provide a fixed quote — no hourly rates.',
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
    description:
      'Fourways is one of Johannesburg\'s fastest-growing residential and commercial nodes. With a mix of established businesses and ambitious startups, Fourways companies need modern digital experiences that stand out in a competitive northern suburbs market.',
    population: '100,000+',
    businessHub: 'Fourways Crossing, Broadacres, Cedar Square',
    nearby: ['Douglasdale', 'Sunninghill', 'Lonehill', 'Chartwell', 'Kyalami'],
    image: '/images/locations/fourways.webp',
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
    ],
  },
  {
    slug: 'rosebank',
    name: 'Rosebank',
    province: 'Gauteng',
    description:
      'Rosebank is Johannesburg\'s creative and cultural district, known for its art galleries, media companies, and fashion boutiques. Businesses here need websites with stunning visual design that match the area\'s sophisticated, trendsetting character.',
    population: '30,000+',
    businessHub: 'Rosebank Mall, The Zone, Keyes Art Mile',
    nearby: ['Melrose', 'Hyde Park', 'Dunkeld', 'Parktown North', 'Saxonwold'],
    image: '/images/locations/rosebank.webp',
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
    ],
  },
  {
    slug: 'midrand',
    name: 'Midrand',
    province: 'Gauteng',
    description:
      'Midrand sits strategically between Johannesburg and Pretoria, hosting a growing number of tech companies, automotive dealerships, and logistics businesses. Midrand-based businesses benefit from websites optimized for lead generation across the broader Gauteng region.',
    population: '200,000+',
    businessHub: 'Midrand CBD, Waterfall City, Carlswald',
    nearby: ['Centurion', 'Kyalami', 'Halfway House', 'Vorna Valley', 'Noordwyk'],
    image: '/images/locations/midrand.webp',
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
        a: 'Prices start from R3,500 for a starter site and range to R15,000–R25,000 for a full business website with multiple service pages, blog, SEO, and enquiry forms. We always provide a fixed, transparent quote.',
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
    description:
      'Pretoria is South Africa\'s administrative capital, home to government departments, embassies, and established professional services firms. Pretoria businesses need professional, trustworthy websites that appeal to both government and corporate clients.',
    population: '2.9 million',
    businessHub: 'Hatfield, Menlyn, Brooklyn, Waterkloof, Centurion',
    nearby: ['Hatfield', 'Menlyn', 'Brooklyn', 'Waterkloof', 'Centurion', 'Lynnwood'],
    image: '/images/locations/pretoria.webp',
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
    description:
      'Randburg is a major residential and commercial area in Johannesburg\'s northern suburbs, home to a diverse range of small and medium businesses. Randburg companies need affordable yet professional websites that drive local customer enquiries.',
    population: '500,000+',
    businessHub: 'Randburg CBD, Cresta Shopping Centre, Ferndale',
    nearby: ['Ferndale', 'Blairgowrie', 'Kensington B', 'Bryanston', 'Northcliff'],
    image: '/images/locations/randburg.webp',
    localBusinesses: [
      'Small and medium retail businesses',
      'Professional services (accountants, lawyers, consultants)',
      'Health and beauty practitioners',
      'Real estate agencies',
      'Home service providers (plumbers, electricians, cleaners)',
    ],
    uniqueContent:
      'Randburg is one of Johannesburg\'s largest and most diverse commercial areas, home to thousands of small and medium businesses serving a population of over 500,000. The challenge for Randburg businesses is standing out in a crowded market where customers compare options online before deciding who to call. We build affordable, professional websites for Randburg businesses that focus on generating enquiries — not just looking good. Every site includes clear service pages, contact forms, WhatsApp integration, and local SEO targeting your specific suburb. Whether you are a plumber in Ferndale, an accountant in Blairgowrie, or a salon in Cresta, we make sure customers find you when they search online. Our starter packages from R3,500 make professional web design accessible for any Randburg business.',
    faq: [
      {
        q: 'Do you work with businesses in Ferndale, Blairgowrie, and Northcliff?',
        a: 'Yes. We cover Randburg and all surrounding suburbs including Ferndale, Blairgowrie, Kensington B, Bryanston, and Northcliff.',
      },
      {
        q: 'I run a small business — do you offer affordable website packages?',
        a: 'Absolutely. Our starter package from R3,500 is designed for small businesses. It includes 3–5 pages, mobile responsive design, a contact form, and basic SEO — everything you need to start getting enquiries online.',
      },
    ],
  },
  {
    slug: 'roodepoort',
    name: 'Roodepoort',
    province: 'Gauteng',
    description:
      'Roodepoort is a rapidly developing area on Johannesburg\'s West Rand, with growing residential estates and commercial centres. Roodepoort businesses are increasingly investing in digital presence to capture local market share.',
    population: '300,000+',
    businessHub: 'Constantia Kloof, Clearwater Mall, Key West',
    nearby: ['Honeydew', 'Constantia Kloof', 'Wilropark', 'Ruimsig', 'Florida'],
    image: '/images/locations/roodepoort.webp',
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
    ],
  },
  {
    slug: 'centurion',
    name: 'Centurion',
    province: 'Gauteng',
    description:
      'Centurion is a key economic hub between Johannesburg and Pretoria, hosting major corporate headquarters, shopping centres, and a growing tech sector. Centurion businesses need high-performance websites that compete for attention in one of Gauteng\'s most competitive markets.',
    population: '250,000+',
    businessHub: 'Centurion CBD, Irene, Centurion Mall, Highveld',
    nearby: ['Irene', 'Midrand', 'Highveld', 'Zwartkop', 'Monument Park'],
    image: '/images/locations/centurion.webp',
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
    ],
    localCaseStudy: {
      title: 'Didee Holdings Website Redesign',
      slug: 'didee-holdings',
      description:
        'A 2-week website redesign for a Centurion-based construction and civil engineering company, indexed for 12+ search terms from launch.',
    },
  },
  {
    slug: 'cape-town',
    name: 'Cape Town',
    province: 'Western Cape',
    description:
      'Cape Town is South Africa\'s tech and creative capital, with the highest concentration of startups, digital agencies, and design studios in the country. Cape Town businesses need websites that are as innovative and visually stunning as the city itself.',
    population: '4.8 million',
    businessHub: 'City Bowl, Century City, Claremont, Stellies, Tygervalley',
    nearby: ['Century City', 'Claremont', 'Rondebosch', 'Bellville', 'Stellenbosch'],
    image: '/images/locations/cape-town.webp',
    localBusinesses: [
      'Tech startups and SaaS companies',
      'Creative agencies and design studios',
      'Tourism and hospitality businesses',
      'Wine farms and agri-tourism',
      'E-commerce and DTC brands',
    ],
    uniqueContent:
      'Cape Town is South Africa\'s most competitive digital market — home to the highest concentration of startups, agencies, and design studios in the country. A generic website here will be ignored. Cape Town businesses need bold, high-performance websites that reflect the city\'s innovative, creative energy. We work with Cape Town-based founders, agencies, and brands that need more than a template — they need a digital experience that stands out in a city full of great design. Our Next.js websites score 90+ Lighthouse, include AI-optimised structured data for generative search, and are built to convert. Whether you are a fintech startup in the City Bowl, a wine estate in Stellenbosch, or a DTC brand selling nationally, we build websites that match Cape Town\'s high standards.',
    faq: [
      {
        q: 'Do you work with businesses in Claremont, Century City, and Stellenbosch?',
        a: 'Yes. We work with clients across Cape Town including the City Bowl, Century City, Claremont, Rondebosch, Bellville, Stellenbosch, and the broader Western Cape.',
      },
      {
        q: 'Can you build an e-commerce store for my Cape Town brand?',
        a: 'Yes. We build custom Next.js e-commerce stores with PayFast, Yoco, and Ozow integration, unlimited products, mobile-optimised checkout, and SEO product pages that rank on Google Shopping.',
      },
    ],
  },
  {
    slug: 'durban',
    name: 'Durban',
    province: 'KwaZulu-Natal',
    description:
      'Durban is South Africa\'s premier port city and a major tourism and manufacturing hub. Durban businesses need websites that connect with both local customers and international visitors across the tourism, logistics, and retail sectors.',
    population: '3.7 million',
    businessHub: 'Umhlanga Ridge, Durban CBD, La Lucia, Ballito',
    nearby: ['Umhlanga', 'La Lucia', 'Ballito', 'Westville', 'Berea'],
    image: '/images/locations/durban.webp',
    localBusinesses: [
      'Tourism and hospitality (hotels, lodges, tour operators)',
      'Logistics, shipping, and freight companies',
      'Manufacturing and industrial businesses',
      'Retail and shopping centre brands',
      'Property development and real estate',
    ],
    uniqueContent:
      'Durban is South Africa\'s busiest port city and a major hub for tourism, logistics, and manufacturing. Businesses here serve a unique mix of local customers, international visitors, and B2B clients across KwaZulu-Natal and beyond. We build websites for Durban companies that need to connect with this diverse audience — from hotel and lodge websites with online booking to logistics firms needing professional B2B platforms. Every site is optimised for mobile (Durban has high mobile internet usage), includes local SEO targeting KZN-specific search terms, and loads fast on South African networks. We also ensure your business appears in AI search results through structured data markup, helping ChatGPT and Google Gemini cite your services when users search for Durban-based businesses.',
    faq: [
      {
        q: 'Do you work with businesses in Umhlanga, La Lucia, and Ballito?',
        a: 'Yes. We serve Durban and the surrounding North Coast including Umhlanga, La Lucia, Ballito, Westville, and Berea.',
      },
      {
        q: 'Can you build a booking system for my Durban accommodation business?',
        a: 'Yes. We integrate online booking engines into hotel, lodge, and B&B websites. This includes availability calendars, real-time booking, payment integration, and automated confirmation emails.',
      },
    ],
  },
  {
    slug: 'bloemfontein',
    name: 'Bloemfontein',
    province: 'Free State',
    description:
      'Bloemfontein is the judicial capital of South Africa and the economic heart of the Free State. Home to the Supreme Court of Appeal, major educational institutions, and a growing small business community. Bloemfontein businesses need professional websites that build trust and attract local customers across the central region.',
    population: '520,000+',
    businessHub: 'Bloemfontein CBD, Langenhoven Park, Brandwag',
    nearby: ['Langenhoven Park', 'Brandwag', 'Fichardt Park', 'Baysvalley', 'Heuwelsig'],
    image: '/images/locations/bloemfontein.webp',
    localBusinesses: [
      'Legal and professional services',
      'Educational institutions and training providers',
      'Agriculture and agri-processing',
      'Healthcare and medical practices',
      'Retail and SME services',
    ],
    uniqueContent:
      'Bloemfontein is the judicial capital of South Africa and the economic centre of the Free State. Businesses here serve a community that values trust, professionalism, and personal relationships — and your website is often the first impression you make. We build professional, trustworthy websites for Bloemfontein businesses that reflect the area\'s more traditional, relationship-driven business culture while leveraging modern technology for SEO and performance. From law firms near the Supreme Court of Appeal to training providers serving the central region, every site includes local SEO targeting Free State search terms, fast mobile performance, and clear enquiry pathways. We also ensure your business is optimised for AI search engines like ChatGPT and Perplexity, which are increasingly used by professionals in Bloemfontein\'s legal and education sectors.',
    faq: [
      {
        q: 'Do you work with businesses in Langenhoven Park, Brandwag, and Heuwelsig?',
        a: 'Yes. We serve Bloemfontein and surrounding suburbs including Langenhoven Park, Brandwag, Fichardt Park, Baysvalley, and Heuwelsig.',
      },
      {
        q: 'Can you help my Bloemfontein business rank on Google?',
        a: 'Yes. We build SEO into every website from day one — including local SEO for Bloemfontein and Free State search terms, Google Maps integration, and structured data that helps Google understand your business. We also optimise for AI search visibility on ChatGPT and Gemini.',
      },
    ],
    localCaseStudy: {
      title: 'Tanosa Group Case Study',
      slug: 'tanosa-group-case-study',
      description:
        'A 1-week website redesign for a Bloemfontein-based consulting firm, delivering a professional mobile-first site that loads in under 1.5 seconds.',
    },
  },
]

export const suburbSlugs = locations.map((l) => l.slug)
