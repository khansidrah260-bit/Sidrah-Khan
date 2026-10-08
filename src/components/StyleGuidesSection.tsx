import React, { useState } from 'react';
import { ArrowRight, BookOpen, Check, Layers, Sparkles } from 'lucide-react';
import { Article, STYLE_GUIDE_TOPICS } from '../data/articles';

interface StyleGuidesSectionProps {
  articles: Article[];
  onSelectArticle: (articleId: string) => void;
}

export const StyleGuidesSection: React.FC<StyleGuidesSectionProps> = ({
  articles,
  onSelectArticle,
}) => {
  const [selectedTopic, setSelectedTopic] = useState('All Guides');

  const filteredGuides = articles.filter((a) => {
    if (selectedTopic === 'All Guides') return true;
    return (
      a.subcategory?.toLowerCase().includes(selectedTopic.toLowerCase()) ||
      a.tags.some((t) => t.toLowerCase().includes(selectedTopic.toLowerCase())) ||
      a.title.toLowerCase().includes(selectedTopic.toLowerCase())
    );
  });

  return (
    <section className="py-16 sm:py-24 border-b border-[#E6DFD5] bg-[#F9F5EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-sans tracking-[0.22em] text-[#6B1724] uppercase font-semibold mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>PRACTICAL SARTORIAL ARCHITECTURE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111010] font-normal tracking-tight mb-3">
            STYLE GUIDES
          </h2>
          <p className="text-sm sm:text-base text-[#68625D] font-sans leading-relaxed">
            Timeless wardrobe formulas, intelligent layering systems, and step-by-step guidance for building a purposeful wardrobe that endures.
          </p>
        </div>

        {/* Interactive Topic Filter Tabs */}
        <div className="mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center justify-start lg:justify-center gap-2 min-w-max px-2">
            {STYLE_GUIDE_TOPICS.map((topic) => {
              const isActive = selectedTopic === topic;
              return (
                <button
                  key={topic}
                  onClick={() => setSelectedTopic(topic)}
                  className={`px-3.5 py-1.5 text-xs font-sans tracking-wider uppercase transition-all duration-200 border whitespace-nowrap ${
                    isActive
                      ? 'bg-[#111010] text-[#FDFBF7] border-[#111010] font-medium shadow-sm'
                      : 'bg-[#FDFBF7] text-[#55504B] border-[#E3DBD0] hover:border-[#111010] hover:text-[#111010]'
                  }`}
                >
                  {topic}
                </button>
              );
            })}
          </div>
        </div>

        {/* Style Guide Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Main Hero Guide (7 cols) */}
          {filteredGuides[0] && (
            <div className="lg:col-span-7 bg-[#FDFBF7] border border-[#E7DFD2] p-6 lg:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#78716C] font-sans uppercase tracking-wider mb-3">
                  <span className="text-[#6B1724] font-semibold">FLAGSHIP GUIDE</span>
                  <span aria-hidden="true">·</span>
                  <span>{filteredGuides[0].subcategory}</span>
                  <span aria-hidden="true">·</span>
                  <span>{filteredGuides[0].readTime}</span>
                </div>

                <h3
                  onClick={() => onSelectArticle(filteredGuides[0].id)}
                  className="font-serif text-2xl sm:text-3xl text-[#111010] hover:text-[#6B1724] transition-colors cursor-pointer mb-4 leading-tight"
                >
                  {filteredGuides[0].title}
                </h3>

                <div
                  onClick={() => onSelectArticle(filteredGuides[0].id)}
                  className="aspect-[16/9] w-full overflow-hidden bg-[#E9E2D6] mb-5 cursor-pointer relative group"
                >
                  <img
                    src={filteredGuides[0].image}
                    alt={filteredGuides[0].title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#111010]/85 text-white text-[11px] font-sans px-2.5 py-1 tracking-wider uppercase">
                    12-Step Wardrobe System
                  </div>
                </div>

                <p className="font-sans text-sm text-[#524D48] leading-relaxed mb-6">
                  {filteredGuides[0].deck}
                </p>

                {/* Key Guide Highlights checklist */}
                <div className="bg-[#F6F0E6] p-4 border border-[#E8DECf] mb-6 space-y-2">
                  <div className="text-xs uppercase font-sans font-semibold tracking-wider text-[#232120] mb-2">
                    What You’ll Master:
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[#524D48]">
                    <Check className="w-3.5 h-3.5 text-[#6B1724] shrink-0 mt-0.5" />
                    <span>The 70/30 Rule: Distinguishing foundational basics from tactile statement pieces.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[#524D48]">
                    <Check className="w-3.5 h-3.5 text-[#6B1724] shrink-0 mt-0.5" />
                    <span>Fabric Weight Matrix: How to choose cotton, gabardine, and virgin wool that last decades.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[#524D48]">
                    <Check className="w-3.5 h-3.5 text-[#6B1724] shrink-0 mt-0.5" />
                    <span>Tailoring Alterations Checklist: The three hem adjustments that instantly double garment value.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EDE5D8] flex items-center justify-between">
                <span className="text-xs text-[#78716C] font-sans">
                  By {filteredGuides[0].author.name}
                </span>
                <button
                  onClick={() => onSelectArticle(filteredGuides[0].id)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111010] hover:bg-[#6B1724] text-[#FDFBF7] text-xs font-sans tracking-[0.16em] uppercase font-medium transition-colors"
                >
                  <span>STUDY THE GUIDE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Secondary Guides Stack (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            {filteredGuides.slice(1, 4).map((guide, idx) => (
              <div
                key={guide.id}
                className="bg-[#FDFBF7] border border-[#E7DFD2] p-5 hover:border-[#111010] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-[11px] font-sans text-[#78716C] uppercase tracking-wider mb-2">
                    <span className="text-[#6B1724] font-semibold">{guide.subcategory || 'Style Guide'}</span>
                    <span aria-hidden="true">·</span>
                    <span>{guide.readTime}</span>
                  </div>

                  <h4
                    onClick={() => onSelectArticle(guide.id)}
                    className="font-serif text-xl text-[#111010] hover:text-[#6B1724] transition-colors cursor-pointer mb-2 leading-snug"
                  >
                    {guide.title}
                  </h4>

                  <p className="font-sans text-xs text-[#5C5752] line-clamp-2 leading-relaxed mb-4">
                    {guide.deck}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EFE8DD] flex items-center justify-between">
                  <span className="text-[11px] text-[#78716C] font-sans">
                    Guide #{idx + 2}
                  </span>
                  <button
                    onClick={() => onSelectArticle(guide.id)}
                    className="inline-flex items-center gap-1.5 text-xs text-[#111010] hover:text-[#6B1724] font-sans font-medium tracking-wider uppercase transition-colors"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}

            {/* Quick Stylist Consultation Box */}
            <div className="p-6 bg-[#6B1724] text-[#FDFBF7] border border-[#52111B]">
              <div className="flex items-center gap-2 text-[11px] font-sans uppercase tracking-[0.2em] text-[#E8D4B0] mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>EDITORIAL ADVICE BUREAU</span>
              </div>
              <h4 className="font-serif text-xl mb-2">Have a Wardrobe Conundrum?</h4>
              <p className="text-xs text-[#E6DBD5] leading-relaxed mb-4 font-sans">
                Submit your seasonal styling questions to our editors. We publish solutions every Friday in our curated reader dispatch.
              </p>
              <button
                onClick={() => onSelectArticle(filteredGuides[0]?.id || 'art-sg-01')}
                className="text-xs font-sans uppercase tracking-widest text-[#FDFBF7] underline hover:text-[#E8D4B0] font-medium"
              >
                Explore Reader Q&A Archives →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
