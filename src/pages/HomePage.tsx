import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import {
  HERO_SLIDES,
  INITIAL_IMPACT_METRICS,
  INITIAL_DISTRICTS,
  INITIAL_PROJECTS,
  INITIAL_MILESTONES,
  INITIAL_STORIES,
  CORE_VALUES,
  ImpactMetric,
  District,
  Project,
  Milestone,
  Story,
} from '../data/boltData';
import { SectionHeader } from '../components/SectionHeader';
import { AnimatedCounter } from '../components/AnimatedCounter';
import {
  Heart,
  Users,
  MapPin,
  Sparkles,
  Smile,
  Package,
  GraduationCap,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Quote,
  Building,
  Flag,
  Mountain,
  Globe,
  CheckCircle2,
  ExternalLink,
  HandHeart,
  ShieldCheck,
} from 'lucide-react';

// Helper coordinate mapping matching Bolt's JE(lat, lng) function
function projectCoordinates(lat: number, lng: number) {
  const x = ((lng - 79.5) / 9) * 100;
  const y = ((30.5 - lat) / (30.5 - 25.5)) * 100;
  return { x, y };
}

export const HomePage: React.FC = () => {
  // Hero slider state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Live or fallback data states
  const [metrics, setMetrics] = useState<ImpactMetric[]>(INITIAL_IMPACT_METRICS);
  const [districts, setDistricts] = useState<District[]>(INITIAL_DISTRICTS);
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [milestones, setMilestones] = useState<Milestone[]>(INITIAL_MILESTONES);
  const [stories, setStories] = useState<Story[]>(INITIAL_STORIES);

  // Selected district in map
  const [selectedDistrict, setSelectedDistrict] = useState<District | null>(INITIAL_DISTRICTS[1]); // Default to Jumla

  // Auto-advance hero slides
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Load latest data from Supabase if connected
  useEffect(() => {
    supabase
      .from('impact_metrics')
      .select('*')
      .order('display_order', { ascending: true })
      .then(({ data }) => {
        if (data && data.length > 0) setMetrics(data);
      });

    supabase
      .from('districts')
      .select('*')
      .order('display_order', { ascending: true })
      .then(({ data }) => {
        if (data && data.length > 0) setDistricts(data);
      });

    supabase
      .from('projects')
      .select('*')
      .order('display_order', { ascending: true })
      .then(({ data }) => {
        if (data && data.length > 0) {
          // ensure cover images
          const enriched = data.map((p) => ({
            ...p,
            cover_image:
              p.cover_image ||
              INITIAL_PROJECTS.find((ip) => ip.slug === p.slug)?.cover_image ||
              'https://images.pexels.com/photos/7074250/pexels-photo-7074250.jpeg?auto=compress&cs=tinysrgb&w=800',
          }));
          setProjects(enriched);
        }
      });

    supabase
      .from('milestones')
      .select('*')
      .order('display_order', { ascending: true })
      .then(({ data }) => {
        if (data && data.length > 0) setMilestones(data);
      });

    supabase
      .from('stories')
      .select('*')
      .order('display_order', { ascending: true })
      .then(({ data }) => {
        if (data && data.length > 0) setStories(data);
      });
  }, []);

  const getMetricIcon = (iconName: string) => {
    switch (iconName) {
      case 'graduation-cap':
        return <GraduationCap className="h-6 w-6 text-[#1AAE9F]" />;
      case 'heart':
        return <Heart className="h-6 w-6 text-[#1AAE9F]" />;
      case 'map-pin':
        return <MapPin className="h-6 w-6 text-[#1AAE9F]" />;
      case 'package':
        return <Package className="h-6 w-6 text-[#1AAE9F]" />;
      case 'smile':
        return <Smile className="h-6 w-6 text-[#1AAE9F]" />;
      default:
        return <Sparkles className="h-6 w-6 text-[#1AAE9F]" />;
    }
  };

  const getMilestoneIcon = (iconName: string) => {
    switch (iconName) {
      case 'flag':
        return <Flag className="h-5 w-5 text-[#F4C542]" />;
      case 'sparkles':
        return <Sparkles className="h-5 w-5 text-[#F4C542]" />;
      case 'mountain':
        return <Mountain className="h-5 w-5 text-[#F4C542]" />;
      case 'globe':
        return <Globe className="h-5 w-5 text-[#F4C542]" />;
      case 'users':
        return <Users className="h-5 w-5 text-[#F4C542]" />;
      default:
        return <Heart className="h-5 w-5 text-[#F4C542]" />;
    }
  };

  return (
    <div>
      {/* 1. HERO SLIDER */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden bg-slate-900">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.title}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

            {/* Slide Content */}
            <div className="container-app relative flex h-full items-center">
              <div className="max-w-3xl text-white pt-16">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-4 py-2 text-xs sm:text-sm font-semibold text-[#F4C542] border border-white/15 mb-6 animate-fade-in-down shadow-sm">
                  <span className="font-devanagari font-bold">मुस्कानका लागि पाइला नेपाल</span>
                  <span className="text-slate-300">|</span>
                  <span className="text-white">Reaching the Unreached</span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight drop-shadow-md animate-fade-in-up font-display">
                  {slide.title}
                </h1>

                <p className="mt-6 text-lg sm:text-xl text-slate-200 leading-relaxed font-normal max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  {slide.subtitle}
                </p>

                <div className="mt-8 flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  <Link to="/donate" className="btn-hope">
                    <Heart className="h-5 w-5" fill="currentColor" />
                    <span>Donate Now</span>
                  </Link>

                  <Link to="/volunteer" className="btn-dental">
                    <Users className="h-5 w-5" />
                    <span>Join as Volunteer</span>
                  </Link>

                  <Link to="/projects" className="btn-outline border-white text-white hover:bg-white/10">
                    <span>Our Projects</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Floating Hero Badge */}
              <div className="hidden xl:flex flex-col gap-3 absolute top-1/3 right-12 z-20 animate-float">
                <div className="rounded-2xl bg-white/10 backdrop-blur-md p-5 border border-white/20 text-white shadow-2xl max-w-xs">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-[#1AAE9F] flex items-center justify-center text-white shadow-soft">
                      <Smile className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-teal-300 font-semibold">100% Youth-Led</div>
                      <div className="text-sm font-bold">Dental Student Initiative</div>
                    </div>
                  </div>
                  <div className="mt-3 text-xs text-slate-200 leading-relaxed border-t border-white/10 pt-2.5">
                    "Reaching the unreached, one smile at a time across remote Nepal."
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <div className="absolute bottom-8 left-0 right-0 z-20">
          <div className="container-app flex items-center justify-between">
            {/* Dots */}
            <div className="flex gap-2">
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    idx === currentSlide ? 'w-8 bg-[#1AAE9F]' : 'w-2.5 bg-white/50 hover:bg-white'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next buttons */}
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md hover:bg-white/40 transition-colors cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextSlide}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md hover:bg-white/40 transition-colors cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. IMPACT METRICS OVERLAY WITH ANIMATED COUNTER */}
      <section className="relative -mt-16 sm:-mt-20 z-20">
        <div className="container-app">
          <div className="grid grid-cols-2 gap-4 rounded-3xl bg-white p-6 sm:p-8 shadow-card dark:bg-slate-800 lg:grid-cols-5 border border-slate-100 dark:border-slate-700">
            {metrics.map((m) => (
              <div
                key={m.id}
                className="flex flex-col items-center text-center p-3 sm:p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all hover:-translate-y-1 duration-300 group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 dark:bg-teal-900/30 mb-3 group-hover:scale-110 transition-transform">
                  {getMetricIcon(m.icon)}
                </div>
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  <AnimatedCounter value={m.value} suffix={m.suffix} />
                </div>
                <div className="mt-1 text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MISSION & STORY SECTION */}
      <section className="section-padding">
        <div className="container-app">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Collage */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="https://images.pexels.com/photos/7074250/pexels-photo-7074250.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Dental checkup Nepal"
                    className="w-full rounded-2xl object-cover shadow-card aspect-[4/5]"
                  />
                  <img
                    src="https://images.pexels.com/photos/36423522/pexels-photo-36423522.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Happy smiling children Nepal"
                    className="w-full rounded-2xl object-cover shadow-card aspect-[1/1]"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img
                    src="https://images.pexels.com/photos/9812303/pexels-photo-9812303.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Community oral hygiene camp"
                    className="w-full rounded-2xl object-cover shadow-card aspect-[1/1]"
                  />
                  <img
                    src="https://images.pexels.com/photos/2095948/pexels-photo-2095948.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Volunteer dental team Nepal"
                    className="w-full rounded-2xl object-cover shadow-card aspect-[4/5]"
                  />
                </div>
              </div>

              {/* Float badge */}
              <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-[#073936] p-6 text-white shadow-lg sm:block border border-teal-500/30">
                <div className="font-devanagari text-lg text-[#F4C542] font-bold">
                  मुस्कानको लागि पाइला
                </div>
                <div className="text-xs text-teal-200 font-semibold mt-1">
                  Youth-Led Dental Movement
                </div>
              </div>
            </div>

            {/* Right Copy */}
            <div className="space-y-6">
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1AAE9F]">
                About Our Movement
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Reaching the Unreached with Compassion & Care
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Oral health is essential to overall well-being, yet it remains one of the most neglected areas of healthcare in Nepal — especially in rural and underserved communities where families may walk for days to see a doctor.
              </p>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Founded by dental students, <strong className="text-slate-900 dark:text-white">Miles for Smiles Nepal (मुस्कानको लागि पाइला नेपाल)</strong> travels to high-altitude monasteries, flood-ravaged villages, and remote schools to deliver free restorative dental treatment, oral hygiene kits, and preventive education.
              </p>

              {/* 4 Core Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {CORE_VALUES.slice(0, 4).map((val) => (
                  <div
                    key={val.title}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700"
                  >
                    <div className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-[#1AAE9F]" />
                      {val.title}
                    </div>
                    <div className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {val.description}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link to="/about" className="btn-outline">
                  <span>Learn More About Us</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. NEPAL IMPACT MAP SECTION */}
      <section className="section-padding bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800/50">
        <div className="container-app">
          <SectionHeader
            eyebrow="Our Reach"
            title="Nepal Impact Map"
            subtitle="Click on a district to explore the communities we've reached and the impact we've made together."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-5 items-start">
            {/* Interactive SVG Nepal Map */}
            <div className="lg:col-span-3 rounded-3xl bg-gradient-to-br from-teal-50/70 to-sky-50/50 p-6 shadow-card dark:from-slate-800 dark:to-slate-700 border border-teal-100 dark:border-slate-600 relative overflow-hidden">
              <div className="relative aspect-[4/3] w-full">
                <svg
                  viewBox="0 0 100 75"
                  className="h-full w-full"
                  style={{ filter: 'drop-shadow(0 4px 12px rgba(26,174,159,0.15))' }}
                >
                  {/* Stylized Nepal Map outline from Bolt */}
                  <path
                    d="M 8,15 L 15,8 L 25,6 L 35,10 L 45,7 L 55,5 L 62,9 L 70,6 L 78,10 L 85,8 L 90,15 L 92,25 L 88,35 L 90,45 L 85,55 L 80,60 L 70,62 L 60,58 L 50,62 L 40,60 L 30,58 L 22,55 L 15,50 L 10,42 L 8,35 L 6,25 Z"
                    className="fill-white stroke-teal-200 stroke-1 dark:fill-slate-700 dark:stroke-slate-600 transition-colors"
                  />

                  {/* Interactive Districts */}
                  {districts.map((dist) => {
                    const { x, y } = projectCoordinates(dist.lat, dist.lng);
                    const isSelected = selectedDistrict?.id === dist.id;

                    return (
                      <g
                        key={dist.id}
                        onClick={() => setSelectedDistrict(dist)}
                        className="cursor-pointer group"
                      >
                        {isSelected && (
                          <circle
                            cx={x}
                            cy={y}
                            r="4.5"
                            className="fill-[#F4C542]/40 animate-ping"
                          />
                        )}
                        <circle
                          cx={x}
                          cy={y}
                          r={isSelected ? '2.8' : '1.8'}
                          className={
                            isSelected
                              ? 'fill-[#F4C542] stroke-white stroke-[0.4]'
                              : 'fill-[#1AAE9F] hover:fill-[#2dd4bf] stroke-white stroke-[0.3]'
                          }
                          style={{ transition: 'all 0.3s' }}
                        />
                        <text
                          x={x}
                          y={y - 3.2}
                          textAnchor="middle"
                          className="fill-slate-800 text-[2.6px] font-bold dark:fill-slate-200 select-none pointer-events-none"
                        >
                          {dist.name}
                        </text>
                      </g>
                    );
                  })}
                </svg>

                {/* Map Legend */}
                <div className="absolute bottom-4 left-4 flex items-center gap-4 rounded-xl bg-white/90 px-4 py-2 text-xs font-semibold backdrop-blur-md dark:bg-slate-800/90 shadow-sm border border-slate-100 dark:border-slate-700">
                  <div className="flex items-center gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-[#1AAE9F]" />
                    <span className="text-slate-700 dark:text-slate-300">
                      District Reached
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-[#F4C542]" />
                    <span className="text-slate-700 dark:text-slate-300">
                      Selected
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Selected District Details Card */}
            <div className="lg:col-span-2">
              {selectedDistrict ? (
                <div className="animate-fade-in rounded-3xl bg-white p-8 shadow-card dark:bg-slate-800 border border-slate-100 dark:border-slate-700 space-y-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#1AAE9F]">
                        {selectedDistrict.region} Region
                      </span>
                      <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">
                        {selectedDistrict.name}
                      </h3>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700 dark:bg-teal-900/30 dark:text-teal-300">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Active Outreach
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {selectedDistrict.project_summary ||
                      'Comprehensive oral health camps, student hygiene education, and free clinical dental care.'}
                  </p>

                  <div className="p-4 rounded-2xl bg-teal-50/60 dark:bg-slate-700/50 border border-teal-100/60 dark:border-slate-600">
                    <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      Community Beneficiaries
                    </div>
                    <div className="text-lg font-bold text-[#0f7069] dark:text-[#2dd4bf] mt-0.5">
                      {selectedDistrict.beneficiaries || 'Hundreds of patients'}
                    </div>
                  </div>

                  <div className="pt-2 flex gap-3">
                    <Link to="/projects" className="btn-primary w-full text-center">
                      <span>View Project Details</span>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="rounded-3xl bg-white p-8 text-center shadow-card dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-slate-500">
                  Select a district on the map to explore outreach details.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED PROJECTS SECTION */}
      <section className="section-padding">
        <div className="container-app">
          <SectionHeader
            eyebrow="What We Do"
            title="Featured Projects"
            subtitle="Every project brings smiles, pain relief, and sustainable oral health education."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((proj) => (
              <article
                key={proj.id}
                className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1.5 dark:bg-slate-800 border border-slate-100 dark:border-slate-700"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={proj.cover_image}
                    alt={proj.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 inline-block rounded-full bg-white/95 px-3.5 py-1 text-xs font-bold capitalize text-[#0f7069] shadow-sm backdrop-blur-md">
                    {proj.category.replace(/-/g, ' ')}
                  </span>
                </div>

                <div className="flex-1 p-6 sm:p-7 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-[#1AAE9F] dark:text-white dark:group-hover:text-[#2dd4bf]">
                      {proj.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 line-clamp-3">
                      {proj.excerpt}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-500 dark:text-slate-400">
                      {proj.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5 text-[#1AAE9F]" />
                          {proj.location}
                        </span>
                      )}
                      {proj.beneficiaries && (
                        <span className="flex items-center gap-1">
                          <Users className="h-3.5 w-3.5 text-[#1AAE9F]" />
                          {proj.beneficiaries}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700">
                    <Link
                      to={`/projects/${proj.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#1AAE9F] group-hover:text-[#0f7069] transition-colors"
                    >
                      <span>View Project Details</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/projects" className="btn-outline">
              <span>View All Projects</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. MILESTONES & JOURNEY SECTION */}
      <section className="section-padding bg-[#073936] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

        <div className="container-app relative z-10">
          <SectionHeader
            eyebrow="Our Journey"
            title="From Dental Students to a Movement"
            subtitle="Key milestones that have shaped our mission of reaching the unreached."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {milestones.map((m) => (
              <div
                key={m.id}
                className="rounded-3xl bg-white/10 p-6 sm:p-7 backdrop-blur-md border border-white/10 hover:border-teal-400/40 transition-all hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#F4C542] px-3.5 py-1 text-xs font-extrabold text-[#472e00]">
                    {m.year}
                  </span>
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                    {getMilestoneIcon(m.icon)}
                  </div>
                </div>

                <h3 className="mt-4 text-xl font-bold text-white">
                  {m.title}
                </h3>

                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FIELD STORIES SECTION */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container-app">
          <SectionHeader
            eyebrow="Stories from the Field"
            title="Voices of Impact & Hope"
            subtitle="Behind every number is a human story of relief, renewed dignity, and lasting smiles."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {stories.map((st) => (
              <div
                key={st.id}
                className="flex flex-col justify-between rounded-3xl bg-white p-7 sm:p-8 shadow-card dark:bg-slate-800 border border-slate-100 dark:border-slate-700"
              >
                <div>
                  <Quote className="h-8 w-8 text-[#1AAE9F] opacity-70 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {st.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 italic">
                    "{st.excerpt}"
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      {st.author_name}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {st.author_role}
                    </div>
                  </div>
                  <span className="text-xs text-[#0f7069] dark:text-[#2dd4bf] font-semibold">
                    {st.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SPONSORS & PARTNERS */}
      <section className="section-padding bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <div className="container-app text-center">
          <SectionHeader
            eyebrow="Community & Institutional Backing"
            title="Sponsors & Partners"
            subtitle="We are grateful for the organizations and individuals who make our work across Nepal possible."
          />

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {[
              { name: 'Nepal Dental Association (NDA)', role: 'Professional Partner' },
              { name: 'Kantipur Dental College', role: 'Academic Clinical Partner' },
              { name: 'Rotary International Nepal', role: 'Community Partner' },
              { name: 'Karnali Rural Municipality', role: 'Local Government Host' },
              { name: 'Lions Club District 325', role: 'Logistics Supporter' },
              { name: 'Youth Red Cross Circle', role: 'Volunteer Outreach' },
            ].map((p, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all group"
              >
                <div className="h-10 w-10 rounded-xl bg-teal-50 dark:bg-teal-900/30 text-[#1AAE9F] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Building className="h-5 w-5" />
                </div>
                <div className="text-xs font-bold text-slate-800 dark:text-slate-100 text-center line-clamp-2">
                  {p.name}
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 text-center">
                  {p.role}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link to="/partner" className="inline-flex items-center gap-2 text-sm font-bold text-[#1AAE9F] hover:text-[#0f7069] dark:hover:text-[#2dd4bf] transition-colors">
              <span>Become an Institutional Partner</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. CALL TO ACTION CARDS */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f7069] via-[#148f84] to-[#073936] py-20 text-white">
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

        <div className="container-app relative z-10 text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-teal-200">
            <span>Be Part of the Smile Revolution</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Together, We Can Reach Every Remote Village in Nepal
          </h2>

          <p className="text-base sm:text-lg text-teal-100 max-w-2xl mx-auto leading-relaxed">
            Whether through donation, professional volunteering, or institutional CSR sponsorship — your support directly restores pain-free smiles.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 text-left">
            <Link
              to="/donate"
              className="group rounded-3xl bg-white p-7 text-slate-900 shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="h-12 w-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 fill-current" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#1AAE9F] transition-colors">
                Donate Now
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                100% of donations directly fund dental supplies, mobile clinics, and remote patient care.
              </p>
            </Link>

            <Link
              to="/volunteer"
              className="group rounded-3xl bg-white p-7 text-slate-900 shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="h-12 w-12 rounded-2xl bg-teal-100 text-teal-600 flex items-center justify-center mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#1AAE9F] transition-colors">
                Volunteer With Us
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Join dental students, dentists, and youth volunteers on the trails and in community schools.
              </p>
            </Link>

            <Link
              to="/partner"
              className="group rounded-3xl bg-white p-7 text-slate-900 shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="h-12 w-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center mb-4">
                <Building className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#1AAE9F] transition-colors">
                Corporate CSR & Partners
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Sponsor a dental camp, supply hygiene materials, and receive transparent impact reporting.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
