import json

with open('bolt_database_data.json', 'r', encoding='utf-8') as f:
    db = json.load(f)

project_covers = {
    'miles-for-smiles-karnali': 'https://images.pexels.com/photos/7074250/pexels-photo-7074250.jpeg?auto=compress&cs=tinysrgb&w=800',
    'world-oral-health-day': 'https://images.pexels.com/photos/9812303/pexels-photo-9812303.jpeg?auto=compress&cs=tinysrgb&w=800',
    'school-oral-health-programs': 'https://images.pexels.com/photos/36423522/pexels-photo-36423522.jpeg?auto=compress&cs=tinysrgb&w=800',
    'flood-outreach': 'https://images.pexels.com/photos/2095948/pexels-photo-2095948.jpeg?auto=compress&cs=tinysrgb&w=800',
    'menstrual-hygiene-awareness': 'https://images.pexels.com/photos/30462136/pexels-photo-30462136.jpeg?auto=compress&cs=tinysrgb&w=800'
}

for p in db['projects']:
    if not p.get('cover_image'):
        p['cover_image'] = project_covers.get(p.get('slug'), 'https://images.pexels.com/photos/7074250/pexels-photo-7074250.jpeg?auto=compress&cs=tinysrgb&w=800')

story_covers = {
    'smile-from-jumla': 'https://images.pexels.com/photos/36423522/pexels-photo-36423522.jpeg?auto=compress&cs=tinysrgb&w=800',
    'why-i-volunteer': 'https://images.pexels.com/photos/7074250/pexels-photo-7074250.jpeg?auto=compress&cs=tinysrgb&w=800',
    'monks-of-karnali': 'https://images.pexels.com/photos/9812303/pexels-photo-9812303.jpeg?auto=compress&cs=tinysrgb&w=800'
}
for s in db['stories']:
    if not s.get('cover_image'):
        s['cover_image'] = story_covers.get(s.get('slug'), 'https://images.pexels.com/photos/7074250/pexels-photo-7074250.jpeg?auto=compress&cs=tinysrgb&w=800')

blog_covers = {
    'miles-for-smiles-karnali-blog': 'https://images.pexels.com/photos/7074250/pexels-photo-7074250.jpeg?auto=compress&cs=tinysrgb&w=800',
    'world-oral-health-day-2024': 'https://images.pexels.com/photos/9812303/pexels-photo-9812303.jpeg?auto=compress&cs=tinysrgb&w=800'
}
for b in db['blog_posts']:
    if not b.get('cover_image'):
        b['cover_image'] = blog_covers.get(b.get('slug'), 'https://images.pexels.com/photos/9812303/pexels-photo-9812303.jpeg?auto=compress&cs=tinysrgb&w=800')

with open('src/data/boltData.ts', 'w', encoding='utf-8') as f:
    f.write('// Synchronized data from Miles for Smiles Nepal Bolt application\n')
    f.write('export interface ImpactMetric {\n  id: string;\n  label: string;\n  value: number;\n  suffix: string;\n  icon: string;\n  display_order: number;\n}\n\n')
    f.write('export interface District {\n  id: string;\n  name: string;\n  region: string;\n  lat: number;\n  lng: number;\n  reached: boolean;\n  project_summary?: string;\n  beneficiaries?: string;\n  display_order: number;\n}\n\n')
    f.write('export interface Project {\n  id: string;\n  title: string;\n  slug: string;\n  category: string;\n  excerpt: string;\n  overview: string;\n  objectives: string[];\n  activities: string[];\n  outcomes: string[];\n  cover_image: string;\n  location: string;\n  date: string;\n  beneficiaries: string;\n  is_featured: boolean;\n  display_order: number;\n}\n\n')
    f.write('export interface Milestone {\n  id: string;\n  year: string;\n  title: string;\n  description: string;\n  icon: string;\n  display_order: number;\n}\n\n')
    f.write('export interface Story {\n  id: string;\n  title: string;\n  slug: string;\n  type: string;\n  excerpt: string;\n  content: string;\n  author_name: string;\n  author_role: string;\n  cover_image: string;\n  location: string;\n  date: string;\n  display_order: number;\n}\n\n')
    f.write('export interface BlogPost {\n  id: string;\n  title: string;\n  slug: string;\n  excerpt: string;\n  content: string;\n  cover_image: string;\n  author_name: string;\n  author_role: string;\n  category: string;\n  tags: string[];\n  is_published: boolean;\n  published_at: string;\n}\n\n')
    f.write('export interface GalleryPhoto {\n  id: string;\n  title: string;\n  image_url: string;\n  category: string;\n  caption?: string | null;\n  location?: string | null;\n  date?: string | null;\n  display_order: number;\n}\n\n')
    f.write('export interface TransparencyReport {\n  id: string;\n  title: string;\n  type: "annual" | "project" | "impact" | "financial";\n  year: string;\n  summary: string;\n  file_size: string;\n  download_url: string;\n  cover_image?: string;\n  date: string;\n}\n\n')
    
    f.write('export const HERO_SLIDES = [\n')
    f.write('  {\n    image: "https://images.pexels.com/photos/36423522/pexels-photo-36423522.jpeg?auto=compress&cs=tinysrgb&w=1920",\n')
    f.write('    title: "Every Smile Deserves Care",\n    subtitle: "Reaching underserved communities across Nepal through oral health care, education, and compassion."\n  },\n')
    f.write('  {\n    image: "https://images.pexels.com/photos/9812303/pexels-photo-9812303.jpeg?auto=compress&cs=tinysrgb&w=1920",\n')
    f.write('    title: "Reaching the Unreached",\n    subtitle: "From remote mountain villages to flood-affected communities — no one is too far to serve."\n  },\n')
    f.write('  {\n    image: "https://images.pexels.com/photos/7074250/pexels-photo-7074250.jpeg?auto=compress&cs=tinysrgb&w=1920",\n')
    f.write('    title: "Youth-Led, Purpose-Driven",\n    subtitle: "A movement of dental students and young professionals committed to serving communities that are often overlooked."\n  },\n')
    f.write('  {\n    image: "https://images.pexels.com/photos/2095948/pexels-photo-2095948.jpeg?auto=compress&cs=tinysrgb&w=1920",\n')
    f.write('    title: "Hope in Every Step",\n    subtitle: "6,136+ students reached, 500+ monks served, and thousands of smiles transformed across Nepal."\n  }\n];\n\n')
    
    f.write(f"export const INITIAL_IMPACT_METRICS: ImpactMetric[] = {json.dumps(db['impact_metrics'], indent=2)};\n\n")
    f.write(f"export const INITIAL_DISTRICTS: District[] = {json.dumps(db['districts'], indent=2)};\n\n")
    f.write(f"export const INITIAL_PROJECTS: Project[] = {json.dumps(db['projects'], indent=2)};\n\n")
    f.write(f"export const INITIAL_MILESTONES: Milestone[] = {json.dumps(db['milestones'], indent=2)};\n\n")
    f.write(f"export const INITIAL_STORIES: Story[] = {json.dumps(db['stories'], indent=2)};\n\n")
    f.write(f"export const INITIAL_BLOG_POSTS: BlogPost[] = {json.dumps(db['blog_posts'], indent=2)};\n\n")
    
    f.write('''export const GALLERY_CATEGORIES = [
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
''')

print("Wrote src/data/boltData.ts successfully!")
