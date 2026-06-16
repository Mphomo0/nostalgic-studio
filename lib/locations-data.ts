export interface LocationInfo {
  slug: string
  name: string
  province: string
  description: string
  population: string
  businessHub: string
  nearby: string[]
  image: string
}

export const locations: LocationInfo[] = [
  {
    slug: 'sandton',
    name: 'Sandton',
    province: 'Gauteng',
    description: 'Sandton is the financial and business hub of South Africa, home to the Johannesburg Stock Exchange and headquarters of most major corporations. Businesses in Sandton need websites that project authority, load instantly, and convert high-value corporate clients.',
    population: '222,000+',
    businessHub: 'Sandton CBD, Alice Lane, Rivonia Road',
    nearby: ['Morningside', 'Bryanston', 'Rivonia', 'Illovo', 'Melrose Arch'],
    image: '/images/locations/sandton.webp',
  },
  {
    slug: 'fourways',
    name: 'Fourways',
    province: 'Gauteng',
    description: 'Fourways is one of Johannesburg\'s fastest-growing residential and commercial nodes. With a mix of established businesses and ambitious startups, Fourways companies need modern digital experiences that stand out in a competitive northern suburbs market.',
    population: '100,000+',
    businessHub: 'Fourways Crossing, Broadacres, Cedar Square',
    nearby: ['Douglasdale', 'Sunninghill', 'Lonehill', 'Chartwell', 'Kyalami'],
    image: '/images/locations/fourways.webp',
  },
  {
    slug: 'rosebank',
    name: 'Rosebank',
    province: 'Gauteng',
    description: 'Rosebank is Johannesburg\'s creative and cultural district, known for its art galleries, media companies, and fashion boutiques. Businesses here need websites with stunning visual design that match the area\'s sophisticated, trendsetting character.',
    population: '30,000+',
    businessHub: 'Rosebank Mall, The Zone, Keyes Art Mile',
    nearby: ['Melrose', 'Hyde Park', 'Dunkeld', 'Parktown North', 'Saxonwold'],
    image: '/images/locations/rosebank.webp',
  },
  {
    slug: 'midrand',
    name: 'Midrand',
    province: 'Gauteng',
    description: 'Midrand sits strategically between Johannesburg and Pretoria, hosting a growing number of tech companies, automotive dealerships, and logistics businesses. Midrand-based businesses benefit from websites optimized for lead generation across the broader Gauteng region.',
    population: '200,000+',
    businessHub: 'Midrand CBD, Waterfall City, Carlswald',
    nearby: ['Centurion', 'Kyalami', 'Halfway House', 'Vorna Valley', 'Noordwyk'],
    image: '/images/locations/midrand.webp',
  },
  {
    slug: 'pretoria',
    name: 'Pretoria',
    province: 'Gauteng',
    description: 'Pretoria is South Africa\'s administrative capital, home to government departments, embassies, and established professional services firms. Pretoria businesses need professional, trustworthy websites that appeal to both government and corporate clients.',
    population: '2.9 million',
    businessHub: 'Hatfield, Menlyn, Brooklyn, Waterkloof, Centurion',
    nearby: ['Hatfield', 'Menlyn', 'Brooklyn', 'Waterkloof', 'Centurion', 'Lynnwood'],
    image: '/images/locations/pretoria.webp',
  },
  {
    slug: 'randburg',
    name: 'Randburg',
    province: 'Gauteng',
    description: 'Randburg is a major residential and commercial area in Johannesburg\'s northern suburbs, home to a diverse range of small and medium businesses. Randburg companies need affordable yet professional websites that drive local customer enquiries.',
    population: '500,000+',
    businessHub: 'Randburg CBD, Cresta Shopping Centre, Ferndale',
    nearby: ['Ferndale', 'Blairgowrie', 'Kensington B', 'Bryanston', 'Northcliff'],
    image: '/images/locations/randburg.webp',
  },
  {
    slug: 'roodepoort',
    name: 'Roodepoort',
    province: 'Gauteng',
    description: 'Roodepoort is a rapidly developing area on Johannesburg\'s West Rand, with growing residential estates and commercial centres. Roodepoort businesses are increasingly investing in digital presence to capture local market share.',
    population: '300,000+',
    businessHub: 'Constantia Kloof, Clearwater Mall, Key West',
    nearby: ['Honeydew', 'Constantia Kloof', 'Wilropark', 'Ruimsig', 'Florida'],
    image: '/images/locations/roodepoort.webp',
  },
  {
    slug: 'centurion',
    name: 'Centurion',
    province: 'Gauteng',
    description: 'Centurion is a key economic hub between Johannesburg and Pretoria, hosting major corporate headquarters, shopping centres, and a growing tech sector. Centurion businesses need high-performance websites that compete for attention in one of Gauteng\'s most competitive markets.',
    population: '250,000+',
    businessHub: 'Centurion CBD, Irene, Centurion Mall, Highveld',
    nearby: ['Irene', 'Midrand', 'Highveld', 'Zwartkop', 'Monument Park'],
    image: '/images/locations/centurion.webp',
  },
  {
    slug: 'cape-town',
    name: 'Cape Town',
    province: 'Western Cape',
    description: 'Cape Town is South Africa\'s tech and creative capital, with the highest concentration of startups, digital agencies, and design studios in the country. Cape Town businesses need websites that are as innovative and visually stunning as the city itself.',
    population: '4.8 million',
    businessHub: 'City Bowl, Century City, Claremont, Stellies, Tygervalley',
    nearby: ['Century City', 'Claremont', 'Rondebosch', 'Bellville', 'Stellenbosch'],
    image: '/images/locations/cape-town.webp',
  },
  {
    slug: 'durban',
    name: 'Durban',
    province: 'KwaZulu-Natal',
    description: 'Durban is South Africa\'s premier port city and a major tourism and manufacturing hub. Durban businesses need websites that connect with both local customers and international visitors across the tourism, logistics, and retail sectors.',
    population: '3.7 million',
    businessHub: 'Umhlanga Ridge, Durban CBD, La Lucia, Ballito',
    nearby: ['Umhlanga', 'La Lucia', 'Ballito', 'Westville', 'Berea'],
    image: '/images/locations/durban.webp',
  },
  {
    slug: 'bloemfontein',
    name: 'Bloemfontein',
    province: 'Free State',
    description: 'Bloemfontein is the judicial capital of South Africa and the economic heart of the Free State. Home to the Supreme Court of Appeal, major educational institutions, and a growing small business community. Bloemfontein businesses need professional websites that build trust and attract local customers across the central region.',
    population: '520,000+',
    businessHub: 'Bloemfontein CBD, Langenhoven Park, Brandwag',
    nearby: ['Langenhoven Park', 'Brandwag', 'Fichardt Park', 'Baysvalley', 'Heuwelsig'],
    image: '/images/locations/bloemfontein.webp',
  },
]

export const suburbSlugs = locations.map(l => l.slug)
