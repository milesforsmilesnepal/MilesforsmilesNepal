import {
  DistrictImpact,
  Project,
  FieldStory,
  TransparencyReport,
  GalleryItem,
  Partner,
  NewsArticle,
} from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_miles_for_smiles_1790483464777.jpg';
export const KARNALI_IMAGE = '/src/assets/images/dental_camp_karnali_1790483480016.jpg';
export const SCHOOL_EDU_IMAGE = '/src/assets/images/school_oral_education_1790483495471.jpg';
export const MENSTRUAL_IMAGE = '/src/assets/images/menstrual_hygiene_session_1790483508339.jpg';
export const STORY_PORTRAIT_IMAGE = '/src/assets/images/human_story_portrait_1790483520243.jpg';
export const MFSN_LOGO_IMAGE = '/mfsn_logo.jpg';
export const MFSN_BRAND_COLOR = '#16A396';
export const MFSN_BRAND_DARK = '#0E786E';

export const IMPACT_METRICS = {
  studentsReached: 6136,
  districtsServed: 14,
  hygieneKitsDistributed: 18500,
  freeTreatmentsCompleted: 1420,
  fluorideApplications: 5240,
  youthVolunteersMobilized: 460,
  schoolsPartnered: 48,
  yearsOfImpact: 4,
};

export const DISTRICTS_DATA: DistrictImpact[] = [
  {
    id: 'jumla',
    name: 'Jumla',
    nepaliName: 'जुम्ला',
    province: 'Karnali Province',
    provinceNo: 6,
    studentsReached: 1240,
    freeDentalTreatments: 340,
    hygieneKitsDistributed: 2800,
    schoolsVisited: 8,
    terrain: 'Mountain',
    lastCampDate: 'April 2025',
    photo: KARNALI_IMAGE,
    activities: [
      'Comprehensive Atraumatic Restorative Treatment (ART)',
      'Fluoride varnish topical application',
      'School-wide tooth brushing workshops',
      'Emergency extractions and pain relief',
      'Distribution of oral hygiene kits',
    ],
    summary:
      'High-altitude dental camps organized across remote Khalanga and Tatopani municipalities, treating children who have never seen a dentist.',
    story: {
      title: 'First Time Brushing at Age 11',
      beneficiary: 'Pema Lama, Grade 5 student',
      quote:
        '"I had severe tooth pain for six months that made it hard to study. The dental doctors treated my tooth without any hurt and gave me my very first toothbrush and mint paste. Now I smile without pain!"',
    },
    coordinates: { x: 340, y: 190 },
  },
  {
    id: 'humla',
    name: 'Humla',
    nepaliName: 'हुम्ला',
    province: 'Karnali Province',
    provinceNo: 6,
    studentsReached: 820,
    freeDentalTreatments: 210,
    hygieneKitsDistributed: 1650,
    schoolsVisited: 5,
    terrain: 'Mountain',
    lastCampDate: 'August 2025',
    photo: KARNALI_IMAGE,
    activities: [
      'Air-lifted portable dental units',
      'Pediatric dental screenings',
      'Menstrual hygiene dignity kit distribution',
      'Training local health post staff in oral primary care',
    ],
    summary:
      'One of the most remote regions of Nepal, reachable only by foot or flight. Our student volunteers carried portable handpieces over mountain passes.',
    story: {
      title: 'Bringing Healthcare to the Roof of Nepal',
      beneficiary: 'Kalsang Dorje, Community Headmaster',
      quote:
        '"In Humla, getting dental care means flying to Nepalgunj, which 99% of our families cannot afford. Miles for Smiles brought high-standard dental care right to our schoolyard."',
    },
    coordinates: { x: 260, y: 120 },
  },
  {
    id: 'sindhupalchok',
    name: 'Sindhupalchok',
    nepaliName: 'सिन्धुपाल्चोक',
    province: 'Bagmati Province',
    provinceNo: 3,
    studentsReached: 1150,
    freeDentalTreatments: 285,
    hygieneKitsDistributed: 3100,
    schoolsVisited: 9,
    terrain: 'Hill',
    lastCampDate: 'November 2025',
    photo: SCHOOL_EDU_IMAGE,
    activities: [
      'Post-earthquake school oral health rebuild',
      'Pit and fissure sealants for primary molars',
      'Interactive puppet show on oral bacteria',
      'Menstrual hygiene awareness for adolescent girls',
    ],
    summary:
      'Serving mountainous communities in Melamchi and Helambu valleys focusing on preventive dental care and adolescent reproductive health.',
    story: {
      title: 'Smiles in the Cloud Valleys',
      beneficiary: 'Sunita Tamang, Grade 8',
      quote:
        '"The menstrual health session cleared so many taboos we held quietly. And getting my teeth cleaned made me want to study biology to become a healthcare worker myself."',
    },
    coordinates: { x: 570, y: 310 },
  },
  {
    id: 'kathmandu',
    name: 'Kathmandu Valley',
    nepaliName: 'काठमाडौं',
    province: 'Bagmati Province',
    provinceNo: 3,
    studentsReached: 1420,
    freeDentalTreatments: 290,
    hygieneKitsDistributed: 4200,
    schoolsVisited: 12,
    terrain: 'Hill',
    lastCampDate: 'January 2026',
    photo: SCHOOL_EDU_IMAGE,
    activities: [
      'Slum area & government school health camps',
      'World Oral Health Day mega-rally',
      'Free dental consultation booth at Tudikhel',
      'Oral cancer early screening drives for senior citizens',
    ],
    summary:
      'Outreach in marginalized peri-urban communities, brick kiln laborer settlements, and underprivileged community schools across the capital.',
    story: {
      title: 'Serving the Invisible Children of the Valley',
      beneficiary: 'Ramesh Chaudhary, Brick Kiln School Student',
      quote:
        '"We move often with our parents and never visited a hospital. The doctors checked all of us, gave us toothbrushes and taught us how to keep our gums healthy."',
    },
    coordinates: { x: 535, y: 340 },
  },
  {
    id: 'chitwan',
    name: 'Chitwan',
    nepaliName: 'चितवन',
    province: 'Bagmati Province',
    provinceNo: 3,
    studentsReached: 780,
    freeDentalTreatments: 160,
    hygieneKitsDistributed: 2100,
    schoolsVisited: 6,
    terrain: 'Terai',
    lastCampDate: 'September 2025',
    photo: MENSTRUAL_IMAGE,
    activities: [
      'Chepang community remote healthcare outreach',
      'Fluoride varnish treatment',
      'Nutritional oral health counseling',
      'Menstrual hygiene kits distribution',
    ],
    summary:
      'Focused outreach to the marginalized indigenous Chepang communities in hilly slopes of Chitwan where healthcare access remains critically low.',
    story: {
      title: 'Chepang Youth Healthcare Access',
      beneficiary: 'Maila Chepang, Community Leader',
      quote:
        '"These energetic young dental students walked 4 hours uphill carrying medicines to reach our settlement. Their dedication has left an indelible mark in our hearts."',
    },
    coordinates: { x: 470, y: 380 },
  },
  {
    id: 'solukhumbu',
    name: 'Solukhumbu',
    nepaliName: 'सोलुखुम्बु',
    province: 'Koshi Province',
    provinceNo: 1,
    studentsReached: 726,
    freeDentalTreatments: 135,
    hygieneKitsDistributed: 1650,
    schoolsVisited: 5,
    terrain: 'Mountain',
    lastCampDate: 'May 2025',
    photo: HERO_IMAGE,
    activities: [
      'High-altitude sherpa community camps',
      'Dental restorations and sealants',
      'School hygiene education',
      'Toothpaste distribution in sub-zero communities',
    ],
    summary:
      'Serving mountain schools in the Everest foothills where sweet tea and processed snacks have drastically increased childhood caries with zero local dental clinics.',
    story: {
      title: 'Protecting Himalayan Smiles',
      beneficiary: 'Tenzing Sherpa, Local Teacher',
      quote:
        '"The children were suffering from cavities caused by packaged candies. Miles for Smiles not only cured their cavities but gave every student the knowledge to protect their teeth."',
    },
    coordinates: { x: 670, y: 330 },
  },
  {
    id: 'morang',
    name: 'Morang & Sunsari',
    nepaliName: 'मोरङ तथा सुनसरी',
    province: 'Koshi Province',
    provinceNo: 1,
    studentsReached: 910,
    freeDentalTreatments: 205,
    hygieneKitsDistributed: 3000,
    schoolsVisited: 8,
    terrain: 'Terai',
    lastCampDate: 'July 2025',
    photo: KARNALI_IMAGE,
    activities: [
      'Monsoon flood relief health and dental camp',
      'Water purification & oral rinsing hygiene',
      'Pediatric dental extractions & restorations',
      'Distribution of antiseptic oral hygiene packs',
    ],
    summary:
      'Rapid humanitarian response during monsoon inundation, providing emergency dental care and waterborne illness prevention.',
    story: {
      title: 'Relief After the Floodwaters',
      beneficiary: 'Anita Rishidev, Community Member',
      quote:
        '"After our settlement was flooded, our health post was submerged. Miles for Smiles brought medicines, dental relief, and hygiene supplies right when we needed them most."',
    },
    coordinates: { x: 740, y: 410 },
  },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'miles-for-smiles-karnali',
    title: 'Miles for Smiles Karnali Expedition',
    nepaliTitle: 'मुस्कानको लागि पाइला - कर्णाली अभियान',
    slug: 'miles-for-smiles-karnali',
    category: 'Dental Camps',
    status: 'Completed',
    location: 'Jumla & Humla, Karnali Province',
    date: 'April - August 2025',
    beneficiariesCount: 2060,
    image: KARNALI_IMAGE,
    summary:
      'A grueling 18-day medical expedition by 24 volunteer dental students carrying mobile dental units into the rugged terrain of upper Karnali.',
    description:
      'Karnali Province has among the lowest doctor-to-patient ratios in South Asia. Our team traversed mountain passes on foot with portable dental chairs, handpieces, and sterile kits. We conducted comprehensive dental screenings, atraumatic restorative treatments (ART), fluoride varnishing, and distributed hygiene essentials to 2,060 children across 13 schools.',
    keyOutcomes: [
      '2,060 children examined & treated free of cost',
      '550+ dental restorations (cavity fillings) performed on-site',
      '4,450 oral hygiene packs distributed with instruction manuals',
      '14 local community healthcare workers trained in triage',
    ],
    teamLead: 'Dr. Aarav Shrestha & Aayusha KC',
    partnerOrganizations: ['Karnali Health Post Alliance', 'Rotary Club of Kathmandu', 'Himalayan Health Fund'],
  },
  {
    id: 'world-oral-health-day',
    title: 'World Oral Health Day National Campaign',
    nepaliTitle: 'विश्व मुख स्वास्थ्य दिवस राष्ट्रिय अभियान',
    slug: 'world-oral-health-day',
    category: 'Awareness',
    status: 'Ongoing',
    location: 'Kathmandu, Pokhara, & Biratnagar',
    date: 'March 20, 2025 & Annual',
    beneficiariesCount: 3500,
    image: HERO_IMAGE,
    summary:
      'Nationwide youth-led rallies, school flash mobs, and free diagnostic camps promoting the global theme: A Happy Mouth is A Happy Body.',
    description:
      'Mobilizing hundreds of dental and medical students across Nepal to demystify dental care and advocate for government policy inclusion of oral healthcare in standard basic health packages.',
    keyOutcomes: [
      'Over 3,500 public citizens screened in open-air clinics',
      '30+ educational institutions engaged in preventive oral workshops',
      '12,000 informational brochures in Nepali & Maithili distributed',
      'National television and radio interviews on oral hygiene awareness',
    ],
    teamLead: 'Pooja Acharya & Dr. Suman Adhikari',
    partnerOrganizations: ['Nepal Dental Association', 'Youth for Health Nepal'],
  },
  {
    id: 'school-oral-health-programs',
    title: 'School Oral Health & Fluoride Varnish Program',
    nepaliTitle: 'विद्यालय मुख स्वास्थ्य तथा फ्लोराइड कार्यक्रम',
    slug: 'school-oral-health-programs',
    category: 'School Health',
    status: 'Ongoing',
    location: 'Sindhupalchok, Dolakha, & Kavre',
    date: 'Year-Round 2025–2026',
    beneficiariesCount: 4200,
    image: SCHOOL_EDU_IMAGE,
    summary:
      'A structured curriculum educating primary students on 2-minute brushing, diet habits, and applying preventative fluoride varnish to eradicate childhood decay.',
    description:
      'Early childhood caries is rampant in rural Nepal due to the surge of inexpensive refined sugar biscuits and carbonated drinks without fluoridated tap water. Our preventative school program applies silver diamine fluoride (SDF) and 5% sodium fluoride varnish to arrest decay before it causes debilitating pain.',
    keyOutcomes: [
      '92% reduction in reported toothaches among enrolled schools',
      '48 schools established daily supervised tooth-brushing corners',
      'Teacher training modules implemented in 4 municipalities',
      'Digital health record created for every student monitored',
    ],
    teamLead: 'Dikshya Sharma, Final Year BDS',
    partnerOrganizations: ['Colgate-Palmolive Nepal CSR', 'Save the Children Local Chapter'],
  },
  {
    id: 'menstrual-hygiene-awareness',
    title: 'Dignity & Health: Menstrual Hygiene Outreach',
    nepaliTitle: 'महिनावारी स्वच्छता तथा मर्यादा अभियान',
    slug: 'menstrual-hygiene-awareness',
    category: 'Menstrual Hygiene',
    status: 'Ongoing',
    location: 'Chitwan, Ramechhap, & Jumla',
    date: 'August 2025 – Present',
    beneficiariesCount: 1840,
    image: MENSTRUAL_IMAGE,
    summary:
      'Breaking cultural stigmas through student-to-student adolescent workshops and distributing reusable, biodegradable dignity kits.',
    description:
      'Menstrual hygiene is inextricably linked to female student absenteeism and overall bodily dignity. Spearheaded by female dental and medical students, this project provides empathetic education, addresses physiological facts, and distributes comprehensive hygiene kits containing reusable cotton pads, soap, and educational comics in Nepali.',
    keyOutcomes: [
      '1,840 adolescent girls and young mothers trained',
      '2,200 washable sanitary kit bundles distributed',
      'Reduction in school absenteeism during menstrual cycles from 34% to under 6%',
      'Direct dialogue established with village mother groups (Aama Samuha)',
    ],
    teamLead: 'Prativa Thapa & Roshani Gautam',
    partnerOrganizations: ['Days for Girls Nepal', 'Rotaract District 3292'],
  },
  {
    id: 'flood-relief-dental-outreach',
    title: 'Monsoon Flood Relief Dental & Emergency Outreach',
    nepaliTitle: 'बाढी प्रभावित क्षेत्रमा आपतकालीन स्वास्थ्य सेवा',
    slug: 'flood-relief-dental-outreach',
    category: 'Disaster Relief',
    status: 'Completed',
    location: 'Morang, Sunsari, & Saptari (Terai)',
    date: 'July - September 2025',
    beneficiariesCount: 1650,
    image: STORY_PORTRAIT_IMAGE,
    summary:
      'Rapid emergency mobile clinic deployment after devastating monsoon flooding disrupted rural healthcare facilities.',
    description:
      'When floodwaters submerge healthcare posts, untreated oral infections and oral mucositis explode due to contaminated water and lack of basic hygiene supplies. Our volunteer teams reached submerged settlements using boats and high-clearance tractors to provide emergency surgical extractions, antibiotics, oral antiseptic washes, and clean drinking water tablets.',
    keyOutcomes: [
      '1,650 displaced community members received acute medical & dental triage',
      '380 emergency extractions for severe facial cellulitis and acute pulpitis',
      'Water purification kits & oral rinse supplies delivered to 8 relief camps',
      'Collaborated seamlessly with Nepal Red Cross Society',
    ],
    teamLead: 'Dr. Niranjan Bhattarai',
    partnerOrganizations: ['Nepal Red Cross Society', 'Terai Relief Taskforce'],
  },
];

export const JOURNEY_TIMELINE = [
  {
    year: '2022',
    title: 'The Classroom Spark',
    nepaliTitle: 'सपनाको शुरुवात',
    description:
      'A small group of third-year dental students at Tribhuvan University Institute of Medicine realized that 90% of dentists in Nepal practice in urban centers, while 80% of the population lives in rural areas. Miles for Smiles was born.',
  },
  {
    year: '2023',
    title: 'First Step: Sindhupalchok Pilot',
    nepaliTitle: 'पहिलो पाइला: सिन्धुपाल्चोक',
    description:
      'With backpacks full of toothbrushes and self-funded dental materials, 12 students organized our first 3-day camp in Helambu, treating 450 school children.',
  },
  {
    year: '2024',
    title: 'Scaling to High Himalayas',
    nepaliTitle: 'हिमाली भेगमा विस्तार',
    description:
      'Formalized NGO registration with the Social Welfare Council of Nepal. Launched the historic Karnali Expedition to Jumla and Humla, reaching over 2,000 beneficiaries.',
  },
  {
    year: '2025',
    title: 'Integrated Health & Menstrual Dignity',
    nepaliTitle: 'समग्र स्वास्थ्य अभियान',
    description:
      'Broadened our mandate to include adolescent menstrual hygiene and emergency disaster relief, passing the 6,000+ student milestone across 14 districts.',
  },
  {
    year: '2026',
    title: 'Reach the Unreached Movement',
    nepaliTitle: 'पहुँच बाहिरका बस्तीसम्म',
    description:
      'Building Nepal’s first youth-driven mobile dental expedition fleet with custom solar-powered autoclaves and preventative care tracking.',
  },
];

export const FIELD_STORIES: FieldStory[] = [
  {
    id: 'story-pema',
    title: 'No More Sleepless Nights: Pema’s Smile Restored in Jumla',
    location: 'Tatopani, Jumla',
    date: 'May 2025',
    narrative:
      'For eight months, 11-year-old Pema carried a deep throbbing cavity that kept her awake at night and made chewing painful. Her father would have had to borrow money and walk for two days to reach the nearest hospital in Surkhet. When Miles for Smiles set up our temporary clinic at Shree Janajyoti Secondary School, our pediatric volunteer team performed atraumatic restoration without drilling, completely relieving her pain within 30 minutes.',
    author: 'Dr. Aarav Shrestha',
    role: 'Volunteer Dental Surgeon',
    image: STORY_PORTRAIT_IMAGE,
    impactHighlight: 'Zero pain, full school attendance resumed within 48 hours.',
  },
  {
    id: 'story-chepang',
    title: 'Walking Four Hours Through Fog for a Toothbrush',
    location: 'Shaktikhor, Chitwan',
    date: 'October 2025',
    narrative:
      'In the remote hills of Chitwan, many indigenous Chepang families live in dispersed homesteads. 64-year-old Budhiman Chepang walked four hours downhill through mountain fog holding the hands of his three grandchildren. "I have lost eight teeth because we thought tooth pain was our destiny," he told us. Watching his grandchildren learn circular brushing techniques and hold their own colorful toothbrushes brought tears to his eyes.',
    author: 'Aayusha KC',
    role: 'Community Outreach Lead',
    image: KARNALI_IMAGE,
    impactHighlight: '180 Chepang children received preventative fluoride varnishing.',
  },
  {
    id: 'story-menstrual-silence',
    title: 'Breaking the Wall of Silence in Sindhupalchok',
    location: 'Melamchi, Sindhupalchok',
    date: 'December 2025',
    narrative:
      'During our menstrual hygiene workshop, teenage girls initially sat with lowered eyes, hesitant to even utter the Nepali word for period. Our female student facilitators shared their own journeys as future healthcare workers. By afternoon, the room transformed into an empowering circle of laughter, practical questions, and confidence. Each girl walked home with a dignity kit containing washable cotton pads, gentle soaps, and personal care guides.',
    author: 'Prativa Thapa',
    role: 'Menstrual Health Lead',
    image: MENSTRUAL_IMAGE,
    impactHighlight: 'School absenteeism among female students dropped by 80%.',
  },
];

export const TRANSPARENCY_REPORTS: TransparencyReport[] = [
  {
    id: 'annual-report-2025',
    title: 'Miles for Smiles Annual Impact & Financial Audit 2024–2025',
    nepaliTitle: 'वार्षिक प्रभाव तथा लेखापरीक्षण प्रतिवेदन २०८१/८२',
    location: 'National Coverage (14 Districts)',
    date: 'December 2025',
    year: 2025,
    type: 'Annual Impact',
    beneficiaries: 6136,
    fileSize: '4.2 MB PDF',
    summary:
      'Complete audited financial records, field operational logs, independent medical evaluation, and breakdown of all donor funding.',
    executiveSummary: [
      'Total funds raised: NPR 2,840,000 ($21,400 USD)',
      'Direct healthcare and camp spending: 89.4% (NPR 2,538,960)',
      'Logistics, porterage & mountain transport: 6.2% (NPR 176,080)',
      'Administration, audit & banking fees: 4.4% (NPR 124,960)',
      'Zero executive salaries: 100% youth volunteer-led leadership',
    ],
    financialBreakdown: {
      treatmentSupplies: 54,
      patientEducationMaterials: 22,
      logisticsAndTravel: 18,
      administration: 6,
    },
  },
  {
    id: 'karnali-medical-audit',
    title: 'Karnali High-Altitude Oral Health Epidemiological Study',
    nepaliTitle: 'कर्णाली उच्च हिमाली मुख स्वास्थ्य अध्ययन प्रतिवेदन',
    location: 'Jumla & Humla',
    date: 'August 2025',
    year: 2025,
    type: 'Medical Expedition Audit',
    beneficiaries: 2060,
    fileSize: '3.1 MB PDF',
    summary:
      'Detailed clinical outcomes of Atraumatic Restorative Treatment (ART) in sub-zero and high-altitude conditions among school students.',
    executiveSummary: [
      'Documented baseline DMFT (Decayed, Missing, Filled Teeth) index of 3.8 across examined children',
      'Clinical success rate of ART restorations evaluated at 6-month follow-up: 94.2%',
      'Recommended mandatory salt fluoridation and municipal toothpaste subsidies in remote provinces',
    ],
    financialBreakdown: {
      treatmentSupplies: 60,
      patientEducationMaterials: 15,
      logisticsAndTravel: 21,
      administration: 4,
    },
  },
  {
    id: 'menstrual-health-impact',
    title: 'Adolescent Reproductive & Menstrual Dignity Outcome Report',
    nepaliTitle: 'किशोरी प्रजनन तथा महिनावारी मर्यादा प्रतिवेदन',
    location: 'Chitwan, Ramechhap, Jumla',
    date: 'October 2025',
    year: 2025,
    type: 'Research Paper',
    beneficiaries: 1840,
    fileSize: '2.4 MB PDF',
    summary:
      'Quantitative and qualitative assessment of dignity kit distribution and stigma reduction workshops across 24 rural secondary schools.',
    executiveSummary: [
      'Surveyed 1,200 participating adolescent girls before and 90 days after workshop intervention',
      'Reported confidence discussing menstrual health increased from 18% to 92%',
      '100% of distributed reusable dignity kits still in active use at 3-month check-in',
    ],
    financialBreakdown: {
      treatmentSupplies: 65,
      patientEducationMaterials: 20,
      logisticsAndTravel: 10,
      administration: 5,
    },
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Teaching the Circular Brushing Technique',
    category: 'School Outreach',
    location: 'Sindhupalchok',
    date: 'Nov 2025',
    image: SCHOOL_EDU_IMAGE,
    caption: 'Volunteer dental student demonstrates the Bass brushing technique using an oversized acrylic model.',
  },
  {
    id: 'gal-2',
    title: 'High-Altitude Clinic Setup in Jumla',
    category: 'Dental Camps',
    location: 'Jumla, Karnali',
    date: 'May 2025',
    image: KARNALI_IMAGE,
    caption: 'Our mobile dental clinic assembled on school desks in Khalanga, providing free restorations.',
  },
  {
    id: 'gal-3',
    title: 'Empowering Adolescent Girls with Dignity Kits',
    category: 'Menstrual Hygiene',
    location: 'Chitwan',
    date: 'Sept 2025',
    image: MENSTRUAL_IMAGE,
    caption: 'Distributing washable, eco-friendly sanitary kits after a menstrual health Q&A session.',
  },
  {
    id: 'gal-4',
    title: 'Radiant Smiles in Solukhumbu',
    category: 'Community Smiles',
    location: 'Solukhumbu',
    date: 'April 2025',
    image: STORY_PORTRAIT_IMAGE,
    caption: 'A young primary student beaming proudly after completing her dental checkup and fluoride polish.',
  },
  {
    id: 'gal-5',
    title: 'Monsoon Flood Relief Health Camp',
    category: 'Disaster Relief',
    location: 'Morang, Terai',
    date: 'July 2025',
    image: HERO_IMAGE,
    caption: 'Emergency oral health care and waterborne illness prevention packs distributed to flood-affected families.',
  },
  {
    id: 'gal-6',
    title: 'Dental Volunteer Team Assembly',
    category: 'Dental Camps',
    location: 'Kathmandu Headquarters',
    date: 'January 2026',
    image: KARNALI_IMAGE,
    caption: 'Student dental surgeons and logistics coordinators preparing sterilized handpieces and medicine packs.',
  },
];

export const PARTNERS_DATA: Partner[] = [
  {
    id: 'nda',
    name: 'Nepal Dental Association (NDA)',
    tier: 'Institutional Supporter',
    category: 'Medical Governance',
    logoText: 'NDA NEPAL',
    description: 'National governing body providing professional clinical oversight and dental volunteer accreditation.',
    sinceYear: 2023,
  },
  {
    id: 'rotary',
    name: 'Rotary International District 3292',
    tier: 'Principal Partner',
    category: 'Humanitarian Grants',
    logoText: 'ROTARY NEPAL',
    description: 'Co-funding portable high-altitude dental units and school sanitation infrastructure across remote districts.',
    sinceYear: 2022,
  },
  {
    id: 'colgate',
    name: 'Colgate-Palmolive Nepal CSR',
    tier: 'Healthcare Partner',
    category: 'Oral Care Supplies',
    logoText: 'COLGATE NEPAL',
    description: 'Providing thousands of fluoridated toothpastes and ergonomic pediatric toothbrushes for village schools.',
    sinceYear: 2023,
  },
  {
    id: 'days-for-girls',
    name: 'Days for Girls Nepal',
    tier: 'Healthcare Partner',
    category: 'Menstrual Health',
    logoText: 'DFG NEPAL',
    description: 'Supplying washable, medical-grade cloth menstrual pad kits and culturally grounded curriculum materials.',
    sinceYear: 2024,
  },
  {
    id: 'red-cross',
    name: 'Nepal Red Cross Society',
    tier: 'Logistics Partner',
    category: 'Disaster Management',
    logoText: 'RED CROSS NEPAL',
    description: 'Coordinating rapid ground access, community triage, and mountain porter support during emergency relief.',
    sinceYear: 2024,
  },
  {
    id: 'youth-health',
    name: 'Youth for Health Nepal',
    tier: 'Institutional Supporter',
    category: 'Youth Mobilization',
    logoText: 'YOUTH4HEALTH',
    description: 'Alliance of medical and public health students organizing advocacy and community medical caravans.',
    sinceYear: 2023,
  },
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'news-karnali-expansion-2026',
    title: 'Miles for Smiles Announces 2026 Karnali & Sudurpashchim Expedition',
    nepaliTitle: '२०२६ को कर्णाली तथा सुदूरपश्चिम स्वास्थ्य अभियान घोषणा',
    date: 'February 14, 2026',
    readTime: '3 min read',
    category: 'Press Release',
    outlet: 'Miles for Smiles Media Office',
    image: KARNALI_IMAGE,
    summary:
      'Expanding into Bajhang and Darchula with two custom off-road mobile dental units to reach 3,000 additional students.',
    content:
      'Building on the success of our Jumla and Humla interventions, Miles for Smiles Nepal is launching its largest clinical expedition yet in spring 2026. The 22-day mission will deploy 30 licensed dental doctors and student volunteers across remote Himalayan communities, offering free restorative treatments, oral cancer screenings, and school water fluoridation awareness.',
  },
  {
    id: 'news-kantipur-feature',
    title: 'Kantipur National Daily: Dental Students Walking Miles to Cure Village Smiles',
    nepaliTitle: 'कान्तिपुर राष्ट्रिय दैनिक: गाउँका बालबालिकाको मुस्कान फेर्न हिँडेका दन्त चिकित्सक विद्यार्थी',
    date: 'December 28, 2025',
    readTime: '5 min read',
    category: 'Media Coverage',
    outlet: 'Kantipur Publications',
    image: HERO_IMAGE,
    summary:
      'National broadsheet features the journey of our student-led movement and the stark reality of rural dental disparity.',
    content:
      'In a front-page special report, Kantipur highlighted how dental students are challenging the centralization of medical resources. The feature followed our medical team as they trekked across snow-covered passes with portable autoclaves and restorative filling materials to treat children who had never owned a toothbrush.',
  },
  {
    id: 'news-menstrual-hygiene-milestone',
    title: 'Over 2,000 Dignity Kits Distributed to Rural Adolescent Girls',
    nepaliTitle: '२,००० भन्दा बढी किशोरीहरूलाई मर्यादा किट वितरण सम्पन्न',
    date: 'November 18, 2025',
    readTime: '4 min read',
    category: 'Achievement',
    outlet: 'Field Dispatch',
    image: MENSTRUAL_IMAGE,
    summary:
      'Significant milestone achieved in reducing school dropouts and taboos through peer-to-peer open workshops.',
    content:
      'In collaboration with local mother groups and community school teachers, Miles for Smiles has successfully concluded its second phase of the Dignity & Health campaign. The program has demonstrably decreased period-related absenteeism and fostered open health dialogue in five remote municipalities.',
  },
];

export const TEAM_MEMBERS = [
  {
    name: 'Dr. Aarav Shrestha',
    nepaliName: 'डा. आरभ श्रेष्ठ',
    role: 'Co-Founder & Clinical Director',
    subtext: 'Dental Surgeon (BDS, IOM Maharajgunj)',
    bio: 'Passionate about public dental health equity and community-driven atraumatic dentistry.',
  },
  {
    name: 'Aayusha KC',
    nepaliName: 'आयुषा केसी',
    role: 'Co-Founder & Operations Lead',
    subtext: 'Final Year BDS Student (KU Dental School)',
    bio: 'Oversees remote expedition logistics, partner liaison, and volunteer coordination across 14 districts.',
  },
  {
    name: 'Dr. Suman Adhikari',
    nepaliName: 'डा. सुमन अधिकारी',
    role: 'Medical Advisor & Maxillofacial Lead',
    subtext: 'Oral & Maxillofacial Surgeon',
    bio: 'Provides clinical mentorship, surgical protocol oversight, and emergency referral routing.',
  },
  {
    name: 'Prativa Thapa',
    nepaliName: 'प्रतिभा थापा',
    role: 'Menstrual Health & Outreach Lead',
    subtext: 'Public Health & Dental Advocate',
    bio: 'Spearheads adolescent dignity campaigns and community health education in indigenous areas.',
  },
  {
    name: 'Rohan Shrestha',
    nepaliName: 'रोहन श्रेष्ठ',
    role: 'Finance & Transparency Officer',
    subtext: 'Chartered Accountant / Non-profit Auditor',
    bio: 'Ensures 100% transparent fund utilization, annual public audit disclosures, and compliance.',
  },
  {
    name: 'Dikshya Sharma',
    nepaliName: 'दिक्षा शर्मा',
    role: 'School Program Coordinator',
    subtext: 'BDS Intern & Health Educator',
    bio: 'Designs interactive pediatric tooth-brushing curricula, puppet shows, and teacher modules.',
  },
];
