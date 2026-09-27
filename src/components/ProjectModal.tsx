import React from 'react';
import { Project } from '../types';
import { X, Calendar, MapPin, Users, CheckCircle2, Building, Heart } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onDonate?: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onDonate }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-xs overflow-y-auto">
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero image of project */}
        <div className="relative aspect-video sm:aspect-21/9 w-full bg-slate-100 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#38C8BA] uppercase tracking-wider">
              <span>{project.category}</span>
              <span>·</span>
              <span>Status: {project.status}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mt-1 leading-snug">{project.title}</h3>
            <p className="text-xs text-slate-300 font-nepali mt-0.5">{project.nepaliTitle}</p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-xs">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#16A396]" />
              <div>
                <span className="text-slate-500 block">Location</span>
                <span className="font-semibold text-slate-800">{project.location}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#16A396]" />
              <div>
                <span className="text-slate-500 block">Timeline</span>
                <span className="font-semibold text-slate-800">{project.date}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
              <Users className="w-4 h-4 text-emerald-600" />
              <div>
                <span className="text-slate-500 block">Total Impact</span>
                <span className="font-semibold text-slate-800 tabular-nums">
                  {project.beneficiariesCount.toLocaleString()} Children
                </span>
              </div>
            </div>
          </div>

          {/* Narrative Description */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Expedition Narrative</h4>
            <p className="text-sm text-slate-700 leading-relaxed mt-2">{project.description}</p>
          </div>

          {/* Key Outcomes */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Key Verified Outcomes</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-2.5">
              {project.keyOutcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-teal-50/50 border border-teal-100/60 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#16A396] shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Team and Partners */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              <span className="font-semibold text-slate-700 block">Field Leads:</span>
              <span>{project.teamLead}</span>
            </div>

            <div className="sm:text-right">
              <span className="font-semibold text-slate-700 block flex items-center sm:justify-end gap-1">
                <Building className="w-3.5 h-3.5" />
                Collaborating Partners:
              </span>
              <span>{project.partnerOrganizations.join(' · ')}</span>
            </div>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200/80 rounded-xl transition-colors cursor-pointer"
          >
            Close
          </button>

          {onDonate && (
            <button
              onClick={() => {
                onClose();
                onDonate();
              }}
              className="px-5 py-2 text-xs font-semibold text-white bg-[#16A396] hover:bg-[#0E786E] rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Heart className="w-3.5 h-3.5 fill-current text-[#F4C542]" />
              <span>Sponsor This Initiative</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
