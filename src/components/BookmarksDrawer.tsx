import React from 'react';
import { X, Bookmark, Trash2, ArrowRight } from 'lucide-react';
import { Article, ARTICLES } from '../data/articles';

interface BookmarksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  bookmarkedIds: string[];
  onRemoveBookmark: (articleId: string) => void;
  onSelectArticle: (articleId: string) => void;
}

export const BookmarksDrawer: React.FC<BookmarksDrawerProps> = ({
  isOpen,
  onClose,
  bookmarkedIds,
  onRemoveBookmark,
  onSelectArticle,
}) => {
  if (!isOpen) return null;

  const savedArticles = ARTICLES.filter((a) => bookmarkedIds.includes(a.id));

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs animate-fadeIn">
      <div className="w-full max-w-md bg-[#FDFBF7] h-full shadow-2xl border-l border-[#E6DFD5] flex flex-col">
        {/* Header */}
        <div className="p-5 border-b border-[#E6DFD5] flex items-center justify-between bg-[#F9F5EE]">
          <div className="flex items-center gap-2">
            <Bookmark className="w-4 h-4 text-[#6B1724]" />
            <h3 className="font-serif text-xl text-[#111010] font-normal">
              Saved Reading List ({savedArticles.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#68625D] hover:text-[#111010] transition-colors"
            aria-label="Close reading list"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {savedArticles.length === 0 ? (
            <div className="py-20 text-center text-[#78716C]">
              <Bookmark className="w-10 h-10 text-[#DDD4C7] mx-auto mb-3" />
              <p className="font-serif text-lg text-[#232120] mb-1">Your reading list is empty.</p>
              <p className="text-xs font-sans max-w-xs mx-auto">
                Click the bookmark icon on any story to save long-form essays, style formulas, or beauty routines for later.
              </p>
            </div>
          ) : (
            savedArticles.map((art) => (
              <div
                key={art.id}
                className="p-4 bg-[#F8F5EE] border border-[#E9E2D6] flex flex-col justify-between group hover:border-[#232120] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-sans uppercase tracking-wider text-[#6B1724] font-semibold mb-1">
                    <span>{art.category}</span>
                    <button
                      onClick={() => onRemoveBookmark(art.id)}
                      className="text-[#9C948B] hover:text-red-700 p-1"
                      title="Remove from saved"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <h4
                    onClick={() => {
                      onSelectArticle(art.id);
                      onClose();
                    }}
                    className="font-serif text-base text-[#111010] hover:text-[#6B1724] transition-colors cursor-pointer leading-snug mb-2"
                  >
                    {art.title}
                  </h4>

                  <p className="font-sans text-xs text-[#68625D] line-clamp-2 mb-3">
                    {art.deck}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#EDE5D8] flex items-center justify-between text-[11px] font-sans text-[#78716C]">
                  <span>{art.readTime}</span>
                  <button
                    onClick={() => {
                      onSelectArticle(art.id);
                      onClose();
                    }}
                    className="inline-flex items-center gap-1 font-semibold text-[#111010] hover:text-[#6B1724] uppercase tracking-wider text-[10px]"
                  >
                    <span>Read Now</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F4EFE6] border-t border-[#E6DFD5] text-center text-xs font-sans text-[#78716C]">
          Stories are preserved offline in your local session.
        </div>
      </div>
    </div>
  );
};
