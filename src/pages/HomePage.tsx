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

const NEPAL_AUTHENTIC_PATH = "M 854.8 292.5 L 858.9 295.3 L 859.3 300.0 L 858.5 305.1 L 854.3 316.3 L 850.5 324.1 L 846.1 340.6 L 842.1 369.3 L 843.0 374.3 L 854.9 390.7 L 859.6 403.4 L 860.0 412.0 L 854.9 426.4 L 849.2 442.7 L 846.4 446.4 L 843.2 447.7 L 828.4 442.0 L 818.3 442.8 L 806.6 446.0 L 794.4 445.3 L 784.4 443.5 L 771.6 450.0 L 759.4 446.5 L 751.6 442.4 L 746.4 431.1 L 744.2 429.7 L 718.5 441.5 L 712.4 442.2 L 696.4 435.8 L 683.4 429.6 L 678.5 427.7 L 665.9 425.2 L 654.5 423.8 L 642.2 419.9 L 626.9 425.0 L 620.7 424.6 L 614.9 420.9 L 611.9 413.3 L 611.1 406.1 L 605.9 401.1 L 597.8 400.0 L 586.5 404.4 L 570.0 410.3 L 564.6 409.3 L 559.7 407.6 L 557.9 406.1 L 555.7 399.3 L 553.0 397.8 L 549.2 397.6 L 542.4 396.0 L 534.0 390.9 L 508.5 379.0 L 505.3 373.7 L 505.4 362.0 L 504.0 357.2 L 500.9 352.1 L 487.8 347.0 L 462.5 338.7 L 448.4 332.0 L 441.7 335.1 L 428.8 337.9 L 421.9 343.9 L 413.6 342.0 L 393.9 335.7 L 383.3 334.8 L 376.9 336.9 L 375.5 340.5 L 367.4 344.6 L 359.7 341.3 L 344.6 336.9 L 331.3 334.5 L 311.2 329.2 L 308.9 321.1 L 305.5 313.1 L 300.7 311.6 L 282.6 313.2 L 266.1 304.4 L 248.3 293.1 L 240.7 289.4 L 235.8 288.0 L 231.5 289.5 L 226.6 292.1 L 222.1 292.9 L 212.5 288.0 L 200.1 281.0 L 185.0 272.5 L 167.3 260.6 L 160.1 253.9 L 156.7 248.8 L 153.0 244.1 L 137.6 236.3 L 125.4 230.1 L 110.7 222.7 L 108.2 221.2 L 102.7 216.8 L 94.1 211.2 L 87.1 209.6 L 84.9 212.7 L 83.2 215.9 L 77.1 215.2 L 67.6 209.5 L 57.7 203.6 L 49.9 198.1 L 41.9 192.4 L 40.0 188.2 L 43.3 175.3 L 48.0 164.2 L 51.9 161.7 L 58.3 154.4 L 60.7 141.5 L 60.5 130.6 L 66.8 115.0 L 75.4 98.5 L 90.3 80.9 L 96.7 75.0 L 103.9 71.0 L 117.7 58.0 L 120.5 55.8 L 126.5 52.5 L 132.5 51.6 L 136.9 53.3 L 141.5 60.1 L 147.0 66.6 L 153.8 66.3 L 161.7 60.7 L 178.1 35.2 L 200.8 30.0 L 222.3 32.6 L 241.4 36.3 L 247.0 44.9 L 250.7 53.8 L 253.1 58.4 L 259.3 63.8 L 286.2 76.5 L 301.8 88.0 L 323.4 103.4 L 339.5 110.2 L 353.8 110.8 L 361.9 116.9 L 374.0 128.9 L 384.3 142.8 L 397.1 155.6 L 406.0 155.1 L 418.0 151.0 L 432.7 145.6 L 441.4 148.2 L 449.5 151.8 L 452.1 158.4 L 457.0 170.9 L 462.3 183.9 L 470.8 188.5 L 480.8 195.2 L 486.3 200.5 L 505.0 210.2 L 507.7 214.2 L 511.4 216.9 L 516.0 218.6 L 519.8 220.6 L 525.7 221.3 L 547.3 215.4 L 553.1 216.1 L 556.4 217.2 L 556.5 219.4 L 552.6 228.5 L 549.3 240.2 L 552.7 246.0 L 561.8 248.5 L 581.9 250.2 L 608.9 250.1 L 617.1 256.0 L 625.3 264.9 L 633.5 280.1 L 636.8 286.5 L 640.9 288.3 L 647.9 285.8 L 649.1 279.6 L 649.4 270.3 L 655.3 267.1 L 659.1 269.4 L 663.5 276.7 L 674.7 283.2 L 682.8 286.4 L 690.5 285.3 L 693.7 282.8 L 697.5 270.1 L 703.6 268.2 L 711.3 269.1 L 714.2 271.6 L 717.3 276.7 L 726.6 279.1 L 735.9 282.3 L 744.6 286.4 L 756.9 295.9 L 772.0 297.6 L 789.5 297.4 L 798.7 297.6 L 805.5 298.3 L 811.6 297.6 L 829.6 290.9 L 836.9 290.4 L 846.0 291.2 L 854.8 292.5 Z";

// Helper coordinate mapping projecting real lat/lng onto the authentic 900x480 SVG
function projectCoordinates(lat: number, lng: number) {
  const min_lon = 80.088425;
  const max_lon = 88.174804;
  const min_lat = 26.347;
  const max_lat = 30.447;
  const width = 820;
  const height = 420;
  const margin_x = 40;
  const margin_y = 30;

  const x = margin_x + ((lng - min_lon) / (max_lon - min_lon)) * width;
  const y = margin_y + ((max_lat - lat) / (max_lat - min_lat)) * height;
  return { x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 };
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
                  viewBox="0 0 900 480"
                  className="h-full w-full"
                  style={{ filter: 'drop-shadow(0 6px 16px rgba(26,174,159,0.15))' }}
                >
                  <defs>
                    <linearGradient id="homeNepalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="100%" stopColor="#E6F5F3" />
                    </linearGradient>
                  </defs>

                  {/* Authentic 50m Nepal Map Outline */}
                  <path
                    d={NEPAL_AUTHENTIC_PATH}
                    fill="url(#homeNepalGrad)"
                    stroke="#1AAE9F"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                    className="dark:fill-slate-700 dark:stroke-teal-400 transition-colors"
                  />

                  {/* High Himalayan Northern Crest Ridge */}
                  <path
                    d="M 120 56 Q 240 40, 360 115 T 620 250 T 840 291 L 846 320 Q 640 270, 420 160 T 160 62 Z"
                    fill="#38BDF8"
                    opacity="0.25"
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
                            r="20"
                            className="fill-[#F4C542]/40 animate-ping"
                          />
                        )}
                        <circle
                          cx={x}
                          cy={y}
                          r={isSelected ? 11 : 6.5}
                          className={
                            isSelected
                              ? 'fill-[#F4C542] stroke-white stroke-2 shadow-sm'
                              : 'fill-[#1AAE9F] hover:fill-[#2dd4bf] stroke-white stroke-[1.5]'
                          }
                          style={{ transition: 'all 0.3s' }}
                        />
                        <text
                          x={x}
                          y={y - 12}
                          textAnchor="middle"
                          fontSize={isSelected ? '12' : '10.5'}
                          fontWeight={isSelected ? '800' : '700'}
                          className="fill-slate-800 dark:fill-slate-100 select-none pointer-events-none drop-shadow-sm"
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
