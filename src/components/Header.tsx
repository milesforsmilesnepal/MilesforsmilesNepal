import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X, Heart } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Impact Map', to: '/impact-map' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Reports', to: '/reports' },
  { label: 'Volunteer', to: '/volunteer' },
  { label: 'Partner', to: '/partner' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

export const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass shadow-soft border-b border-slate-200/50 dark:border-slate-800/60'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-app">
        <div className="flex h-20 items-center justify-between">
          {/* Logo brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center overflow-hidden rounded-xl bg-[#1AAE9F] text-white shadow-soft h-11 w-11 transition-transform group-hover:scale-105">
              <img
                src="/mfsn_logo.jpg"
                alt="MFSN"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
              <span className="font-display text-[13px] font-extrabold tracking-tight">
                MFSN
              </span>
            </div>

            <div className="block">
              <div className="font-devanagari text-sm font-bold leading-tight text-[#0f7069] dark:text-[#2dd4bf]">
                मुस्कानको लागि पाइला नेपाल
              </div>
              <div className="text-xs font-semibold leading-tight text-slate-600 dark:text-slate-400">
                Miles for Smiles Nepal
              </div>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden items-center gap-1 xl:gap-1.5 lg:flex">
            {NAV_ITEMS.map((item) => {
              const active =
                location.pathname === item.to ||
                (item.to !== '/' && location.pathname.startsWith(item.to));

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
                    active
                      ? 'bg-teal-50 text-[#0f7069] font-bold dark:bg-teal-900/30 dark:text-[#2dd4bf]'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-[#0f7069] dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-[#2dd4bf]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Dark mode switch */}
            <button
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition-all hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5 text-amber-400" />
              )}
            </button>

            {/* Donate CTA Button */}
            <Link
              to="/donate"
              className="hidden btn-primary sm:inline-flex"
            >
              <Heart className="h-4 w-4 fill-white" />
              <span>Donate</span>
            </Link>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition-all hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 lg:hidden cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileOpen && (
          <div className="animate-fade-in-down rounded-2xl bg-white p-4 shadow-card dark:bg-slate-800 border border-slate-100 dark:border-slate-700 mb-4 lg:hidden">
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => {
                const active =
                  location.pathname === item.to ||
                  (item.to !== '/' && location.pathname.startsWith(item.to));

                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                      active
                        ? 'bg-teal-50 text-[#0f7069] font-bold dark:bg-teal-900/40 dark:text-[#2dd4bf]'
                        : 'text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-700'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="pt-2 mt-2 border-t border-slate-100 dark:border-slate-700">
                <Link
                  to="/donate"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full justify-center"
                >
                  <Heart className="h-4 w-4 fill-white" />
                  <span>Donate to Support Smiles</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
