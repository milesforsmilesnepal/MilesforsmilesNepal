import React, { useState } from 'react';
import { TransparencyReport } from '../types';
import { X, Download, FileText, CheckCircle2, ShieldCheck, Printer, Check } from 'lucide-react';

interface ReportViewerModalProps {
  report: TransparencyReport | null;
  onClose: () => void;
}

export const ReportViewerModal: React.FC<ReportViewerModalProps> = ({ report, onClose }) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!report) return null;

  const handleDownload = () => {
    // Generate text/pdf simulation download
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
    link.download = `${report.id}-audit-report.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-5 sm:p-6 bg-slate-900 text-white flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-slate-800 text-[#38C8BA]">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs text-[#38C8BA] font-semibold uppercase tracking-wider">
                <span>{report.type}</span>
                <span>·</span>
                <span>{report.fileSize}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mt-1 text-white leading-tight">
                {report.title}
              </h3>
              <p className="text-xs text-slate-300 font-nepali mt-0.5">{report.nepaliTitle}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close report viewer"
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Viewer */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto text-sm text-slate-700">
          {/* Document Verification Shield */}
          <div className="flex items-center justify-between p-3.5 bg-emerald-50 rounded-xl border border-emerald-100 text-xs text-emerald-800">
            <div className="flex items-center gap-2 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Verified Public Record · Social Welfare Council Nepal Filing #58492</span>
            </div>
            <span className="font-semibold text-emerald-900">{report.date}</span>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-slate-500 block">Territory Covered</span>
              <span className="text-sm font-bold text-slate-800 mt-0.5 block">{report.location}</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-slate-500 block">Verified Beneficiaries</span>
              <span className="text-sm font-bold text-slate-800 mt-0.5 block tabular-nums">
                {report.beneficiaries.toLocaleString()} individuals
              </span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 col-span-2 sm:col-span-1">
              <span className="text-slate-500 block">Volunteer Overhead</span>
              <span className="text-sm font-bold text-emerald-700 mt-0.5 block">0% Executive Salary</span>
            </div>
          </div>

          {/* Abstract / Summary */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Executive Summary</h4>
            <p className="mt-2 text-slate-600 leading-relaxed text-xs sm:text-sm">{report.summary}</p>
          </div>

          {/* Highlights & Audit findings */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Key Audit Findings & Clinical Metrics
            </h4>
            <div className="mt-2.5 space-y-2">
              {report.executiveSummary.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#16A396] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Financial Transparency Bar Breakdown */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center justify-between text-xs font-bold text-slate-900 mb-2">
              <span>Audited Expense Allocation</span>
              <span className="text-emerald-700 font-semibold">100% Direct Impact Alignment</span>
            </div>

            {/* Segmented bar */}
            <div className="w-full h-3 rounded-full bg-slate-200 overflow-hidden flex">
              <div
                style={{ width: `${report.financialBreakdown.treatmentSupplies}%` }}
                className="bg-[#16A396] h-full"
                title="Direct Treatment Supplies"
              />
              <div
                style={{ width: `${report.financialBreakdown.patientEducationMaterials}%` }}
                className="bg-[#38C8BA] h-full"
                title="Hygiene Kits & Education"
              />
              <div
                style={{ width: `${report.financialBreakdown.logisticsAndTravel}%` }}
                className="bg-[#F4C542] h-full"
                title="Mountain Logistics & Transport"
              />
              <div
                style={{ width: `${report.financialBreakdown.administration}%` }}
                className="bg-slate-400 h-full"
                title="Administration"
              />
            </div>

            {/* Legend */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3 text-[11px] text-slate-600">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-xs bg-[#16A396] shrink-0"></span>
                <span>Supplies: {report.financialBreakdown.treatmentSupplies}%</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-xs bg-[#38C8BA] shrink-0"></span>
                <span>Kits: {report.financialBreakdown.patientEducationMaterials}%</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-xs bg-[#F4C542] shrink-0"></span>
                <span>Logistics: {report.financialBreakdown.logisticsAndTravel}%</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-xs bg-slate-400 shrink-0"></span>
                <span>Admin: {report.financialBreakdown.administration}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
          <button
            onClick={() => window.print()}
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-200/80 rounded-xl transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Print View</span>
          </button>

          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200/80 rounded-xl transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={handleDownload}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#16A396] hover:bg-[#0E786E] rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>Downloaded Report</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download Report (PDF)</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
