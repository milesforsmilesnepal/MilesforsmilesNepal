import React, { useState } from 'react';
import { VolunteerFormData } from '../types';
import {
  Users,
  CheckCircle2,
  Download,
  Sparkles,
  Heart,
  FileCheck,
  Send,
  HelpCircle,
} from 'lucide-react';

export const VolunteerPage: React.FC = () => {
  const [formData, setFormData] = useState<VolunteerFormData>({
    fullName: '',
    email: '',
    phone: '',
    roleType: 'Dental Student',
    institution: '',
    yearOfStudyOrExperience: '3rd Year BDS',
    districtPreference: 'Open to Any Remote District',
    skills: ['Atraumatic Restorative Treatment (ART)', 'Oral Hygiene Instruction'],
    availability: '1-Week High Altitude Expedition',
    motivation: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [appRefId, setAppRefId] = useState('');

  const availableSkills = [
    'Atraumatic Restorative Treatment (ART)',
    'Pediatric Dental Screening & Fluoride Polish',
    'Oral Hygiene Instruction & Classroom Teaching',
    'Menstrual Health & Dignity Kit Facilitation',
    'Mountain Trekking & Expedition Logistics',
    'Photography & Documentary Videography',
    'Local Language Translation (Bhojpuri / Maithili / Tamang)',
  ];

  const handleSkillToggle = (skill: string) => {
    if (formData.skills.includes(skill)) {
      setFormData({
        ...formData,
        skills: formData.skills.filter((s) => s !== skill),
      });
    } else {
      setFormData({
        ...formData,
        skills: [...formData.skills, skill],
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRef = `MFS-VOL-${Math.floor(100000 + Math.random() * 900000)}`;
    setAppRefId(generatedRef);
    setSubmitted(true);
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  const handleDownloadHandbook = () => {
    const handbookText = `
=====================================================
MILES FOR SMILES NEPAL (मुस्कानको लागि पाइला नेपाल)
CLINICAL & ETHICAL VOLUNTEER HANDBOOK 2026
=====================================================
Welcome to the youth movement reaching the unreached!

1. CORE VALUES:
- Respect for local community traditions and languages.
- Safe, sterile atraumatic restorative treatments (ART).
- Empathy, active listening, and gentle pediatric care.

2. LOGISTICS CHECKLIST FOR HIGH-ALTITUDE EXPEDITIONS:
- High-altitude thermal wear and sturdy trekking boots.
- Personal water bottle with purification tablets.
- Headlamp with extra batteries for evening triage.
- Scrub suits and certified personal protective equipment.

3. REPORTING CONTACT:
Secretariat: Maharajgunj, Kathmandu, Nepal
Email: volunteer@milesforsmilesnepal.org
=====================================================
`;
    const blob = new Blob([handbookText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Miles-for-Smiles-Volunteer-Handbook.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-[#16A396] uppercase tracking-widest bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
          <Users className="w-3.5 h-3.5 text-[#16A396]" />
          <span>Join the Fellowship · स्वयंसेवक आवेदन</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Volunteer With Us
        </h1>
        <p className="text-sm sm:text-base text-slate-600 font-nepali">
          कक्षाकोठाबाट बाहिर निस्केर गाउँका बालबालिकाको मुस्कान फेर्ने यात्रामा सहभागी हुनुहोस्।
        </p>
      </div>

      {submitted ? (
        /* Submission Success Screen */
        <div className="bg-white rounded-3xl border border-emerald-200 p-8 sm:p-12 shadow-sm text-center max-w-2xl mx-auto space-y-5">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Application Confirmed
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Namaste, {formData.fullName}!
            </h2>
            <p className="text-sm text-slate-600">
              Thank you for stepping forward to serve. Your volunteer registration has been successfully cataloged.
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-700 inline-block text-left w-full max-w-md">
            <div className="flex justify-between py-1 border-b border-slate-200/60">
              <span className="text-slate-500">Application Reference:</span>
              <strong className="text-[#16A396] font-mono">{appRefId}</strong>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-200/60">
              <span className="text-slate-500">Applicant Category:</span>
              <span className="font-semibold">{formData.roleType}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-200/60">
              <span className="text-slate-500">Preferred District:</span>
              <span className="font-semibold">{formData.districtPreference}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-500">Contact Email:</span>
              <span className="font-semibold">{formData.email}</span>
            </div>
          </div>

          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Our student volunteer coordinators review applications every Friday. You will receive an invitation to our pre-camp orientation call via WhatsApp and email.
          </p>

          <div className="pt-2 flex flex-wrap justify-center items-center gap-3">
            <button
              onClick={handleDownloadHandbook}
              className="px-5 py-2.5 bg-[#16A396] hover:bg-[#0E786E] text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Volunteer Guidebook</span>
            </button>
            <button
              onClick={() => setSubmitted(false)}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-colors"
            >
              Submit Another Application
            </button>
          </div>
        </div>
      ) : (
        /* Volunteer Registration Form */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Form */}
          <div className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xs">
            <form onSubmit={handleSubmit} className="space-y-6 text-xs sm:text-sm">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-lg font-bold text-slate-900">Personal & Academic Profile</h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Open to all dental, medical, nursing students, and humanitarian volunteers.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Full Legal Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g., Aayush KC"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#16A396]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g., aayush@example.com"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#16A396]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g., +977 9841000000"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#16A396]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Your Role *</label>
                  <select
                    value={formData.roleType}
                    onChange={(e) => setFormData({ ...formData, roleType: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#16A396]"
                  >
                    <option value="Dental Student">Dental Student (BDS)</option>
                    <option value="Dental Surgeon">Registered Dental Surgeon (BDS/MDS)</option>
                    <option value="Medical Student / Nurse">Medical Student / Nursing Student</option>
                    <option value="General Volunteer / Logistics">General Volunteer / Logistics Lead</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    College / University / Affiliation *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    placeholder="e.g., IOM Maharajgunj / KU Dental School"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#16A396]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Year of Study / Status</label>
                  <input
                    type="text"
                    value={formData.yearOfStudyOrExperience}
                    onChange={(e) =>
                      setFormData({ ...formData, yearOfStudyOrExperience: e.target.value })
                    }
                    placeholder="e.g., Final Year BDS / Intern / Practicing"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#16A396]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    District Preference
                  </label>
                  <select
                    value={formData.districtPreference}
                    onChange={(e) => setFormData({ ...formData, districtPreference: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#16A396]"
                  >
                    <option value="Open to Any Remote District">Open to Any Remote District</option>
                    <option value="Karnali (Jumla / Humla)">Karnali (Jumla / Humla)</option>
                    <option value="Bagmati (Sindhupalchok / Chitwan)">Bagmati (Sindhupalchok / Chitwan)</option>
                    <option value="Koshi (Solukhumbu / Morang)">Koshi (Solukhumbu / Morang)</option>
                    <option value="Kathmandu Valley Day Camps">Kathmandu Valley Weekend Camps</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Availability Window</label>
                  <select
                    value={formData.availability}
                    onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#16A396]"
                  >
                    <option value="1-Week High Altitude Expedition">1-Week High Altitude Expedition</option>
                    <option value="Weekend Day Camps">Weekend Day Camps</option>
                    <option value="2-Week Comprehensive Remote Camp">2-Week Comprehensive Remote Camp</option>
                    <option value="Flexible / On Call">Flexible / On Call for Disasters</option>
                  </select>
                </div>
              </div>

              {/* Skills Checklist */}
              <div>
                <label className="block font-semibold text-slate-700 mb-2">
                  Skills & Areas You Want to Contribute (Select all that apply)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {availableSkills.map((skill) => (
                    <label
                      key={skill}
                      className={`flex items-center gap-2.5 p-2.5 rounded-xl border cursor-pointer transition-colors ${
                        formData.skills.includes(skill)
                          ? 'bg-teal-50 border-[#16A396] text-[#16A396] font-medium'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.skills.includes(skill)}
                        onChange={() => handleSkillToggle(skill)}
                        className="rounded-sm text-[#16A396] focus:ring-0"
                      />
                      <span>{skill}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Motivation */}
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Why do you want to join Miles for Smiles Nepal? *
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.motivation}
                  onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                  placeholder="Tell us what motivates you to reach remote communities and what you hope to learn or contribute..."
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#16A396]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-[#16A396] hover:bg-[#0E786E] text-white font-bold rounded-xl transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Volunteer Application</span>
                </button>
              </div>
            </form>
          </div>

          {/* Right Sidebar: Handbook & FAQ */}
          <div className="lg:col-span-4 space-y-6">
            {/* Guidebook Card */}
            <div className="bg-slate-900 text-white p-6 rounded-3xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-slate-800 text-[#38C8BA] flex items-center justify-center">
                <FileCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Volunteer Clinical Handbook</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Download our standardized protocol for Atraumatic Restorative Treatment (ART), infection control in field camps, and community engagement.
              </p>
              <button
                onClick={handleDownloadHandbook}
                className="w-full py-2.5 bg-[#38C8BA] hover:bg-[#38bdf8] text-slate-950 font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5"
              >
                <Download className="w-4 h-4" />
                <span>Download Handbook (PDF)</span>
              </button>
            </div>

            {/* Testimonial */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-3">
              <div className="flex items-center gap-1 text-[#F4C542]">
                {'★'.repeat(5)}
              </div>
              <p className="text-xs text-slate-700 italic leading-relaxed">
                "Volunteering with Miles for Smiles in Jumla was the most transformative month of my dental education. In college, we work in air-conditioned operatories; in the mountains, you learn how to heal with grit, compassion, and true human connection."
              </p>
              <div className="pt-2 border-t border-slate-100 text-xs">
                <span className="font-bold text-slate-900 block">Dr. Ritesh Sharma</span>
                <span className="text-slate-500 text-[11px]">BDS Graduate, 2024 Karnali Expedition</span>
              </div>
            </div>

            {/* FAQ Brief */}
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200/80 space-y-3 text-xs">
              <div className="flex items-center gap-1.5 font-bold text-slate-900">
                <HelpCircle className="w-4 h-4 text-[#16A396]" />
                <span>Volunteer FAQ</span>
              </div>
              <div>
                <strong className="block text-slate-800">Do I need prior camp experience?</strong>
                <p className="text-slate-600 mt-0.5">
                  No. We provide comprehensive hands-on training on ART and field sterilization before departure.
                </p>
              </div>
              <div>
                <strong className="block text-slate-800">Are lodging and food covered?</strong>
                <p className="text-slate-600 mt-0.5">
                  Yes! All basic lodging, food, and ground transport for remote expeditions are covered by Miles for Smiles.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
