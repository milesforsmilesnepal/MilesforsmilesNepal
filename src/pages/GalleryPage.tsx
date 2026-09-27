import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import {
  GALLERY_CATEGORIES,
  INITIAL_GALLERY_PHOTOS,
  GalleryPhoto,
} from '../data/boltData';
import { PageHeader } from '../components/PageHeader';
import { X, ZoomIn, MapPin } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [photos, setPhotos] = useState<GalleryPhoto[]>(INITIAL_GALLERY_PHOTOS);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  useEffect(() => {
    supabase
      .from('gallery_items')
      .select('*')
      .order('display_order', { ascending: true })
      .then(({ data }) => {
        if (data && data.length > 0) {
          setPhotos(data);
        }
      });
  }, []);

  const filtered =
    selectedCategory === 'all'
      ? photos
      : photos.filter((p) => p.category === selectedCategory);

  return (
    <div>
      <PageHeader
        devanagariTitle="ग्यालरी"
        title="Field Photo Gallery"
        subtitle="Moments from the field — capturing the smiles, the service, and the remote Himalayan communities that make our mission meaningful."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Gallery' }]}
        bgImage="https://images.pexels.com/photos/36423522/pexels-photo-36423522.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="section-padding">
        <div className="container-app">
          {/* Categories */}
          <div className="mb-12 flex flex-wrap justify-center gap-2 sm:gap-3">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.key
                    ? 'bg-[#1AAE9F] text-white shadow-soft scale-105'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Masonry Image Grid */}
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4 [&>*]:mb-4">
            {filtered.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActivePhoto(item.image_url)}
                className="group relative block w-full overflow-hidden rounded-2xl shadow-card cursor-pointer border border-slate-100 dark:border-slate-700 text-left"
              >
                <img
                  src={item.image_url}
                  alt={item.title || 'Field Photo'}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{
                    aspectRatio:
                      idx % 3 === 0 ? '4/5' : idx % 3 === 1 ? '1/1' : '4/3',
                  }}
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-4">
                  <div className="flex items-center justify-between text-white">
                    <p className="text-sm font-bold leading-tight">
                      {item.title}
                    </p>
                    <ZoomIn className="h-4 w-4 text-[#F4C542]" />
                  </div>
                  {item.location && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-teal-200">
                      <MapPin className="h-3 w-3" />
                      {item.location}
                    </p>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 animate-fade-in"
          onClick={() => setActivePhoto(null)}
        >
          <button
            onClick={() => setActivePhoto(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors cursor-pointer"
            aria-label="Close photo"
          >
            <X className="h-8 w-8" />
          </button>

          <img
            src={activePhoto}
            alt="Full Preview"
            className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};
