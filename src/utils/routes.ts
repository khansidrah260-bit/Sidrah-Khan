// URL and Routing Architecture for THE STYLE EDIT
// Adheres to standard RESTful & editorial SEO URL standards:
// - Lowercase, hyphen-separated, human-readable slugs
// - Clean canonical paths (/trending, /style-guides, /article/how-fashion-is-changing-in-2026)
// - Supports both direct browser navigation, deep linking, and new-tab routing

export interface RouteState {
  view: string;
  articleSlug: string | null;
}

export const CATEGORY_ROUTES: Record<string, string> = {
  'Home': '/',
  'Trending': '/trending',
  'Style Guides': '/style-guides',
  'Clothing': '/clothing',
  'Street Style': '/street-style',
  'Celebrity Style': '/celebrity-style',
  'Beauty': '/beauty',
  'Videos': '/videos',
  'About': '/about',
};

export const ROUTE_TO_CATEGORY: Record<string, string> = {
  '/': 'Home',
  '/trending': 'Trending',
  '/style-guides': 'Style Guides',
  '/clothing': 'Clothing',
  '/street-style': 'Street Style',
  '/celebrity-style': 'Celebrity Style',
  '/beauty': 'Beauty',
  '/videos': 'Videos',
  '/about': 'About',
};

/**
 * Returns the canonical URL for a classification category or article slug
 */
export function getRouteUrl(categoryOrSlug: string, isArticle = false): string {
  if (isArticle) {
    return `/article/${categoryOrSlug}`;
  }
  return CATEGORY_ROUTES[categoryOrSlug] || '/';
}

/**
 * Parses the current browser location (supports path or hash fallback)
 */
export function parseCurrentRoute(): RouteState {
  if (typeof window === 'undefined') {
    return { view: 'Home', articleSlug: null };
  }

  // Check path first
  let path = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/';

  // Fallback to hash if on a server without SPA rewrite support (e.g. #/trending)
  if (path === '/' && window.location.hash.startsWith('#/')) {
    path = window.location.hash.slice(1).toLowerCase().replace(/\/$/, '') || '/';
  }

  // Article detail route: /article/:slug
  if (path.startsWith('/article/')) {
    const slug = path.replace('/article/', '').trim();
    return {
      view: 'article-detail',
      articleSlug: slug || null,
    };
  }

  // Known category routes
  const category = ROUTE_TO_CATEGORY[path];
  if (category) {
    return {
      view: category,
      articleSlug: null,
    };
  }

  return {
    view: 'Home',
    articleSlug: null,
  };
}

/**
 * Synchronizes browser URL and document title
 */
export function navigateToRoute(url: string, pageTitle?: string): void {
  if (typeof window === 'undefined') return;

  if (window.location.pathname !== url) {
    window.history.pushState({}, '', url);
  }

  if (pageTitle) {
    document.title = `${pageTitle} | THE STYLE EDIT`;
  }
}
