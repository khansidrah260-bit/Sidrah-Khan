import React, { useState, useEffect } from 'react';
import { ArrowLeft, Bookmark, Clock, MessageSquare, Quote, Share2, Type, Check, ThumbsUp } from 'lucide-react';
import { Article, ARTICLES } from '../data/articles';

interface ArticleDetailViewProps {
  article: Article;
  onBack: () => void;
  onSelectArticle: (articleId: string) => void;
  isBookmarked: boolean;
  onToggleBookmark: (articleId: string) => void;
  onShare: (article: Article) => void;
}

interface Comment {
  id: string;
  author: string;
  city: string;
  date: string;
  text: string;
  likes: number;
}

export const ArticleDetailView: React.FC<ArticleDetailViewProps> = ({
  article,
  onBack,
  onSelectArticle,
  isBookmarked,
  onToggleBookmark,
  onShare,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 'c1',
      author: 'Delphine Moreau',
      city: 'Paris',
      date: '2 hours ago',
      text: 'The analysis on the death of the 15-minute microtrend couldn’t be more accurate. Investing in archival gabardine and Japanese denim has completely transformed my mornings.',
      likes: 24,
    },
    {
      id: 'c2',
      author: 'Julian Thorne',
      city: 'London',
      date: '5 hours ago',
      text: 'Savile Row craftsmanship meeting streetwear ergonomics is exactly what modern luxury needed. Beautifully written editorial.',
      likes: 18,
    },
  ]);
  const [newCommentName, setNewCommentName] = useState('');
  const [newCommentCity, setNewCommentCity] = useState('');
  const [newCommentText, setNewCommentText] = useState('');
  const [commentSubmitted, setCommentSubmitted] = useState(false);

  // Calculate reading progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim() || !newCommentName.trim()) return;

    const newC: Comment = {
      id: `c-${Date.now()}`,
      author: newCommentName,
      city: newCommentCity || 'Global Reader',
      date: 'Just now',
      text: newCommentText,
      likes: 1,
    };

    setComments([newC, ...comments]);
    setNewCommentName('');
    setNewCommentCity('');
    setNewCommentText('');
    setCommentSubmitted(true);
    setTimeout(() => setCommentSubmitted(false), 4000);
  };

  const relatedArticles = ARTICLES.filter((a) => a.id !== article.id).slice(0, 3);

  const getFontSizeClass = () => {
    if (fontSize === 'xlarge') return 'text-xl leading-[2.0]';
    if (fontSize === 'large') return 'text-lg leading-[1.85]';
    return 'text-base sm:text-[1.06rem] leading-[1.8]';
  };

  return (
    <article className="min-h-screen bg-[#FDFBF7] text-[#232120] relative">
      {/* Sticky Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-transparent z-50">
        <div
          className="h-full bg-[#6B1724] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Reader Utility Sub-Header */}
      <div className="sticky top-[58px] z-30 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#E8E1D5] py-2 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between text-xs font-sans text-[#78716C]">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-[#111010] hover:text-[#6B1724] font-medium transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO MAGAZINE</span>
          </button>

          <div className="flex items-center gap-4">
            {/* Font size toggles */}
            <div className="hidden sm:flex items-center gap-1 border-r border-[#E8E1D5] pr-4">
              <span className="text-[11px] uppercase tracking-wider text-[#9C948B] mr-1">Type:</span>
              <button
                onClick={() => setFontSize('normal')}
                className={`px-1.5 py-0.5 rounded text-xs ${
                  fontSize === 'normal' ? 'bg-[#111010] text-white font-medium' : 'hover:text-[#111010]'
                }`}
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-1.5 py-0.5 rounded text-sm ${
                  fontSize === 'large' ? 'bg-[#111010] text-white font-medium' : 'hover:text-[#111010]'
                }`}
              >
                A+
              </button>
              <button
                onClick={() => setFontSize('xlarge')}
                className={`px-1.5 py-0.5 rounded text-base ${
                  fontSize === 'xlarge' ? 'bg-[#111010] text-white font-medium' : 'hover:text-[#111010]'
                }`}
              >
                A++
              </button>
            </div>

            {/* Bookmark button */}
            <button
              onClick={() => onToggleBookmark(article.id)}
              className={`p-1.5 rounded hover:bg-[#EFE8DD] transition-colors ${
                isBookmarked ? 'text-[#6B1724]' : 'text-[#78716C] hover:text-[#111010]'
              }`}
              title="Bookmark article"
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>

            {/* Share button */}
            <button
              onClick={() => onShare(article)}
              className="p-1.5 rounded hover:bg-[#EFE8DD] text-[#78716C] hover:text-[#111010] transition-colors"
              title="Share article"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Article Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-10 lg:py-16">
        {/* Category & Timestamp Kicker */}
        <div className="flex items-center gap-2 text-xs font-sans tracking-[0.22em] uppercase text-[#6B1724] font-semibold mb-4">
          <span>{article.category}</span>
          {article.subcategory && (
            <>
              <span aria-hidden="true" className="text-[#9C948B]">·</span>
              <span className="text-[#78716C]">{article.subcategory}</span>
            </>
          )}
          <span aria-hidden="true" className="text-[#9C948B]">·</span>
          <span className="flex items-center gap-1 text-[#78716C]">
            <Clock className="w-3 h-3 text-[#9C948B]" />
            {article.readTime}
          </span>
        </div>

        {/* Article Title */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] text-[#111010] tracking-tight mb-6 text-balance">
          {article.title}
        </h1>

        {/* Article Deck */}
        <p className="font-sans text-lg sm:text-xl text-[#524D48] leading-relaxed mb-8 border-b border-[#EAE3D8] pb-8">
          {article.deck}
        </p>

        {/* Author Byline Lockup */}
        <div className="flex items-center justify-between mb-10 pb-4 border-b border-[#EAE3D8]">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-[#EFE8DD] border border-[#DDD5C7] flex items-center justify-center font-serif text-base font-semibold text-[#6B1724]">
              {article.author.avatarInitials}
            </div>
            <div>
              <div className="text-sm font-semibold text-[#111010] font-sans">
                {article.author.name}
              </div>
              <div className="text-xs text-[#78716C] font-sans">
                {article.author.role} · Published {article.publishedDate}
              </div>
            </div>
          </div>

          <div className="text-xs font-sans text-[#78716C] hidden sm:block">
            <span>Verified Curatorial Dispatch</span>
          </div>
        </div>

        {/* Lead Hero Image */}
        <div className="mb-12 bg-[#EFE8DD] border border-[#E3DBD0] overflow-hidden">
          <div className="aspect-[16/10] sm:aspect-[16/9] w-full">
            <img
              src={article.image}
              alt={article.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          {article.imageCaption && (
            <div className="p-3 bg-[#F4EFE6] text-xs font-serif italic text-[#78716C] border-t border-[#E8DECf]">
              {article.imageCaption}
            </div>
          )}
        </div>

        {/* Main Article Body Prose */}
        <div className={`font-sans text-[#232120] space-y-6 ${getFontSizeClass()}`}>
          {/* Drop Cap First Paragraph */}
          {article.content.length > 0 && (
            <p className="drop-cap">
              {article.content[0]}
            </p>
          )}

          {article.content.slice(1).map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}

          {/* Pull quote if exists */}
          {article.pullQuote && (
            <div className="my-10 py-8 px-6 sm:px-10 bg-[#F5EFE4] border-y border-[#DFD6C8] text-center">
              <Quote className="w-7 h-7 text-[#6B1724]/40 mx-auto mb-2" />
              <blockquote className="font-serif text-2xl sm:text-3xl italic text-[#1A1817] leading-tight mb-3">
                “{article.pullQuote}”
              </blockquote>
              {article.pullQuoteAttribution && (
                <cite className="text-xs font-sans uppercase tracking-[0.2em] text-[#6B1724] font-medium not-italic">
                  — {article.pullQuoteAttribution}
                </cite>
              )}
            </div>
          )}

          {/* Additional Sections */}
          {article.sections &&
            article.sections.map((sec, sIdx) => (
              <div key={sIdx} className="pt-6">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111010] mt-8 mb-4 border-t border-[#E8E1D5] pt-6 leading-tight">
                  {sec.heading}
                </h2>

                {sec.quote && (
                  <div className="border-l-2 border-[#6B1724] pl-4 my-4 font-serif italic text-lg text-[#5A5550]">
                    “{sec.quote}”
                  </div>
                )}

                {sec.body.map((bPara, bIdx) => (
                  <p key={bIdx} className="mb-4">
                    {bPara}
                  </p>
                ))}

                {sec.subImage && (
                  <div className="my-8 bg-[#ECE5DA] border border-[#DDD5C7] overflow-hidden">
                    <img
                      src={sec.subImage}
                      alt={sec.heading}
                      referrerPolicy="no-referrer"
                      className="w-full aspect-[16/9] object-cover"
                    />
                    {sec.subImageCaption && (
                      <div className="p-2.5 bg-[#F1EDE4] text-xs font-serif italic text-[#78716C]">
                        {sec.subImageCaption}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
        </div>

        {/* Tags Row */}
        <div className="mt-12 pt-6 border-t border-[#EAE3D8] flex flex-wrap items-center gap-2">
          <span className="text-xs font-sans uppercase tracking-wider text-[#78716C] mr-2">
            Archival Tags:
          </span>
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-sans text-[#524D48] hover:text-[#111010] transition-colors"
            >
              #{tag} ·
            </span>
          ))}
        </div>

        {/* Author Bio Box */}
        <div className="mt-10 p-6 bg-[#F8F5EE] border border-[#E7DFD2] flex flex-col sm:flex-row items-center gap-5">
          <div className="w-16 h-16 rounded-full bg-[#EAE2D5] border border-[#D5CCC0] flex items-center justify-center font-serif text-2xl text-[#6B1724] shrink-0">
            {article.author.avatarInitials}
          </div>
          <div>
            <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#6B1724] font-semibold block mb-1">
              ABOUT THE AUTHOR
            </span>
            <h4 className="font-serif text-lg font-medium text-[#111010] mb-1">
              {article.author.name}
            </h4>
            <p className="text-xs sm:text-sm text-[#5C5651] font-sans leading-relaxed">
              {article.author.role} at THE STYLE EDIT. Covers contemporary tailoring, archival subcultures, and fashion theory from Paris and London.
            </p>
          </div>
        </div>

        {/* Interactive Reader Response / Comments Section */}
        <section className="mt-16 pt-10 border-t border-[#E6DFD5]">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#6B1724]" />
              <h3 className="font-serif text-2xl sm:text-3xl text-[#111010] font-normal">
                Curatorial Discourse & Reader Reflections ({comments.length})
              </h3>
            </div>
          </div>

          {/* Comment Submission Form */}
          <form onSubmit={handleAddComment} className="mb-10 bg-[#F7F4EC] p-6 border border-[#E6DECf]">
            <h4 className="text-xs uppercase font-sans tracking-widest text-[#6B1724] font-bold mb-3">
              Add Your Voice to the Discussion
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Your Name (e.g. Delphine Moreau)"
                value={newCommentName}
                onChange={(e) => setNewCommentName(e.target.value)}
                required
                className="bg-[#FDFBF7] border border-[#DDD5C7] px-3.5 py-2.5 text-xs font-sans text-[#232120] focus:outline-none focus:border-[#6B1724]"
              />
              <input
                type="text"
                placeholder="City (e.g. Milan / New York)"
                value={newCommentCity}
                onChange={(e) => setNewCommentCity(e.target.value)}
                className="bg-[#FDFBF7] border border-[#DDD5C7] px-3.5 py-2.5 text-xs font-sans text-[#232120] focus:outline-none focus:border-[#6B1724]"
              />
            </div>
            <textarea
              placeholder="Share your perspective on this editorial..."
              rows={3}
              value={newCommentText}
              onChange={(e) => setNewCommentText(e.target.value)}
              required
              className="w-full bg-[#FDFBF7] border border-[#DDD5C7] px-3.5 py-2.5 text-xs font-sans text-[#232120] focus:outline-none focus:border-[#6B1724] mb-4"
            />
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-[#78716C] font-sans">
                Moderated according to our journalistic standards.
              </span>
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#111010] hover:bg-[#6B1724] text-white text-xs font-sans uppercase tracking-widest font-medium transition-colors"
              >
                Submit Reflection
              </button>
            </div>
            {commentSubmitted && (
              <div className="mt-3 text-xs text-green-800 font-sans flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" />
                <span>Your perspective was added to the editorial discussion.</span>
              </div>
            )}
          </form>

          {/* Comments List */}
          <div className="space-y-4">
            {comments.map((comm) => (
              <div
                key={comm.id}
                className="p-5 bg-[#FDFBF7] border border-[#E9E2D6] space-y-2"
              >
                <div className="flex items-center justify-between text-xs font-sans">
                  <div>
                    <span className="font-semibold text-[#111010]">{comm.author}</span>
                    <span className="text-[#78716C]"> · {comm.city}</span>
                  </div>
                  <span className="text-[11px] text-[#9C948B]">{comm.date}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#524D48] font-sans leading-relaxed">
                  {comm.text}
                </p>
                <div className="pt-2 flex items-center gap-1 text-[11px] text-[#78716C]">
                  <ThumbsUp className="w-3 h-3 text-[#9C948B]" />
                  <span>{comm.likes} agree</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Related Editorial Stories Grid */}
        <section className="mt-20 pt-10 border-t border-[#E6DFD5]">
          <div className="text-xs uppercase font-sans tracking-[0.22em] text-[#6B1724] font-semibold mb-2">
            FURTHER READING
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#111010] mb-8 font-normal">
            Related Editorial Stories
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <div
                key={rel.id}
                onClick={() => {
                  onSelectArticle(rel.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group cursor-pointer bg-[#F8F5EE] border border-[#EAE3D8] p-4 hover:border-[#111010] transition-colors"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#ECE5DA] mb-3">
                  <img
                    src={rel.image}
                    alt={rel.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                  />
                </div>
                <div className="text-[11px] text-[#6B1724] font-sans uppercase tracking-wider mb-1 font-semibold">
                  {rel.category}
                </div>
                <h4 className="font-serif text-lg text-[#111010] group-hover:text-[#6B1724] transition-colors line-clamp-2 leading-snug mb-2">
                  {rel.title}
                </h4>
                <p className="text-xs text-[#78716C] font-sans line-clamp-2">
                  {rel.deck}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
};
