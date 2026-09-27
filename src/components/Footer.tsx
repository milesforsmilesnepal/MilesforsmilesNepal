import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import {
  Mail,
  Phone,
  MapPin,
  Heart,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Send,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSubmitting(true);
    try {
      await supabase.from('contact_messages').insert({
        full_name: 'Newsletter Subscriber',
        email: email,
        subject: 'Newsletter Signup',
        message: `Newsletter subscription from: ${email}`,
      });
      setSubscribed(true);
      setEmail('');
    } catch {
      // Graceful fallback
      setSubscribed(true);
      setEmail('');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <footer className="relative bg-[#073936] text-slate-300">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      {/* 1. Newsletter Banner */}
      <div className="relative border-b border-white/10">
        <div className="container-app py-12">
          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white">Stay Connected</h3>
              <p className="mt-2 text-sm sm:text-base text-slate-300">
                Join our newsletter for stories from the field, clinic reports, and impact updates.
              </p>
            </div>

            {subscribed ? (
              <div className="flex items-center gap-2 rounded-full bg-[#F4C542]/20 px-6 py-3 text-[#F4C542] border border-[#F4C542]/30">
                <CheckCircle2 className="h-5 w-5" />
                <span className="text-sm font-semibold">
                  Thank you for subscribing! We'll keep you updated.
                </span>
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex w-full max-w-md gap-2"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-slate-400 focus:border-[#2dd4bf] focus:outline-none focus:ring-2 focus:ring-[#2dd4bf]/30"
                  required
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-hope whitespace-nowrap cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  <span>Subscribe</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* 2. Main Footer Links */}
      <div className="relative py-16">
        <div className="container-app grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-[#1AAE9F] p-0.5 overflow-hidden shadow-soft flex items-center justify-center">
                <img
                  src="/mfsn_logo.jpg"
                  alt="MFSN"
                  className="w-full h-full object-cover rounded-lg"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
              <div>
                <span className="font-devanagari text-base font-bold text-white block">
                  मुस्कानको लागि पाइला नेपाल
                </span>
                <span className="text-xs text-teal-300 font-semibold uppercase tracking-wider block">
                  Miles for Smiles Nepal
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-300">
              A youth-led nonprofit movement founded by dental students dedicated to improving oral health and overall well-being in underserved communities across Nepal. Reach the Unreached.
            </p>

            <div className="flex items-center gap-2 text-xs text-teal-200/90 pt-1">
              <ShieldCheck className="h-4 w-4 text-[#F4C542]" />
              <span>Registered NGO · Affiliated with Social Welfare Council</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-white transition-colors">
                  About Our Movement
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-slate-300 hover:text-white transition-colors">
                  Our Projects & Camps
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-slate-300 hover:text-white transition-colors">
                  Field Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/reports" className="text-slate-300 hover:text-white transition-colors">
                  Reports & Transparency
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-slate-300 hover:text-white transition-colors">
                  Stories & Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Get Involved
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/volunteer" className="text-slate-300 hover:text-white transition-colors">
                  Become a Volunteer
                </Link>
              </li>
              <li>
                <Link to="/partner" className="text-slate-300 hover:text-white transition-colors">
                  Sponsor & Partnership
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-slate-300 hover:text-white transition-colors">
                  Donate to Smiles
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-white transition-colors">
                  Contact Our Team
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  to="/donate"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F4C542] hover:underline"
                >
                  <Heart className="h-3.5 w-3.5 fill-current" />
                  <span>100% Direct Field Impact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details & Social */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Contact & Social
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#2dd4bf] mt-0.5 flex-shrink-0" />
                <span>Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#2dd4bf] flex-shrink-0" />
                <a
                  href="mailto:info@milesforsmilesnepal.org"
                  className="hover:text-white transition-colors break-all"
                >
                  info@milesforsmilesnepal.org
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#2dd4bf] flex-shrink-0" />
                <a
                  href="tel:+9779800000000"
                  className="hover:text-white transition-colors"
                >
                  +977 9800000000
                </a>
              </div>
            </div>

            <div className="pt-3">
              <div className="text-xs uppercase font-semibold text-slate-400 mb-2.5">
                Follow Our Journey
              </div>
              <div className="flex gap-2.5">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#1AAE9F] transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#1AAE9F] transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#1AAE9F] transition-colors"
                >
                  <Youtube className="h-4 w-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#1AAE9F] transition-colors"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Legal Disclaimer */}
      <div className="relative border-t border-white/10 py-6 text-center text-xs text-slate-400">
        <div className="container-app flex flex-col items-center justify-between gap-3 sm:flex-row">
          <div>
            © {new Date().getFullYear()} Miles for Smiles Nepal (मुस्कानको लागि पाइला नेपाल). All rights reserved.
          </div>
          <div className="font-semibold text-slate-300">
            Reach the Unreached · Reaching Every Remote Smile
          </div>
        </div>
      </div>
    </footer>
  );
};
