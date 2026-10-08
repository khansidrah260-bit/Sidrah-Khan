import React from 'react';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { Article } from '../data/articles';

interface TodayInFashionSectionProps {
  articles: Article[];
  onSelectArticle: (articleId: string) => void;
}

export const TodayInFashionSection: React.FC<TodayInFashionSectionProps> = ({
  articles,
  onSelectArticle,
}) => {
  return (
    <section className="py-14 sm:py-20 border-b border-[#E6DFD5] bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Top Header with live date highlight */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-[#E8E1D5]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-sans tracking-[0.2em] text-[#6B1724] uppercase font-semibold mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DAILY EDITORIAL WIRE</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1 text-[#78716C]">
                <Calendar className="w-3 h-3" />
                Wednesday, October 7, 2026
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#111010] font-normal tracking-tight">
              TODAY IN FASHION
            </h2>
          </div>
          <div className="mt-2 md:mt-0 text-xs text-[#78716C] font-sans">
            Curated every morning at 06:00 CET by the global editorial desk
          </div>
        </div>

        {/* 5-Column or Responsive Grid of Today's stories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {articles.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between bg-[#F8F5EE] border border-[#E9E2D6] p-4 hover:border-[#6B1724] hover:shadow-sm transition-all duration-300"
            >
              <div>
                {/* Specific Daily Pill/Tag Kicker as requested: TREND ALERT, STYLE GUIDE, STREET STYLE, etc. */}
                <div className="mb-2.5 pb-2 border-b border-[#ECE5DA]">
                  <span className="text-[10px] tracking-[0.18em] font-sans font-bold uppercase text-[#6B1724] block">
                    {item.dailyBadge || item.category}
                  </span>
                </div>

                {/* Image */}
                <div
                  onClick={() => onSelectArticle(item.id)}
                  className="aspect-[4/3] w-full overflow-hidden bg-[#ECE5DA] cursor-pointer mb-3 relative"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 right-2 bg-[#111010]/80 text-[#FDFBF7] text-[10px] font-sans px-2 py-0.5">
                    {item.readTime}
                  </div>
                </div>

                {/* Published Date */}
                <div className="text-[11px] font-sans text-[#78716C] mb-1.5">
                  {item.publishedDate}
                </div>

                {/* Headline */}
                <h3
                  onClick={() => onSelectArticle(item.id)}
                  className="font-serif text-lg leading-snug text-[#111010] group-hover:text-[#6B1724] transition-colors cursor-pointer mb-2"
                >
                  {item.title}
                </h3>

                {/* Deck */}
                <p className="font-sans text-xs text-[#5A5550] line-clamp-3 leading-relaxed mb-4">
                  {item.deck}
                </p>
              </div>

              {/* Read More button */}
              <div className="pt-3 border-t border-[#ECE5DA]">
                <button
                  onClick={() => onSelectArticle(item.id)}
                  className="w-full inline-flex items-center justify-between text-xs tracking-wider uppercase font-sans font-semibold text-[#111010] group-hover:text-[#6B1724] transition-colors"
                >
                  <span>Read Story</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
