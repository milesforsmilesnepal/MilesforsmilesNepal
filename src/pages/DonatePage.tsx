import React, { useState } from 'react';
import { DONATION_TIERS, DONATION_METHODS } from '../data/boltData';
import { PageHeader } from '../components/PageHeader';
import { SectionHeader } from '../components/SectionHeader';
import {
  Heart,
  Copy,
  Check,
  Building,
  Smartphone,
  Globe,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

export const DonatePage: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(text);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const getMethodIcon = (name: string) => {
    switch (name) {
      case 'Bank Transfer':
        return <Building className="h-6 w-6" />;
      case 'International':
        return <Globe className="h-6 w-6" />;
      default:
        return <Smartphone className="h-6 w-6" />;
    }
  };

  return (
    <div>
      <PageHeader
        devanagariTitle="दान गर्नुहोस्"
        title="Your Donation Creates Smiles"
        subtitle="Every contribution — big or small — brings oral health care, education, and hope to communities that need it most. 100% of donations go directly to our field programs."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Donate' }]}
        bgImage="https://images.pexels.com/photos/36423522/pexels-photo-36423522.jpeg?auto=compress&cs=tinysrgb&w=1920"
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-[#F4C542]/20 px-5 py-2 text-sm font-bold text-[#F4C542] backdrop-blur-md border border-[#F4C542]/40 shadow-sm">
          <Heart className="h-4 w-4 fill-current" />
          <span>100% of donations fund our grassroots field programs</span>
        </div>
      </PageHeader>

      {/* 1. WHAT YOUR DONATION DOES */}
      <section className="section-padding">
        <div className="container-app">
          <SectionHeader
            eyebrow="Your Impact"
            title="What Your Donation Does"
            subtitle="See exactly how your contribution translates into real, tangible impact in the mountains and rural schools."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {DONATION_TIERS.map((tier) => (
              <div
                key={tier.amount}
                className="h-full rounded-3xl bg-white p-7 text-center shadow-card transition-all hover:shadow-card-hover hover:-translate-y-1.5 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${tier.color} text-white shadow-soft mb-5`}
                  >
                    <Heart className="h-8 w-8 fill-white" />
                  </div>
                  <div className="font-display text-3xl font-extrabold text-slate-900 dark:text-white">
                    {tier.amount}
                  </div>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {tier.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700">
                  <span className="text-xs font-semibold text-[#0f7069] dark:text-[#2dd4bf]">
                    Direct Field Program Support
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. PAYMENT METHODS */}
      <section className="section-padding bg-slate-50 dark:bg-slate-800/50">
        <div className="container-app">
          <SectionHeader
            eyebrow="Ways to Give"
            title="Official Donation Methods"
            subtitle="Choose the payment method that works best for you. For international supporters, options are available below."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {DONATION_METHODS.map((method) => (
              <div
                key={method.name}
                className="rounded-3xl bg-white p-7 sm:p-8 shadow-card dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex flex-col justify-between"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-[#1AAE9F] dark:bg-slate-700 dark:text-teal-300">
                    {getMethodIcon(method.name)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {method.name}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      {method.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between gap-3 rounded-2xl bg-slate-50 p-4 dark:bg-slate-700/80 border border-slate-100 dark:border-slate-600">
                  <code className="text-sm font-semibold text-slate-800 dark:text-slate-100 break-all select-all">
                    {method.id}
                  </code>
                  <button
                    onClick={() => handleCopy(method.id)}
                    className="flex-shrink-0 flex items-center gap-1 text-xs font-bold text-[#1AAE9F] hover:text-[#0f7069] dark:text-[#2dd4bf] px-3 py-1.5 rounded-lg hover:bg-white dark:hover:bg-slate-600 transition-colors cursor-pointer"
                    aria-label="Copy identifier"
                  >
                    {copiedId === method.id ? (
                      <>
                        <Check className="h-4 w-4 text-emerald-500" />
                        <span className="text-emerald-500">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Acknowledgement instruction box */}
          <div className="mt-10 rounded-3xl bg-amber-50 dark:bg-amber-900/20 p-6 sm:p-8 text-center border border-amber-200/60 dark:border-amber-700/40 max-w-3xl mx-auto">
            <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed">
              After making your donation, please email us at{' '}
              <a
                href="mailto:info@milesforsmilesnepal.org"
                className="font-bold text-[#0f7069] dark:text-[#2dd4bf] underline hover:no-underline"
              >
                info@milesforsmilesnepal.org
              </a>{' '}
              or send a screenshot via WhatsApp with your name and transaction details so our accounting team can issue an official tax-deductible receipt and update our transparency registry.
            </p>
          </div>
        </div>
      </section>

      {/* 3. OUR FINANCIAL PROMISE */}
      <section className="section-padding">
        <div className="container-app">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-4">
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1AAE9F]">
                Our Promise
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Every rupee is rigorously accounted for
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed pt-2">
                We are committed to absolute financial transparency. Our annual reports and independent audits show exactly where every contribution is allocated — from sterile autoclaves and dental composites to mountain jeep logistics and children's fluoride kits.
              </p>
              <div className="pt-2 flex items-center gap-2 text-sm font-bold text-teal-800 dark:text-teal-300">
                <ShieldCheck className="h-5 w-5 text-[#1AAE9F]" />
                <span>Zero administrative leakage · 100% field deployment</span>
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-[#0f7069] to-[#073936] p-8 sm:p-10 text-white shadow-card border border-teal-500/20 space-y-4">
              <h3 className="text-2xl font-bold">Donor Recognition Tiers</h3>
              <ul className="space-y-3 text-sm text-slate-200">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#F4C542]" />
                  <span><strong>Smile Supporter:</strong> Up to Rs 10,000 — Certificate of Appreciation & Newsletter updates</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#F4C542]" />
                  <span><strong>Smile Champion:</strong> Rs 10,000 to Rs 50,000 — Dedicated camp impact photo report</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#F4C542]" />
                  <span><strong>Smile Patron:</strong> Rs 50,000+ — Project naming rights and annual audit disclosure</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
