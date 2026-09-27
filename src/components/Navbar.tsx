import React, { useState } from 'react';
import { PageId } from '../types';
import { Menu, X, Heart, Users } from 'lucide-react';
import { MFSNLogo } from './MFSNLogo';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'impact-map', label: 'Impact Map' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'reports', label: 'Transparency' },
    { id: 'sponsors', label: 'Partners' },
    { id: 'news', label: 'News' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      {/* Top Bar 3-Zone Contract: Brand — 4-6 Nav Links — 1-2 Primary Actions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        
        {/* Zone 1: Main Brand Logo */}
        <button
          onClick={() => handleLinkClick('home')}
          className="group cursor-pointer focus:outline-none"
        >
          <MFSNLogo variant="horizontal" size="md" />
        </button>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
          {navLinks.slice(0, 6).map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`transition-colors py-1 cursor-pointer whitespace-nowrap ${
                currentPage === link.id
                  ? 'text-[#16A396] font-bold border-b-2 border-[#16A396]'
                  : 'hover:text-slate-900'
              }`}
            >
              {link.label}
            </button>
          ))}

          {/* More dropdown for remaining institutional pages */}
          <div className="relative group">
            <button className="text-slate-600 hover:text-slate-900 flex items-center gap-1 py-1 cursor-pointer">
              <span>More</span>
              <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="absolute right-0 top-full pt-2 hidden group-hover:block z-50">
              <div className="w-48 bg-white rounded-xl shadow-lg border border-slate-200/80 py-1.5 overflow-hidden">
                {navLinks.slice(6).map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className={`w-full text-left px-4 py-2 text-xs font-medium cursor-pointer transition-colors ${
                      currentPage === item.id
                        ? 'bg-teal-50 text-[#16A396] font-semibold'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={() => handleLinkClick('volunteer')}
            className={`px-3.5 py-2 text-xs font-medium rounded-xl transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              currentPage === 'volunteer'
                ? 'bg-teal-50 text-[#16A396] font-semibold border border-teal-100'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Users className="w-3.5 h-3.5 text-[#16A396]" />
            <span>Volunteer</span>
          </button>

          <button
            onClick={() => handleLinkClick('donate')}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#16A396] hover:bg-[#0E786E] rounded-xl transition-all shadow-xs hover:shadow-sm whitespace-nowrap cursor-pointer flex items-center gap-1.5"
          >
            <Heart className="w-3.5 h-3.5 fill-current text-[#F4C542]" />
            <span>Donate</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => handleLinkClick('donate')}
            className="sm:hidden px-3 py-1.5 text-xs font-semibold text-white bg-[#16A396] rounded-lg"
          >
            Donate
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-1 shadow-lg">
          <div className="grid grid-cols-2 gap-1 mb-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left px-3 py-2 text-xs rounded-lg font-medium transition-colors ${
                  currentPage === link.id
                    ? 'bg-teal-50 text-[#16A396] font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
            <button
              onClick={() => handleLinkClick('volunteer')}
              className="flex-1 py-2 text-center text-xs font-medium text-slate-700 bg-slate-100 rounded-xl"
            >
              Join as Volunteer
            </button>
            <button
              onClick={() => handleLinkClick('donate')}
              className="flex-1 py-2 text-center text-xs font-semibold text-white bg-[#16A396] rounded-xl"
            >
              Donate Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
