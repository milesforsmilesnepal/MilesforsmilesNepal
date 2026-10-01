import React, { useState } from 'react';
import { DISTRICTS_DATA } from '../data/organizationData';
import { DistrictImpact } from '../types';
import { MapPin, Users, HeartPulse, Sparkles, Mountain, Calendar, ArrowRight, CheckCircle2, Image as ImageIcon, Map as MapIcon } from 'lucide-react';

interface NepalMapProps {
  onSelectDistrict?: (district: DistrictImpact) => void;
  selectedDistrictId?: string;
  onNavigateToDonate?: () => void;
}

// Authentic 50m Natural Earth Boundary Vector of Nepal
const NEPAL_AUTHENTIC_PATH = "M 854.8 292.5 L 858.9 295.3 L 859.3 300.0 L 858.5 305.1 L 854.3 316.3 L 850.5 324.1 L 846.1 340.6 L 842.1 369.3 L 843.0 374.3 L 854.9 390.7 L 859.6 403.4 L 860.0 412.0 L 854.9 426.4 L 849.2 442.7 L 846.4 446.4 L 843.2 447.7 L 828.4 442.0 L 818.3 442.8 L 806.6 446.0 L 794.4 445.3 L 784.4 443.5 L 771.6 450.0 L 759.4 446.5 L 751.6 442.4 L 746.4 431.1 L 744.2 429.7 L 718.5 441.5 L 712.4 442.2 L 696.4 435.8 L 683.4 429.6 L 678.5 427.7 L 665.9 425.2 L 654.5 423.8 L 642.2 419.9 L 626.9 425.0 L 620.7 424.6 L 614.9 420.9 L 611.9 413.3 L 611.1 406.1 L 605.9 401.1 L 597.8 400.0 L 586.5 404.4 L 570.0 410.3 L 564.6 409.3 L 559.7 407.6 L 557.9 406.1 L 555.7 399.3 L 553.0 397.8 L 549.2 397.6 L 542.4 396.0 L 534.0 390.9 L 508.5 379.0 L 505.3 373.7 L 505.4 362.0 L 504.0 357.2 L 500.9 352.1 L 487.8 347.0 L 462.5 338.7 L 448.4 332.0 L 441.7 335.1 L 428.8 337.9 L 421.9 343.9 L 413.6 342.0 L 393.9 335.7 L 383.3 334.8 L 376.9 336.9 L 375.5 340.5 L 367.4 344.6 L 359.7 341.3 L 344.6 336.9 L 331.3 334.5 L 311.2 329.2 L 308.9 321.1 L 305.5 313.1 L 300.7 311.6 L 282.6 313.2 L 266.1 304.4 L 248.3 293.1 L 240.7 289.4 L 235.8 288.0 L 231.5 289.5 L 226.6 292.1 L 222.1 292.9 L 212.5 288.0 L 200.1 281.0 L 185.0 272.5 L 167.3 260.6 L 160.1 253.9 L 156.7 248.8 L 153.0 244.1 L 137.6 236.3 L 125.4 230.1 L 110.7 222.7 L 108.2 221.2 L 102.7 216.8 L 94.1 211.2 L 87.1 209.6 L 84.9 212.7 L 83.2 215.9 L 77.1 215.2 L 67.6 209.5 L 57.7 203.6 L 49.9 198.1 L 41.9 192.4 L 40.0 188.2 L 43.3 175.3 L 48.0 164.2 L 51.9 161.7 L 58.3 154.4 L 60.7 141.5 L 60.5 130.6 L 66.8 115.0 L 75.4 98.5 L 90.3 80.9 L 96.7 75.0 L 103.9 71.0 L 117.7 58.0 L 120.5 55.8 L 126.5 52.5 L 132.5 51.6 L 136.9 53.3 L 141.5 60.1 L 147.0 66.6 L 153.8 66.3 L 161.7 60.7 L 178.1 35.2 L 200.8 30.0 L 222.3 32.6 L 241.4 36.3 L 247.0 44.9 L 250.7 53.8 L 253.1 58.4 L 259.3 63.8 L 286.2 76.5 L 301.8 88.0 L 323.4 103.4 L 339.5 110.2 L 353.8 110.8 L 361.9 116.9 L 374.0 128.9 L 384.3 142.8 L 397.1 155.6 L 406.0 155.1 L 418.0 151.0 L 432.7 145.6 L 441.4 148.2 L 449.5 151.8 L 452.1 158.4 L 457.0 170.9 L 462.3 183.9 L 470.8 188.5 L 480.8 195.2 L 486.3 200.5 L 505.0 210.2 L 507.7 214.2 L 511.4 216.9 L 516.0 218.6 L 519.8 220.6 L 525.7 221.3 L 547.3 215.4 L 553.1 216.1 L 556.4 217.2 L 556.5 219.4 L 552.6 228.5 L 549.3 240.2 L 552.7 246.0 L 561.8 248.5 L 581.9 250.2 L 608.9 250.1 L 617.1 256.0 L 625.3 264.9 L 633.5 280.1 L 636.8 286.5 L 640.9 288.3 L 647.9 285.8 L 649.1 279.6 L 649.4 270.3 L 655.3 267.1 L 659.1 269.4 L 663.5 276.7 L 674.7 283.2 L 682.8 286.4 L 690.5 285.3 L 693.7 282.8 L 697.5 270.1 L 703.6 268.2 L 711.3 269.1 L 714.2 271.6 L 717.3 276.7 L 726.6 279.1 L 735.9 282.3 L 744.6 286.4 L 756.9 295.9 L 772.0 297.6 L 789.5 297.4 L 798.7 297.6 L 805.5 298.3 L 811.6 297.6 L 829.6 290.9 L 836.9 290.4 L 846.0 291.2 L 854.8 292.5 Z";

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
  const [mapMode, setMapMode] = useState<'interactive' | 'poster'>('interactive');

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

  const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 shadow-card dark:bg-slate-800 dark:border-slate-700 overflow-hidden">
      {/* Top Filter & Legend Bar */}
      <div className="p-4 sm:p-6 border-b border-slate-100 dark:border-slate-700/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#16A396] uppercase">
            <span>Dynamic Geographic Outreach</span>
            <span>·</span>
            <span>Nepal Nationwide</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
            Reaching Communities from the Terai Plains to High Himalayas
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5">
            Click on any highlighted district to inspect verified field treatments, health posts, and human stories.
          </p>
        </div>

        {/* View Switcher & Filter Controls */}
        <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
          {/* Mode Switcher */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-700 rounded-xl">
            <button
              onClick={() => setMapMode('interactive')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                mapMode === 'interactive'
                  ? 'bg-white text-[#16A396] shadow-sm font-bold dark:bg-slate-800 dark:text-teal-300'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
              }`}
            >
              <MapIcon className="w-3.5 h-3.5" />
              <span>Interactive Map</span>
            </button>
            <button
              onClick={() => setMapMode('poster')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                mapMode === 'poster'
                  ? 'bg-white text-[#16A396] shadow-sm font-bold dark:bg-slate-800 dark:text-teal-300'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Verified Poster</span>
            </button>
          </div>

          {/* Terrain filter buttons */}
          {mapMode === 'interactive' && (
            <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-700 rounded-xl">
              {(['All', 'Mountain', 'Hill', 'Terai'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveTerrainFilter(filter)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                    activeTerrainFilter === filter
                      ? 'bg-white text-[#16A396] shadow-sm font-bold dark:bg-slate-800 dark:text-teal-300'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                  }`}
                >
                  {filter === 'All' ? `All (${DISTRICTS_DATA.length})` : filter}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left Side: Authentic Nepal Map */}
        <div className="lg:col-span-7 p-4 sm:p-6 bg-slate-50/70 dark:bg-slate-900/50 relative flex flex-col justify-center min-h-[420px] sm:min-h-[480px]">
          {/* Status Badge */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-slate-200/80 dark:border-slate-700 shadow-soft">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span>Active Field Sites</span>
            <span className="font-bold text-[#16A396] dark:text-[#2dd4bf]">{filteredDistricts.length} Districts</span>
          </div>

          {mapMode === 'poster' ? (
            /* Official Verified Poster Map from Bolt */
            <div className="w-full flex items-center justify-center p-2">
              <div className="relative aspect-[1200/720] w-full max-w-[760px] rounded-2xl overflow-hidden shadow-card border border-slate-200 dark:border-slate-700">
                <img
                  src={`${base}impact-map.svg`}
                  alt="Miles for Smiles Nepal Verified Impact Map 2024-2026"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ) : (
            /* Authentic Detailed Vector Nepal Map */
            <div className="w-full relative flex items-center justify-center py-4">
              <svg
                viewBox="0 0 900 480"
                className="w-full max-w-[760px] h-auto drop-shadow-md select-none"
                style={{ filter: 'drop-shadow(0 6px 16px rgba(22, 163, 150, 0.12))' }}
              >
                <defs>
                  {/* Landmass Fill Gradient */}
                  <linearGradient id="nepalLandFill" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F8FAFC" />
                    <stop offset="40%" stopColor="#EEF6F6" />
                    <stop offset="100%" stopColor="#E2F1F0" />
                  </linearGradient>

                  {/* Himalayan Ridge Shading */}
                  <linearGradient id="himalayanSnowRidge" x1="0%" y1="0%" x2="100%" y2="50%">
                    <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.35" />
                    <stop offset="50%" stopColor="#16A396" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#0E786E" stopOpacity="0.15" />
                  </linearGradient>

                  {/* Terai Plains Southern Glow */}
                  <linearGradient id="teraiGlow" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F4C542" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#F4C542" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Surrounding Map Frame / Base Glow */}
                <path
                  d={NEPAL_AUTHENTIC_PATH}
                  fill="url(#nepalLandFill)"
                  stroke="#16A396"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                  className="transition-colors"
                />

                {/* High Himalayan Topographic Crest (Northern Ridge) */}
                <path
                  d="M 120 56 Q 240 40, 360 115 T 620 250 T 840 291 L 846 320 Q 640 270, 420 160 T 160 62 Z"
                  fill="url(#himalayanSnowRidge)"
                  opacity="0.85"
                />

                {/* Southern Terai Plain Shading */}
                <path
                  d="M 108 221 Q 300 320, 500 360 T 846 446 L 828 442 Q 534 390, 311 329 T 94 211 Z"
                  fill="url(#teraiGlow)"
                  opacity="0.75"
                />

                {/* Regional Geographic Labels (Authentic placement) */}
                <text x="180" y="55" fontSize="11" fill="#0E786E" fontWeight="700" letterSpacing="1.5">
                  KARNALI & FAR-WEST
                </text>
                <text x="440" y="130" fontSize="11" fill="#0E786E" fontWeight="700" letterSpacing="1.5">
                  CENTRAL HIMALAYAS
                </text>
                <text x="690" y="250" fontSize="11" fill="#0E786E" fontWeight="700" letterSpacing="1.5">
                  EASTERN NEPAL
                </text>
                <text x="430" y="375" fontSize="10" fill="#94A3B8" fontWeight="600" letterSpacing="1">
                  TERAI PLAINS
                </text>

                {/* Geographic District Markers */}
                {DISTRICTS_DATA.map((district) => {
                  const isSelected = activeDistrict.id === district.id;
                  const isHovered = hoveredDistrict?.id === district.id;
                  const isFiltered = filteredDistricts.some((d) => d.id === district.id);

                  if (!isFiltered) return null;

                  return (
                    <g
                      key={district.id}
                      className="cursor-pointer transition-transform duration-200 group"
                      onClick={() => handleDistrictClick(district)}
                      onMouseEnter={() => setHoveredDistrict(district)}
                      onMouseLeave={() => setHoveredDistrict(null)}
                    >
                      {/* Active Pulsing Ring */}
                      {isSelected && (
                        <circle
                          cx={district.coordinates.x}
                          cy={district.coordinates.y}
                          r="20"
                          fill="#F4C542"
                          opacity="0.3"
                          className="animate-ping"
                        />
                      )}

                      {/* Outer Glow Halo */}
                      <circle
                        cx={district.coordinates.x}
                        cy={district.coordinates.y}
                        r={isSelected ? '13' : isHovered ? '11' : '8'}
                        fill={isSelected ? '#F4C542' : '#16A396'}
                        opacity={isSelected ? '0.4' : isHovered ? '0.3' : '0.2'}
                        className="transition-all"
                      />

                      {/* Core Pin Circle */}
                      <circle
                        cx={district.coordinates.x}
                        cy={district.coordinates.y}
                        r={isSelected ? '6.5' : isHovered ? '5.5' : '4.5'}
                        fill={isSelected ? '#F4C542' : '#16A396'}
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        className="transition-all shadow-sm"
                      />

                      {/* District Label */}
                      <text
                        x={district.coordinates.x}
                        y={district.coordinates.y - 12}
                        textAnchor="middle"
                        fontSize={isSelected ? '12' : '10.5'}
                        fontWeight={isSelected ? '800' : '700'}
                        fill={isSelected ? '#0E786E' : '#1E293B'}
                        className="pointer-events-none drop-shadow-sm select-none"
                      >
                        {district.name}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          )}

          {/* Quick Info Footer Bar */}
          <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#16A396]" />
              Authentic Geographic Nepal Projection (50m)
            </span>
            <span className="hidden sm:inline">Tap any pin to view verified field statistics</span>
          </div>
        </div>

        {/* Right Side: District Detail Inspector */}
        <div className="lg:col-span-5 p-5 sm:p-6 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-100 dark:border-slate-700/80 bg-white dark:bg-slate-800">
          <div>
            {/* Header info */}
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                  <span>{activeDistrict.province}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1 text-[#16A396] font-bold">
                    <Mountain className="w-3 h-3" />
                    {activeDistrict.terrain}
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mt-1">
                  <h4 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-display">
                    {activeDistrict.name}
                  </h4>
                  <span className="text-base text-slate-500 font-nepali font-bold">
                    ({activeDistrict.nepaliName})
                  </span>
                </div>
              </div>
              <div className="text-right text-xs text-slate-500 dark:text-slate-400 shrink-0">
                <span className="block font-medium text-slate-700 dark:text-slate-300">Last Outreach</span>
                <span className="flex items-center gap-1 mt-0.5 text-slate-500">
                  <Calendar className="w-3 h-3" />
                  {activeDistrict.lastCampDate}
                </span>
              </div>
            </div>

            {/* Photo preview with resilient fallback */}
            <div className="mt-4 relative rounded-2xl overflow-hidden aspect-video bg-slate-100 dark:bg-slate-700 border border-slate-200/60 dark:border-slate-600 shadow-sm">
              <img
                src={activeDistrict.photo}
                alt={`${activeDistrict.name} dental outreach`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = 'https://images.pexels.com/photos/7074250/pexels-photo-7074250.jpeg?auto=compress&cs=tinysrgb&w=800';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent"></div>
              <div className="absolute bottom-3 left-3.5 right-3.5 text-white text-xs">
                <p className="font-medium drop-shadow-sm line-clamp-2 leading-relaxed">
                  {activeDistrict.summary}
                </p>
              </div>
            </div>

            {/* Impact Metric Grid */}
            <div className="grid grid-cols-2 gap-2.5 mt-4">
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-700/50 border border-slate-100 dark:border-slate-600">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                  <Users className="w-3.5 h-3.5 text-[#16A396]" />
                  Students Reached
                </div>
                <div className="text-xl font-bold text-slate-900 dark:text-white mt-0.5 tabular-nums">
                  {activeDistrict.studentsReached.toLocaleString()}
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-700/50 border border-slate-100 dark:border-slate-600">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                  <HeartPulse className="w-3.5 h-3.5 text-emerald-600" />
                  Free Treatments
                </div>
                <div className="text-xl font-bold text-slate-900 dark:text-white mt-0.5 tabular-nums">
                  {activeDistrict.freeDentalTreatments.toLocaleString()}
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-700/50 border border-slate-100 dark:border-slate-600">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-[#F4C542]" />
                  Hygiene Kits
                </div>
                <div className="text-xl font-bold text-slate-900 dark:text-white mt-0.5 tabular-nums">
                  {activeDistrict.hygieneKitsDistributed.toLocaleString()}
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-700/50 border border-slate-100 dark:border-slate-600">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16A396]" />
                  Schools Partnered
                </div>
                <div className="text-xl font-bold text-slate-900 dark:text-white mt-0.5 tabular-nums">
                  {activeDistrict.schoolsVisited} Schools
                </div>
              </div>
            </div>

            {/* Field Activities List */}
            <div className="mt-4">
              <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide mb-2">
                Field Activities Delivered
              </div>
              <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                {activeDistrict.activities.slice(0, 3).map((act, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16A396] mt-1.5 shrink-0"></span>
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Beneficiary Quote */}
            <div className="mt-4 p-3.5 rounded-2xl bg-teal-50/70 dark:bg-teal-900/20 border border-teal-100 dark:border-teal-800/40">
              <div className="text-[11px] font-semibold text-[#16A396] dark:text-[#2dd4bf] uppercase tracking-wide">
                Beneficiary Voice · {activeDistrict.story.beneficiary}
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 italic mt-1 leading-relaxed">
                {activeDistrict.story.quote}
              </p>
            </div>
          </div>

          {/* Action CTA */}
          <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between gap-3">
            <div className="text-xs text-slate-500 dark:text-slate-400">
              Next scheduled camp: <strong className="text-slate-700 dark:text-slate-200">Pre-Monsoon 2026</strong>
            </div>
            {onNavigateToDonate && (
              <button
                onClick={onNavigateToDonate}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#16A396] rounded-xl hover:bg-[#0E786E] transition-all flex items-center gap-1.5 whitespace-nowrap shadow-sm hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
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
