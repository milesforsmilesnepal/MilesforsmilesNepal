import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import {
  INITIAL_BLOG_POSTS,
  INITIAL_STORIES,
  BlogPost,
  Story,
} from '../data/boltData';
import { PageHeader } from '../components/PageHeader';
import { SectionHeader } from '../components/SectionHeader';
import { Calendar, User, ArrowRight, Quote, MapPin } from 'lucide-react';

export const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>(INITIAL_BLOG_POSTS);
  const [stories, setStories] = useState<Story[]>(INITIAL_STORIES);

  useEffect(() => {
    supabase
      .from('blog_posts')
      .select('*')
      .eq('is_published', true)
      .order('published_at', { ascending: false })
      .then(({ data }) => {
        if (data && data.length > 0) {
          const enriched = data.map((p) => ({
            ...p,
            cover_image:
              p.cover_image ||
              INITIAL_BLOG_POSTS.find((bp) => bp.slug === p.slug)?.cover_image ||
              'https://images.pexels.com/photos/7074250/pexels-photo-7074250.jpeg?auto=compress&cs=tinysrgb&w=800',
          }));
          setPosts(enriched);
        }
      });

    supabase
      .from('stories')
      .select('*')
      .order('display_order', { ascending: true })
      .then(({ data }) => {
        if (data && data.length > 0) setStories(data);
      });
  }, []);

  return (
    <div>
      <PageHeader
        devanagariTitle="ब्लग तथा समाचार"
        title="Blog & Field News"
        subtitle="Stories from the field, outreach project dispatches, and the latest news from Miles for Smiles Nepal."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Blog' }]}
        bgImage="https://images.pexels.com/photos/7074250/pexels-photo-7074250.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      {/* 1. RECENT BLOG POSTS */}
      <section className="section-padding">
        <div className="container-app">
          <SectionHeader
            eyebrow="Latest News"
            title="Recent Posts & Dispatches"
            subtitle="Follow our journey as our student teams travel across mountain passes to deliver care."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1.5 dark:bg-slate-800 border border-slate-100 dark:border-slate-700"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={post.cover_image}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 inline-block rounded-full bg-white/95 px-3.5 py-1 text-xs font-bold capitalize text-[#0f7069] shadow-sm backdrop-blur-md">
                    {post.category}
                  </span>
                </div>

                <div className="flex-1 p-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">
                      <span className="flex items-center gap-1">
                        <User className="h-3.5 w-3.5 text-[#1AAE9F]" />
                        {post.author_name}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5 text-[#1AAE9F]" />
                        {new Date(post.published_at).toLocaleDateString(
                          'en-US',
                          {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          }
                        )}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-[#1AAE9F] dark:text-white dark:group-hover:text-[#2dd4bf] transition-colors leading-snug">
                      {post.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-700">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#1AAE9F] group-hover:text-[#0f7069] transition-colors"
                    >
                      <span>Read Full Story</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 2. FIELD STORIES SECTION */}
      <section className="section-padding bg-slate-50 dark:bg-slate-800/50">
        <div className="container-app">
          <SectionHeader
            eyebrow="Community Voices"
            title="Field Reflections & Patient Stories"
            subtitle="Direct accounts from patients, student volunteers, and community leaders."
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
                  <span className="text-xs text-[#0f7069] dark:text-[#2dd4bf] font-semibold flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {st.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
