import React, { useState, useEffect } from 'react';
import { PageId, Project, GalleryItem, TransparencyReport } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ImpactMapPage } from './pages/ImpactMapPage';
import { GalleryPage } from './pages/GalleryPage';
import { ReportsPage } from './pages/ReportsPage';
import { VolunteerPage } from './pages/VolunteerPage';
import { SponsorsPage } from './pages/SponsorsPage';
import { DonatePage } from './pages/DonatePage';
import { NewsPage } from './pages/NewsPage';
import { ContactPage } from './pages/ContactPage';
import { ProjectModal } from './components/ProjectModal';
import { LightboxModal } from './components/LightboxModal';
import { ReportViewerModal } from './components/ReportViewerModal';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);
  const [activeReport, setActiveReport] = useState<TransparencyReport | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync hash routing for GitHub Pages compatibility and direct link sharing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home',
        'about',
        'projects',
        'impact-map',
        'gallery',
        'reports',
        'volunteer',
        'sponsors',
        'donate',
        'news',
        'contact',
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Monitor scroll for back-to-top button
  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7FAFC] text-[#1F2937]">
      {/* Top Navbar adhering to Top Bar Contract */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Content View Container */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenProject={(proj) => setActiveProject(proj)}
          />
        )}
        {currentPage === 'about' && <AboutPage onNavigate={navigateTo} />}
        {currentPage === 'projects' && (
          <ProjectsPage
            onNavigate={navigateTo}
            onOpenProject={(proj) => setActiveProject(proj)}
          />
        )}
        {currentPage === 'impact-map' && <ImpactMapPage onNavigate={navigateTo} />}
        {currentPage === 'gallery' && (
          <GalleryPage onOpenLightbox={(item) => setActiveLightboxItem(item)} />
        )}
        {currentPage === 'reports' && (
          <ReportsPage onOpenReport={(rep) => setActiveReport(rep)} />
        )}
        {currentPage === 'volunteer' && <VolunteerPage />}
        {currentPage === 'sponsors' && <SponsorsPage onNavigate={navigateTo} />}
        {currentPage === 'donate' && <DonatePage onNavigate={navigateTo} />}
        {currentPage === 'news' && <NewsPage />}
        {currentPage === 'contact' && <ContactPage onNavigate={navigateTo} />}
      </main>

      {/* Global Institutional Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Modals */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onDonate={() => navigateTo('donate')}
      />

      <LightboxModal
        item={activeLightboxItem}
        onClose={() => setActiveLightboxItem(null)}
      />

      <ReportViewerModal
        report={activeReport}
        onClose={() => setActiveReport(null)}
      />

      {/* Back to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="fixed bottom-6 right-6 z-40 p-3 bg-white/90 hover:bg-white text-slate-800 rounded-full shadow-md border border-slate-200 transition-all cursor-pointer"
        >
          <ArrowUp className="w-5 h-5 text-[#16A396]" />
        </button>
      )}
    </div>
  );
}
