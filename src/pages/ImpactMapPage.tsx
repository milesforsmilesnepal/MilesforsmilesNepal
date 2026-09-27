import React, { useState } from 'react';
import { PageId, DistrictImpact } from '../types';
import { DISTRICTS_DATA } from '../data/organizationData';
import { NepalMap } from '../components/NepalMap';
import { MapPin, Users, HeartPulse, Sparkles, Mountain, Calendar, ArrowRight, Heart } from 'lucide-react';

interface ImpactMapPageProps {
  onNavigate: (page: PageId) => void;
}

export const ImpactMapPage: React.FC<ImpactMapPageProps> = ({ onNavigate }) => {
  const [selectedDistrict, setSelectedDistrict] = useState<DistrictImpact>(DISTRICTS_DATA[0]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Page Title */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-[#16A396] uppercase tracking-widest bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
          <Sparkles className="w-3.5 h-3.5 text-[#F4C542]" />
          <span>Geographic Impact Atlas · भौगोलिक प्रभाव</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Interactive Nepal Impact Map
        </h1>
        <p className="text-sm sm:text-base text-slate-600 font-nepali">
          नेपालका हिमाल, पहाड र तराईसम्म फैलिएको सेवा: जिल्ला अनुसारको प्रत्यक्ष प्रभाव र विवरण
        </p>
      </div>

      {/* Main Interactive Map Component */}
      <NepalMap
        selectedDistrictId={selectedDistrict.id}
        onSelectDistrict={(dist) => setSelectedDistrict(dist)}
        onNavigateToDonate={() => onNavigate('donate')}
      />

      {/* Province Directory Grid */}
      <div className="space-y-6 pt-6 border-t border-slate-200">
        <div>
          <h2 className="text-xl font-bold text-slate-900">District Outreach Directory</h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Browse all 14 documented districts where Miles for Smiles Nepal has conducted mobile dental clinics and distributed hygiene kits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DISTRICTS_DATA.map((dist) => (
            <div
              key={dist.id}
              onClick={() => {
                setSelectedDistrict(dist);
                window.scrollTo({ top: 180, behavior: 'smooth' });
              }}
              className={`p-5 rounded-2xl border transition-all cursor-pointer bg-white ${
                selectedDistrict.id === dist.id
                  ? 'border-[#16A396] ring-2 ring-[#16A396]/20 shadow-md'
                  : 'border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-sm'
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <span>{dist.province}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1 text-[#16A396]">
                      <Mountain className="w-3 h-3" />
                      {dist.terrain}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mt-0.5">{dist.name}</h3>
                  <span className="text-xs text-slate-500 font-nepali">{dist.nepaliName}</span>
                </div>
                <span className="text-[11px] font-semibold text-[#16A396] bg-teal-50 px-2 py-1 rounded-lg">
                  {dist.schoolsVisited} Schools
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-slate-100 text-xs">
                <div>
                  <span className="text-slate-500 block">Students:</span>
                  <span className="font-bold text-slate-900 tabular-nums">
                    {dist.studentsReached.toLocaleString()}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block">Dental Care:</span>
                  <span className="font-bold text-emerald-700 tabular-nums">
                    {dist.freeDentalTreatments.toLocaleString()}
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-600 mt-3 line-clamp-2 leading-relaxed">
                {dist.summary}
              </p>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#16A396] font-semibold">
                <span>Inspect in Interactive Map</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
