import React from 'react';
import { PageId, Project, FieldStory } from '../types';
import {
  HERO_IMAGE,
  IMPACT_METRICS,
  FEATURED_PROJECTS,
  JOURNEY_TIMELINE,
  FIELD_STORIES,
  PARTNERS_DATA,
  NEWS_ARTICLES,
  DISTRICTS_DATA,
  MFSN_LOGO_IMAGE,
} from '../data/organizationData';
import { NepalMap } from '../components/NepalMap';
import { MFSNLogo } from '../components/MFSNLogo';
import {
  Heart,
  Users,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Calendar,
  MapPin,
  Smile,
  CheckCircle2,
  ExternalLink,
  Award,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenProject: (project: Project) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenProject }) => {
  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 sm:pt-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Headlines & Human Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              {/* Unboxed Metadata & Official Logo Crest */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 shadow-2xs">
                  <div className="w-5 h-5 rounded-md overflow-hidden bg-[#16A396]">
                    <img src={MFSN_LOGO_IMAGE} alt="MFSN Crest" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-xs font-bold text-[#16A396] uppercase tracking-wider">
                    MFSN Official Emblem · 2024
                  </span>
                </div>
                <div className="text-xs font-semibold text-slate-500 font-nepali">
                  मुस्कानको लागि पाइला नेपाल
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] text-balance">
                Reach the Unreached. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16A396] via-[#0E786E] to-[#38C8BA]">
                  Every Smile Matters.
                </span>
              </h1>

              {/* Nepali Sub-headline */}
              <p className="text-lg sm:text-xl font-medium text-slate-700 font-nepali">
                दन्त चिकित्सक विद्यार्थीहरूद्वारा स्थापित: दुर्गम हिमाली बस्तीका बालबालिकालाई निःशुल्क दन्त उपचार र स्वास्थ्य शिक्षा।
              </p>

              {/* Descriptive Paragraph */}
              <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
                Miles for Smiles Nepal (MFSN) is a youth-led nonprofit founded by passionate dental students dedicated to eradicating oral disease and expanding healthcare access to remote, underserved communities across Nepal.
              </p>

              {/* Hero Action CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onNavigate('donate')}
                  className="px-6 py-3.5 text-sm font-bold text-white bg-[#16A396] hover:bg-[#0E786E] rounded-xl transition-all shadow-sm hover:shadow-md flex items-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  <Heart className="w-4 h-4 text-[#F4C542] fill-current" />
                  <span>Donate to Support a Child</span>
                </button>

                <button
                  onClick={() => onNavigate('volunteer')}
                  className="px-6 py-3.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-all shadow-xs flex items-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  <Users className="w-4 h-4 text-[#16A396]" />
                  <span>Join as Volunteer</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-500 border-t border-slate-200/60">
                <span className="flex items-center gap-1.5 font-medium text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Social Welfare Council Registered
                </span>
                <span className="flex items-center gap-1.5 font-medium text-slate-700">
                  <Award className="w-4 h-4 text-[#16A396]" />
                  100% Volunteer Directed
                </span>
                <span className="flex items-center gap-1.5 font-medium text-slate-700">
                  <Smile className="w-4 h-4 text-[#F4C542]" />
                  6,136+ Children Treated
                </span>
              </div>
            </div>

            {/* Right Column: Hero Visual Focal Frame with Brand Seal */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 aspect-4/3 sm:aspect-5/4">
                <img
                  src={HERO_IMAGE}
                  alt="Miles for Smiles Nepal dental camp in rural Himalayas"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                {/* Floating Official MFSN Logo Badge on Image */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-2 rounded-2xl shadow-lg border border-white/50 flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl overflow-hidden bg-[#16A396] shadow-xs">
                    <img src={MFSN_LOGO_IMAGE} alt="MFSN Logo" className="w-full h-full object-cover" />
                  </div>
                  <div className="pr-1 text-left">
                    <span className="text-[11px] font-black text-slate-900 tracking-tight block">MFSN NEPAL</span>
                    <span className="text-[9px] font-bold text-[#16A396] uppercase tracking-wide block">Estd. 2024</span>
                  </div>
                </div>

                {/* Overlaid Live Stat Callout */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 text-slate-900">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-1 font-semibold uppercase tracking-wide">
                    <span>Recent Expedition</span>
                    <span className="text-[#16A396] font-bold">Upper Karnali</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xl font-bold tabular-nums text-slate-900">2,060+ Students</div>
                      <div className="text-xs text-slate-600">Free screenings & restorative treatments</div>
                    </div>
                    <button
                      onClick={() => onNavigate('projects')}
                      className="p-2 rounded-xl bg-teal-50 hover:bg-teal-100 text-[#16A396] transition-colors"
                      title="View Karnali Project"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. IMPACT DASHBOARD */}
      <section className="bg-slate-900 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#38C8BA] uppercase tracking-widest">
              Measurable Human Outcomes
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Field Realities & Documented Impact
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Every data point represents a real child, family, and village reached across the mountains and plains of Nepal.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-[#16A396]/50 transition-colors">
              <div className="text-3xl sm:text-4xl font-extrabold text-white tabular-nums tracking-tight">
                {IMPACT_METRICS.studentsReached.toLocaleString()}+
              </div>
              <div className="text-sm font-semibold text-slate-300 mt-2">Students Reached</div>
              <p className="text-xs text-slate-400 mt-1">
                Screened, educated, and treated across remote community schools.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-[#16A396]/50 transition-colors">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#38C8BA] tabular-nums tracking-tight">
                {IMPACT_METRICS.districtsServed} Districts
              </div>
              <div className="text-sm font-semibold text-slate-300 mt-2">Geographic Footprint</div>
              <p className="text-xs text-slate-400 mt-1">
                From high-altitude Jumla & Humla to the southern Terai plains.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-[#16A396]/50 transition-colors">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#F4C542] tabular-nums tracking-tight">
                {IMPACT_METRICS.hygieneKitsDistributed.toLocaleString()}+
              </div>
              <div className="text-sm font-semibold text-slate-300 mt-2">Hygiene Kits Distributed</div>
              <p className="text-xs text-slate-400 mt-1">
                Toothbrushes, fluoridated paste, and adolescent menstrual kits.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-[#16A396]/50 transition-colors">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 tabular-nums tracking-tight">
                {IMPACT_METRICS.freeTreatmentsCompleted.toLocaleString()}+
              </div>
              <div className="text-sm font-semibold text-slate-300 mt-2">Free Dental Restorations</div>
              <p className="text-xs text-slate-400 mt-1">
                Painless ART cavity fillings, emergency extractions, and sealant therapy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE NEPAL IMPACT MAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#16A396] uppercase tracking-wider">
              <span>Interactive Field Map</span>
              <span>·</span>
              <span>Districts of Nepal</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Where Your Support Reaches
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              Inspect our mobile clinic coordinates, medical team logs, and direct beneficiary impact across Nepal’s diverse terrain.
            </p>
          </div>

          <button
            onClick={() => onNavigate('impact-map')}
            className="text-xs font-bold text-[#16A396] hover:text-[#0E786E] flex items-center gap-1.5 transition-colors cursor-pointer self-start md:self-auto"
          >
            <span>Open Fullscreen Map View</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

        <NepalMap onNavigateToDonate={() => onNavigate('donate')} />
      </section>

      {/* 4. FEATURED PROJECTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#16A396] uppercase tracking-wider">
              <span>Key Initiatives</span>
              <span>·</span>
              <span>Field Expeditions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Featured Humanitarian Programs
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              Comprehensive dental camps, school education, adolescent menstrual health, and emergency disaster relief.
            </p>
          </div>

          <button
            onClick={() => onNavigate('projects')}
            className="px-4 py-2 text-xs font-semibold text-[#16A396] bg-teal-50 hover:bg-teal-100 rounded-xl transition-colors self-start md:self-auto flex items-center gap-1.5"
          >
            <span>View All Programs ({FEATURED_PROJECTS.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_PROJECTS.slice(0, 3).map((project) => (
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
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
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
                      <Users className="w-3.5 h-3.5 text-slate-400" />
                      {project.beneficiariesCount.toLocaleString()} Reached
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-[#16A396] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-nepali mt-0.5">{project.nepaliTitle}</p>
                  <p className="text-xs text-slate-600 mt-2.5 line-clamp-2 leading-relaxed">
                    {project.summary}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onOpenProject(project)}
                  className="text-xs font-bold text-[#16A396] hover:text-[#0E786E] flex items-center gap-1 cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onNavigate('donate')}
                  className="text-xs font-medium text-slate-600 hover:text-slate-900"
                >
                  Support
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. JOURNEY TIMELINE */}
      <section className="bg-slate-50 border-y border-slate-200/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#16A396] uppercase tracking-widest">
              Youth Movement Evolution
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              From a Dental Classroom to Nationwide Impact
            </h2>
            <p className="text-sm text-slate-600 mt-2 font-nepali">
              हाम्रो यात्रा: सिन्धुपाल्चोकको पहिलो शिविरदेखि कर्णालीका विकट हिमालसम्म
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {JOURNEY_TIMELINE.map((item, idx) => (
              <div
                key={item.year}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs relative flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl font-black text-[#16A396] tracking-tight">{item.year}</div>
                  <div className="text-xs font-semibold text-slate-500 font-nepali mt-0.5">{item.nepaliTitle}</div>
                  <h4 className="text-sm font-bold text-slate-900 mt-2">{item.title}</h4>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">{item.description}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-medium text-slate-500 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Phase {idx + 1} Accomplished</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. STORIES FROM THE FIELD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#16A396] uppercase tracking-wider">
              <span>Authentic Human Voices</span>
              <span>·</span>
              <span>Case Narratives</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Stories from the Himalayan Trails
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              Behind every statistic is a child whose pain was cured, a mother empowered, and a village school transformed.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {FIELD_STORIES.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs flex flex-col justify-between"
            >
              <div className="p-6">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="flex items-center gap-1 font-semibold text-[#16A396]">
                    <MapPin className="w-3.5 h-3.5" />
                    {story.location}
                  </span>
                  <span>{story.date}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug mb-3">{story.title}</h3>

                <p className="text-xs text-slate-700 leading-relaxed italic mb-4">
                  "{story.narrative}"
                </p>

                <div className="p-3 bg-teal-50/70 rounded-xl border border-teal-100 text-xs text-[#16A396] font-medium">
                  <strong>Outcome:</strong> {story.impactHighlight}
                </div>
              </div>

              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-slate-900 block">{story.author}</span>
                  <span className="text-slate-500">{story.role}</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-bold">
                  {story.author[0]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. SPONSORS & INSTITUTIONAL PARTNERS */}
      <section className="bg-slate-50 border-y border-slate-200/80 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#16A396] uppercase tracking-widest">
              Trusted Collaboration
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-1">Our Partners & Healthcare Allies</h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Working hand-in-hand with medical governance bodies, universities, and humanitarian grant-makers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {PARTNERS_DATA.map((partner) => (
              <div
                key={partner.id}
                className="p-4 bg-white rounded-xl border border-slate-200/80 text-center flex flex-col justify-center items-center h-28 shadow-2xs hover:shadow-xs transition-shadow"
              >
                <div className="text-xs font-extrabold tracking-wider text-slate-800">{partner.logoText}</div>
                <div className="text-[10px] text-[#16A396] font-semibold mt-1">{partner.tier}</div>
                <div className="text-[10px] text-slate-500 mt-0.5 line-clamp-1">{partner.category}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => onNavigate('sponsors')}
              className="text-xs font-semibold text-[#16A396] hover:underline cursor-pointer"
            >
              Explore our Institutional Partnership Model & CSR Opportunities →
            </button>
          </div>
        </div>
      </section>

      {/* 8. VOLUNTEER CALL-TO-ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#16A396] to-[#0E786E] text-white p-8 sm:p-12 overflow-hidden shadow-lg">
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-xs font-semibold text-[#F4C542]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Join the Movement</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Are you a Dental or Medical Student in Nepal?
            </h2>
            <p className="text-teal-50 text-sm sm:text-base leading-relaxed">
              Step out of the classroom into rural Nepal. Gain priceless clinical field experience, save smiles from severe toothaches, and build lifelong friendships with compassionate peers.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('volunteer')}
                className="px-6 py-3 bg-[#F4C542] hover:bg-[#eab308] text-slate-900 font-bold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer shadow-sm"
              >
                Apply as Volunteer Dental Student
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm rounded-xl transition-colors cursor-pointer"
              >
                Invite Us to Your University
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. DONATION CALLOUT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#16A396] uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" />
                <span>Transparent Giving</span>
                <span>·</span>
                <span className="font-nepali">पारदर्शी सहयोग</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                A Small Gift Restores Smiles Across an Entire Village
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                We accept donations directly via <strong>eSewa</strong>, <strong>Khalti</strong>, and <strong>Nepal Bank Limited / Nabil Bank</strong> wire transfers. 89.4% of every rupee directly funds medicines, atraumatic dental fillings, and oral hygiene packs.
              </p>

              {/* Donation Tiers Preview */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="text-base font-bold text-[#16A396]">रू ५०० ($4)</div>
                  <div className="text-xs text-slate-600 mt-1">Hygiene packs for 5 rural students</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="text-base font-bold text-[#16A396]">रू २,००० ($15)</div>
                  <div className="text-xs text-slate-600 mt-1">Fluoride varnish for an entire classroom</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="text-base font-bold text-[#16A396]">रू १०,००० ($75)</div>
                  <div className="text-xs text-slate-600 mt-1">Mountain porter & mobile unit logistics</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center space-y-4">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wide block">
                Instant Nepal Payment Gateways
              </span>
              <div className="flex items-center justify-center gap-3">
                <div className="px-4 py-2 bg-emerald-600 text-white font-extrabold text-xs rounded-lg shadow-2xs">
                  eSewa
                </div>
                <div className="px-4 py-2 bg-purple-700 text-white font-extrabold text-xs rounded-lg shadow-2xs">
                  Khalti
                </div>
                <div className="px-4 py-2 bg-[#16A396] text-white font-extrabold text-xs rounded-lg shadow-2xs">
                  Bank Wire
                </div>
              </div>
              <p className="text-xs text-slate-500">
                Official PAN: 618492019 · Registered under Social Welfare Council Nepal.
              </p>
              <button
                onClick={() => onNavigate('donate')}
                className="w-full py-3 bg-[#16A396] hover:bg-[#0E786E] text-white text-xs font-bold rounded-xl transition-colors shadow-xs cursor-pointer"
              >
                Go to Donation Page with QR Codes
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 10. LATEST NEWS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <div className="text-xs font-bold text-[#16A396] uppercase tracking-wider">Dispatches</div>
            <h2 className="text-2xl font-extrabold text-slate-900 mt-1">Latest News & Media Coverage</h2>
          </div>
          <button
            onClick={() => onNavigate('news')}
            className="text-xs font-bold text-[#16A396] hover:underline cursor-pointer"
          >
            All Articles →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NEWS_ARTICLES.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs flex flex-col justify-between"
            >
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                  <span className="font-semibold text-[#16A396]">{article.category}</span>
                  <span>·</span>
                  <span>{article.date}</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 leading-snug">{article.title}</h3>
                <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">{article.summary}</p>
              </div>
              <div className="p-5 pt-0">
                <button
                  onClick={() => onNavigate('news')}
                  className="text-xs font-semibold text-[#16A396] hover:underline cursor-pointer"
                >
                  Read Dispatch →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
