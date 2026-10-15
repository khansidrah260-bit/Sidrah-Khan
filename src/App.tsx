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
import { parseCurrentRoute, getRouteUrl, navigateToRoute } from './utils/routes';
import { Check } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('Home');
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [bookmarksOpen, setBookmarksOpen] = useState(false);
  const [openInNewTab, setOpenInNewTab] = useState<boolean>(true);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('style_edit_bookmarks');
      return saved ? JSON.parse(saved) : ['art-02'];
    } catch {
      return ['art-02'];
    }
  });
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Initialize view from URL on mount & listen to browser popstate (Back/Forward)
  useEffect(() => {
    const syncRouteFromUrl = () => {
      const route = parseCurrentRoute();
      if (route.articleSlug) {
        const found = ARTICLES.find((a) => a.slug === route.articleSlug);
        if (found) {
          setSelectedArticleId(found.id);
          document.title = `${found.title} | THE STYLE EDIT`;
          return;
        }
      }
      setSelectedArticleId(null);
      setCurrentView(route.view);
      document.title = route.view === 'Home'
        ? 'THE STYLE EDIT | Daily Fashion & Styling Magazine'
        : `${route.view} | THE STYLE EDIT`;
    };

    syncRouteFromUrl();
    window.addEventListener('popstate', syncRouteFromUrl);
    return () => window.removeEventListener('popstate', syncRouteFromUrl);
  }, []);

  // Sync bookmarks with localStorage
  useEffect(() => {
    try {
      localStorage.setItem('style_edit_bookmarks', JSON.stringify(bookmarkedIds));
    } catch (e) {
      console.warn('LocalStorage error', e);
    }
  }, [bookmarkedIds]);

  // Handle article selection with clean URL update
  const handleSelectArticle = (articleId: string) => {
    const article = ARTICLES.find((a) => a.id === articleId);
    setSelectedArticleId(articleId);
    if (article) {
      navigateToRoute(getRouteUrl(article.slug, true), article.title);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackFromArticle = () => {
    setSelectedArticleId(null);
    navigateToRoute(getRouteUrl(currentView), currentView);
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
    const fullUrl = `${window.location.origin}${getRouteUrl(article.slug, true)}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(fullUrl);
      showToast(`Unique URL copied: ${fullUrl}`);
    } else {
      showToast('Article URL copied to clipboard');
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleCategoryNav = (cat: string) => {
    setSelectedArticleId(null);
    setCurrentView(cat);
    navigateToRoute(getRouteUrl(cat), cat);
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
        openInNewTab={openInNewTab}
        onToggleNewTab={() => setOpenInNewTab(!openInNewTab)}
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
                CURATED FORECAST · /trending
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
                SARTORIAL ARCHITECTURE · /style-guides
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
                DEPARTMENT INVENTORY · /clothing
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
                GLOBAL SIDEWALK ARCHIVES · /street-style
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
                RED CARPET & OFF-DUTY · /celebrity-style
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
                BACKSTAGE & DERMATOLOGY · /beauty
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
            <div className="bg-[#1C1A19] text-[#FDFBF7] py-10 px-4 sm:px-8 border-b border-[#2F2C2A] text-center">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C49B71] font-semibold">
                CINEMA ARCHIVES · /videos
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl mt-2 mb-3 text-white">
                WATCH THE EDIT
              </h1>
              <p className="text-sm font-sans text-[#A8A29E] max-w-lg mx-auto">
                Documentary mini-features, runway ateliers, and styling masterclasses recorded in 4K resolution.
              </p>
            </div>
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

            {/* 4. Today in Fashion (Daily Updates) */}
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

            {/* 10. Watch The Edit */}
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
