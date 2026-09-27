export type PageId =
  | 'home'
  | 'about'
  | 'projects'
  | 'impact-map'
  | 'gallery'
  | 'reports'
  | 'volunteer'
  | 'sponsors'
  | 'donate'
  | 'news'
  | 'contact';

export interface DistrictImpact {
  id: string;
  name: string;
  nepaliName: string;
  province: string;
  provinceNo: number;
  studentsReached: number;
  freeDentalTreatments: number;
  hygieneKitsDistributed: number;
  schoolsVisited: number;
  terrain: 'Mountain' | 'Hill' | 'Terai';
  lastCampDate: string;
  activities: string[];
  photo: string;
  summary: string;
  story: {
    title: string;
    beneficiary: string;
    quote: string;
  };
  coordinates: { x: number; y: number }; // Relative coordinates for interactive SVG map
}

export interface Project {
  id: string;
  title: string;
  nepaliTitle: string;
  slug: string;
  category: 'Dental Camps' | 'School Health' | 'Menstrual Hygiene' | 'Disaster Relief' | 'Awareness';
  status: 'Ongoing' | 'Completed' | 'Upcoming';
  location: string;
  date: string;
  beneficiariesCount: number;
  image: string;
  summary: string;
  description: string;
  keyOutcomes: string[];
  teamLead: string;
  partnerOrganizations: string[];
}

export interface FieldStory {
  id: string;
  title: string;
  location: string;
  narrative: string;
  author: string;
  role: string;
  image: string;
  date: string;
  impactHighlight: string;
}

export interface TransparencyReport {
  id: string;
  title: string;
  nepaliTitle: string;
  location: string;
  date: string;
  year: number;
  type: 'Annual Impact' | 'Medical Expedition Audit' | 'Financial Statement' | 'Research Paper';
  beneficiaries: number;
  summary: string;
  fileSize: string;
  downloadUrl?: string;
  executiveSummary: string[];
  financialBreakdown: {
    treatmentSupplies: number;
    logisticsAndTravel: number;
    patientEducationMaterials: number;
    administration: number;
  };
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Dental Camps' | 'School Outreach' | 'Menstrual Hygiene' | 'Disaster Relief' | 'Community Smiles';
  location: string;
  date: string;
  image: string;
  caption: string;
}

export interface Partner {
  id: string;
  name: string;
  tier: 'Principal Partner' | 'Healthcare Partner' | 'Institutional Supporter' | 'Logistics Partner';
  category: string;
  logoText: string;
  description: string;
  sinceYear: number;
}

export interface NewsArticle {
  id: string;
  title: string;
  nepaliTitle?: string;
  date: string;
  readTime: string;
  category: 'Press Release' | 'Field Dispatch' | 'Achievement' | 'Media Coverage';
  outlet?: string;
  summary: string;
  content: string;
  image: string;
}

export interface VolunteerFormData {
  fullName: string;
  email: string;
  phone: string;
  roleType: 'Dental Student' | 'Dental Surgeon' | 'Medical Student / Nurse' | 'General Volunteer / Logistics';
  institution: string;
  yearOfStudyOrExperience: string;
  districtPreference: string;
  skills: string[];
  availability: string;
  motivation: string;
}
