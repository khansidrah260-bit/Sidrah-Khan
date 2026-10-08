import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowUpRight, Clock } from 'lucide-react';
import { Article, ARTICLES } from '../data/articles';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectArticle: (articleId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectArticle,
}) => {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const categories = ['All', 'Trending', 'Style Guides', 'Clothing', 'Street Style', 'Celebrity Style', 'Beauty'];

  const filteredArticles = ARTICLES.filter((article) => {
    const matchesFilter = activeFilter === 'All' || article.category === activeFilter;
    if (!matchesFilter) return false;

    if (!query.trim()) return true;

    const q = query.toLowerCase();
    const titleMatch = article.title.toLowerCase().includes(q);
    const deckMatch = article.deck.toLowerCase().includes(q);
    const tagMatch = article.tags.some((t) => t.toLowerCase().includes(q));
    const authorMatch = article.author.name.toLowerCase().includes(q);
    const subcatMatch = article.subcategory?.toLowerCase().includes(q);

    return titleMatch || deckMatch || tagMatch || authorMatch || subcatMatch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-12 sm:pt-20 px-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FDFBF7] w-full max-w-3xl border border-[#E4DCD0] shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#E6DFD5] flex items-center gap-3 bg-[#F9F5EE]">
          <Search className="w-5 h-5 text-[#6B1724] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search trends, wardrobe guides, designers, materials..."
            className="w-full bg-transparent text-base sm:text-lg font-serif text-[#111010] placeholder-[#8E867F] focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#8E867F] hover:text-[#111010] text-xs font-sans"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 text-[#5C5651] hover:text-[#111010] transition-colors rounded-none"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Filters */}
        <div className="px-5 py-3 border-b border-[#EBE3D7] bg-[#FDFBF7] flex items-center gap-2 overflow-x-auto scrollbar-none text-xs font-sans">
          <span className="text-[#9C948B] uppercase tracking-wider text-[11px] mr-1 shrink-0">
            Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-2.5 py-1 uppercase tracking-wider whitespace-nowrap text-[11px] transition-colors ${
                activeFilter === cat
                  ? 'bg-[#111010] text-white font-medium'
                  : 'text-[#68625D] hover:text-[#111010] hover:bg-[#F2EDE3]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results Scroll Area */}
        <div className="overflow-y-auto p-5 space-y-4 divide-y divide-[#EFE8DE]">
          <div className="text-[11px] uppercase tracking-[0.2em] text-[#78716C] pb-2 flex items-center justify-between font-sans">
            <span>Dispatches Found ({filteredArticles.length})</span>
            {query && <span>Query: “{query}”</span>}
          </div>

          {filteredArticles.length === 0 ? (
            <div className="py-12 text-center text-[#78716C]">
              <p className="font-serif text-xl text-[#232120] mb-2">No matching dispatches found.</p>
              <p className="text-xs font-sans">
                Try searching for “tailoring”, “denim”, “trends”, “white shirt”, or “beauty”.
              </p>
            </div>
          ) : (
            filteredArticles.map((art) => (
              <div
                key={art.id}
                onClick={() => {
                  onSelectArticle(art.id);
                  onClose();
                }}
                className="pt-4 first:pt-0 group cursor-pointer flex gap-4 items-center justify-between hover:bg-[#F7F3EB] p-2 transition-colors"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-[#E8E1D5] overflow-hidden">
                  <img
                    src={art.image}
                    alt={art.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 text-[10px] font-sans uppercase tracking-wider text-[#6B1724] font-semibold mb-1">
                    <span>{art.category}</span>
                    <span aria-hidden="true" className="text-[#9C948B]">·</span>
                    <span className="text-[#78716C]">{art.publishedDate}</span>
                  </div>
                  <h4 className="font-serif text-base sm:text-lg text-[#111010] group-hover:text-[#6B1724] transition-colors truncate">
                    {art.title}
                  </h4>
                  <p className="font-sans text-xs text-[#68625D] line-clamp-1">
                    {art.deck}
                  </p>
                </div>

                <div className="shrink-0 flex items-center text-xs text-[#9C948B] group-hover:text-[#6B1724]">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-[#F4EFE6] border-t border-[#E6DFD5] text-[11px] font-sans text-[#78716C] flex items-center justify-between">
          <span>Press ESC to close</span>
          <span>THE STYLE EDIT ARCHIVES</span>
        </div>
      </div>
    </div>
  );
};
