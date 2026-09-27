import React, { useState } from 'react';
import { TransparencyReport } from '../types';
import { TRANSPARENCY_REPORTS } from '../data/organizationData';
import {
  FileText,
  Download,
  Upload,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  MapPin,
  Users,
  Eye,
  Plus,
  X,
  Check,
} from 'lucide-react';

interface ReportsPageProps {
  onOpenReport: (report: TransparencyReport) => void;
}

export const ReportsPage: React.FC<ReportsPageProps> = ({ onOpenReport }) => {
  const [reportsList, setReportsList] = useState<TransparencyReport[]>(TRANSPARENCY_REPORTS);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadSuccessMsg, setUploadSuccessMsg] = useState(false);

  // Form states for PDF upload
  const [newTitle, setNewTitle] = useState('');
  const [newNepaliTitle, setNewNepaliTitle] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newBeneficiaries, setNewBeneficiaries] = useState('');
  const [newSummary, setNewSummary] = useState('');
  const [newType, setNewType] = useState<TransparencyReport['type']>('Medical Expedition Audit');
  const [fileName, setFileName] = useState('');

  const handleFileUploadSim = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleCreateReport = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newLocation || !newSummary) return;

    const newReport: TransparencyReport = {
      id: `report-${Date.now()}`,
      title: newTitle,
      nepaliTitle: newNepaliTitle || newTitle,
      location: newLocation,
      date: 'September 2026',
      year: 2026,
      type: newType,
      beneficiaries: parseInt(newBeneficiaries) || 1200,
      summary: newSummary,
      fileSize: fileName ? `${(Math.random() * 2 + 1).toFixed(1)} MB PDF` : '2.1 MB PDF',
      executiveSummary: [
        'Field-verified outcomes submitted by registered medical lead',
        'Direct community engagement documented with photographic evidence',
        'Clinical and educational supplies accounted for in local health post registers',
      ],
      financialBreakdown: {
        treatmentSupplies: 60,
        patientEducationMaterials: 20,
        logisticsAndTravel: 15,
        administration: 5,
      },
    };

    setReportsList([newReport, ...reportsList]);
    setShowUploadModal(false);
    setUploadSuccessMsg(true);
    setTimeout(() => setUploadSuccessMsg(false), 5000);

    // Reset
    setNewTitle('');
    setNewNepaliTitle('');
    setNewLocation('');
    setNewBeneficiaries('');
    setNewSummary('');
    setFileName('');
  };

  const handleDirectDownload = (report: TransparencyReport) => {
    const documentContent = `
=====================================================
MILES FOR SMILES NEPAL (मुस्कानको लागि पाइला नेपाल)
TRANSPARENCY & AUDIT DOCUMENT: ${report.title}
=====================================================
Document Reference: MFS-${report.year}-${report.id.toUpperCase()}
Location / District: ${report.location}
Date of Release: ${report.date}
Direct Beneficiaries Reached: ${report.beneficiaries.toLocaleString()} students & community members

EXECUTIVE SUMMARY:
${report.summary}

KEY AUDIT FINDINGS:
${report.executiveSummary.map((item, idx) => `${idx + 1}. ${item}`).join('\n')}

FINANCIAL ALLOCATION PERCENTAGES:
- Direct Treatment Supplies & Medicaments: ${report.financialBreakdown.treatmentSupplies}%
- Patient Education & Hygiene Kits: ${report.financialBreakdown.patientEducationMaterials}%
- Mountain Logistics, Transport & Freight: ${report.financialBreakdown.logisticsAndTravel}%
- Administration & Financial Compliance: ${report.financialBreakdown.administration}%

VERIFICATION:
Verified by Certified Independent Auditor & Nepal Social Welfare Council (SWC).
Zero executive salaries paid. 100% student volunteer led.
=====================================================
`;
    const blob = new Blob([documentContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${report.id}-report.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-[#16A396] uppercase tracking-widest bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Radical Transparency · पारदर्शी प्रतिवेदनहरू</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Reports & Financial Audits
        </h1>
        <p className="text-sm sm:text-base text-slate-600 font-nepali">
          हामी विश्वास र पारदर्शितामा विश्वास गर्छौं: प्रत्येक आर्थिक वर्षको स्वतन्त्र लेखापरीक्षण र प्रभाव प्रतिवेदन
        </p>
      </div>

      {/* Upload Success Alert */}
      {uploadSuccessMsg && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-3 text-emerald-800 text-xs sm:text-sm">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>Field report successfully uploaded and cataloged in public audit registry!</span>
        </div>
      )}

      {/* Financial Health Summary Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold text-[#38C8BA] uppercase tracking-wider">
              Audited Fiscal Year 2024/2025
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mt-1">Every Rupee Accounted For</h2>
            <p className="text-xs text-slate-400 mt-1 max-w-xl">
              Our books are audited annually by certified registered accountants and submitted to the District Administration Office Kathmandu and the Social Welfare Council of Nepal.
            </p>
          </div>

          <button
            onClick={() => setShowUploadModal(true)}
            className="px-4 py-2.5 bg-[#38C8BA] hover:bg-[#38bdf8] text-slate-950 font-bold text-xs rounded-xl transition-colors flex items-center gap-2 self-start md:self-auto cursor-pointer shadow-xs"
          >
            <Upload className="w-4 h-4" />
            <span>Upload Field Report (PDF)</span>
          </button>
        </div>

        {/* Visualized percentages */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800 text-xs">
          <div className="p-3 rounded-xl bg-slate-800/80">
            <span className="text-slate-400 block">Direct Healthcare</span>
            <span className="text-2xl font-black text-white mt-1 tabular-nums">89.4%</span>
            <span className="text-[11px] text-slate-400 mt-1 block">Dental materials, medications, kits</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-800/80">
            <span className="text-slate-400 block">Mountain Logistics</span>
            <span className="text-2xl font-black text-[#F4C542] mt-1 tabular-nums">6.2%</span>
            <span className="text-[11px] text-slate-400 mt-1 block">High-altitude transport & porters</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-800/80">
            <span className="text-slate-400 block">Administration</span>
            <span className="text-2xl font-black text-slate-300 mt-1 tabular-nums">4.4%</span>
            <span className="text-[11px] text-slate-400 mt-1 block">Legal compliance & audit fees</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-800/80">
            <span className="text-slate-400 block">Executive Salaries</span>
            <span className="text-2xl font-black text-emerald-400 mt-1 tabular-nums">0.0%</span>
            <span className="text-[11px] text-slate-400 mt-1 block">100% voluntary student leadership</span>
          </div>
        </div>
      </div>

      {/* Reports Directory List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Official Downloadable Publications</h2>
          <span className="text-xs text-slate-500">{reportsList.length} Documents Available</span>
        </div>

        <div className="space-y-4">
          {reportsList.map((report) => (
            <div
              key={report.id}
              className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-sm transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6"
            >
              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                  <span className="font-semibold text-[#16A396] uppercase tracking-wider">
                    {report.type}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {report.location}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {report.date}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-emerald-600" />
                    {report.beneficiaries.toLocaleString()} Beneficiaries
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {report.title}
                </h3>
                <p className="text-xs text-slate-500 font-nepali">{report.nepaliTitle}</p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                  {report.summary}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2.5 shrink-0 self-end lg:self-center">
                <button
                  onClick={() => onOpenReport(report)}
                  className="px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200/80 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-slate-500" />
                  <span>View Details</span>
                </button>

                <button
                  onClick={() => handleDirectDownload(report)}
                  className="px-4 py-2 text-xs font-bold text-white bg-[#16A396] hover:bg-[#0E786E] rounded-xl transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Report</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upload Field Report Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
            <button
              onClick={() => setShowUploadModal(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold text-[#16A396] uppercase tracking-wider">
              <Upload className="w-4 h-4" />
              <span>Medical & Field Lead Portal</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mt-1">Upload New Transparency Document</h3>
            <p className="text-xs text-slate-500 mt-1">
              Field coordinators can publish clinical audits and camp evaluation summaries.
            </p>

            <form onSubmit={handleCreateReport} className="mt-5 space-y-3.5 text-xs">
              <div>
                <label className="block font-medium text-slate-700 mb-1">Report Title (English) *</label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g., Sindhupalchok School Oral Screening Audit"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#16A396]"
                />
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">Title in Nepali</label>
                <input
                  type="text"
                  value={newNepaliTitle}
                  onChange={(e) => setNewNepaliTitle(e.target.value)}
                  placeholder="e.g., सिन्धुपाल्चोक विद्यालय मुख स्वास्थ्य प्रतिवेदन"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#16A396]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-medium text-slate-700 mb-1">Location / District *</label>
                  <input
                    type="text"
                    required
                    value={newLocation}
                    onChange={(e) => setNewLocation(e.target.value)}
                    placeholder="e.g., Sindhupalchok"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#16A396]"
                  />
                </div>
                <div>
                  <label className="block font-medium text-slate-700 mb-1">Beneficiaries Reached</label>
                  <input
                    type="number"
                    value={newBeneficiaries}
                    onChange={(e) => setNewBeneficiaries(e.target.value)}
                    placeholder="e.g., 850"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#16A396]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">Report Category</label>
                <select
                  value={newType}
                  onChange={(e) => setNewType(e.target.value as any)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#16A396]"
                >
                  <option value="Medical Expedition Audit">Medical Expedition Audit</option>
                  <option value="Annual Impact">Annual Impact</option>
                  <option value="Research Paper">Research Paper</option>
                  <option value="Financial Statement">Financial Statement</option>
                </select>
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">Executive Summary *</label>
                <textarea
                  required
                  rows={3}
                  value={newSummary}
                  onChange={(e) => setNewSummary(e.target.value)}
                  placeholder="Key activities conducted, cavity restorations completed, hygiene packs distributed..."
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#16A396]"
                />
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">Attach PDF Document</label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileUploadSim}
                  className="w-full text-xs text-slate-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-teal-50 file:text-[#16A396] hover:file:bg-sky-100"
                />
                {fileName && <p className="text-[11px] text-emerald-600 mt-1">Ready: {fileName}</p>}
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowUploadModal(false)}
                  className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-xl font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#16A396] hover:bg-[#0E786E] text-white font-bold rounded-xl shadow-xs"
                >
                  Publish Report
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
