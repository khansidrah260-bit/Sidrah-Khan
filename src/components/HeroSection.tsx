import React from 'react';
import { ArrowRight, Bookmark, Clock, Share2 } from 'lucide-react';
import { Article } from '../data/articles';

interface HeroSectionProps {
  article: Article;
  onSelectArticle: (articleId: string) => void;
  isBookmarked: boolean;
  onToggleBookmark: (articleId: string) => void;
  onShare: (article: Article) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  article,
  onSelectArticle,
  isBookmarked,
  onToggleBookmark,
  onShare,
}) => {
  return (
    <section className="relative border-b border-[#E6DFD5] bg-[#F9F6F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 lg:py-14">
        {/* Editorial Eyebrow Tag */}
        <div className="flex items-center justify-between text-xs tracking-widest text-[#78716C] uppercase font-sans mb-4 border-b border-[#E8E2D7] pb-3">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#6B1724]">COVER STORY</span>
            <span aria-hidden="true">·</span>
            <span>AUTUMN / WINTER 2026</span>
            <span aria-hidden="true">·</span>
            <span>PARIS RUNWAY FORECAST</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#9C948B]" />
              {article.readTime}
            </span>
          </div>
        </div>

        {/* Hero Grid: High Fashion Photography + Editorial Typographic Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Typographic Column (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
            <div className="mb-3 text-xs tracking-[0.2em] font-sans font-medium text-[#6B1724] uppercase">
              {article.category} · {article.subcategory}
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-[3.4rem] font-normal leading-[1.08] text-[#111010] tracking-tight mb-5 text-balance">
              {article.title}
            </h1>

            <p className="font-sans text-base sm:text-lg text-[#524D48] leading-relaxed mb-8 max-w-xl">
              {article.deck}
            </p>

            {/* Author Credit & Interaction Bar */}
            <div className="flex items-center justify-between pt-6 border-t border-[#EAE3D8] mb-8">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#EAE2D5] flex items-center justify-center font-serif text-sm font-semibold text-[#6B1724] border border-[#DDD5C7]">
                  {article.author.avatarInitials}
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#1C1A19] font-sans">
                    By {article.author.name}
                  </div>
                  <div className="text-[11px] text-[#78716C] font-sans">
                    {article.author.role} · {article.publishedDate}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => onToggleBookmark(article.id)}
                  className={`p-2 rounded hover:bg-[#EFE8DD] transition-colors ${
                    isBookmarked ? 'text-[#6B1724]' : 'text-[#78716C]'
                  }`}
                  aria-label="Save story"
                  title="Save story"
                >
                  <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                </button>
                <button
                  onClick={() => onShare(article)}
                  className="p-2 rounded hover:bg-[#EFE8DD] text-[#78716C] hover:text-[#111010] transition-colors"
                  aria-label="Share story"
                  title="Share story"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Primary Action Button */}
            <div>
              <button
                onClick={() => onSelectArticle(article.id)}
                className="group inline-flex items-center gap-3 px-7 py-3.5 bg-[#111010] text-[#FDFBF7] text-xs font-sans tracking-[0.18em] font-medium uppercase hover:bg-[#6B1724] transition-all duration-300 shadow-sm"
              >
                <span>READ THE STORY</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Cinematic Image Column (7 Cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div
              onClick={() => onSelectArticle(article.id)}
              className="group cursor-pointer relative overflow-hidden bg-[#E8E1D5] shadow-lg border border-[#DDD4C6]"
            >
              <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.025] transition-transform duration-700 ease-out"
                />
              </div>

              {/* Subtle Film Grain Scrim & Caption */}
              <div className="p-3 bg-[#F4EFE6] border-t border-[#E5DDD0] flex items-center justify-between text-[11px] text-[#78716C] font-sans">
                <span className="italic font-serif truncate pr-4">
                  {article.imageCaption || 'Photograph: Paris Autumn/Winter Collections'}
                </span>
                <span className="tracking-widest uppercase text-[10px] text-[#6B1724] font-medium shrink-0">
                  EDITORIAL EXCLUSIVE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
