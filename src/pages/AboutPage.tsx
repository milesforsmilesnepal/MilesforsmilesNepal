import React from 'react';
import { PageId } from '../types';
import { TEAM_MEMBERS, HERO_IMAGE, KARNALI_IMAGE, MFSN_LOGO_IMAGE } from '../data/organizationData';
import { MFSNLogo, MFSN_BRAND_COLOR } from '../components/MFSNLogo';
import { ShieldCheck, Heart, Users, Sparkles, CheckCircle2, ArrowRight, Mountain, Smile, Compass, Palette } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* 1. Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-[#16A396] uppercase tracking-widest bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
          <Sparkles className="w-3.5 h-3.5 text-[#F4C542]" />
          <span>Our Identity & Purpose · हाम्रो परिचय</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
          About Miles for Smiles Nepal
        </h1>
        <p className="text-lg text-slate-600 font-nepali">
          मुस्कानको लागि पाइला नेपाल: स्वास्थ्य सेवाबाट वञ्चित समुदायसम्म पुग्ने युवा दन्त विद्यार्थीहरूको महाअभियान।
        </p>
      </div>

      {/* 2. Founding Story Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-5">
          <div className="text-xs font-bold text-[#16A396] uppercase tracking-wider">
            The Origin Story
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
            Why Dental Students Decided to Walk Where Roads End
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            In Nepal, over <strong>90% of certified dental professionals</strong> are clustered in Kathmandu and major urban centers. Meanwhile, more than 75% of the rural population has never visited a dentist. In districts like Humla and Jumla, a single untreated tooth cavity often leads to chronic absenteeism, facial cellulitis, severe infection, and agonizing pain that persists for years.
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            In 2022, a tight-knit cohort of undergraduate dental students at Tribhuvan University Institute of Medicine (IOM) decided they could not wait until graduation to act. Pooling pocket money, soliciting donated materials from senior faculty, and packing portable handpieces into backpacks, they embarked on their first camp in the hills of Helambu.
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            Today, <strong>Miles for Smiles Nepal (मुस्कानको लागि पाइला)</strong> is a legally recognized, youth-led nongovernmental organization that has mobilized over 400 dental and medical volunteers across 14 remote districts.
          </p>
          <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-slate-700">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              100% Student-Driven
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Zero Executive Salaries
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Clinical Integrity First
            </span>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 aspect-4/3">
            <img
              src={KARNALI_IMAGE}
              alt="Dental students volunteering in remote Nepal"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-3 text-center text-xs text-slate-500 italic">
            Volunteers treating school children at a temporary field clinic in Upper Karnali.
          </div>
        </div>
      </div>

      {/* 3. Mission, Vision, and Values Triad */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#16A396] flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-[#16A396]" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">Our Vision</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            A Nepal where no child spends a sleepless night from dental pain, and where every citizen, regardless of geography or economic status, has access to quality oral healthcare.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#F4C542] flex items-center justify-center">
            <Heart className="w-5 h-5 text-amber-600" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">Our Mission</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            To reach underserved mountain and rural communities with free dental treatments, preventive fluoride programs, comprehensive school oral education, and adolescent menstrual dignity.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">Uncompromising Ethics</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            We adhere strictly to international atraumatic restorative treatment standards, zero waste, ethical consent, and 100% transparent public accounting.
          </p>
        </div>
      </div>

      {/* Official Brand Identity & Emblem Showcase */}
      <div className="bg-gradient-to-br from-teal-50/80 via-white to-sky-50/50 p-8 sm:p-10 rounded-3xl border border-teal-200/60 shadow-xs space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 flex flex-col items-center text-center">
            <div className="relative group p-3 bg-white rounded-3xl shadow-md border border-teal-100 max-w-xs w-full">
              <div className="w-full aspect-square rounded-2xl overflow-hidden bg-[#16A396] flex items-center justify-center relative shadow-inner">
                <img
                  src={MFSN_LOGO_IMAGE}
                  alt="Miles for Smiles Nepal (MFSN) Main Brand Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-3 text-center">
                <span className="text-xs font-bold text-slate-800 tracking-wide uppercase block">
                  Official Registered Emblem
                </span>
                <span className="text-[11px] text-teal-700 font-semibold font-nepali">
                  मुस्कानको लागि पाइला नेपाल · Estd. 2024
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#16A396] uppercase tracking-wider bg-teal-100/60 px-3 py-1 rounded-full">
              <Palette className="w-3.5 h-3.5" />
              <span>Brand Identity & Design Philosophy</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              The Symbolism of the MFSN Logo
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Designed to embody the spirit of student dental volunteers scaling steep Himalayan ridges to heal pain, our logo represents our unwavering commitment to community health and compassion.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white rounded-2xl border border-slate-200/80 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <Mountain className="w-4 h-4 text-[#16A396]" />
                  <span>Himalayan Ridges ('M')</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The sharp mountain cutouts in the initial 'M' signify Nepal's rugged geography and our pledge to walk where motorable roads end.
                </p>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-slate-200/80 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <Smile className="w-4 h-4 text-[#16A396]" />
                  <span>Molar & Smiling Arc ('S')</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The tooth wave embedded in the 'S' and the smiling arc reflect restorative dental care and the enduring happiness of every child treated.
                </p>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-slate-200/80 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#16A396]" />
                  <span>Teal Turquoise (#16A396)</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our primary brand color harmonizes healthcare hygiene, mountain glacial rivers, fresh vitality, and youthful optimism.
                </p>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-slate-200/80 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <Compass className="w-4 h-4 text-[#16A396]" />
                  <span>"Reaching the Unreached"</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our driving operational principle: leaving no remote village, school, or community behind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Leadership & Volunteer Committee */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-[#16A396] uppercase tracking-widest">
            Youth Leadership Team
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Meet the Dental Advocates Behind the Mission
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Dental surgeons, student leads, and logistics specialists leading every mountain expedition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM_MEMBERS.map((member, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#16A396] to-[#38C8BA] text-white flex items-center justify-center text-lg font-bold mb-4 shadow-xs">
                  {member.name.split(' ').slice(-1)[0][0]}
                </div>
                <h3 className="text-base font-bold text-slate-900">{member.name}</h3>
                <span className="text-xs text-slate-500 font-nepali block">{member.nepaliName}</span>
                <span className="text-xs font-semibold text-[#16A396] block mt-1">{member.role}</span>
                <span className="text-[11px] text-slate-500 block mb-3">{member.subtext}</span>
                <p className="text-xs text-slate-600 leading-relaxed">{member.bio}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
                <span>Kathmandu, Nepal</span>
                <span className="text-emerald-700 font-medium">Active Field Lead</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Institutional Governance & Government Registration */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-6">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#38C8BA] uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Official NGO Certification & Audit Governance</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Trust, Compliance & Full Financial Transparency
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Miles for Smiles Nepal operates under the rigorous oversight of the Social Welfare Council of Nepal (Affiliation No: 53120) and is officially registered with the District Administration Office Kathmandu (Registration No: 58492/080). Our accounts are audited annually by registered chartered accountants and made accessible to every supporter.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800 text-xs">
          <div>
            <div className="text-slate-400">PAN Registration</div>
            <div className="text-sm font-bold text-white mt-0.5">618492019 (Inland Revenue Dept)</div>
          </div>
          <div>
            <div className="text-slate-400">Executive Compensation</div>
            <div className="text-sm font-bold text-emerald-400 mt-0.5">0.0% (Pure Volunteer Movement)</div>
          </div>
          <div>
            <div className="text-slate-400">Public Audit Reports</div>
            <button
              onClick={() => onNavigate('reports')}
              className="text-sm font-bold text-[#38C8BA] hover:underline mt-0.5 block cursor-pointer"
            >
              Download Financial Filings →
            </button>
          </div>
        </div>
      </div>

      {/* 6. Action Callout */}
      <div className="p-8 bg-teal-50 rounded-3xl border border-teal-100 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900">Want to partner with us or sponsor an expedition?</h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            We collaborate with dental colleges, community hospitals, Rotary clubs, and diaspora donors worldwide.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onNavigate('sponsors')}
            className="px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-800 text-xs font-semibold rounded-xl border border-slate-300 transition-colors"
          >
            Partner With Us
          </button>
          <button
            onClick={() => onNavigate('volunteer')}
            className="px-5 py-2.5 bg-[#16A396] hover:bg-[#0E786E] text-white text-xs font-semibold rounded-xl transition-colors shadow-xs"
          >
            Apply as Volunteer
          </button>
        </div>
      </div>
    </div>
  );
};
