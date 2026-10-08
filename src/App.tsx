import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TrendingSection } from './components/TrendingSection';
import { FeaturedLongformSection } from './components/FeaturedLongformSection';
import { TodayInFashionSection } from './components/TodayInFashionSection';
import { StyleGuidesSection } from './components/StyleGuidesSection';
import { ClothingSection } from './components/ClothingSection';
import { StreetStyleSection } from './components/StreetStyleSection';
import { CelebrityStyleSection } from './components/CelebrityStyleSection';
import { BeautySection } from './components/BeautySection';
import { WatchTheEditSection } from './components/WatchTheEditSection';
import { ArticleDetailView } from './components/ArticleDetailView';
import { SearchModal } from './components/SearchModal';
import { BookmarksDrawer } from './components/BookmarksDrawer';
import { AboutView } from './components/AboutView';
import { Footer } from './components/Footer';
import { ARTICLES, Article } from './data/articles';
import { Check, Sparkles } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('Home');
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [bookmarksOpen, setBookmarksOpen] = useState(false);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('style_edit_bookmarks');
      return saved ? JSON.parse(saved) : ['art-02'];
    } catch {
      return ['art-02'];
    }
  });
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync bookmarks with localStorage
  useEffect(() => {
    try {
      localStorage.setItem('style_edit_bookmarks', JSON.stringify(bookmarkedIds));
    } catch (e) {
      console.warn('LocalStorage error', e);
    }
  }, [bookmarkedIds]);

  // Handle article selection
  const handleSelectArticle = (articleId: string) => {
    setSelectedArticleId(articleId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackFromArticle = () => {
    setSelectedArticleId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleBookmark = (articleId: string) => {
    setBookmarkedIds((prev) => {
      const exists = prev.includes(articleId);
      const updated = exists ? prev.filter((id) => id !== articleId) : [...prev, articleId];
      showToast(exists ? 'Article removed from saved list' : 'Article saved to reading list');
      return updated;
    });
  };

  const handleShare = (article: Article) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast(`Link to “${article.title.slice(0, 32)}...” copied to clipboard`);
    } else {
      showToast('Article link copied to clipboard');
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleCategoryNav = (cat: string) => {
    setSelectedArticleId(null);
    setCurrentView(cat);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Find active article if in detail mode
  const activeArticle = selectedArticleId
    ? ARTICLES.find((a) => a.id === selectedArticleId) || ARTICLES[0]
    : null;

  // Filtered lists for various sections
  const heroArticle = ARTICLES.find((a) => a.id === 'art-01') || ARTICLES[0];
  const featuredLongformArticle = ARTICLES.find((a) => a.id === 'art-02') || ARTICLES[1];
  const trendingArticles = ARTICLES.filter((a) => a.trending).slice(0, 6);
  const todayArticles = ARTICLES.filter((a) => a.isDailyUpdate);
  const styleGuideArticles = ARTICLES.filter((a) => a.category === 'Style Guides');

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#232120] flex flex-col paper-texture selection:bg-[#6B1724] selection:text-[#FDFBF7]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#111010] text-[#FDFBF7] px-4 py-3 rounded-none shadow-2xl border border-[#3A3532] text-xs font-sans tracking-wide flex items-center gap-2 animate-bounce-short">
          <Check className="w-3.5 h-3.5 text-[#C49B71]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Editorial Header */}
      <Header
        currentCategory={selectedArticleId ? '' : currentView}
        onSelectCategory={handleCategoryNav}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenBookmarks={() => setBookmarksOpen(true)}
        bookmarkedCount={bookmarkedIds.length}
        onSelectArticle={handleSelectArticle}
      />

      {/* Content Rendering Body */}
      <main className="flex-1">
        {selectedArticleId && activeArticle ? (
          /* Full Page Editorial Article Reader */
          <ArticleDetailView
            article={activeArticle}
            onBack={handleBackFromArticle}
            onSelectArticle={handleSelectArticle}
            isBookmarked={bookmarkedIds.includes(activeArticle.id)}
            onToggleBookmark={toggleBookmark}
            onShare={handleShare}
          />
        ) : currentView === 'About' ? (
          /* About Page */
          <AboutView onBackToHome={() => handleCategoryNav('Home')} />
        ) : currentView === 'Trending' ? (
          /* Trending Dedicated Page */
          <div>
            <div className="bg-[#F7F3EB] py-10 px-4 sm:px-8 border-b border-[#E8DECf] text-center">
              <span className="text-xs uppercase tracking-[0.25em] text-[#6B1724] font-semibold">
                CURATED FORECAST
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl text-[#111010] mt-2 mb-3">
                TRENDING NOW
              </h1>
              <p className="text-sm font-sans text-[#78716C] max-w-lg mx-auto">
                Real-time dispatches on the colors, proportions, and movements captivating the sartorial world this season.
              </p>
            </div>
            <TrendingSection
              articles={trendingArticles}
              onSelectArticle={handleSelectArticle}
              bookmarkedIds={bookmarkedIds}
              onToggleBookmark={toggleBookmark}
            />
            <TodayInFashionSection
              articles={todayArticles}
              onSelectArticle={handleSelectArticle}
            />
          </div>
        ) : currentView === 'Style Guides' ? (
          /* Style Guides Dedicated Page */
          <div>
            <div className="bg-[#F7F3EB] py-10 px-4 sm:px-8 border-b border-[#E8DECf] text-center">
              <span className="text-xs uppercase tracking-[0.25em] text-[#6B1724] font-semibold">
                SARTORIAL ARCHITECTURE
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl text-[#111010] mt-2 mb-3">
                STYLE GUIDES & FORMULAS
              </h1>
              <p className="text-sm font-sans text-[#78716C] max-w-lg mx-auto">
                Practical, timeless wardrobe mathematics to eliminate decision fatigue and elevate every morning.
              </p>
            </div>
            <StyleGuidesSection
              articles={styleGuideArticles}
              onSelectArticle={handleSelectArticle}
            />
          </div>
        ) : currentView === 'Clothing' ? (
          /* Clothing Dedicated Page */
          <div>
            <div className="bg-[#F7F3EB] py-10 px-4 sm:px-8 border-b border-[#E8DECf] text-center">
              <span className="text-xs uppercase tracking-[0.25em] text-[#6B1724] font-semibold">
                DEPARTMENT INVENTORY
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl text-[#111010] mt-2 mb-3">
                CLOTHING & SILHOUETTES
              </h1>
              <p className="text-sm font-sans text-[#78716C] max-w-lg mx-auto">
                From selvedge denim to sculpted lapels: rigorous structural critique of foundational wardrobe pieces.
              </p>
            </div>
            <ClothingSection
              articles={ARTICLES}
              onSelectArticle={handleSelectArticle}
            />
          </div>
        ) : currentView === 'Street Style' ? (
          /* Street Style Dedicated Page */
          <div>
            <div className="bg-[#F7F3EB] py-10 px-4 sm:px-8 border-b border-[#E8DECf] text-center">
              <span className="text-xs uppercase tracking-[0.25em] text-[#6B1724] font-semibold">
                GLOBAL SIDEWALK ARCHIVES
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl text-[#111010] mt-2 mb-3">
                STREET STYLE DISPATCH
              </h1>
              <p className="text-sm font-sans text-[#78716C] max-w-lg mx-auto">
                Direct dispatches from Le Marais, Harajuku, Milan, and Copenhagen photographed on natural light film.
              </p>
            </div>
            <StreetStyleSection
              articles={ARTICLES}
              onSelectArticle={handleSelectArticle}
            />
          </div>
        ) : currentView === 'Celebrity Style' ? (
          /* Celebrity Style Dedicated Page */
          <div>
            <div className="bg-[#F7F3EB] py-10 px-4 sm:px-8 border-b border-[#E8DECf] text-center">
              <span className="text-xs uppercase tracking-[0.25em] text-[#6B1724] font-semibold">
                RED CARPET & OFF-DUTY
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl text-[#111010] mt-2 mb-3">
                CELEBRITY STYLE
              </h1>
              <p className="text-sm font-sans text-[#78716C] max-w-lg mx-auto">
                Analyzing the dialogue between high gala glamour and effortless airport sartorial codes.
              </p>
            </div>
            <CelebrityStyleSection
              articles={ARTICLES}
              onSelectArticle={handleSelectArticle}
            />
          </div>
        ) : currentView === 'Beauty' ? (
          /* Beauty Dedicated Page */
          <div>
            <div className="bg-[#F7F3EB] py-10 px-4 sm:px-8 border-b border-[#E8DECf] text-center">
              <span className="text-xs uppercase tracking-[0.25em] text-[#6B1724] font-semibold">
                BACKSTAGE & DERMATOLOGY
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl text-[#111010] mt-2 mb-3">
                BEAUTY & SKINCARE
              </h1>
              <p className="text-sm font-sans text-[#78716C] max-w-lg mx-auto">
                The cloud skin formula, sheer wine stains, and healthy hair architecture defining Autumn 2026.
              </p>
            </div>
            <BeautySection
              articles={ARTICLES}
              onSelectArticle={handleSelectArticle}
            />
          </div>
        ) : currentView === 'Videos' ? (
          /* Videos Dedicated Page */
          <div>
            <WatchTheEditSection />
          </div>
        ) : (
          /* Complete Homepage Front Page (Vogue / High-Fashion Magazine Layout) */
          <>
            {/* 1. Cinematic Hero Section */}
            <HeroSection
              article={heroArticle}
              onSelectArticle={handleSelectArticle}
              isBookmarked={bookmarkedIds.includes(heroArticle.id)}
              onToggleBookmark={toggleBookmark}
              onShare={handleShare}
            />

            {/* 2. Trending Now Section (6 Cards) */}
            <TrendingSection
              articles={trendingArticles}
              onSelectArticle={handleSelectArticle}
              bookmarkedIds={bookmarkedIds}
              onToggleBookmark={toggleBookmark}
            />

            {/* 3. Featured Long-Form Article ("HOW FASHION IS CHANGING IN 2026") */}
            <FeaturedLongformSection
              article={featuredLongformArticle}
              onOpenFullArticle={handleSelectArticle}
              isBookmarked={bookmarkedIds.includes(featuredLongformArticle.id)}
              onToggleBookmark={toggleBookmark}
              onShare={handleShare}
            />

            {/* 4. Today in Fashion (Daily Updates: Trend Alert, Style Guide, Street Style, Celebrity Style, Beauty) */}
            <TodayInFashionSection
              articles={todayArticles}
              onSelectArticle={handleSelectArticle}
            />

            {/* 5. Style Guides */}
            <StyleGuidesSection
              articles={styleGuideArticles}
              onSelectArticle={handleSelectArticle}
            />

            {/* 6. Clothing Section */}
            <ClothingSection
              articles={ARTICLES}
              onSelectArticle={handleSelectArticle}
            />

            {/* 7. Street Style Section */}
            <StreetStyleSection
              articles={ARTICLES}
              onSelectArticle={handleSelectArticle}
            />

            {/* 8. Celebrity Style */}
            <CelebrityStyleSection
              articles={ARTICLES}
              onSelectArticle={handleSelectArticle}
            />

            {/* 9. Beauty Section */}
            <BeautySection
              articles={ARTICLES}
              onSelectArticle={handleSelectArticle}
            />

            {/* 10. Watch The Edit (Dark Cinematic Video Showcase) */}
            <WatchTheEditSection />
          </>
        )}
      </main>

      {/* Global Magazine Footer */}
      <Footer onSelectCategory={handleCategoryNav} />

      {/* Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectArticle={handleSelectArticle}
      />

      {/* Bookmarks / Saved Reading List Drawer */}
      <BookmarksDrawer
        isOpen={bookmarksOpen}
        onClose={() => setBookmarksOpen(false)}
        bookmarkedIds={bookmarkedIds}
        onRemoveBookmark={toggleBookmark}
        onSelectArticle={handleSelectArticle}
      />
    </div>
  );
}
