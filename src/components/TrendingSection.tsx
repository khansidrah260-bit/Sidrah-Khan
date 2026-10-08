import React from 'react';
import { ArrowUpRight, Bookmark, Clock } from 'lucide-react';
import { Article } from '../data/articles';

interface TrendingSectionProps {
  articles: Article[];
  onSelectArticle: (articleId: string) => void;
  bookmarkedIds: string[];
  onToggleBookmark: (articleId: string) => void;
}

export const TrendingSection: React.FC<TrendingSectionProps> = ({
  articles,
  onSelectArticle,
  bookmarkedIds,
  onToggleBookmark,
}) => {
  return (
    <section className="py-14 sm:py-20 border-b border-[#E6DFD5] bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-[#EAE3D8]">
          <div>
            <div className="text-xs font-sans tracking-[0.22em] text-[#6B1724] uppercase font-semibold mb-1">
              CURATED SELECTION
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#111010] font-normal tracking-tight">
              TRENDING NOW
            </h2>
          </div>
          <p className="mt-2 sm:mt-0 text-xs sm:text-sm text-[#78716C] font-sans max-w-md">
            The stories, aesthetics, and silhouettes dominating the global fashion conversation this week.
          </p>
        </div>

        {/* 6 Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {articles.map((item, index) => {
            const isSaved = bookmarkedIds.includes(item.id);
            return (
              <article
                key={item.id}
                className="group flex flex-col justify-between bg-[#F8F5EE] border border-[#E9E2D6] p-4 hover:border-[#232120] hover:shadow-md transition-all duration-300"
              >
                <div>
                  {/* Image Container with subtle ratio and smooth hover zoom */}
                  <div
                    onClick={() => onSelectArticle(item.id)}
                    className="relative aspect-[4/3] w-full overflow-hidden bg-[#ECE5DA] cursor-pointer mb-4"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    {/* Index badge */}
                    <div className="absolute top-3 left-3 bg-[#111010]/80 backdrop-blur-sm text-[#FDFBF7] text-[10px] font-sans px-2 py-0.5 tracking-wider">
                      0{index + 1}
                    </div>
                    {/* Bookmark quick button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleBookmark(item.id);
                      }}
                      className="absolute top-3 right-3 p-1.5 bg-[#FDFBF7]/90 rounded-full hover:bg-white text-[#232120] transition-colors"
                      aria-label="Save story"
                    >
                      <Bookmark
                        className={`w-3.5 h-3.5 ${isSaved ? 'fill-[#6B1724] text-[#6B1724]' : ''}`}
                      />
                    </button>
                  </div>

                  {/* Clean unboxed metadata */}
                  <div className="flex items-center gap-2 text-[11px] font-sans text-[#78716C] uppercase tracking-wider mb-2">
                    <span className="font-semibold text-[#6B1724]">{item.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.publishedDate}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#9C948B]" />
                      {item.readTime}
                    </span>
                  </div>

                  {/* Article Title */}
                  <h3
                    onClick={() => onSelectArticle(item.id)}
                    className="font-serif text-xl sm:text-[1.35rem] leading-[1.25] text-[#111010] group-hover:text-[#6B1724] transition-colors cursor-pointer mb-3"
                  >
                    {item.title}
                  </h3>

                  {/* Short Description */}
                  <p className="font-sans text-xs sm:text-sm text-[#5A5550] line-clamp-2 leading-relaxed mb-6">
                    {item.deck}
                  </p>
                </div>

                {/* Footer read link */}
                <div className="pt-3 border-t border-[#ECE5DA] flex items-center justify-between">
                  <span className="text-[11px] text-[#78716C] font-sans">
                    By {item.author.name}
                  </span>
                  <button
                    onClick={() => onSelectArticle(item.id)}
                    className="inline-flex items-center gap-1 text-[11px] tracking-[0.14em] uppercase font-sans font-medium text-[#111010] group-hover:text-[#6B1724] transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
