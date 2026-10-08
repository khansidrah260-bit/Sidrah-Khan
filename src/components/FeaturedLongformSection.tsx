import React, { useState } from 'react';
import { ArrowRight, Bookmark, BookOpen, Clock, Quote, Share2, Type } from 'lucide-react';
import { Article, IMAGES } from '../data/articles';

interface FeaturedLongformSectionProps {
  article: Article;
  onOpenFullArticle: (articleId: string) => void;
  isBookmarked: boolean;
  onToggleBookmark: (articleId: string) => void;
  onShare: (article: Article) => void;
}

export const FeaturedLongformSection: React.FC<FeaturedLongformSectionProps> = ({
  article,
  onOpenFullArticle,
  isBookmarked,
  onToggleBookmark,
  onShare,
}) => {
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');

  return (
    <section className="py-16 sm:py-24 border-b border-[#E6DFD5] bg-[#FAF6F0] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        {/* Curatorial Header Ribbon */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-sans tracking-[0.25em] text-[#6B1724] uppercase font-semibold mb-3">
            <span>THE LONG-FORM EDITORIAL</span>
            <span aria-hidden="true">·</span>
            <span>SPECIAL DISPATCH</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#111010] leading-[1.08] tracking-tight mb-5 text-balance">
            HOW FASHION IS CHANGING IN 2026
          </h2>

          <p className="font-serif italic text-lg sm:text-xl text-[#5A5550] leading-relaxed max-w-2xl mx-auto mb-6">
            The Algorithmic Shift, Archival Obsession, and the Rebirth of Tactile Identity in a Post-Trend World.
          </p>

          <div className="flex items-center justify-center gap-4 text-xs font-sans text-[#78716C] uppercase tracking-wider pb-6 border-b border-[#E7E0D3]">
            <span>By {article.author.name}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
            <span aria-hidden="true">·</span>
            <span>Word Count: 1,840 Words</span>
          </div>
        </div>

        {/* Action & Utility Bar */}
        <div className="flex items-center justify-between py-3 mb-8 px-4 bg-[#F2EDE3] border border-[#E4DDD0] text-xs font-sans text-[#5A5550]">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-medium text-[#111010]">
              <BookOpen className="w-3.5 h-3.5 text-[#6B1724]" />
              Editorial Essay
            </span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span className="hidden sm:inline">Chapter I of IV</span>
          </div>

          <div className="flex items-center gap-3">
            {/* Font size toggle */}
            <button
              onClick={() => setFontSize(fontSize === 'normal' ? 'large' : 'normal')}
              className="flex items-center gap-1 hover:text-[#111010] px-2 py-1 rounded transition-colors"
              title="Adjust reading font size"
            >
              <Type className="w-3.5 h-3.5" />
              <span>{fontSize === 'normal' ? 'Enlarge Type' : 'Standard Type'}</span>
            </button>

            <button
              onClick={() => onToggleBookmark(article.id)}
              className={`p-1.5 hover:text-[#6B1724] transition-colors ${
                isBookmarked ? 'text-[#6B1724]' : ''
              }`}
              title="Bookmark essay"
            >
              <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>

            <button
              onClick={() => onShare(article)}
              className="p-1.5 hover:text-[#111010] transition-colors"
              title="Share essay"
            >
              <Share2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Lead Graphic Visual */}
        <div className="mb-12 bg-[#E7E0D3] border border-[#DCD3C4]">
          <div className="aspect-[16/9] w-full overflow-hidden">
            <img
              src={article.image}
              alt="How Fashion is Changing in 2026"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-3 bg-[#EFE8DD] text-[11px] font-sans text-[#78716C] flex items-center justify-between">
            <span className="italic font-serif">
              Figure 1.0 — Architecture and Sartorial Expression: Models in draped gabardine and textured knitwear.
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[#6B1724] font-medium hidden sm:inline">
              Archive Studio Paris
            </span>
          </div>
        </div>

        {/* Long-Form Essay Prose Body */}
        <div
          className={`font-sans text-[#232120] leading-relaxed max-w-3xl mx-auto space-y-6 ${
            fontSize === 'large' ? 'text-lg leading-[1.85]' : 'text-base sm:text-[1.05rem] leading-[1.75]'
          }`}
        >
          {/* Drop Cap First Paragraph */}
          <p className="drop-cap">
            {article.content[0]}
          </p>

          <p>
            {article.content[1]}
          </p>

          {/* Section 1 */}
          {article.sections && article.sections[0] && (
            <div className="pt-6">
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#111010] mt-8 mb-4 border-t border-[#E6DFD5] pt-6">
                {article.sections[0].heading}
              </h3>
              {article.sections[0].body.map((p, idx) => (
                <p key={idx} className="mb-4">
                  {p}
                </p>
              ))}
            </div>
          )}

          {/* Majestic Pull Quote */}
          <div className="my-10 py-8 px-6 sm:px-10 bg-[#F3EDE2] border-y border-[#DFD6C8] relative text-center">
            <Quote className="w-8 h-8 text-[#6B1724]/30 mx-auto mb-3" />
            <blockquote className="font-serif text-2xl sm:text-3xl lg:text-[2rem] font-normal italic text-[#1A1817] leading-tight mb-4">
              “Style is no longer about following one aesthetic. It is about building an identity.”
            </blockquote>
            <cite className="text-xs font-sans uppercase tracking-[0.2em] text-[#6B1724] font-medium not-italic">
              — Sloane Montgomery, Editor-in-Chief
            </cite>
          </div>

          {/* Section 2 */}
          {article.sections && article.sections[1] && (
            <div className="pt-4">
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#111010] mt-6 mb-4">
                {article.sections[1].heading}
              </h3>
              {article.sections[1].body.map((p, idx) => (
                <p key={idx} className="mb-4">
                  {p}
                </p>
              ))}
            </div>
          )}

          {/* Interstitial Editorial Graphic */}
          <div className="my-10 bg-[#E8E2D7] border border-[#DDD5C7] overflow-hidden">
            <div className="aspect-[16/9] w-full">
              <img
                src={IMAGES.streetStyle}
                alt="Streetwear meets Savile Row"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-2.5 bg-[#F0EAE0] text-[11px] font-sans text-[#78716C] italic font-serif">
              Figure 2.0 — The new street syntax: combining tailored charcoal blazers with vintage denim and tactile leather.
            </div>
          </div>

          {/* Section 3 & 4 */}
          {article.sections && article.sections[2] && (
            <div className="pt-4">
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#111010] mt-6 mb-4 border-t border-[#E6DFD5] pt-6">
                {article.sections[2].heading}
              </h3>
              {article.sections[2].body.map((p, idx) => (
                <p key={idx} className="mb-4">
                  {p}
                </p>
              ))}
            </div>
          )}

          {/* Full Long-Form Essay Expansion Banner */}
          <div className="mt-12 p-8 bg-[#111010] text-[#FDFBF7] text-center shadow-lg border border-[#232120]">
            <span className="text-[11px] font-sans tracking-[0.24em] uppercase text-[#E8D4B0] block mb-2 font-medium">
              COMPLETE 14-PAGE EDITORIAL DOSSIER
            </span>
            <h4 className="font-serif text-2xl sm:text-3xl font-light mb-3">
              Read the Full 1,840-Word Essay & Curatorial Timeline
            </h4>
            <p className="text-xs sm:text-sm text-[#A8A29E] font-sans max-w-xl mx-auto mb-6">
              Includes footnotes on archival garment sourcing, the TikTok algorithm timeline, and interviews with 8 independent creative directors in Paris and Tokyo.
            </p>
            <button
              onClick={() => onOpenFullArticle(article.id)}
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#6B1724] hover:bg-[#851C2C] text-white text-xs font-sans tracking-[0.2em] uppercase font-medium transition-colors"
            >
              <span>CONTINUE READING FULL ESSAY</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
