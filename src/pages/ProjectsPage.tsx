import React, { useState } from 'react';
import { PageId, Project } from '../types';
import { FEATURED_PROJECTS } from '../data/organizationData';
import { Search, MapPin, Calendar, Users, ArrowRight, Heart, Sparkles, Filter } from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenProject: (project: Project) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate, onOpenProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Dental Camps',
    'School Health',
    'Menstrual Hygiene',
    'Disaster Relief',
    'Awareness',
  ];

  const filteredProjects = FEATURED_PROJECTS.filter((proj) => {
    const matchesCat = selectedCategory === 'All' || proj.category === selectedCategory;
    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-[#16A396] uppercase tracking-widest bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
          <Sparkles className="w-3.5 h-3.5 text-[#F4C542]" />
          <span>Core Humanitarian Initiatives · परियोजनाहरू</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Field Projects & Expeditions
        </h1>
        <p className="text-sm sm:text-base text-slate-600 font-nepali">
          मुस्कानको लागि पाइलाका अभियानहरू: कर्णालीदेखि तराईका बाढी प्रभावित क्षेत्रसम्म निःशुल्क स्वास्थ्य सेवा
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Category Pill Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-2 text-xs font-medium rounded-xl whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#16A396] text-white font-semibold shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects by district or name..."
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#16A396]"
          />
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
          <p className="text-sm text-slate-500">No initiatives found matching your search criteria.</p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="mt-3 text-xs font-bold text-[#16A396] hover:underline"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-16/10 bg-slate-100 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-lg text-[11px] font-semibold text-[#16A396] shadow-xs">
                    {project.category}
                  </div>
                  <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 rounded-lg text-[11px] font-medium text-white shadow-xs">
                    {project.status}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {project.location.split(',')[0]}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {project.date.split(' ')[0]}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#16A396] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-nepali mt-0.5">{project.nepaliTitle}</p>

                  <p className="text-xs text-slate-600 mt-2.5 line-clamp-3 leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500">Impact Volume:</span>
                    <span className="font-bold text-slate-900 tabular-nums">
                      {project.beneficiariesCount.toLocaleString()} Children
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 flex items-center justify-between gap-2">
                <button
                  onClick={() => onOpenProject(project)}
                  className="flex-1 py-2 text-center text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200/80 rounded-xl transition-colors cursor-pointer"
                >
                  View Dossier
                </button>
                <button
                  onClick={() => onNavigate('donate')}
                  className="px-3.5 py-2 text-xs font-semibold text-white bg-[#16A396] hover:bg-[#0E786E] rounded-xl transition-colors flex items-center gap-1 cursor-pointer shadow-xs"
                >
                  <Heart className="w-3.5 h-3.5 fill-current text-[#F4C542]" />
                  <span>Sponsor</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Expeditions In Brief: Highlighted 5 Required Initiatives */}
      <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/80 space-y-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900">Featured Initiative Focus Areas</h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Our five pillar expedition tracks designed to systematically eliminate preventable oral disease in Nepal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          <div className="p-4 bg-white rounded-xl border border-slate-200">
            <span className="font-bold text-[#16A396] block">01. Miles for Smiles Karnali</span>
            <p className="text-slate-600 mt-1 leading-relaxed">
              High-altitude dental relief expeditions with backpacked portable handpieces reaching Khalanga, Tatopani, and Humla mountain passes.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200">
            <span className="font-bold text-[#16A396] block">02. World Oral Health Day</span>
            <p className="text-slate-600 mt-1 leading-relaxed">
              Nationwide public screenings, free diagnostics, and dental health rallies across major civic centers every March.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200">
            <span className="font-bold text-[#16A396] block">03. School Oral Health Programs</span>
            <p className="text-slate-600 mt-1 leading-relaxed">
              Curriculum-integrated brushing drills, silver diamine fluoride (SDF), and cavity prevention across 48 community schools.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200">
            <span className="font-bold text-[#16A396] block">04. Menstrual Hygiene Outreach</span>
            <p className="text-slate-600 mt-1 leading-relaxed">
              Adolescent bodily dignity workshops, myth-busting, and distribution of reusable, washable sanitary kits to eliminate school absenteeism.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200">
            <span className="font-bold text-[#16A396] block">05. Flood Relief Dental Outreach</span>
            <p className="text-slate-600 mt-1 leading-relaxed">
              Emergency dental and medical caravan deployment to flood-inundated settlements in Morang, Sunsari, and Saptari.
            </p>
          </div>

          <div className="p-4 bg-sky-100/60 rounded-xl border border-teal-200 flex flex-col justify-between">
            <div>
              <span className="font-bold text-[#16A396] block">Propose a New Expedition</span>
              <p className="text-slate-600 mt-1">
                Are you a local government representative or rural school headmaster needing oral care support?
              </p>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="mt-3 text-xs font-bold text-[#16A396] hover:underline text-left"
            >
              Submit Camp Request Form →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
