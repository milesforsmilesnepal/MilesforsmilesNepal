import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { INITIAL_REPORTS, TransparencyReport } from '../data/boltData';
import { PageHeader } from '../components/PageHeader';
import { SectionHeader } from '../components/SectionHeader';
import {
  FileText,
  Download,
  Calendar,
  ShieldCheck,
  FolderOpen,
  PieChart,
  Award,
  BookOpen,
} from 'lucide-react';

const REPORT_TABS = [
  { key: 'all', label: 'All Reports', icon: FolderOpen },
  { key: 'annual', label: 'Annual Reports', icon: FileText },
  { key: 'project', label: 'Project Reports', icon: BookOpen },
  { key: 'impact', label: 'Impact Reports', icon: Award },
  { key: 'financial', label: 'Financial Summaries', icon: PieChart },
];

export const ReportsPage: React.FC = () => {
  const [reports, setReports] = useState<TransparencyReport[]>(INITIAL_REPORTS);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    supabase
      .from('reports')
      .select('*')
      .order('display_order', { ascending: true })
      .then(({ data }) => {
        if (data && data.length > 0) {
          setReports(data);
        }
      });
  }, []);

  const filtered =
    activeTab === 'all'
      ? reports
      : reports.filter((r) => r.type === activeTab);

  return (
    <div>
      <PageHeader
        devanagariTitle="प्रतिवेदन तथा पारदर्शिता"
        title="Reports & Transparency"
        subtitle="We believe in complete transparency. Explore our reports, impact data, and financial summaries to see exactly how your support creates lasting change."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Reports' }]}
        bgImage="https://images.pexels.com/photos/2095948/pexels-photo-2095948.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      {/* Transparency Pledge Card */}
      <section className="section-padding">
        <div className="container-app">
          <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-teal-50 to-emerald-50 p-8 sm:p-12 dark:from-slate-800 dark:to-slate-800 border border-teal-100 dark:border-slate-700 shadow-card">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4C542] text-[#472e00] shadow-sm flex-shrink-0">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  Our Commitment to Transparency
                </h2>
                <p className="text-sm text-teal-800 dark:text-teal-300 font-semibold mt-0.5">
                  Accountability is at the core of who we are.
                </p>
              </div>
            </div>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              Every rupee donated, every dental volunteer hour logged, and every patient treated is documented and shared openly. We believe that donors, partners, and the communities we serve deserve to know exactly how resources are deployed and the verified difference they make.
            </p>
          </div>
        </div>
      </section>

      {/* Reports Listing */}
      <section className="section-padding bg-slate-50 dark:bg-slate-800/50">
        <div className="container-app">
          <SectionHeader
            eyebrow="Documents"
            title="Download Reports"
            subtitle="Access our annual reports, project clinical records, impact assessments, and financial summaries."
          />

          {/* Filter tabs */}
          <div className="mt-10 mb-12 flex flex-wrap justify-center gap-2 sm:gap-3">
            {REPORT_TABS.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-all cursor-pointer ${
                    activeTab === tab.key
                      ? 'bg-[#1AAE9F] text-white shadow-soft scale-105'
                      : 'bg-white text-slate-700 hover:bg-slate-100 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {filtered.length === 0 ? (
            <div className="mt-12 rounded-3xl bg-white p-12 text-center shadow-card dark:bg-slate-800 border border-slate-100 dark:border-slate-700 max-w-md mx-auto">
              <FolderOpen className="mx-auto h-12 w-12 text-slate-300 dark:text-slate-600" />
              <h3 className="mt-4 text-lg font-bold text-slate-800 dark:text-white">
                Reports Coming Soon
              </h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                We're compiling our verified reports for publication. Check back soon or contact our secretariat.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              {filtered.map((rep) => (
                <div
                  key={rep.id}
                  className="flex flex-col justify-between rounded-3xl bg-white p-7 sm:p-8 shadow-card dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:shadow-card-hover transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="rounded-full bg-teal-50 px-3.5 py-1 text-xs font-bold uppercase text-[#0f7069] dark:bg-teal-900/40 dark:text-teal-300">
                        {rep.type} Report · {rep.year}
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {rep.date}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-snug">
                      {rep.title}
                    </h3>

                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {rep.summary}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-400">
                      Format: PDF ({rep.file_size})
                    </span>

                    <button
                      onClick={() => alert(`Downloading ${rep.title} (${rep.file_size})...`)}
                      className="btn-primary text-xs py-2 px-4 cursor-pointer"
                    >
                      <Download className="h-3.5 w-3.5" />
                      <span>Download PDF</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
