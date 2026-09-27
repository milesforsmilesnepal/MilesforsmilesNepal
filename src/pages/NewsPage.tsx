import React, { useState } from 'react';
import { NewsArticle } from '../types';
import { NEWS_ARTICLES } from '../data/organizationData';
import { Newspaper, Calendar, Clock, ArrowRight, X, Sparkles } from 'lucide-react';

export const NewsPage: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-[#16A396] uppercase tracking-widest bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
          <Newspaper className="w-3.5 h-3.5 text-[#16A396]" />
          <span>Press & Field Dispatches · समाचार तथा सूचना</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          News & Updates
        </h1>
        <p className="text-sm sm:text-base text-slate-600 font-nepali">
          हाम्रा पछिल्ला गतिविधि, राष्ट्रिय सञ्चारमाध्यममा आएका समाचार र अभियानका घोषणाहरू
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {NEWS_ARTICLES.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between group"
          >
            <div>
              <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                <img
                  src={article.image}
                  alt={article.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-lg text-[11px] font-semibold text-[#16A396] shadow-xs">
                  {article.category}
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2.5 text-xs text-slate-500 mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    {article.date}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-[#16A396] transition-colors">
                  {article.title}
                </h3>
                {article.nepaliTitle && (
                  <p className="text-xs text-slate-500 font-nepali mt-0.5">{article.nepaliTitle}</p>
                )}
                <p className="text-xs text-slate-600 mt-2.5 line-clamp-3 leading-relaxed">
                  {article.summary}
                </p>
              </div>
            </div>

            <div className="p-5 pt-0">
              <button
                onClick={() => setSelectedArticle(article)}
                className="w-full py-2 text-center text-xs font-semibold text-[#16A396] bg-teal-50 hover:bg-sky-100 rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-xs overflow-y-auto"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 rounded-lg cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold text-[#16A396] uppercase tracking-wider mb-2">
              <span>{selectedArticle.category}</span>
              <span>·</span>
              <span>{selectedArticle.date}</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
              {selectedArticle.title}
            </h2>
            {selectedArticle.nepaliTitle && (
              <p className="text-xs text-slate-500 font-nepali mt-1">{selectedArticle.nepaliTitle}</p>
            )}

            <div className="my-5 aspect-video rounded-xl overflow-hidden bg-slate-100">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-sm text-slate-700 space-y-3 leading-relaxed text-xs sm:text-sm">
              <p className="font-semibold text-slate-800">{selectedArticle.summary}</p>
              <p>{selectedArticle.content}</p>
              <p className="text-xs text-slate-500 italic pt-2 border-t border-slate-100">
                Published by Miles for Smiles Nepal Communications Bureau · Maharajgunj, Kathmandu.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
