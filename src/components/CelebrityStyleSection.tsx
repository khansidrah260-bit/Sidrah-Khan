import React, { useState } from 'react';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import { Article } from '../data/articles';

interface CelebrityStyleSectionProps {
  articles: Article[];
  onSelectArticle: (articleId: string) => void;
}

export const CelebrityStyleSection: React.FC<CelebrityStyleSectionProps> = ({
  articles,
  onSelectArticle,
}) => {
  const [activeTab, setActiveTab] = useState<'All' | 'Red Carpet' | 'Off-Duty & Airport' | 'Best Dressed'>('All');

  const celebArticles = articles.filter(
    (a) => a.category === 'Celebrity Style' || a.tags.some((t) => t.includes('Celebrity'))
  );

  return (
    <section className="py-16 sm:py-24 border-b border-[#E6DFD5] bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#E8E1D5]">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-sans tracking-[0.22em] text-[#6B1724] uppercase font-semibold mb-1">
              <Star className="w-3.5 h-3.5" />
              <span>THE RED CARPET & OFF-DUTY INDEX</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#111010] font-normal tracking-tight">
              CELEBRITY STYLE
            </h2>
          </div>
          <p className="mt-2 md:mt-0 text-xs sm:text-sm text-[#78716C] font-sans max-w-md">
            Rigorous analysis of gala couture, candid airport styling, and the cultural influence of the modern style muse.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center gap-2 mb-10 border-b border-[#EDE6DC] pb-3">
          {(['All', 'Red Carpet', 'Off-Duty & Airport', 'Best Dressed'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-xs font-sans uppercase tracking-wider px-3 py-1.5 transition-colors ${
                activeTab === tab
                  ? 'bg-[#111010] text-[#FDFBF7] font-medium'
                  : 'text-[#68625D] hover:text-[#111010]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Feature Layout: 1 Lead Large Story + 2 Side Stories */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {celebArticles[0] && (
            <div className="lg:col-span-7 bg-[#F7F4EB] border border-[#E7DFD2] p-6 lg:p-8 flex flex-col justify-between">
              <div>
                <div className="aspect-[16/10] w-full overflow-hidden bg-[#ECE4D8] mb-5 relative group cursor-pointer"
                  onClick={() => onSelectArticle(celebArticles[0].id)}
                >
                  <img
                    src={celebArticles[0].image}
                    alt={celebArticles[0].title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#111010]/85 text-white text-[11px] font-sans px-2.5 py-1 uppercase tracking-wider">
                    Venice Gala & Autumn Red Carpet
                  </div>
                </div>

                <div className="text-xs font-sans text-[#78716C] uppercase tracking-wider mb-2">
                  {celebArticles[0].publishedDate} · By {celebArticles[0].author.name}
                </div>

                <h3
                  onClick={() => onSelectArticle(celebArticles[0].id)}
                  className="font-serif text-2xl sm:text-3xl text-[#111010] hover:text-[#6B1724] transition-colors cursor-pointer mb-3 leading-tight"
                >
                  {celebArticles[0].title}
                </h3>

                <p className="font-sans text-sm text-[#5C5651] leading-relaxed mb-6">
                  {celebArticles[0].deck}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EDE5D8] flex items-center justify-between">
                <span className="text-xs text-[#6B1724] font-sans font-medium uppercase tracking-wider">
                  Complete Runway Analysis
                </span>
                <button
                  onClick={() => onSelectArticle(celebArticles[0].id)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111010] hover:bg-[#6B1724] text-[#FDFBF7] text-xs font-sans tracking-[0.16em] uppercase font-medium transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {celebArticles.slice(1, 3).map((art) => (
              <div
                key={art.id}
                className="bg-[#F7F4EB] border border-[#E7DFD2] p-6 hover:border-[#111010] transition-colors flex-1 flex flex-col justify-between"
              >
                <div>
                  <div className="text-[11px] font-sans text-[#78716C] uppercase tracking-wider mb-2">
                    {art.subcategory || 'Red Carpet'} · {art.readTime}
                  </div>
                  <h4
                    onClick={() => onSelectArticle(art.id)}
                    className="font-serif text-xl sm:text-2xl text-[#111010] hover:text-[#6B1724] transition-colors cursor-pointer mb-3 leading-snug"
                  >
                    {art.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5C5651] font-sans line-clamp-3 leading-relaxed mb-4">
                    {art.deck}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#EDE5D8] flex items-center justify-between">
                  <span className="text-xs text-[#78716C] font-sans">
                    By {art.author.name}
                  </span>
                  <button
                    onClick={() => onSelectArticle(art.id)}
                    className="inline-flex items-center gap-1.5 text-xs text-[#111010] hover:text-[#6B1724] font-sans font-medium uppercase tracking-wider transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}

            {/* Stylist Dossier Quotation */}
            <div className="p-5 bg-[#F0E9DC] border border-[#E3D9C9]">
              <span className="text-[10px] tracking-[0.2em] font-sans font-bold text-[#6B1724] uppercase block mb-1">
                MEMO FROM THE STYLIST LOUNGE
              </span>
              <p className="font-serif italic text-sm text-[#232120] leading-relaxed">
                “The airport concourse has become more consequential than the Academy Awards. If an outfit looks stiff at baggage claim, the look is dead.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
