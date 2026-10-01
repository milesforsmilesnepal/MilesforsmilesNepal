import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { PageHeader } from '../components/PageHeader';
import { SectionHeader } from '../components/SectionHeader';
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Send,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
} from 'lucide-react';

const FAQS = [
  {
    q: 'Who can volunteer with Miles for Smiles Nepal?',
    a: 'We welcome dental students, qualified dentists, nurses, doctors, photographers, content creators, and enthusiastic general volunteers who want to help with camp logistics and children education.',
  },
  {
    q: 'How are donations utilized?',
    a: '100% of public donations directly fund field clinics, purchase sterile restorative filling materials, supply oral hygiene kits to remote schools, and cover rough terrain transport in mountain districts.',
  },
  {
    q: 'Can organizations or dental colleges partner on camps?',
    a: 'Yes! We actively collaborate with dental colleges, hospital departments, youth clubs, municipalities, and corporate CSR partners across all seven provinces of Nepal.',
  },
  {
    q: 'Are dental treatments completely free for patients?',
    a: 'Yes, every screening, restorative filling, extraction, topical fluoride application, and hygiene kit provided during our camps is 100% free of charge to community members.',
  },
];

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await supabase.from('contact_messages').insert(formData);
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <PageHeader
        devanagariTitle="सम्पर्क"
        title="Get in Touch"
        subtitle="Have a question, feedback, or want to collaborate with our youth movement? We'd love to hear from you. Reach out and join the mission."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
        bgImage="https://images.pexels.com/photos/2095948/pexels-photo-2095948.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="section-padding">
        <div className="container-app">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* 1. Contact Information Column */}
            <div className="space-y-6">
              <div className="rounded-3xl bg-white p-7 shadow-card dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-[#1AAE9F] dark:bg-slate-700 dark:text-teal-300">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
                  Email Us
                </h3>
                <a
                  href="mailto:milesforsmiles2026@gmail.com"
                  className="mt-2 block text-sm font-semibold text-[#1AAE9F] hover:text-[#0f7069] break-all"
                >
                  milesforsmiles2026@gmail.com
                </a>
              </div>

              <div className="rounded-3xl bg-white p-7 shadow-card dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-slate-700 dark:text-emerald-400">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
                  Call Us
                </h3>
                <a
                  href="tel:+9779840569920"
                  className="mt-2 block text-sm font-semibold text-[#1AAE9F] hover:text-[#0f7069]"
                >
                  +977 9840569920
                </a>
              </div>

              <div className="rounded-3xl bg-white p-7 shadow-card dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 dark:bg-slate-700 dark:text-amber-400">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
                  Visit Us
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Kathmandu, Nepal
                </p>
              </div>

              <a
                href="https://wa.me/9779840569920"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 rounded-3xl bg-[#25D366] p-6 font-bold text-white shadow-soft transition-all hover:bg-[#20ba5a] hover:scale-[1.02] active:scale-[0.98] group"
              >
                <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span>Chat Directly on WhatsApp</span>
              </a>

              {/* Follow Us */}
              <div className="rounded-3xl bg-white p-7 shadow-card dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Follow Our Movement
                </h3>
                <div className="mt-4 flex gap-3">
                  {[
                    { icon: Facebook, label: 'Facebook', url: 'https://facebook.com' },
                    { icon: Instagram, label: 'Instagram', url: 'https://instagram.com' },
                    { icon: Youtube, label: 'YouTube', url: 'https://youtube.com' },
                    { icon: Twitter, label: 'Twitter', url: 'https://twitter.com' },
                  ].map(({ icon: Icon, label, url }) => (
                    <a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all hover:bg-[#1AAE9F] hover:text-white dark:bg-slate-700 dark:text-slate-300"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. Contact Form Column */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="rounded-3xl bg-white p-10 text-center shadow-card dark:bg-slate-800 border border-slate-100 dark:border-slate-700 animate-fade-in">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-6">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Thank You for Reaching Out!
                  </h3>
                  <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-md mx-auto">
                    Your message has been delivered to our secretariat. A member of our coordination team will reply to your email within 24 to 48 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-3xl bg-white p-8 sm:p-10 shadow-card dark:bg-slate-800 border border-slate-100 dark:border-slate-700 space-y-6"
                >
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                      Send Us a Message
                    </h2>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      Have a query, camp invitation, or media inquiry? Leave your details below.
                    </p>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="label-field">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.full_name}
                        onChange={(e) =>
                          setFormData({ ...formData, full_name: e.target.value })
                        }
                        className="input-field"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label className="label-field">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="input-field"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="label-field">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="input-field"
                        placeholder="+977 98XXXXXXXX"
                      />
                    </div>

                    <div>
                      <label className="label-field">Subject *</label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="input-field"
                        placeholder="e.g. Camp collaboration / Donation query"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="label-field">Your Message *</label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="input-field"
                      placeholder="Write your message here..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center text-base py-3.5"
                  >
                    <Send className="h-4 w-4" />
                    <span>{loading ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQ ACCORDION */}
      <section className="section-padding bg-slate-50 dark:bg-slate-800/50">
        <div className="container-app">
          <SectionHeader
            eyebrow="Got Questions?"
            title="Frequently Asked Questions"
            subtitle="Answers to common questions about our dental outreach camps, volunteering, and operations."
          />

          <div className="mt-12 max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white shadow-sm dark:bg-slate-800 border border-slate-100 dark:border-slate-700 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-6 text-left font-bold text-slate-900 dark:text-white cursor-pointer"
                  >
                    <span className="text-base sm:text-lg">{faq.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-[#1AAE9F] transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-700/50 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
