import React from 'react';
import { ArrowRight, Droplets, Heart, Sparkles } from 'lucide-react';
import { Article, IMAGES } from '../data/articles';

interface BeautySectionProps {
  articles: Article[];
  onSelectArticle: (articleId: string) => void;
}

export const BeautySection: React.FC<BeautySectionProps> = ({
  articles,
  onSelectArticle,
}) => {
  const beautyArticles = articles.filter(
    (a) => a.category === 'Beauty' || a.tags.some((t) => ['Beauty', 'Skincare', 'Makeup Trends'].includes(t))
  );

  return (
    <section className="py-16 sm:py-24 border-b border-[#E6DFD5] bg-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-[#E8E1D5]">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-sans tracking-[0.22em] text-[#6B1724] uppercase font-semibold mb-1">
              <Droplets className="w-3.5 h-3.5" />
              <span>THE BEAUTY & DERMATOLOGY DESK</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#111010] font-normal tracking-tight">
              BEAUTY & SKINCARE ESSENTIALS
            </h2>
          </div>
          <p className="mt-2 md:mt-0 text-xs sm:text-sm text-[#78716C] font-sans max-w-md">
            Runway backstage formulations, skin barrier science, and the art of the effortless editorial face.
          </p>
        </div>

        {/* Feature Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          {/* Beauty Portrait Feature (5 cols) */}
          <div className="lg:col-span-5">
            <div className="aspect-square w-full overflow-hidden bg-[#ECE4D8] border border-[#DDD5C7] shadow-sm relative group cursor-pointer"
              onClick={() => onSelectArticle(beautyArticles[0]?.id || 'art-bty-01')}
            >
              <img
                src={IMAGES.beauty}
                alt="Dewy Minimalist Beauty Editorial"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-[#111010]/90 text-white p-3 backdrop-blur-sm">
                <span className="text-[10px] uppercase tracking-widest text-[#E8D4B0] font-sans font-medium block">
                  BACKSTAGE FOCUS
                </span>
                <span className="font-serif text-sm">
                  The Cloud Skin Formula: Diffused light, zero powder cakiness.
                </span>
              </div>
            </div>
          </div>

          {/* Editorial Articles (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {beautyArticles.map((item) => (
              <div
                key={item.id}
                className="bg-[#FDFBF7] border border-[#E7DFD2] p-6 hover:border-[#6B1724] transition-colors"
              >
                <div className="text-[11px] font-sans text-[#78716C] uppercase tracking-wider mb-2 flex items-center justify-between">
                  <span>{item.subcategory || 'Beauty Report'} · {item.readTime}</span>
                  <span className="text-[#6B1724] font-semibold">{item.publishedDate}</span>
                </div>

                <h3
                  onClick={() => onSelectArticle(item.id)}
                  className="font-serif text-2xl text-[#111010] hover:text-[#6B1724] transition-colors cursor-pointer mb-2 leading-snug"
                >
                  {item.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-[#5C5651] leading-relaxed mb-4">
                  {item.deck}
                </p>

                <div className="pt-3 border-t border-[#EFE8DD] flex items-center justify-between">
                  <span className="text-xs text-[#78716C] font-sans">
                    By {item.author.name}
                  </span>
                  <button
                    onClick={() => onSelectArticle(item.id)}
                    className="inline-flex items-center gap-1.5 text-xs text-[#111010] hover:text-[#6B1724] font-sans font-medium tracking-wider uppercase transition-colors"
                  >
                    <span>Read Routine</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}

            {/* Quick 4-Pillar Beauty Manifesto */}
            <div className="grid grid-cols-3 gap-3 text-center bg-[#F4EFE6] p-4 border border-[#E6DECf]">
              <div className="p-2">
                <span className="font-serif text-lg font-medium text-[#111010] block">01</span>
                <span className="text-[11px] font-sans text-[#6B1724] font-semibold uppercase block">Hydration Layer</span>
                <span className="text-[10px] text-[#78716C] font-sans">Ceramides & Squalane</span>
              </div>
              <div className="p-2 border-x border-[#DDD5C7]">
                <span className="font-serif text-lg font-medium text-[#111010] block">02</span>
                <span className="text-[11px] font-sans text-[#6B1724] font-semibold uppercase block">Spot Conceal</span>
                <span className="text-[10px] text-[#78716C] font-sans">Feathered Pinpoint</span>
              </div>
              <div className="p-2">
                <span className="font-serif text-lg font-medium text-[#111010] block">03</span>
                <span className="text-[11px] font-sans text-[#6B1724] font-semibold uppercase block">Wine Stain Lip</span>
                <span className="text-[10px] text-[#78716C] font-sans">Fingertip Tap Application</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
