import React, { useState } from 'react';
import { PageId } from '../types';
import { Heart, Sparkles, Mail, MapPin, Phone, ShieldCheck, ArrowRight, Check } from 'lucide-react';
import { MFSNLogo } from './MFSNLogo';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSuccess(true);
      setTimeout(() => setNewsletterSuccess(false), 5000);
      setNewsletterEmail('');
    }
  };

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Upper Newsletter & Mission Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center pb-12 border-b border-slate-800">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#38C8BA] uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#F4C542]" />
              <span>Youth-Led Healthcare Movement</span>
              <span>·</span>
              <span className="font-nepali">पहुँच बाहिरका बस्तीसम्म</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2 tracking-tight">
              Reach the Unreached · हर नेपालीको स्वस्थ मुस्कान
            </h3>
            <p className="text-slate-400 text-sm mt-2 max-w-2xl leading-relaxed">
              Founded by visionary dental students in Nepal, Miles for Smiles (MFSN) mobilizes youth medical volunteers, delivers free dental care, restores cavities, and eliminates oral disease in remote Himalayan villages.
            </p>
          </div>

          <div className="lg:col-span-5 bg-slate-800/80 p-5 rounded-2xl border border-slate-700/60">
            <h4 className="text-sm font-semibold text-white">Subscribe to Field Dispatches</h4>
            <p className="text-xs text-slate-400 mt-1">
              Quarterly transparency reports, expedition stories, and volunteer calls.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="mt-3 flex items-center gap-2">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#16A396]"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#16A396] hover:bg-[#0E786E] text-white text-xs font-semibold rounded-xl transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer"
              >
                {newsletterSuccess ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Subscribed</span>
                  </>
                ) : (
                  <>
                    <span>Join</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Core Institutional Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-12 border-b border-slate-800 text-xs">
          {/* Col 1: Identity & Legal */}
          <div className="col-span-2 lg:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <MFSNLogo variant="badge" size="md" />
              <div>
                <span className="text-base font-bold text-white tracking-tight block">
                  Miles for Smiles Nepal (MFSN)
                </span>
                <span className="text-[11px] text-teal-400 font-nepali">
                  मुस्कानको लागि पाइला नेपाल · Estd. 2024
                </span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Registered youth-led nonprofit organization recognized under the Social Welfare Council of Nepal and affiliated with leading dental institutions.
            </p>
            <div className="pt-1 flex items-center gap-2 text-slate-400 text-[11px]">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Registered NGO Reg No: 58492/080 · SWC Affiliation: 53120</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-[11px]">
              <MapPin className="w-4 h-4 text-[#38C8BA] shrink-0" />
              <span>Central Secretariat: Maharajgunj, Kathmandu, Nepal</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-[11px]">
              <Phone className="w-4 h-4 text-[#38C8BA] shrink-0" />
              <span>+977 1 4543209 · +977 9841000000</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-[11px]">
              <Mail className="w-4 h-4 text-[#38C8BA] shrink-0" />
              <span>contact@milesforsmilesnepal.org</span>
            </div>
          </div>

          {/* Col 2: Organization */}
          <div className="space-y-2.5">
            <h5 className="font-semibold text-white tracking-wider uppercase text-[11px]">Organization</h5>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors cursor-pointer">
                  Our Mission & Story
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('projects')} className="hover:text-white transition-colors cursor-pointer">
                  Field Expeditions
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('impact-map')} className="hover:text-white transition-colors cursor-pointer">
                  Interactive Nepal Map
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('reports')} className="hover:text-white transition-colors cursor-pointer">
                  Financial Audits & PDFs
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('sponsors')} className="hover:text-white transition-colors cursor-pointer">
                  Institutional Partners
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Programs & Activities */}
          <div className="space-y-2.5">
            <h5 className="font-semibold text-white tracking-wider uppercase text-[11px]">Core Programs</h5>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNav('projects')} className="hover:text-white transition-colors cursor-pointer">
                  Free Dental Camps
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('projects')} className="hover:text-white transition-colors cursor-pointer">
                  School Health & Fluoride
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('projects')} className="hover:text-white transition-colors cursor-pointer">
                  Menstrual Hygiene Dignity
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('projects')} className="hover:text-white transition-colors cursor-pointer">
                  Monsoon Flood Relief
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('gallery')} className="hover:text-white transition-colors cursor-pointer">
                  Photo Documentation
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Take Action */}
          <div className="space-y-2.5">
            <h5 className="font-semibold text-white tracking-wider uppercase text-[11px]">Get Involved</h5>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNav('volunteer')} className="hover:text-white transition-colors cursor-pointer">
                  Volunteer as Dental Student
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('donate')} className="hover:text-white transition-colors cursor-pointer">
                  Donate via eSewa & Khalti
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('donate')} className="hover:text-white transition-colors cursor-pointer">
                  Direct Bank Wire (NPR / USD)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('sponsors')} className="hover:text-white transition-colors cursor-pointer">
                  Corporate CSR Partnerships
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Request Camp for Village
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Nepali Pride */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Miles for Smiles Nepal (मुस्कानको लागि पाइला). All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              Made with <Heart className="w-3 h-3 text-rose-500 fill-current" /> by Dental Students of Nepal
            </span>
            <span className="hidden sm:inline">·</span>
            <span className="font-nepali text-slate-400">मुस्कान हरेक बालबालिकाको अधिकार</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
