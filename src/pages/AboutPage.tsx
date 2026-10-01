import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { SectionHeader } from '../components/SectionHeader';
import { CORE_VALUES, INITIAL_MILESTONES } from '../data/boltData';
import {
  Eye,
  Target,
  Heart,
  Users,
  ShieldCheck,
  Sparkles,
  Mountain,
  Globe,
  Flag,
  ArrowRight,
  Quote,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const getCoreValueIcon = (title: string) => {
    switch (title) {
      case 'Compassion':
        return <Heart className="h-6 w-6 text-[#1AAE9F]" />;
      case 'Youth-Led':
        return <Users className="h-6 w-6 text-[#1AAE9F]" />;
      case 'Transparency':
        return <ShieldCheck className="h-6 w-6 text-[#1AAE9F]" />;
      case 'Hope':
        return <Sparkles className="h-6 w-6 text-[#1AAE9F]" />;
      case 'Collaboration':
        return <Globe className="h-6 w-6 text-[#1AAE9F]" />;
      case 'Excellence':
        return <Target className="h-6 w-6 text-[#1AAE9F]" />;
      default:
        return <Heart className="h-6 w-6 text-[#1AAE9F]" />;
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
      <PageHeader
        devanagariTitle="हाम्रो बारेमा"
        title="About Miles for Smiles Nepal"
        subtitle="A youth-led movement of dental students and young professionals committed to reaching underserved communities across Nepal with oral health care, education, and compassion."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'About' }]}
        bgImage="https://images.pexels.com/photos/7074250/pexels-photo-7074250.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      {/* 1. OUR STORY */}
      <section className="section-padding">
        <div className="container-app">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Story text */}
            <div className="space-y-6">
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1AAE9F]">
                Our Story
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                From a classroom dream to a nationwide movement
              </h2>

              <div className="space-y-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  Miles for Smiles Nepal began with a simple observation by a group of dental students: millions of people in rural Nepal have no access to dental care. Children grow up with untreated toothaches, communities lack basic oral hygiene knowledge, and the nearest dentist may be days of rugged travel away.
                </p>
                <p>
                  What started as small outreach programs in Kathmandu schools has grown into a movement reaching thousands across multiple districts — from the remote mountains of Karnali to flood-affected communities in Nawalparasi. Along the way, we've discovered that oral health is not just about teeth — it's about dignity, access, and showing people that they matter.
                </p>
                <p>
                  Today, we are a network of dental students, dentists, medical professionals, and volunteers united by a belief that healthcare is a right, not a privilege. And we're just getting started.
                </p>
              </div>
            </div>

            {/* Story photo with badge */}
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7074250/pexels-photo-7074250.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Dental outreach in Nepal"
                referrerPolicy="no-referrer"
                className="w-full rounded-3xl object-cover shadow-card aspect-[4/3]"
              />

              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-[#0f7069] p-6 text-white shadow-lg md:block border border-teal-400/30">
                <div className="font-display text-3xl font-extrabold text-[#F4C542]">5+</div>
                <div className="text-xs font-semibold text-teal-100">Districts Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VISION & MISSION CARDS */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800/50">
        <div className="container-app">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Vision */}
            <div className="h-full rounded-3xl bg-gradient-to-br from-[#0f7069] to-[#073936] p-8 sm:p-10 text-white shadow-card border border-teal-500/20">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md">
                <Eye className="h-7 w-7 text-white" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-white">Our Vision</h3>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-200">
                A Nepal where every person — regardless of geography, income, or circumstance — has access to quality oral health care and the knowledge to maintain a healthy smile for life.
              </p>
            </div>

            {/* Mission */}
            <div className="h-full rounded-3xl bg-gradient-to-br from-[#1AAE9F] to-[#148f84] p-8 sm:p-10 text-white shadow-card border border-teal-400/30">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md">
                <Target className="h-7 w-7 text-white" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-white">Our Mission</h3>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-100">
                To reach underserved and marginalized communities across Nepal with free dental treatment, oral health education, and humanitarian support — ensuring that geography, poverty, or lack of access never become barriers to a healthy smile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES */}
      <section className="section-padding">
        <div className="container-app">
          <SectionHeader
            eyebrow="What Guides Us"
            title="Our Core Values"
            subtitle="The principles that shape every decision we make and every community we serve."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_VALUES.map((val) => (
              <div
                key={val.title}
                className="group h-full rounded-2xl border border-slate-100 bg-white p-7 shadow-card transition-all hover:shadow-card-hover hover:-translate-y-1 dark:border-slate-700 dark:bg-slate-800"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-[#1AAE9F] transition-all group-hover:bg-[#1AAE9F] group-hover:text-white dark:bg-slate-700 dark:text-teal-300">
                  {getCoreValueIcon(val.title)}
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
                  {val.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FOUNDER'S MESSAGE */}
      <section className="section-padding bg-gradient-to-b from-white to-slate-50 dark:from-slate-800/50 dark:to-slate-900">
        <div className="container-app">
          <div className="mx-auto max-w-4xl">
            <div className="relative rounded-3xl bg-white p-8 sm:p-12 shadow-card dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
              <Quote className="absolute top-6 right-6 h-16 w-16 text-slate-100 dark:text-slate-700 pointer-events-none" />

              <div className="relative">
                <div className="mb-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1AAE9F]">
                  Founder's Message
                </div>
                <blockquote className="text-lg sm:text-xl leading-relaxed text-slate-700 dark:text-slate-200 italic">
                  "When we started Miles for Smiles Nepal, we were just dental students with a simple belief: that every smile deserves care. Today, having reached thousands across some of Nepal's most remote communities, that belief has only grown stronger. We've seen firsthand that oral health is not a luxury — it's a fundamental part of human dignity. To every volunteer, donor, and partner who has walked this journey with us: thank you. Together, we are proving that young people can drive real, lasting change. And together, we will keep reaching the unreached."
                </blockquote>

                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#1AAE9F] to-[#0f7069] text-xl font-bold text-white shadow-soft">
                    M
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white text-base">
                      Founding Executive Committee
                    </div>
                    <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                      Miles for Smiles Nepal (मुस्कानको लागि पाइला नेपाल)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. YOUTH LEADERSHIP PILLARS */}
      <section className="section-padding">
        <div className="container-app">
          <SectionHeader
            eyebrow="Our Strength"
            title="Youth Leadership"
            subtitle="Young people are at the heart of everything we do — bringing energy, innovation, and an unwavering commitment to service."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Dental Students',
                desc: 'The backbone of our organization — bringing clinical skills, fresh perspectives, and boundless energy to every camp and school visit.',
              },
              {
                title: 'Young Dentists',
                desc: 'Recent graduates and practicing professionals who mentor students, supervise clinical protocols, and lead complex procedures in the field.',
              },
              {
                title: 'Multidisciplinary Volunteers',
                desc: 'Photographers, designers, content creators, and general volunteers who amplify our mission, manage logistics, and drive operations.',
              },
            ].map((p) => (
              <div
                key={p.title}
                className="h-full rounded-2xl bg-gradient-to-br from-teal-50 to-sky-50/50 p-8 dark:from-slate-800 dark:to-slate-800 border border-teal-100/50 dark:border-slate-700"
              >
                <h3 className="text-xl font-bold text-[#0f7069] dark:text-[#2dd4bf]">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. MILESTONES TIMELINE */}
      <section className="section-padding bg-[#073936] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

        <div className="container-app relative z-10">
          <SectionHeader
            eyebrow="Milestones"
            title="Our Journey So Far"
            subtitle="Key moments in our evolution from a student initiative to a trusted NGO."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INITIAL_MILESTONES.map((m) => (
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

          <div className="mt-16 text-center">
            <Link to="/volunteer" className="btn-hope">
              <span>Join Our Volunteer Movement</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
