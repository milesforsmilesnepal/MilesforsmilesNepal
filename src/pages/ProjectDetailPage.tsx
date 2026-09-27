import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { INITIAL_PROJECTS, Project } from '../data/boltData';
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Users,
  CheckCircle2,
  Heart,
  Target,
  Sparkles,
  Award,
} from 'lucide-react';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | null>(() => {
    return INITIAL_PROJECTS.find((p) => p.slug === slug) || null;
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!slug) return;
    supabase
      .from('projects')
      .select('*')
      .eq('slug', slug)
      .maybeSingle()
      .then(({ data }) => {
        if (data) {
          const enriched: Project = {
            ...data,
            cover_image:
              data.cover_image ||
              INITIAL_PROJECTS.find((ip) => ip.slug === data.slug)?.cover_image ||
              'https://images.pexels.com/photos/7074250/pexels-photo-7074250.jpeg?auto=compress&cs=tinysrgb&w=1200',
          };
          setProject(enriched);
        }
      });
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
          Project Not Found
        </h2>
        <p className="mt-2 text-slate-500 mb-6">
          The project you are looking for does not exist or may have been moved.
        </p>
        <Link to="/projects" className="btn-primary">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Projects</span>
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* 1. PROJECT HERO */}
      <section className="relative overflow-hidden bg-[#073936] pt-32 pb-20 md:pt-40 md:pb-28 text-white">
        <div className="absolute inset-0">
          <img
            src={project.cover_image}
            alt={project.title}
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f7069]/90 via-[#073936]/90 to-black/90" />
        </div>

        <div className="container-app relative z-10">
          <Link
            to="/projects"
            className="mb-6 inline-flex items-center gap-2 text-sm text-teal-200 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Projects</span>
          </Link>

          <div>
            <span className="inline-block rounded-full bg-[#F4C542] px-4 py-1.5 text-xs sm:text-sm font-bold capitalize text-[#472e00] shadow-sm">
              {project.category.replace(/-/g, ' ')}
            </span>
          </div>

          <h1 className="mt-4 max-w-4xl text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="mt-4 max-w-3xl text-base sm:text-lg text-slate-200 leading-relaxed">
            {project.excerpt}
          </p>

          <div className="mt-8 flex flex-wrap gap-6 text-sm text-teal-100">
            {project.location && (
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-[#F4C542]" />
                <span className="font-medium">{project.location}</span>
              </div>
            )}
            {project.date && (
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-[#F4C542]" />
                <span className="font-medium">{project.date}</span>
              </div>
            )}
            {project.beneficiaries && (
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-[#F4C542]" />
                <span className="font-medium">{project.beneficiaries}</span>
              </div>
            )}
          </div>
        </div>

        {/* Transition fade */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white dark:from-slate-900 to-transparent" />
      </section>

      {/* 2. OVERVIEW */}
      {project.overview && (
        <section className="section-padding">
          <div className="container-app">
            <div className="mx-auto max-w-4xl space-y-4">
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1AAE9F]">
                Overview
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                Project Overview & Community Context
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300 pt-2">
                {project.overview}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* 3. OBJECTIVES & ACTIVITIES */}
      <section className="section-padding bg-slate-50 dark:bg-slate-800/50">
        <div className="container-app">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Objectives */}
            {project.objectives && project.objectives.length > 0 && (
              <div className="rounded-3xl bg-white p-8 shadow-card dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-[#1AAE9F] dark:bg-teal-900/30">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Objectives
                  </h3>
                </div>

                <ul className="mt-6 space-y-3.5">
                  {project.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                      <span className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {obj}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Activities */}
            {project.activities && project.activities.length > 0 && (
              <div className="rounded-3xl bg-white p-8 shadow-card dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-[#1AAE9F] dark:bg-teal-900/30">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Key Activities
                  </h3>
                </div>

                <ul className="mt-6 space-y-3.5">
                  {project.activities.map((act, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1AAE9F]" />
                      <span className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {act}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. MEASURABLE OUTCOMES */}
      {project.outcomes && project.outcomes.length > 0 && (
        <section className="section-padding">
          <div className="container-app">
            <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-[#0f7069] to-[#073936] p-8 sm:p-12 text-white shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4C542] text-[#472e00]">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Outcomes & Impact</h3>
                  <p className="text-xs text-teal-200">Verified field results</p>
                </div>
              </div>

              <ul className="space-y-3.5">
                {project.outcomes.map((outc, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#F4C542]" />
                    <span className="text-base text-slate-100 leading-relaxed">
                      {outc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* 5. CTA */}
      <section className="pb-24">
        <div className="container-app text-center">
          <div className="rounded-3xl bg-slate-50 dark:bg-slate-800 p-8 sm:p-12 border border-slate-100 dark:border-slate-700 max-w-3xl mx-auto space-y-4">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Support Programs Like {project.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
              Your contribution enables us to purchase dental supplies, mobile equipment, and send volunteer doctors to remote regions.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link to="/donate" className="btn-primary">
                <Heart className="h-4 w-4 fill-white" />
                <span>Donate to This Cause</span>
              </Link>
              <Link to="/volunteer" className="btn-outline">
                <span>Volunteer on Camps</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
