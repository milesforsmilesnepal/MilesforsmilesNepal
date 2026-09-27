import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { INITIAL_PROJECTS, Project } from '../data/boltData';
import { PageHeader } from '../components/PageHeader';
import { MapPin, Calendar, Users, ArrowRight } from 'lucide-react';

const CATEGORIES = ['All', 'dental-camp', 'awareness', 'education', 'community'];

export const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase
      .from('projects')
      .select('*')
      .order('display_order', { ascending: true })
      .then(({ data }) => {
        if (data && data.length > 0) {
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
  }, []);

  const filtered =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div>
      <PageHeader
        devanagariTitle="हाम्रा आयोजनाहरू"
        title="Our Projects & Field Camps"
        subtitle="Each project is a step toward reaching the unreached — bringing dental care, preventive hygiene education, and renewed hope to communities across Nepal."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Projects' }]}
        bgImage="https://images.pexels.com/photos/9812303/pexels-photo-9812303.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="section-padding">
        <div className="container-app">
          {/* Category Filter Pills matching Bolt */}
          <div className="mb-12 flex flex-wrap justify-center gap-2 sm:gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-5 py-2 text-sm font-semibold capitalize transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#1AAE9F] text-white shadow-soft scale-105'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                }`}
              >
                {cat.replace(/-/g, ' ')}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-slate-500">
              No projects found in this category.
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((proj) => (
                <article
                  key={proj.id}
                  className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1.5 dark:bg-slate-800 border border-slate-100 dark:border-slate-700"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={proj.cover_image}
                      alt={proj.title}
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
                        {proj.date && (
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5 text-[#1AAE9F]" />
                            {proj.date}
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
          )}
        </div>
      </section>
    </div>
  );
};
