import React, { useState } from 'react';
import { ArrowRight, Check, Heart, Mail } from 'lucide-react';

interface FooterProps {
  onSelectCategory: (cat: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-[#181615] text-[#E7E2DF] border-t border-[#292624] pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Newsletter / Morning Dispatch Callout */}
        <div className="bg-[#211E1D] border border-[#2F2C2A] p-8 sm:p-12 mb-16 text-center max-w-4xl mx-auto">
          <span className="text-[11px] font-sans tracking-[0.25em] text-[#C49B71] uppercase font-semibold block mb-2">
            DAILY EDITORIAL DISPATCH
          </span>
          <h3 className="font-serif text-2xl sm:text-4xl text-white font-normal mb-3">
            What’s Worth Wearing, Delivered Daily at 07:00
          </h3>
          <p className="text-xs sm:text-sm text-[#A8A29E] max-w-xl mx-auto mb-6 leading-relaxed">
            Join over 140,000 discerning designers, stylists, and fashion scholars. No spam, no algorithmic affiliate traps—only rigorous sartorial critique.
          </p>

          {subscribed ? (
            <div className="inline-flex items-center gap-2 p-3 bg-[#6B1724] text-white text-xs tracking-wider uppercase font-semibold">
              <Check className="w-4 h-4" />
              <span>You are subscribed to The Morning Dispatch. Check your inbox for today’s edition.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full sm:w-80 px-4 py-3 bg-[#181615] border border-[#3E3936] text-white text-xs font-sans placeholder-[#78716C] focus:outline-none focus:border-[#C49B71]"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-[#6B1724] hover:bg-[#851C2C] text-white text-xs uppercase tracking-[0.16em] font-medium transition-colors shrink-0"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16 pb-12 border-b border-[#2B2826]">
          {/* Brand Col (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl text-white tracking-[0.06em]">
              THE STYLE EDIT
            </h2>
            <div className="text-xs uppercase tracking-[0.2em] text-[#C49B71] font-medium">
              WHAT’S WORTH WEARING NOW
            </div>
            <p className="text-xs text-[#8C847E] leading-relaxed max-w-sm">
              An independent daily fashion and styling publication. Published from Paris, London, Tokyo, and New York.
            </p>
            <div className="text-[11px] text-[#6E6762] pt-2">
              ISSN 2940-184X · Certified Archival Journal
            </div>
          </div>

          {/* Department Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white font-semibold mb-4">
              EDITORIAL
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A8A29E]">
              <li>
                <button onClick={() => onSelectCategory('Trending')} className="hover:text-white transition-colors">
                  Trending Forecasts
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('Style Guides')} className="hover:text-white transition-colors">
                  Wardrobe Architecture
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('Clothing')} className="hover:text-white transition-colors">
                  Clothing & Silhouettes
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('Street Style')} className="hover:text-white transition-colors">
                  Global Street Style
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('Celebrity Style')} className="hover:text-white transition-colors">
                  Red Carpet Index
                </button>
              </li>
            </ul>
          </div>

          {/* Lifestyle & Media */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white font-semibold mb-4">
              SPECIAL PROJECTS
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A8A29E]">
              <li>
                <button onClick={() => onSelectCategory('Beauty')} className="hover:text-white transition-colors">
                  Backstage Beauty Desk
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('Videos')} className="hover:text-white transition-colors">
                  Watch The Edit (Documentaries)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('Culture')} className="hover:text-white transition-colors">
                  Long-Form Essays
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('Style Guides')} className="hover:text-white transition-colors">
                  The Capsule 18 Formula
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('About')} className="hover:text-white transition-colors">
                  Archival Research Vault
                </button>
              </li>
            </ul>
          </div>

          {/* Journal Information */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white font-semibold mb-4">
              MASTHEAD & PRESS
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A8A29E]">
              <li>
                <button onClick={() => onSelectCategory('About')} className="hover:text-white transition-colors">
                  About The Publication
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('About')} className="hover:text-white transition-colors">
                  Letters to the Editor
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('About')} className="hover:text-white transition-colors">
                  Curatorial Standards
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('About')} className="hover:text-white transition-colors">
                  Syndication & Rights
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('About')} className="hover:text-white transition-colors">
                  Press Inquiries
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#6E6762] gap-4">
          <div>
            © 2026 THE STYLE EDIT. All rights reserved. No reproduction without express editorial permission.
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => onSelectCategory('About')} className="hover:text-[#A8A29E] transition-colors">
              Privacy Charter
            </button>
            <span aria-hidden="true">·</span>
            <button onClick={() => onSelectCategory('About')} className="hover:text-[#A8A29E] transition-colors">
              Journalistic Ethics
            </button>
            <span aria-hidden="true">·</span>
            <button onClick={() => onSelectCategory('About')} className="hover:text-[#A8A29E] transition-colors">
              Masthead Credits
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
