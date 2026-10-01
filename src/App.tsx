import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { GalleryPage } from './pages/GalleryPage';
import { ReportsPage } from './pages/ReportsPage';
import { VolunteerPage } from './pages/VolunteerPage';
import { PartnerPage } from './pages/PartnerPage';
import { DonatePage } from './pages/DonatePage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { ImpactMapPage } from './pages/ImpactMapPage';
import { NewsPage } from './pages/NewsPage';
import { SponsorsPage } from './pages/SponsorsPage';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex min-h-screen flex-col bg-white text-slate-800 dark:bg-slate-900 dark:text-slate-100 transition-colors">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:slug" element={<ProjectDetailPage />} />
              <Route path="/impact-map" element={<ImpactMapPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/reports" element={<ReportsPage />} />
              <Route path="/volunteer" element={<VolunteerPage />} />
              <Route path="/partner" element={<PartnerPage />} />
              <Route path="/sponsors" element={<SponsorsPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/donate" element={<DonatePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogDetailPage />} />
              {/* Fallback to Home */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
