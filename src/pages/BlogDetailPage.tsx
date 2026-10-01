import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { INITIAL_BLOG_POSTS, BlogPost } from '../data/boltData';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';

export const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(() => {
    return INITIAL_BLOG_POSTS.find((b) => b.slug === slug) || null;
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!slug) return;
    supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .maybeSingle()
      .then(({ data }) => {
        if (data) {
          const enriched: BlogPost = {
            ...data,
            cover_image:
              data.cover_image ||
              INITIAL_BLOG_POSTS.find((bp) => bp.slug === data.slug)?.cover_image ||
              'https://images.pexels.com/photos/7074250/pexels-photo-7074250.jpeg?auto=compress&cs=tinysrgb&w=1200',
          };
          setPost(enriched);
        }
      });
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
          Post Not Found
        </h2>
        <p className="mt-2 text-slate-500 mb-6">
          The blog post you requested does not exist or may have been updated.
        </p>
        <Link to="/blog" className="btn-primary">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Blog</span>
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* 1. BLOG HERO */}
      <section className="relative overflow-hidden bg-[#073936] pt-32 pb-20 md:pt-40 md:pb-28 text-white">
        <div className="absolute inset-0">
          <img
            src={post.cover_image}
            alt={post.title}
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f7069]/90 via-[#073936]/90 to-black/90" />
        </div>

        <div className="container-app relative z-10">
          <Link
            to="/blog"
            className="mb-6 inline-flex items-center gap-2 text-sm text-teal-200 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Blog</span>
          </Link>

          <div>
            <span className="inline-block rounded-full bg-[#F4C542] px-4 py-1.5 text-xs sm:text-sm font-bold capitalize text-[#472e00] shadow-sm">
              {post.category}
            </span>
          </div>

          <h1 className="mt-4 max-w-4xl text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-teal-100">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-[#F4C542]" />
              <span>{post.author_name}</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-[#F4C542]" />
              <span>
                {new Date(post.published_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
          </div>
        </div>

        {/* Transition fade */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white dark:from-slate-900 to-transparent" />
      </section>

      {/* 2. BLOG CONTENT */}
      <article className="section-padding">
        <div className="container-app">
          <div className="mx-auto max-w-3xl">
            {post.excerpt && (
              <p className="text-xl sm:text-2xl leading-relaxed text-slate-700 dark:text-slate-200 font-medium pb-6 border-b border-slate-100 dark:border-slate-800">
                {post.excerpt}
              </p>
            )}

            <div className="mt-8 space-y-6 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              {post.content
                .split('\n\n')
                .filter(Boolean)
                .map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 flex-wrap">
                <Tag className="h-4 w-4 text-[#1AAE9F]" />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-600 dark:text-slate-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-12 text-center">
              <Link to="/blog" className="btn-outline">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to All Posts</span>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};
