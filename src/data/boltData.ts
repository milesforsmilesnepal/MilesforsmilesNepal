// Synchronized data from Miles for Smiles Nepal Bolt application
export interface ImpactMetric {
  id: string;
  label: string;
  value: number;
  suffix: string;
  icon: string;
  display_order: number;
}

export interface District {
  id: string;
  name: string;
  region: string;
  lat: number;
  lng: number;
  reached: boolean;
  project_summary?: string;
  beneficiaries?: string;
  display_order: number;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  overview: string;
  objectives: string[];
  activities: string[];
  outcomes: string[];
  cover_image: string;
  location: string;
  date: string;
  beneficiaries: string;
  is_featured: boolean;
  display_order: number;
}

export interface Milestone {
  id: string;
  year: string;
  title: string;
  description: string;
  icon: string;
  display_order: number;
}

export interface Story {
  id: string;
  title: string;
  slug: string;
  type: string;
  excerpt: string;
  content: string;
  author_name: string;
  author_role: string;
  cover_image: string;
  location: string;
  date: string;
  display_order: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image: string;
  author_name: string;
  author_role: string;
  category: string;
  tags: string[];
  is_published: boolean;
  published_at: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  image_url: string;
  category: string;
  caption?: string | null;
  location?: string | null;
  date?: string | null;
  display_order: number;
}

export interface TransparencyReport {
  id: string;
  title: string;
  type: 'annual' | 'project' | 'impact' | 'financial';
  year: string;
  summary: string;
  file_size: string;
  download_url: string;
  cover_image?: string;
  date: string;
}

export const HERO_SLIDES = [
  {
    image: "https://images.pexels.com/photos/36423522/pexels-photo-36423522.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Every Smile Deserves Care",
    subtitle: "Reaching underserved communities across Nepal through oral health care, education, and compassion."
  },
  {
    image: "https://images.pexels.com/photos/9812303/pexels-photo-9812303.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Reaching the Unreached",
    subtitle: "From remote mountain villages to flood-affected communities — no one is too far to serve."
  },
  {
    image: "https://images.pexels.com/photos/7074250/pexels-photo-7074250.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Youth-Led, Purpose-Driven",
    subtitle: "A movement of dental students and young professionals committed to serving communities that are often overlooked."
  },
  {
    image: "https://images.pexels.com/photos/2095948/pexels-photo-2095948.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Hope in Every Step",
    subtitle: "6,136+ students reached, 500+ monks served, and thousands of smiles transformed across Nepal."
  }
];

export const INITIAL_IMPACT_METRICS: ImpactMetric[] = [
  {
    id: "81a05bfb-6be3-43f2-8bc6-89764a76844d",
    label: "Students Reached",
    value: 6136,
    suffix: "+",
    icon: "graduation-cap",
    display_order: 1
  },
  {
    id: "49c7c4df-7b49-4c6a-8f16-190f929b0a51",
    label: "Monks Reached",
    value: 500,
    suffix: "+",
    icon: "heart",
    display_order: 2
  },
  {
    id: "e9d331cd-b0bb-4902-a02c-988c8afb8e85",
    label: "Districts Served",
    value: 5,
    suffix: "+",
    icon: "map-pin",
    display_order: 3
  },
  {
    id: "6d70ebad-4938-498c-9770-2d13cd55b6ac",
    label: "Hygiene Products Distributed",
    value: 7500,
    suffix: "+",
    icon: "package",
    display_order: 4
  },
  {
    id: "0d89e4f8-9625-4e50-965a-e4dd4a7323bd",
    label: "Free Dental Treatments",
    value: 4200,
    suffix: "+",
    icon: "smile",
    display_order: 5
  }
];

export const INITIAL_DISTRICTS: District[] = [
  {
    id: "abf3f0db-efb4-4048-a40e-fc750dd083ef",
    name: "Kathmandu",
    region: "Bagmati",
    lat: 27.7172,
    lng: 85.324,
    reached: true,
    project_summary: "Multiple school oral health programs and community dental camps in the capital region.",
    beneficiaries: "3,500+ students",
    display_order: 1
  },
  {
    id: "0b6167c0-dcc2-48b1-9496-69b2df4a1a53",
    name: "Jumla",
    region: "Karnali",
    lat: 29.2747,
    lng: 82.1838,
    reached: true,
    project_summary: "Remote dental outreach to high-altitude monasteries and underserved villages in the Himalayas.",
    beneficiaries: "500+ monks, 800+ locals",
    display_order: 2
  },
  {
    id: "acb7a428-a365-4f9b-9793-db56d36775de",
    name: "Palpa",
    region: "Lumbini",
    lat: 27.8673,
    lng: 83.5463,
    reached: true,
    project_summary: "School screening programs, fluoride varnish application, and teacher training sessions.",
    beneficiaries: "1,200+ students",
    display_order: 3
  },
  {
    id: "5a2e31eb-9861-4f37-8448-1fc39051751b",
    name: "Nawalparasi",
    region: "Lumbini",
    lat: 27.6539,
    lng: 83.6675,
    reached: true,
    project_summary: "Emergency post-flood dental aid, clean water support, and family hygiene distribution.",
    beneficiaries: "600+ flood-affected individuals",
    display_order: 4
  },
  {
    id: "45776b71-c13c-4d91-90e6-4656ae2f56b2",
    name: "Karnali Region",
    region: "Karnali",
    lat: 29.8,
    lng: 81.8,
    reached: true,
    project_summary: "Flagship high-altitude oral health and dental surgery outreach across remote communities.",
    beneficiaries: "1,500+ community members",
    display_order: 5
  }
];

export const INITIAL_PROJECTS: Project[] = [
  {
    id: "61255a86-82d4-42e1-81e2-0056910e96b1",
    title: "Miles for Smiles Karnali",
    slug: "miles-for-smiles-karnali",
    category: "dental-camp",
    excerpt: "Our flagship outreach to one of Nepal's most remote regions, bringing dental care to communities that have never had access to a dentist.",
    overview: "Miles for Smiles Karnali is our most ambitious project yet. A team of dental students and dentists trekked for days through rugged Himalayan trails to set up temporary dental clinics in remote villages and monasteries across Jumla and Upper Karnali. For many residents, this was their very first time seeing a dentist.",
    objectives: [
      "Provide free dental treatments in remote Karnali communities",
      "Reach monasteries with targeted oral health care",
      "Distribute oral hygiene kits to students and families",
      "Conduct oral health awareness and preventive education",
      "Establish partnerships for future follow-up care"
    ],
    activities: [
      "Multi-day trek to reach remote village clinics",
      "Setup of portable dental units in schools and monastery courtyards",
      "Restorative dental fillings, extractions, and scaling",
      "School oral health workshops with toothbrushing drills",
      "Hygiene kit distribution to every patient",
      "Local community health worker training"
    ],
    outcomes: [
      "500+ Buddhist monks received comprehensive dental checkups and treatment",
      "Hundreds of community members treated for the first time in their lives",
      "Oral hygiene kits distributed to all beneficiaries",
      "Local health workers trained on basic dental care and pain management",
      "Increased awareness of oral health in remote mountain communities"
    ],
    cover_image: "https://images.pexels.com/photos/7074250/pexels-photo-7074250.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Jumla, Karnali Region",
    date: "2023",
    beneficiaries: "500+ monks, hundreds of community members",
    is_featured: true,
    display_order: 1
  },
  {
    id: "f25b7d08-94e9-41aa-be1f-542b6325c516",
    title: "World Oral Health Day Campaign",
    slug: "world-oral-health-day",
    category: "awareness",
    excerpt: "Annual nationwide campaign reaching thousands across Nepal with free dental check-ups, awareness sessions, and community engagement.",
    overview: "Every year on World Oral Health Day, Miles for Smiles Nepal mobilizes volunteers across multiple districts to raise awareness about oral health, provide free dental check-ups, and distribute hygiene materials. The campaign has become one of our signature initiatives, reaching thousands of people each year.",
    objectives: [
      "Raise awareness about oral health across Nepal",
      "Provide free dental screenings and oral cancer checks",
      "Distribute oral hygiene materials to vulnerable families",
      "Engage schools and communities in oral health education",
      "Advocate for better national oral health policies"
    ],
    activities: [
      "Free dental check-up camps in multiple urban and rural locations",
      "School awareness sessions with interactive activities and puppets",
      "Community door-to-door awareness campaigns",
      "Distribution of toothbrushes and fluoridated toothpaste",
      "Social media awareness campaign reaching thousands online",
      "Partnership with local health authorities and dental colleges"
    ],
    outcomes: [
      "Thousands of people reached with preventive oral health awareness",
      "Free screenings provided to hundreds of individuals",
      "Widespread distribution of hygiene materials",
      "Strong media coverage and youth volunteer mobilization",
      "Increased community demand for regular preventive dental services"
    ],
    cover_image: "https://images.pexels.com/photos/9812303/pexels-photo-9812303.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Multiple Districts",
    date: "2023-2024",
    beneficiaries: "2,000+ people annually",
    is_featured: true,
    display_order: 2
  },
  {
    id: "7e5d5524-e95b-44d6-9483-d1b9e4dcac55",
    title: "School Oral Health Programs",
    slug: "school-oral-health-programs",
    category: "education",
    excerpt: "Ongoing program bringing oral health education, fluoride application, and free dental screenings to schools across Nepal.",
    overview: "Our School Oral Health Programs are the backbone of our preventive care strategy. We partner with government and community schools in underserved communities to provide oral health education, fluoride application, dental screenings, and hygiene kits to students who would otherwise never receive dental care.",
    objectives: [
      "Integrate oral health education into school routines",
      "Provide regular dental screenings for all enrolled students",
      "Apply topical fluoride varnish for cavity prevention",
      "Distribute oral hygiene kits to students",
      "Train teachers to reinforce daily toothbrushing habits"
    ],
    activities: [
      "Interactive oral health education sessions and cartoon flipcharts",
      "Free dental screenings for all students with report cards for parents",
      "Fluoride varnish application by trained dental volunteers",
      "Distribution of toothbrushes and toothpaste",
      "Teacher training workshops on oral health and emergency toothache care",
      "Follow-up visits and six-month monitoring"
    ],
    outcomes: [
      "6,136+ students reached across multiple public schools",
      "Significant improvement in students' daily toothbrushing habits",
      "Reduced incidence of dental caries in participating schools",
      "Teachers equipped to continue oral health education",
      "Sustainable model for school-based dental care in Nepal"
    ],
    cover_image: "https://images.pexels.com/photos/36423522/pexels-photo-36423522.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Kathmandu, Palpa, Nawalparasi",
    date: "2022-2024",
    beneficiaries: "6,136+ students",
    is_featured: true,
    display_order: 3
  },
  {
    id: "a1668527-30cb-49db-9130-b658d4e9a309",
    title: "Flood-Affected Community Outreach",
    slug: "flood-outreach",
    category: "community",
    excerpt: "Emergency outreach providing dental care, hygiene support, and humanitarian aid to communities devastated by floods.",
    overview: "When devastating floods struck Nawalparasi, Miles for Smiles Nepal rushed to support affected communities. Beyond our core dental mission, we provided emergency hygiene kits, clean water support, and humanitarian aid to families who had lost everything. This project demonstrated our commitment to serving communities in their moments of greatest need.",
    objectives: [
      "Provide emergency dental care to flood-affected communities",
      "Distribute hygiene kits to displaced families",
      "Support overall community health and sanitation efforts",
      "Offer humanitarian aid and emotional support",
      "Collaborate with local relief organizations"
    ],
    activities: [
      "Emergency dental camps in flood-affected temporary shelters",
      "Distribution of hygiene kits, soap, and clean water supplies",
      "Community health and sanitation awareness sessions",
      "Coordination with local authorities and relief agencies",
      "Home visits to assess ongoing family health needs"
    ],
    outcomes: [
      "600+ people received emergency dental care and relief support",
      "Hygiene kits distributed to hundreds of displaced families",
      "Improved sanitation and infection control in temporary camps",
      "Strong community relationships built through crisis response",
      "Model for emergency humanitarian dental outreach established"
    ],
    cover_image: "https://images.pexels.com/photos/2095948/pexels-photo-2095948.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Nawalparasi",
    date: "2023",
    beneficiaries: "600+ people",
    is_featured: true,
    display_order: 4
  },
  {
    id: "010cfbe9-bc0a-4688-9487-e53ec7d8d749",
    title: "Menstrual Hygiene Awareness",
    slug: "menstrual-hygiene-awareness",
    category: "awareness",
    excerpt: "Breaking taboos and empowering women and girls with menstrual hygiene education and support in rural communities.",
    overview: "Menstrual hygiene is a critical but often overlooked aspect of community health. In many rural communities in Nepal, stigma and lack of access to hygiene products create significant barriers. Our Menstrual Hygiene Awareness Programs work to break taboos, educate communities, and ensure that women and girls have the knowledge and resources they need.",
    objectives: [
      "Break taboos around menstruation in rural communities",
      "Educate women and adolescent girls about reproductive and menstrual hygiene",
      "Distribute eco-friendly sanitary products and reusable pads",
      "Engage men and boys in constructive conversations",
      "Advocate for menstrual equity and dignified menstruation"
    ],
    activities: [
      "Interactive workshops with women and teenage girls",
      "Distribution of sanitary pads and menstrual hygiene kits",
      "Community awareness sessions including men and adolescent boys",
      "School-based menstrual health education",
      "Partnership with local women's self-help groups"
    ],
    outcomes: [
      "Increased awareness about menstrual hygiene in target communities",
      "Sanitary products distributed to women and girls in need",
      "Reduced stigma around menstruation in participating villages",
      "Women and girls empowered to manage their health with dignity",
      "Sustainable community dialogue established"
    ],
    cover_image: "https://images.pexels.com/photos/30462136/pexels-photo-30462136.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Rural Communities",
    date: "2023-2024",
    beneficiaries: "500+ women and girls",
    is_featured: true,
    display_order: 5
  }
];

export const INITIAL_MILESTONES: Milestone[] = [
  {
    id: "a71a2a86-a2f1-4649-b896-e5d6fd05867c",
    year: "2022",
    title: "Organization Founded",
    description: "Miles for Smiles Nepal was founded by a group of passionate dental students who believed every smile deserves care, regardless of geography or income.",
    icon: "flag",
    display_order: 1
  },
  {
    id: "1775893c-b211-41b8-b9a9-aa7045f583f2",
    year: "2022",
    title: "First Outreach",
    description: "Conducted our first school dental camp in Kathmandu, reaching over 200 students with free check-ups, fluoride treatment, and hygiene education.",
    icon: "sparkles",
    display_order: 2
  },
  {
    id: "0e0a2ba6-6130-4ba9-9350-ff7284e4a308",
    year: "2023",
    title: "Miles for Smiles Karnali",
    description: "Launched our flagship outreach to Jumla in the Karnali region, trekking for days to provide dental care to over 500 monks and remote villagers.",
    icon: "mountain",
    display_order: 3
  },
  {
    id: "39f42a3a-ce57-457f-be39-7a41e1354422",
    year: "2023",
    title: "World Oral Health Day",
    description: "Mobilized nationwide campaigns across multiple districts, engaging thousands with free screenings and awareness activities.",
    icon: "globe",
    display_order: 4
  },
  {
    id: "72c86a94-d937-47a1-8ee2-ea3b162bb38b",
    year: "2024",
    title: "Growing Movement",
    description: "Expanded our volunteer base to over 100 dental students, dentists, and youth volunteers across Nepal, reaching 6,136+ beneficiaries.",
    icon: "users",
    display_order: 5
  },
  {
    id: "f20e5568-ceb1-44a0-baa3-a2417d6c1bdc",
    year: "Beyond",
    title: "Future Vision",
    description: "Working toward permanent dental clinics in remote districts, mobile dental vans, and ensuring every child in Nepal can smile without pain.",
    icon: "heart",
    display_order: 6
  }
];

export const INITIAL_STORIES: Story[] = [
  {
    id: "758c697e-8352-4cdf-aed1-b5fb18f7d678",
    title: "A Smile from Jumla",
    slug: "smile-from-jumla",
    type: "patient",
    excerpt: "After trekking for two days, we set up camp in a remote village in Jumla. A young girl named Maya walked three hours to see us - she had been living with toothache for months.",
    content: "When we arrived in Jumla after a two-day trek, we set up our dental camp in a local school. Maya, a 12-year-old girl, had walked three hours through mountain paths to reach us. She had been suffering from a severe toothache for months, but there was no dentist within days of travel from her village.\n\nOur team treated her cavity, and the relief on her face was immediate. She smiled for the first time in months. Before she left, she promised to brush twice a day and tell all her friends to do the same. That smile - that moment of relief - is why we do what we do. No child should have to live with dental pain simply because of where they were born.",
    author_name: "Maya's Story",
    author_role: "Dental Camp Patient, Jumla",
    cover_image: "https://images.pexels.com/photos/36423522/pexels-photo-36423522.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Jumla, Karnali",
    date: "2023",
    display_order: 1
  },
  {
    id: "fcf9827e-eb26-4cba-8516-765ba12bc1fc",
    title: "Why I Volunteer",
    slug: "why-i-volunteer",
    type: "volunteer",
    excerpt: "As a dental student, I joined Miles for Smiles to gain experience. What I found was a movement that changed how I see my profession and my country.",
    content: "When I first joined Miles for Smiles Nepal, I was a second-year dental student looking for clinical experience. I thought I would be practicing procedures and learning techniques. What I actually found was something much deeper.\n\nOn my first camp in Palpa, I met a teacher who had been using salt to clean his teeth his entire life because he had never owned a toothbrush. I showed him how to brush properly and gave him a hygiene kit. He thanked me like I had given him a treasure. That moment reframed everything for me. Dentistry isn't just about fixing teeth - it's about dignity, about access, about showing people that they matter.\n\nI've now volunteered on five camps across three districts. Every trip challenges me, teaches me, and reminds me why I chose this profession. Miles for Smiles isn't just an organization - it's a family of young people who believe that healthcare is a right, not a privilege.",
    author_name: "Dr. Priya Sharma",
    author_role: "Volunteer Dentist",
    cover_image: "https://images.pexels.com/photos/7074250/pexels-photo-7074250.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Multiple Districts",
    date: "2024",
    display_order: 2
  },
  {
    id: "00f895f0-3b59-4455-827f-ca30a8d04bde",
    title: "The Monks of Karnali",
    slug: "monks-of-karnali",
    type: "community",
    excerpt: "Reaching the monasteries of Karnali was one of our most memorable experiences. The monks welcomed us with warmth and gratitude.",
    content: "When we planned our Karnali outreach, we knew that the remote monasteries in the region were among the most underserved communities. Many monks had never seen a dentist in their lives.\n\nWe set up our camp inside a monastery courtyard, surrounded by prayer flags and mountains. Over three days, we treated 500+ monks - from young novices to elderly practitioners. Many had significant dental issues that had gone untreated for years.\n\nWhat struck us most was their gratitude and patience. Despite enduring sometimes lengthy procedures, every monk we treated thanked us with a bow and a smile. By the end of our visit, we had not only provided dental care but had built a connection that transcended language and culture. We promised to return, and we will.",
    author_name: "Field Reflection",
    author_role: "Miles for Smiles Team",
    cover_image: "https://images.pexels.com/photos/9812303/pexels-photo-9812303.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Karnali Region",
    date: "2023",
    display_order: 3
  }
];

export const INITIAL_BLOG_POSTS: BlogPost[] = [
  {
    id: "701488a1-6464-47e9-9407-b2588780ef40",
    title: "Miles for Smiles Nepal Reaches Karnali",
    slug: "miles-for-smiles-karnali-blog",
    excerpt: "Our team completes a historic outreach to Jumla in the Karnali region, providing dental care to over 500 monks and community members.",
    content: "In September 2023, a team of 15 volunteers from Miles for Smiles Nepal embarked on our most ambitious outreach yet - a multi-day journey to Jumla in the remote Karnali region.\n\nAfter traveling by road and then trekking through mountain paths, the team set up dental camps in local schools and monasteries. Over five days, they provided free dental treatment, oral health awareness sessions, and hygiene kits to over 500 monks and hundreds of community members.\n\nThe project, dubbed 'Miles for Smiles Karnali,' demonstrated that no community is too remote to reach. The team is already planning a return visit to expand the program to surrounding villages.",
    cover_image: "https://images.pexels.com/photos/7074250/pexels-photo-7074250.jpeg?auto=compress&cs=tinysrgb&w=800",
    author_name: "Miles for Smiles Team",
    author_role: "Organization",
    category: "news",
    tags: ["karnali", "outreach", "dental-camp"],
    is_published: true,
    published_at: "2023-10-15T04:05:24.83593+00:00"
  },
  {
    id: "34e26fc5-e69f-4786-a12d-aae3d420cfb6",
    title: "Celebrating World Oral Health Day 2024",
    slug: "world-oral-health-day-2024",
    excerpt: "This year's World Oral Health Day campaign reached over 2,000 people across multiple districts with free check-ups and awareness sessions.",
    content: "World Oral Health Day 2024 was our biggest campaign yet. Volunteers mobilized across Kathmandu, Palpa, and Nawalparasi to provide free dental check-ups, awareness sessions, and hygiene kits.\n\nIn total, we reached over 2,000 people, distributed 1,500+ toothbrushes, and conducted awareness sessions in 15 schools. The campaign also generated significant social media engagement, helping spread the message of oral health to thousands more.\n\nWe thank all our volunteers, partners, and supporters who made this possible. Together, we are making oral health care accessible to all.",
    cover_image: "https://images.pexels.com/photos/9812303/pexels-photo-9812303.jpeg?auto=compress&cs=tinysrgb&w=800",
    author_name: "Miles for Smiles Team",
    author_role: "Organization",
    category: "news",
    tags: ["world-oral-health-day", "awareness", "campaign"],
    is_published: true,
    published_at: "2024-03-21T04:05:24.83593+00:00"
  }
];

export const GALLERY_CATEGORIES = [
  { key: "all", label: "All" },
  { key: "dental-camps", label: "Dental Camps" },
  { key: "awareness", label: "Awareness Programs" },
  { key: "community", label: "Community Outreach" },
  { key: "volunteers", label: "Volunteers" },
  { key: "karnali", label: "Karnali Project" },
  { key: "schools", label: "Schools" }
];

export const INITIAL_GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "gal-1",
    title: "Dental Examination in Karnali",
    image_url: "https://images.pexels.com/photos/7074250/pexels-photo-7074250.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "dental-camps",
    location: "Jumla, Karnali",
    date: "September 2023",
    display_order: 1
  },
  {
    id: "gal-2",
    title: "Student Oral Hygiene Demonstration",
    image_url: "https://images.pexels.com/photos/36423522/pexels-photo-36423522.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "schools",
    location: "Kathmandu Valley",
    date: "March 2024",
    display_order: 2
  },
  {
    id: "gal-3",
    title: "Community Outreach Camp",
    image_url: "https://images.pexels.com/photos/9812303/pexels-photo-9812303.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "community",
    location: "Palpa District",
    date: "November 2023",
    display_order: 3
  },
  {
    id: "gal-4",
    title: "Flood Relief and Hygiene Distribution",
    image_url: "https://images.pexels.com/photos/2095948/pexels-photo-2095948.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "volunteers",
    location: "Nawalparasi",
    date: "August 2023",
    display_order: 4
  },
  {
    id: "gal-5",
    title: "Menstrual Health & Dignity Workshop",
    image_url: "https://images.pexels.com/photos/30462136/pexels-photo-30462136.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "awareness",
    location: "Rural Western Nepal",
    date: "January 2024",
    display_order: 5
  },
  {
    id: "gal-6",
    title: "Monastery Dental Care Camp",
    image_url: "https://images.pexels.com/photos/7074250/pexels-photo-7074250.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "karnali",
    location: "Upper Karnali",
    date: "October 2023",
    display_order: 6
  }
];

export const INITIAL_REPORTS: TransparencyReport[] = [
  {
    id: "rep-1",
    title: "Annual Impact & Transparency Report 2023-2024",
    type: "annual",
    year: "2024",
    summary: "Comprehensive breakdown of field outreach, clinical beneficiaries, supply chains, and audited financial statements.",
    file_size: "3.4 MB",
    download_url: "#",
    date: "July 2024"
  },
  {
    id: "rep-2",
    title: "Karnali Outreach Clinical & Demographics Report",
    type: "project",
    year: "2023",
    summary: "Detailed clinical epidemiology report on dental caries prevalence, emergency extractions, and restorative care in Jumla.",
    file_size: "2.1 MB",
    download_url: "#",
    date: "October 2023"
  },
  {
    id: "rep-3",
    title: "World Oral Health Day 2024 Multi-District Summary",
    type: "impact",
    year: "2024",
    summary: "Reach analysis of school awareness sessions across Kathmandu, Palpa, and Nawalparasi covering 2,000+ individuals.",
    file_size: "1.8 MB",
    download_url: "#",
    date: "April 2024"
  },
  {
    id: "rep-4",
    title: "Fiscal Year 2023/2024 Financial Audit Summary",
    type: "financial",
    year: "2024",
    summary: "Independent audit disclosure showing 100% program fund deployment, zero administrative leakage, and verified supplier invoices.",
    file_size: "1.2 MB",
    download_url: "#",
    date: "August 2024"
  }
];

export const VOLUNTEER_CATEGORIES = [
  {
    value: "dental-students",
    label: "Dental Students",
    desc: "Current dental students passionate about community service"
  },
  {
    value: "dentists",
    label: "Dentists",
    desc: "Qualified dentists who can lead clinical procedures"
  },
  {
    value: "medical-professionals",
    label: "Medical Professionals",
    desc: "Doctors, nurses, and health workers"
  },
  {
    value: "photographers",
    label: "Photographers",
    desc: "Document our field work through powerful imagery"
  },
  {
    value: "designers",
    label: "Designers",
    desc: "Help us create compelling visual communications"
  },
  {
    value: "content-creators",
    label: "Content Creators",
    desc: "Writers and social media creators to amplify our mission"
  },
  {
    value: "general-volunteers",
    label: "General Volunteers",
    desc: "Passionate individuals ready to help with logistics, operations, and support"
  }
];

export const SPONSOR_TIERS = [
  {
    title: "Program Sponsor",
    amount: "Rs 100,000+",
    desc: "Sponsor an entire dental camp or awareness program in a community of your choice.",
    features: [
      "Full program funding",
      "Naming rights for the camp",
      "Detailed impact report",
      "Field visit opportunity"
    ]
  },
  {
    title: "Community Partner",
    amount: "Rs 50,000+",
    desc: "Support ongoing outreach in a specific district or school program.",
    features: [
      "District-level support",
      "Recognition on project pages",
      "Bi-annual impact updates",
      "Volunteer participation"
    ]
  },
  {
    title: "Smile Supporter",
    amount: "Rs 25,000+",
    desc: "Contribute to oral hygiene kits, equipment, and educational materials.",
    features: [
      "Materials sponsorship",
      "Social media recognition",
      "Impact summary",
      "Newsletter features"
    ]
  }
];

export const DONATION_TIERS = [
  {
    amount: "Rs 500",
    desc: "Helps provide oral hygiene materials (toothbrushes, toothpaste) for 10 children.",
    color: "from-teal-400 to-teal-500"
  },
  {
    amount: "Rs 1,000",
    desc: "Supports oral health awareness activities in a school or community group.",
    color: "from-teal-500 to-teal-600"
  },
  {
    amount: "Rs 5,000",
    desc: "Supports a community outreach program including materials and volunteer logistics.",
    color: "from-amber-400 to-amber-500"
  },
  {
    amount: "Rs 10,000",
    desc: "Helps fund a dental camp reaching hundreds of underserved community members.",
    color: "from-teal-700 to-teal-900"
  }
];

export const DONATION_METHODS = [
  {
    name: "eSewa",
    id: "milesforsmiles@esewa",
    desc: "Nepal's most popular digital wallet. Send your donation instantly."
  },
  {
    name: "Khalti",
    id: "milesforsmiles@khalti",
    desc: "Quick and secure digital payment for Nepali donors."
  },
  {
    name: "Bank Transfer",
    id: "Account: 01234567890 — Nepal Bank Ltd, Kathmandu Branch",
    desc: "Direct bank transfer for larger donations."
  },
  {
    name: "International",
    id: "GoFundMe / PayPal: donate@milesforsmilesnepal.org",
    desc: "For our international supporters and diaspora community."
  }
];

export const PARTNERSHIP_BENEFITS = [
  {
    title: "Measurable Impact",
    description: "See exactly how your partnership transforms communities through detailed reports and field visits."
  },
  {
    title: "Brand Visibility",
    description: "Your brand associated with a trusted youth-led movement reaching thousands across Nepal."
  },
  {
    title: "Employee Engagement",
    description: "Involve your team in meaningful volunteer opportunities and field outreach camps."
  },
  {
    title: "Community Trust",
    description: "Build lasting goodwill by supporting tangible health and education initiatives in underserved areas."
  }
];

export const CORE_VALUES = [
  {
    title: "Compassion",
    description: "We treat every person with dignity and respect, ensuring that care is delivered with empathy and kindness."
  },
  {
    title: "Youth-Led",
    description: "We are a movement of young people — dental students, professionals, and volunteers — driving change with passion and energy."
  },
  {
    title: "Transparency",
    description: "We are open and accountable about our work, our impact, and how every single contribution is used."
  },
  {
    title: "Hope",
    description: "Believing that every community, no matter how remote, can have access to health, dignity, and a reason to smile."
  },
  {
    title: "Collaboration",
    description: "Partnering with schools, local leaders, health posts, and sponsors to build sustainable grassroots change."
  },
  {
    title: "Excellence",
    description: "Upholding high clinical sterilization standards, gentle patient care, and continuous clinical learning."
  }
];
