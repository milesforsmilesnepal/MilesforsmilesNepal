import React, { useState } from 'react';
import { PageId } from '../types';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building,
  School,
  Sparkles,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'general' | 'camp-request'>('general');

  // General contact form state
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Camp request form state
  const [campData, setCampData] = useState({
    requesterName: '',
    designation: 'School Principal',
    organization: '',
    district: '',
    municipalityWard: '',
    estimatedStudents: '',
    nearestRoadAccess: '',
    urgencyReason: '',
  });
  const [campSubmitted, setCampSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setContactData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: '',
      });
    }, 6000);
  };

  const handleCampSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCampSubmitted(true);
    setTimeout(() => {
      setCampSubmitted(false);
      setCampData({
        requesterName: '',
        designation: 'School Principal',
        organization: '',
        district: '',
        municipalityWard: '',
        estimatedStudents: '',
        nearestRoadAccess: '',
        urgencyReason: '',
      });
    }, 6000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-[#16A396] uppercase tracking-widest bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
          <Mail className="w-3.5 h-3.5 text-[#16A396]" />
          <span>Connect With Us · सम्पर्क</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Get in Touch
        </h1>
        <p className="text-sm sm:text-base text-slate-600 font-nepali">
          मुस्कानको लागि पाइला नेपालको केन्द्रीय सचिवालय, काठमाडौं वा सिधै गाउँमा शिविर अनुरोध गर्नुहोस्।
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Contact Details & Secretariat Information */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl space-y-6 shadow-md">
            <div>
              <span className="text-xs font-bold text-[#38C8BA] uppercase tracking-wider">
                Central Secretariat
              </span>
              <h3 className="text-xl font-bold text-white mt-1">Miles for Smiles Nepal</h3>
              <p className="text-xs text-slate-300 font-nepali mt-0.5">मुस्कानको लागि पाइला नेपाल</p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#38C8BA] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Headquarters:</strong>
                  <span className="text-slate-300">
                    Maharajgunj (near TU Teaching Hospital), Kathmandu, Nepal
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#38C8BA] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Direct Telephone:</strong>
                  <span className="text-slate-300">+977 1 4543209</span>
                  <span className="block text-slate-400 text-xs">Mobile / WhatsApp: +977 9841000000</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#38C8BA] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Electronic Correspondence:</strong>
                  <span className="text-slate-300">contact@milesforsmilesnepal.org</span>
                  <span className="block text-slate-400 text-xs">volunteer@milesforsmilesnepal.org</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#38C8BA] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Secretariat Office Hours:</strong>
                  <span className="text-slate-300">Sunday - Friday: 10:00 AM - 5:00 PM NPT</span>
                  <span className="block text-slate-400 text-xs">Emergency Field Response: 24/7 on call</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 text-xs text-slate-400">
              Registration No: <strong>58492/080</strong> · Social Welfare Council Affiliation: <strong>53120</strong>
            </div>
          </div>

          {/* Quick FAQ / Camp Notice */}
          <div className="bg-teal-50 p-6 rounded-3xl border border-teal-100 space-y-2 text-xs">
            <div className="flex items-center gap-1.5 font-bold text-[#16A396]">
              <Sparkles className="w-4 h-4 text-[#F4C542]" />
              <span>Camp Planning Timeline</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              We schedule high-altitude expeditions two to three months in advance to align volunteer doctors, local government permissions, and air/porter transport.
            </p>
          </div>
        </div>

        {/* Right Column: Interactive Tabs for General Message or Camp Request */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xs">
          {/* Tab buttons */}
          <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-2xl mb-6">
            <button
              onClick={() => setActiveTab('general')}
              className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                activeTab === 'general'
                  ? 'bg-white text-[#16A396] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              General Message
            </button>
            <button
              onClick={() => setActiveTab('camp-request')}
              className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                activeTab === 'camp-request'
                  ? 'bg-[#16A396] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <School className="w-3.5 h-3.5" />
              <span>Request Dental Camp for Your Village</span>
            </button>
          </div>

          {activeTab === 'general' ? (
            contactSubmitted ? (
              <div className="p-8 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold text-slate-900">Message Delivered</h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Thank you for reaching out. A representative from our communications team will respond to your email within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={contactData.name}
                      onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                      placeholder="e.g., Suman Thapa"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#16A396]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={contactData.email}
                      onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                      placeholder="e.g., suman@example.com"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#16A396]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      value={contactData.phone}
                      onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                      placeholder="e.g., +977 9841000000"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#16A396]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Subject</label>
                    <select
                      value={contactData.subject}
                      onChange={(e) => setContactData({ ...contactData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#16A396]"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Media & Press Interview">Media & Press Interview</option>
                      <option value="Donation & Receipt Confirmation">Donation & Receipt Confirmation</option>
                      <option value="Volunteer Query">Volunteer Query</option>
                      <option value="Academic Collaboration">Academic Collaboration</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Your Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={contactData.message}
                    onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                    placeholder="How can we assist you or collaborate?"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#16A396]"
                  />
                </div>

                <button
                  type="submit"
                  className="px-8 py-3 bg-[#16A396] hover:bg-[#0E786E] text-white font-bold rounded-xl transition-colors shadow-xs flex items-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )
          ) : campSubmitted ? (
            <div className="p-8 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-3">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
              <h4 className="text-base font-bold text-slate-900">Camp Request Logged</h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Your village/school camp request has been routed to our Expeditions Director. We will evaluate geographical access and reach out to local health representatives.
              </p>
            </div>
          ) : (
            <form onSubmit={handleCampSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="p-3 bg-teal-50 rounded-xl border border-teal-100 text-xs text-[#16A396]">
                <strong>For Community Leaders:</strong> Use this form if you are a rural school headmaster, ward official, or health post in-charge in an underserved district.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Requester Full Name *</label>
                  <input
                    type="text"
                    required
                    value={campData.requesterName}
                    onChange={(e) => setCampData({ ...campData, requesterName: e.target.value })}
                    placeholder="e.g., Kalsang Gurung"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#16A396]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Your Role / Designation *</label>
                  <select
                    value={campData.designation}
                    onChange={(e) => setCampData({ ...campData, designation: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#16A396]"
                  >
                    <option value="School Principal">School Headmaster / Principal</option>
                    <option value="Ward Chairperson">Ward Chairperson / Local Official</option>
                    <option value="Health Post In-Charge">Health Post In-Charge / Nurse</option>
                    <option value="Youth Club Leader">Community Youth Club Leader</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">District *</label>
                  <input
                    type="text"
                    required
                    value={campData.district}
                    onChange={(e) => setCampData({ ...campData, district: e.target.value })}
                    placeholder="e.g., Jumla, Ramechhap, Kalikot"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#16A396]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Municipality & Ward</label>
                  <input
                    type="text"
                    value={campData.municipalityWard}
                    onChange={(e) => setCampData({ ...campData, municipalityWard: e.target.value })}
                    placeholder="e.g., Tatopani Rural Municipality Ward 4"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#16A396]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Estimated Students / People</label>
                  <input
                    type="number"
                    value={campData.estimatedStudents}
                    onChange={(e) => setCampData({ ...campData, estimatedStudents: e.target.value })}
                    placeholder="e.g., 350"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#16A396]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Nearest Road / Walk Time</label>
                  <input
                    type="text"
                    value={campData.nearestRoadAccess}
                    onChange={(e) => setCampData({ ...campData, nearestRoadAccess: e.target.value })}
                    placeholder="e.g., 4 hours trek from dirt road end"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#16A396]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Oral Health Situation & Need *</label>
                <textarea
                  required
                  rows={3}
                  value={campData.urgencyReason}
                  onChange={(e) => setCampData({ ...campData, urgencyReason: e.target.value })}
                  placeholder="Describe the current dental pain, lack of toothbrushes, or health challenges in your community..."
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#16A396]"
                />
              </div>

              <button
                type="submit"
                className="px-8 py-3 bg-[#16A396] hover:bg-[#0E786E] text-white font-bold rounded-xl transition-colors shadow-xs flex items-center gap-2 cursor-pointer"
              >
                <School className="w-4 h-4" />
                <span>Submit Field Camp Request</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
