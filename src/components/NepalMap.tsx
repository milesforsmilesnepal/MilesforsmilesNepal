import React, { useState } from 'react';
import { DISTRICTS_DATA } from '../data/organizationData';
import { DistrictImpact } from '../types';
import { MapPin, Users, HeartPulse, Sparkles, Mountain, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';

interface NepalMapProps {
  onSelectDistrict?: (district: DistrictImpact) => void;
  selectedDistrictId?: string;
  onNavigateToDonate?: () => void;
}

export const NepalMap: React.FC<NepalMapProps> = ({
  onSelectDistrict,
  selectedDistrictId,
  onNavigateToDonate,
}) => {
  const [activeDistrict, setActiveDistrict] = useState<DistrictImpact>(
    DISTRICTS_DATA.find((d) => d.id === selectedDistrictId) || DISTRICTS_DATA[0]
  );
  const [activeTerrainFilter, setActiveTerrainFilter] = useState<'All' | 'Mountain' | 'Hill' | 'Terai'>('All');
  const [hoveredDistrict, setHoveredDistrict] = useState<DistrictImpact | null>(null);

  const filteredDistricts = DISTRICTS_DATA.filter((d) => {
    if (activeTerrainFilter === 'All') return true;
    return d.terrain === activeTerrainFilter;
  });

  const handleDistrictClick = (district: DistrictImpact) => {
    setActiveDistrict(district);
    if (onSelectDistrict) {
      onSelectDistrict(district);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
      {/* Top Filter & Legend Bar */}
      <div className="p-4 sm:p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#16A396] uppercase">
            <span>Dynamic Geographic Outreach</span>
            <span>·</span>
            <span>Nepal Nationwide</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mt-1">
            Reaching Communities from the Terai Plains to High Himalayas
          </h3>
          <p className="text-sm text-slate-600 mt-0.5">
            Click on any highlighted district to inspect verified field treatments, health posts, and human stories.
          </p>
        </div>

        {/* Filter controls */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100/80 rounded-xl self-start md:self-auto">
          {(['All', 'Mountain', 'Hill', 'Terai'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveTerrainFilter(filter)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeTerrainFilter === filter
                  ? 'bg-white text-[#16A396] shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {filter === 'All' ? 'All Districts (14)' : filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Interactive SVG Nepal Map Visualizer */}
        <div className="lg:col-span-7 p-4 sm:p-6 bg-slate-50/60 relative flex flex-col justify-center min-h-[380px] sm:min-h-[460px]">
          {/* Map Controls & Status Badge */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2 text-xs text-slate-500 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-slate-200/60 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Active Field Sites</span>
            <span className="font-semibold text-slate-700">{filteredDistricts.length} Locations</span>
          </div>

          <div className="w-full relative flex items-center justify-center">
            {/* Detailed Nepal Boundary SVG Outline & Province Regions */}
            <svg
              viewBox="0 0 900 520"
              className="w-full max-w-[760px] h-auto drop-shadow-sm select-none"
              style={{ filter: 'drop-shadow(0 4px 6px rgba(13, 94, 166, 0.05))' }}
            >
              <defs>
                <linearGradient id="nepalTerrainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E2E8F0" />
                  <stop offset="50%" stopColor="#CBD5E1" />
                  <stop offset="100%" stopColor="#E2E8F0" />
                </linearGradient>
                <linearGradient id="himalayanRidge" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#16A396" stopOpacity="0.15" />
                </linearGradient>
              </defs>

              {/* Simplified authentic contour of Nepal */}
              <path
                d="M 50 250 
                   C 70 210, 110 160, 160 130
                   C 210 100, 280 80, 360 110
                   C 420 130, 480 170, 540 180
                   C 600 190, 670 200, 740 240
                   C 810 270, 850 310, 860 360
                   C 850 390, 780 430, 710 440
                   C 640 435, 590 410, 520 400
                   C 460 390, 400 420, 320 400
                   C 240 380, 180 370, 120 350
                   C 70 330, 40 290, 50 250 Z"
                fill="#EEF4F8"
                stroke="#CBD5E1"
                strokeWidth="2"
                strokeLinejoin="round"
              />

              {/* High Himalayan Northern Ridge Shading */}
              <path
                d="M 120 150 
                   Q 280 90, 460 160
                   T 820 280
                   L 840 320
                   Q 620 220, 380 130
                   Z"
                fill="url(#himalayanRidge)"
              />

              {/* Subtle Regional Guidelines */}
              <path d="M 230 110 L 210 370" stroke="#CBD5E1" strokeDasharray="4 4" strokeWidth="1" opacity="0.6" />
              <path d="M 440 150 L 410 400" stroke="#CBD5E1" strokeDasharray="4 4" strokeWidth="1" opacity="0.6" />
              <path d="M 640 200 L 610 420" stroke="#CBD5E1" strokeDasharray="4 4" strokeWidth="1" opacity="0.6" />

              {/* Geographic Label Indicators */}
              <text x="210" y="75" fontSize="12" fill="#64748B" fontWeight="600" letterSpacing="1">
                KARNALI & FAR-WEST
              </text>
              <text x="460" y="140" fontSize="12" fill="#64748B" fontWeight="600" letterSpacing="1">
                CENTRAL HIMALAYAS
              </text>
              <text x="700" y="220" fontSize="12" fill="#64748B" fontWeight="600" letterSpacing="1">
                EASTERN NEPAL
              </text>
              <text x="430" y="440" fontSize="11" fill="#94A3B8" fontWeight="500">
                SOUTHERN TERAI BORDER
              </text>

              {/* District Markers */}
              {DISTRICTS_DATA.map((district) => {
                const isSelected = activeDistrict.id === district.id;
                const isHovered = hoveredDistrict?.id === district.id;
                const isFiltered = filteredDistricts.some((d) => d.id === district.id);

                if (!isFiltered) return null;

                return (
                  <g
                    key={district.id}
                    className="cursor-pointer transition-transform duration-200"
                    onClick={() => handleDistrictClick(district)}
                    onMouseEnter={() => setHoveredDistrict(district)}
                    onMouseLeave={() => setHoveredDistrict(null)}
                  >
                    {/* Pulsing ring for selected district */}
                    {isSelected && (
                      <circle
                        cx={district.coordinates.x}
                        cy={district.coordinates.y}
                        r="24"
                        fill="#16A396"
                        opacity="0.18"
                        className="animate-ping"
                      />
                    )}

                    {/* Outer glow ring */}
                    <circle
                      cx={district.coordinates.x}
                      cy={district.coordinates.y}
                      r={isSelected ? '14' : isHovered ? '12' : '9'}
                      fill={isSelected ? '#16A396' : '#38C8BA'}
                      opacity={isSelected ? '0.3' : '0.2'}
                      className="transition-all"
                    />

                    {/* Core pin circle */}
                    <circle
                      cx={district.coordinates.x}
                      cy={district.coordinates.y}
                      r={isSelected ? '7' : '5'}
                      fill={isSelected ? '#16A396' : '#0284C7'}
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      className="transition-all"
                    />

                    {/* District Name Label */}
                    <text
                      x={district.coordinates.x}
                      y={district.coordinates.y - 14}
                      textAnchor="middle"
                      fontSize={isSelected ? '12' : '11'}
                      fontWeight={isSelected ? '700' : '600'}
                      fill={isSelected ? '#16A396' : '#334155'}
                      className="pointer-events-none drop-shadow-xs"
                    >
                      {district.name}
                    </text>
                    <text
                      x={district.coordinates.x}
                      y={district.coordinates.y + 18}
                      textAnchor="middle"
                      fontSize="9"
                      fontWeight="500"
                      fill="#64748B"
                      className="pointer-events-none font-nepali"
                    >
                      {district.nepaliName}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Quick instructions */}
          <div className="mt-4 pt-3 border-t border-slate-200/50 flex items-center justify-between text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#16A396]" />
              Tap points to load field metrics
            </span>
            <span className="hidden sm:inline">All interventions conducted with local health posts</span>
          </div>
        </div>

        {/* District Detail Drawer / Inspector */}
        <div className="lg:col-span-5 p-5 sm:p-6 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-100 bg-white">
          <div>
            {/* Header info */}
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <span>{activeDistrict.province}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1 text-[#16A396]">
                    <Mountain className="w-3 h-3" />
                    {activeDistrict.terrain}
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mt-1">
                  <h4 className="text-2xl font-bold text-slate-900">{activeDistrict.name}</h4>
                  <span className="text-base text-slate-500 font-nepali font-semibold">
                    ({activeDistrict.nepaliName})
                  </span>
                </div>
              </div>
              <div className="text-right text-xs text-slate-500 shrink-0">
                <span className="block font-medium text-slate-700">Last Outreach</span>
                <span className="flex items-center gap-1 mt-0.5 text-slate-500">
                  <Calendar className="w-3 h-3" />
                  {activeDistrict.lastCampDate}
                </span>
              </div>
            </div>

            {/* Photo preview with caption */}
            <div className="mt-4 relative rounded-xl overflow-hidden aspect-video bg-slate-100 border border-slate-200/60">
              <img
                src={activeDistrict.photo}
                alt={`${activeDistrict.name} dental outreach`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent"></div>
              <div className="absolute bottom-2.5 left-3 right-3 text-white text-xs">
                <p className="font-medium drop-shadow-xs line-clamp-1">{activeDistrict.summary}</p>
              </div>
            </div>

            {/* Impact Metric Grid */}
            <div className="grid grid-cols-2 gap-2.5 mt-4">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <Users className="w-3.5 h-3.5 text-[#16A396]" />
                  Students Reached
                </div>
                <div className="text-xl font-bold text-slate-900 mt-0.5 tabular-nums">
                  {activeDistrict.studentsReached.toLocaleString()}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <HeartPulse className="w-3.5 h-3.5 text-emerald-600" />
                  Free Treatments
                </div>
                <div className="text-xl font-bold text-slate-900 mt-0.5 tabular-nums">
                  {activeDistrict.freeDentalTreatments.toLocaleString()}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-[#F4C542]" />
                  Hygiene Kits
                </div>
                <div className="text-xl font-bold text-slate-900 mt-0.5 tabular-nums">
                  {activeDistrict.hygieneKitsDistributed.toLocaleString()}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#38C8BA]" />
                  Schools Partnered
                </div>
                <div className="text-xl font-bold text-slate-900 mt-0.5 tabular-nums">
                  {activeDistrict.schoolsVisited} Schools
                </div>
              </div>
            </div>

            {/* Field Activities List */}
            <div className="mt-4">
              <div className="text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">
                Field Activities Delivered
              </div>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {activeDistrict.activities.slice(0, 3).map((act, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16A396] mt-1.5 shrink-0"></span>
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Beneficiary Quote */}
            <div className="mt-4 p-3.5 rounded-xl bg-teal-50/60 border border-teal-100">
              <div className="text-[11px] font-semibold text-[#16A396] uppercase tracking-wide">
                Beneficiary Voice · {activeDistrict.story.beneficiary}
              </div>
              <p className="text-xs text-slate-700 italic mt-1 leading-relaxed">
                {activeDistrict.story.quote}
              </p>
            </div>
          </div>

          {/* Action CTA */}
          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
            <div className="text-xs text-slate-500">
              Next scheduled camp: <strong className="text-slate-700">Pre-Monsoon 2026</strong>
            </div>
            {onNavigateToDonate && (
              <button
                onClick={onNavigateToDonate}
                className="px-3.5 py-2 text-xs font-semibold text-white bg-[#16A396] rounded-xl hover:bg-[#0E786E] transition-colors flex items-center gap-1.5 whitespace-nowrap shadow-xs"
              >
                <span>Support This District</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
