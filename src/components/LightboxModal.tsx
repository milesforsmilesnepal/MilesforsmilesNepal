import React from 'react';
import { GalleryItem } from '../types';
import { X, MapPin, Calendar } from 'lucide-react';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-slate-900 text-white rounded-2xl overflow-hidden shadow-2xl border border-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close photo preview"
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative max-h-[70vh] flex items-center justify-center bg-black">
          <img
            src={item.image}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="w-full h-auto max-h-[70vh] object-contain"
          />
        </div>

        <div className="p-5 sm:p-6 bg-slate-900 border-t border-slate-800">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
            <span className="text-[#38C8BA] font-semibold uppercase tracking-wider">{item.category}</span>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#38C8BA]" />
                {item.location}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                {item.date}
              </span>
            </div>
          </div>
          <h3 className="text-lg font-bold text-white mt-1.5">{item.title}</h3>
          <p className="text-sm text-slate-300 mt-1 leading-relaxed">{item.caption}</p>
        </div>
      </div>
    </div>
  );
};
