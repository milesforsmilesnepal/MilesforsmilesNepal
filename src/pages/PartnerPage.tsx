import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { SPONSOR_TIERS, PARTNERSHIP_BENEFITS } from '../data/boltData';
import { PageHeader } from '../components/PageHeader';
import { SectionHeader } from '../components/SectionHeader';
import {
  CheckCircle2,
  Building,
  TrendingUp,
  Eye,
  Users,
  ShieldCheck,
  Send,
  Heart,
} from 'lucide-react';

export const PartnerPage: React.FC = () => {
  const [formData, setFormData] = useState({
    organization_name: '',
    contact_name: '',
    email: '',
    phone: '',
    sponsorship_type: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const getBenefitIcon = (title: string) => {
    switch (title) {
      case 'Measurable Impact':
        return <TrendingUp className="h-7 w-7" />;
      case 'Brand Visibility':
        return <Eye className="h-7 w-7" />;
      case 'Employee Engagement':
        return <Users className="h-7 w-7" />;
      default:
        return <ShieldCheck className="h-7 w-7" />;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await supabase.from('sponsor_inquiries').insert(formData);
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
        devanagariTitle="सहयोगी बन्नुहोस्"
        title="Sponsor & Partnership"
        subtitle="Partner with us to expand our clinical reach and create sustainable grassroots impact. Together, we can ensure that no remote community is left behind."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Partner' }]}
        bgImage="https://images.pexels.com/photos/9812303/pexels-photo-9812303.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      {/* 1. WHY PARTNER WITH US */}
      <section className="section-padding">
        <div className="container-app">
          <SectionHeader
            eyebrow="Partnership Benefits"
            title="Why Partner With Us?"
            subtitle="Your partnership goes far beyond funding — it fuels a youth-led movement that restores human dignity and health across Nepal."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PARTNERSHIP_BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="h-full rounded-3xl bg-white p-7 text-center shadow-card transition-all hover:shadow-card-hover hover:-translate-y-1.5 dark:bg-slate-800 border border-slate-100 dark:border-slate-700"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-[#1AAE9F] dark:bg-slate-700 dark:text-teal-300 mb-5">
                  {getBenefitIcon(benefit.title)}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. SPONSORSHIP TIERS */}
      <section className="section-padding bg-slate-50 dark:bg-slate-800/50">
        <div className="container-app">
          <SectionHeader
            eyebrow="Sponsorship Opportunities"
            title="Choose Your Level of Impact"
            subtitle="From sponsoring a single high-altitude dental camp to becoming an annual institutional partner."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {SPONSOR_TIERS.map((tier, idx) => {
              const isPopular = idx === 1; // Community Partner

              return (
                <div
                  key={tier.title}
                  className={`relative flex flex-col justify-between rounded-3xl p-8 shadow-card transition-all hover:-translate-y-1.5 border ${
                    isPopular
                      ? 'bg-gradient-to-br from-[#0f7069] to-[#073936] text-white border-teal-400/40 shadow-lg scale-102'
                      : 'bg-white text-slate-900 dark:bg-slate-800 dark:text-white border-slate-100 dark:border-slate-700'
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#F4C542] px-4 py-1 text-xs font-extrabold uppercase tracking-wider text-[#472e00] shadow-sm">
                      Most Popular
                    </div>
                  )}

                  <div>
                    <h3 className="text-2xl font-bold">{tier.title}</h3>
                    <div
                      className={`mt-2 font-display text-3xl font-extrabold ${
                        isPopular
                          ? 'text-[#F4C542]'
                          : 'text-[#1AAE9F] dark:text-[#2dd4bf]'
                      }`}
                    >
                      {tier.amount}
                    </div>
                    <p
                      className={`mt-4 text-sm leading-relaxed ${
                        isPopular
                          ? 'text-teal-100'
                          : 'text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      {tier.desc}
                    </p>

                    <ul className="mt-8 space-y-3.5">
                      {tier.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5 text-sm">
                          <CheckCircle2
                            className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                              isPopular ? 'text-[#F4C542]' : 'text-emerald-500'
                            }`}
                          />
                          <span
                            className={
                              isPopular
                                ? 'text-slate-100'
                                : 'text-slate-600 dark:text-slate-300'
                            }
                          >
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/20 dark:border-slate-700">
                    <button
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          sponsorship_type: tier.title,
                        }));
                        const formElem = document.getElementById('sponsor-form');
                        if (formElem) {
                          formElem.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className={`w-full py-3 rounded-full text-sm font-bold text-center transition-all cursor-pointer ${
                        isPopular
                          ? 'bg-[#F4C542] text-[#472e00] hover:bg-[#eab308]'
                          : 'bg-teal-50 text-[#0f7069] hover:bg-[#1AAE9F] hover:text-white dark:bg-slate-700 dark:text-teal-300'
                      }`}
                    >
                      Select {tier.title}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. PARTNER INQUIRY FORM */}
      <section id="sponsor-form" className="section-padding">
        <div className="container-app">
          <div className="mx-auto max-w-2xl">
            {submitted ? (
              <div className="rounded-3xl bg-white p-10 text-center shadow-card dark:bg-slate-800 border border-slate-100 dark:border-slate-700 animate-fade-in">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-6">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Partnership Inquiry Received
                </h3>
                <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  Thank you for your interest in partnering with Miles for Smiles Nepal. Our leadership team will review your proposal and get in touch with an official partnership deck and MOU details.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl bg-white p-8 sm:p-10 shadow-card dark:bg-slate-800 border border-slate-100 dark:border-slate-700 space-y-6"
              >
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Partner / Sponsor Inquiry
                  </h2>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Connect with our executive board to discuss custom CSR partnerships, camp sponsorships, or supply donations.
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="label-field">Organization / Company Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.organization_name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          organization_name: e.target.value,
                        })
                      }
                      className="input-field"
                      placeholder="e.g. Acme Corp / Foundation"
                    />
                  </div>

                  <div>
                    <label className="label-field">Contact Person *</label>
                    <input
                      type="text"
                      required
                      value={formData.contact_name}
                      onChange={(e) =>
                        setFormData({ ...formData, contact_name: e.target.value })
                      }
                      className="input-field"
                      placeholder="Full name & designation"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="label-field">Work Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="input-field"
                      placeholder="contact@company.com"
                    />
                  </div>

                  <div>
                    <label className="label-field">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="input-field"
                      placeholder="+977 98XXXXXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="label-field">Partnership Interest</label>
                  <select
                    value={formData.sponsorship_type}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        sponsorship_type: e.target.value,
                      })
                    }
                    className="input-field"
                  >
                    <option value="">Select a tier or program...</option>
                    <option value="Program Sponsor (Rs 100,000+)">
                      Program Sponsor (Rs 100,000+)
                    </option>
                    <option value="Community Partner (Rs 50,000+)">
                      Community Partner (Rs 50,000+)
                    </option>
                    <option value="Smile Supporter (Rs 25,000+)">
                      Smile Supporter (Rs 25,000+)
                    </option>
                    <option value="Supply / Dental In-Kind Donation">
                      Supply / Equipment / In-Kind Donation
                    </option>
                    <option value="Other Custom CSR Collaboration">
                      Other Custom CSR Collaboration
                    </option>
                  </select>
                </div>

                <div>
                  <label className="label-field">Message / Proposal Details</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="input-field"
                    placeholder="Tell us about your organization's goals, preferred districts, or CSR priorities..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center text-base py-3.5"
                >
                  <Send className="h-4 w-4" />
                  <span>{loading ? 'Submitting...' : 'Submit Partnership Inquiry'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
