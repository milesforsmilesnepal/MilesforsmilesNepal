import React, { useState } from 'react';
import { PageId } from '../types';
import { PARTNERS_DATA } from '../data/organizationData';
import { Building, Sparkles, CheckCircle2, ShieldCheck, Mail, Send, Check } from 'lucide-react';

interface SponsorsPageProps {
  onNavigate: (page: PageId) => void;
}

export const SponsorsPage: React.FC<SponsorsPageProps> = ({ onNavigate }) => {
  const [partnerForm, setPartnerForm] = useState({
    orgName: '',
    contactPerson: '',
    email: '',
    phone: '',
    partnershipType: 'Healthcare Equipment / Materials CSR',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setPartnerForm({
        orgName: '',
        contactPerson: '',
        email: '',
        phone: '',
        partnershipType: 'Healthcare Equipment / Materials CSR',
        message: '',
      });
    }, 6000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-[#16A396] uppercase tracking-widest bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
          <Building className="w-3.5 h-3.5 text-[#16A396]" />
          <span>Strategic Alliances · सहकार्य तथा साझेदारहरू</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Sponsors & Institutional Partners
        </h1>
        <p className="text-sm sm:text-base text-slate-600 font-nepali">
          दीर्घकालीन प्रभावका लागि राष्ट्रिय तथा अन्तर्राष्ट्रिय संघ-संस्थाहरूसँगको सहकार्य
        </p>
      </div>

      {/* Partners Showcase Grid */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Organizations Powering Our Remote Outreach
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            From clinical oversight bodies to multinational hygiene donors and local school networks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PARTNERS_DATA.map((partner) => (
            <div
              key={partner.id}
              className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-sm font-extrabold tracking-wider text-slate-800">
                    {partner.logoText}
                  </div>
                  <span className="text-[11px] font-semibold text-[#16A396] bg-teal-50 px-2.5 py-1 rounded-lg">
                    {partner.tier}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mt-4">{partner.name}</h3>
                <span className="text-xs text-slate-500 block">{partner.category}</span>
                <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">{partner.description}</p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span>Partner Since {partner.sinceYear}</span>
                <span className="text-emerald-700 font-medium">Verified MoU</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Partnership Tiers Overview */}
      <div className="bg-slate-50 p-6 sm:p-10 rounded-3xl border border-slate-200/80 space-y-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold text-[#16A396] uppercase tracking-wider">
            Collaborative Engagement
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">Partnership Frameworks</h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            How your company, dental clinic, or foundation can sponsor meaningful healthcare missions across Nepal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
            <span className="text-xs font-bold text-[#16A396] uppercase">Tier 01 · CSR Sponsor</span>
            <h4 className="text-base font-bold text-slate-900">Expedition Champion</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Full or partial sponsorship of a remote district dental camp (logistics, porters, and mobile equipment transport). Receive comprehensive post-expedition documentary video and verified impact metric audits.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
            <span className="text-xs font-bold text-emerald-600 uppercase">Tier 02 · In-Kind Materials</span>
            <h4 className="text-base font-bold text-slate-900">Clinical Supply Partner</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Donation of glass ionomer cements (GIC), composite resins, pediatric toothbrushes, sodium fluoride varnish, or portable autoclaves.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
            <span className="text-xs font-bold text-[#F4C542] uppercase">Tier 03 · Academic & Research</span>
            <h4 className="text-base font-bold text-slate-900">Institutional Partner</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Co-authoring high-altitude epidemiological research papers, student volunteer exchanges, and residency clinical outreach placements.
            </p>
          </div>
        </div>
      </div>

      {/* Partner Inquiry Form */}
      <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm max-w-3xl mx-auto">
        <div className="text-center space-y-2 mb-6">
          <h3 className="text-2xl font-bold text-slate-900">Become an Official Partner</h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Tell us about your organization and how we can collaborate to reach remote communities.
          </p>
        </div>

        {formSubmitted ? (
          <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-2">
            <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
            <h4 className="text-base font-bold text-slate-900">Partnership Proposal Received</h4>
            <p className="text-xs text-slate-600 max-w-md mx-auto">
              Our Executive Committee will review your submission and contact you within 48 business hours to arrange an exploratory meeting.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Organization / Brand Name *</label>
                <input
                  type="text"
                  required
                  value={partnerForm.orgName}
                  onChange={(e) => setPartnerForm({ ...partnerForm, orgName: e.target.value })}
                  placeholder="e.g., Kathmandu Dental Hospital / Global Fund"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#16A396]"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Contact Person & Title *</label>
                <input
                  type="text"
                  required
                  value={partnerForm.contactPerson}
                  onChange={(e) => setPartnerForm({ ...partnerForm, contactPerson: e.target.value })}
                  placeholder="e.g., Dr. Meera Rayamajhi, CSR Lead"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#16A396]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Official Email Address *</label>
                <input
                  type="email"
                  required
                  value={partnerForm.email}
                  onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                  placeholder="e.g., partner@organization.com"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#16A396]"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Phone / WhatsApp</label>
                <input
                  type="tel"
                  value={partnerForm.phone}
                  onChange={(e) => setPartnerForm({ ...partnerForm, phone: e.target.value })}
                  placeholder="e.g., +977 1 4400000"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#16A396]"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Partnership Interest Track</label>
              <select
                value={partnerForm.partnershipType}
                onChange={(e) => setPartnerForm({ ...partnerForm, partnershipType: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#16A396]"
              >
                <option value="Healthcare Equipment / Materials CSR">Healthcare Equipment / Materials CSR</option>
                <option value="Full Remote Dental Camp Sponsorship">Full Remote Dental Camp Sponsorship</option>
                <option value="Menstrual Health Kit Supply">Menstrual Health Kit Supply</option>
                <option value="Academic Collaboration / Student Exchange">Academic Collaboration / Student Exchange</option>
                <option value="International Grant / Foundation Partnership">International Grant / Foundation Partnership</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Collaboration Objectives</label>
              <textarea
                rows={3}
                value={partnerForm.message}
                onChange={(e) => setPartnerForm({ ...partnerForm, message: e.target.value })}
                placeholder="Share your goals, timeline, and how you would like to join hands with Miles for Smiles Nepal..."
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#16A396]"
              />
            </div>

            <div className="pt-2 text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-[#16A396] hover:bg-[#0E786E] text-white font-bold rounded-xl transition-colors shadow-xs flex items-center justify-center gap-2 mx-auto cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Partnership Proposal</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
