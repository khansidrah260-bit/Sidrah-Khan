import React, { useState } from 'react';
import { ArrowRight, Tag } from 'lucide-react';
import { Article, CLOTHING_CATEGORIES } from '../data/articles';

interface ClothingSectionProps {
  articles: Article[];
  onSelectArticle: (articleId: string) => void;
}

export const ClothingSection: React.FC<ClothingSectionProps> = ({
  articles,
  onSelectArticle,
}) => {
  const [activeCategory, setActiveCategory] = useState('All Clothing');

  const clothingArticles = articles.filter(
    (a) =>
      a.category === 'Clothing' ||
      a.tags.some((t) =>
        ['Denim', 'Trousers', 'Jackets', 'Accessories', 'Outerwear', 'Tailoring'].includes(t)
      )
  );

  return (
    <section className="py-16 sm:py-24 border-b border-[#E6DFD5] bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#EAE3D8]">
          <div>
            <div className="text-xs font-sans tracking-[0.22em] text-[#6B1724] uppercase font-semibold mb-1">
              THE SARTORIAL EDIT
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#111010] font-normal tracking-tight">
              CLOTHING & SILHOUETTES
            </h2>
          </div>
          <p className="mt-2 md:mt-0 text-xs sm:text-sm text-[#78716C] font-sans max-w-md">
            Critical analysis of construction, fabrics, and silhouettes across every foundational department.
          </p>
        </div>

        {/* Category Filter Pills (unboxed clean segmented row) */}
        <div className="mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-1.5 min-w-max border-b border-[#EDE7DD] pb-3">
            {CLOTHING_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1 text-xs font-sans tracking-wider uppercase transition-colors ${
                    isActive
                      ? 'text-[#6B1724] font-semibold border-b-2 border-[#6B1724] -mb-[13px] pb-3'
                      : 'text-[#6B6560] hover:text-[#111010]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Clothing Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clothingArticles.slice(0, 3).map((article) => (
            <div
              key={article.id}
              className="group flex flex-col justify-between bg-[#F7F4EC] border border-[#E8E1D5] p-5 hover:border-[#111010] transition-all duration-300"
            >
              <div>
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#ECE5DA] mb-4 cursor-pointer relative"
                  onClick={() => onSelectArticle(article.id)}
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-[#FDFBF7]/90 px-2 py-0.5 text-[10px] uppercase tracking-widest text-[#111010] font-sans font-medium">
                    {article.subcategory || 'Department'}
                  </div>
                </div>

                <div className="text-[11px] font-sans text-[#78716C] mb-1.5 uppercase tracking-wider">
                  {article.publishedDate} · {article.readTime}
                </div>

                <h3
                  onClick={() => onSelectArticle(article.id)}
                  className="font-serif text-xl text-[#111010] hover:text-[#6B1724] transition-colors cursor-pointer mb-2.5 leading-snug"
                >
                  {article.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-[#5C5651] line-clamp-3 leading-relaxed mb-6">
                  {article.deck}
                </p>
              </div>

              <div className="pt-3 border-t border-[#EDE5D8] flex items-center justify-between">
                <span className="text-[11px] text-[#78716C] font-sans">
                  By {article.author.name}
                </span>
                <button
                  onClick={() => onSelectArticle(article.id)}
                  className="inline-flex items-center gap-1.5 text-xs text-[#111010] hover:text-[#6B1724] font-sans font-medium tracking-wider uppercase transition-colors"
                >
                  <span>Explore Silhouette</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Department Fabric & Proportion Cheat Sheet */}
        <div className="mt-12 bg-[#F2EDE3] border border-[#E3DBD0] p-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-[#DDD5C7]">
            <div className="pt-4 md:pt-0 md:pr-6">
              <span className="text-[10px] tracking-[0.2em] font-sans font-bold text-[#6B1724] uppercase block mb-1">
                DENIM ARCHITECTURE
              </span>
              <h4 className="font-serif text-lg font-medium text-[#111010] mb-2">
                100% Selvedge vs Elastane Blends
              </h4>
              <p className="text-xs text-[#5C5651] font-sans leading-relaxed">
                Why rigid heavyweight Japanese cotton creates the sculpted drape that synthetic stretch jeans can never achieve.
              </p>
            </div>

            <div className="pt-4 md:pt-0 md:px-6">
              <span className="text-[10px] tracking-[0.2em] font-sans font-bold text-[#6B1724] uppercase block mb-1">
                OUTERWEAR PROPORTION
              </span>
              <h4 className="font-serif text-lg font-medium text-[#111010] mb-2">
                The Drop-Shoulder Ratio
              </h4>
              <p className="text-xs text-[#5C5651] font-sans leading-relaxed">
                How an unstructured 4cm shoulder drop balances wide trousers to create an effortless, non-corporate silhouette.
              </p>
            </div>

            <div className="pt-4 md:pt-0 md:pl-6">
              <span className="text-[10px] tracking-[0.2em] font-sans font-bold text-[#6B1724] uppercase block mb-1">
                FOOTWEAR ANCHORS
              </span>
              <h4 className="font-serif text-lg font-medium text-[#111010] mb-2">
                Low-Profile Loafers & Crepe Soles
              </h4>
              <p className="text-xs text-[#5C5651] font-sans leading-relaxed">
                The exact toe-box curvature required to let wide hems pool naturally without dragging across city pavements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
