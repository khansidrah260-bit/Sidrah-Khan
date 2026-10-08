import React, { useState } from 'react';
import { Search, Bookmark, Menu, X, ArrowUpRight } from 'lucide-react';
import { Category } from '../data/articles';

interface HeaderProps {
  currentCategory: string;
  onSelectCategory: (cat: string) => void;
  onOpenSearch: () => void;
  onOpenBookmarks: () => void;
  bookmarkedCount: number;
  onSelectArticle: (articleId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentCategory,
  onSelectCategory,
  onOpenSearch,
  onOpenBookmarks,
  bookmarkedCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; value: string }[] = [
    { label: 'HOME', value: 'Home' },
    { label: 'TRENDING', value: 'Trending' },
    { label: 'STYLE GUIDES', value: 'Style Guides' },
    { label: 'CLOTHING', value: 'Clothing' },
    { label: 'STREET STYLE', value: 'Street Style' },
    { label: 'CELEBRITY STYLE', value: 'Celebrity Style' },
    { label: 'BEAUTY', value: 'Beauty' },
    { label: 'VIDEOS', value: 'Videos' },
    { label: 'ABOUT', value: 'About' },
  ];

  const handleNavClick = (value: string) => {
    onSelectCategory(value);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#E6DFD5] transition-all">
      {/* Top Utility Masthead Band */}
      <div className="border-b border-[#EDE7DD] py-1.5 px-4 sm:px-8 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] tracking-widest text-[#78716C] uppercase font-sans">
          <div className="hidden sm:flex items-center gap-2">
            <span>Vol. XI</span>
            <span aria-hidden="true">·</span>
            <span>Daily Autumn Edition</span>
            <span aria-hidden="true">·</span>
            <span>Paris · London · New York</span>
          </div>
          <div className="mx-auto sm:mx-0 font-medium tracking-[0.22em] text-[#6B1724]">
            WHAT’S WORTH WEARING NOW
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <span>Updated 20 min ago</span>
          </div>
        </div>
      </div>

      {/* Main Masthead Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
        {/* Mobile menu trigger */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#232120] hover:text-[#6B1724] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <button
            onClick={onOpenSearch}
            className="p-1.5 text-[#232120] hover:text-[#6B1724] transition-colors"
            aria-label="Search articles"
          >
            <Search className="w-4 h-4" />
          </button>
        </div>

        {/* Brand Wordmark (Editorial Serif, high prestige) */}
        <div className="text-center lg:text-left flex-1 lg:flex-initial">
          <button
            onClick={() => handleNavClick('Home')}
            className="group inline-flex flex-col items-center lg:items-start text-left focus:outline-none"
          >
            <span className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal tracking-[0.08em] text-[#111010] group-hover:text-[#6B1724] transition-colors leading-none">
              THE STYLE EDIT
            </span>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-7 text-[12px] font-sans font-medium tracking-[0.16em] text-[#3E3A37]">
          {navItems.map((item) => {
            const isActive = currentCategory === item.value;
            return (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`transition-colors relative py-1 focus:outline-none ${
                  isActive
                    ? 'text-[#6B1724] font-semibold'
                    : 'text-[#4A4541] hover:text-[#111010]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#6B1724]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Utility Actions: Search & Bookmarks */}
        <div className="flex items-center space-x-3">
          <button
            onClick={onOpenSearch}
            className="hidden lg:flex items-center gap-2 text-xs text-[#524D48] hover:text-[#111010] py-1 px-2.5 rounded border border-[#E3DBD0] hover:border-[#232120] transition-colors"
            title="Search articles"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="tracking-wide">SEARCH</span>
            <kbd className="text-[10px] bg-[#F1EDE4] px-1 py-0.5 rounded text-[#78716C]">⌘K</kbd>
          </button>

          <button
            onClick={onOpenBookmarks}
            className="relative p-2 text-[#232120] hover:text-[#6B1724] transition-colors"
            aria-label="View saved reading list"
            title="Saved reading list"
          >
            <Bookmark className="w-4 h-4" />
            {bookmarkedCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#6B1724] text-white text-[9px] font-sans flex items-center justify-center font-bold">
                {bookmarkedCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E6DFD5] bg-[#FDFBF7] px-6 py-6 animate-fadeIn">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => {
              const isActive = currentCategory === item.value;
              return (
                <button
                  key={item.value}
                  onClick={() => handleNavClick(item.value)}
                  className={`text-left text-sm font-sans tracking-[0.16em] py-2 flex items-center justify-between border-b border-[#F2ECE1] ${
                    isActive ? 'text-[#6B1724] font-semibold' : 'text-[#3E3A37]'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#9C948B]" />
                </button>
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-[#E6DFD5] flex items-center justify-between text-xs text-[#78716C]">
            <span>Daily Editorial Dispatch</span>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="text-[#6B1724] font-medium"
            >
              Open Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
