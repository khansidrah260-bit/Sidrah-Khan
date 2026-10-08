import React from 'react';
import { Mail, ShieldCheck, Feather, Globe, ArrowRight } from 'lucide-react';

interface AboutViewProps {
  onBackToHome: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onBackToHome }) => {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#232120] py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        {/* Editorial Eyebrow */}
        <div className="text-center mb-12">
          <div className="text-xs font-sans tracking-[0.25em] text-[#6B1724] uppercase font-semibold mb-2">
            THE MASTHEAD & MANIFESTO
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#111010] font-normal tracking-tight mb-4">
            ABOUT THE STYLE EDIT
          </h1>
          <p className="font-serif italic text-lg sm:text-xl text-[#68625D] max-w-2xl mx-auto">
            “What’s Worth Wearing Now” — An independent daily fashion journal resisting the disposable churn of algorithmic consumerism.
          </p>
        </div>

        {/* Letter from the Editor */}
        <div className="bg-[#F8F5EE] border border-[#E7DFD2] p-8 sm:p-12 mb-14 relative">
          <div className="border-b border-[#E8DECf] pb-4 mb-6 flex items-center justify-between text-xs font-sans text-[#78716C] uppercase tracking-wider">
            <span>Editor’s Dispatch</span>
            <span>Paris Bureau · Autumn 2026</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl text-[#111010] font-normal mb-6">
            A Return to Sartorial Permanence
          </h2>

          <div className="font-sans text-sm sm:text-base text-[#4A4541] leading-relaxed space-y-4">
            <p className="drop-cap">
              When we founded THE STYLE EDIT, the digital fashion landscape was choked with breathless, fifteen-second micro-trends. Every Tuesday birthed a brand-new "core" fabricated in petroleum synthetics and doomed for landfills by Friday afternoon. We felt an urgent obligation to build a sanctuary for discerning dressers who care about cut, fabric, provenance, and personal identity.
            </p>
            <p>
              Our editorial mandate is simple yet uncompromising: We do not report on hype for hype’s sake. Every silhouette we analyze, every street photograph we curate from Tokyo or Paris, and every wardrobe formula we publish is subjected to a singular question: <em className="font-serif">Does this deserve a permanent place in a conscious human’s wardrobe?</em>
            </p>
            <p>
              We believe great style is not an expense—it is a literate, tactile dialogue between the person you are and the world you navigate every day. Thank you for reading, challenging, and thinking with us.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-[#E8DECf] flex items-center justify-between">
            <div>
              <div className="font-serif text-lg text-[#111010]">Sloane Montgomery</div>
              <div className="text-xs text-[#78716C] font-sans">Editor-in-Chief & Founder</div>
            </div>
            <div className="font-serif italic text-2xl text-[#6B1724]">S. Montgomery</div>
          </div>
        </div>

        {/* The 4 Curatorial Tenets */}
        <div className="mb-14">
          <div className="text-xs uppercase font-sans tracking-[0.22em] text-[#6B1724] font-semibold mb-3">
            JOURNALISTIC INTEGRITY
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#111010] mb-8 font-normal">
            Our Four Curatorial Tenets
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-[#FDFBF7] border border-[#E7DFD2]">
              <span className="font-serif text-3xl text-[#6B1724] font-light block mb-2">01</span>
              <h4 className="font-serif text-lg font-medium text-[#111010] mb-2">
                Tactile Longevity Over Algorithms
              </h4>
              <p className="text-xs sm:text-sm text-[#5C5651] font-sans leading-relaxed">
                We champion garments engineered with honest natural fibers—wool gabardine, raw cotton selvedge, and pure silk—capable of aging with graceful patina.
              </p>
            </div>

            <div className="p-6 bg-[#FDFBF7] border border-[#E7DFD2]">
              <span className="font-serif text-3xl text-[#6B1724] font-light block mb-2">02</span>
              <h4 className="font-serif text-lg font-medium text-[#111010] mb-2">
                Uncompromising Editorial Independence
              </h4>
              <p className="text-xs sm:text-sm text-[#5C5651] font-sans leading-relaxed">
                No sponsored product placement ever dictates our journalistic analysis. If a jacket has poor armhole articulation or fragile stitching, our critics say so without hesitation.
              </p>
            </div>

            <div className="p-6 bg-[#FDFBF7] border border-[#E7DFD2]">
              <span className="font-serif text-3xl text-[#6B1724] font-light block mb-2">03</span>
              <h4 className="font-serif text-lg font-medium text-[#111010] mb-2">
                Global Field Photography
              </h4>
              <p className="text-xs sm:text-sm text-[#5C5651] font-sans leading-relaxed">
                Our street photographers document real individuals in the wild—not paid influencers performing outside runway venues for paparazzi attention.
              </p>
            </div>

            <div className="p-6 bg-[#FDFBF7] border border-[#E7DFD2]">
              <span className="font-serif text-3xl text-[#6B1724] font-light block mb-2">04</span>
              <h4 className="font-serif text-lg font-medium text-[#111010] mb-2">
                Respect for Archival Craft
              </h4>
              <p className="text-xs sm:text-sm text-[#5C5651] font-sans leading-relaxed">
                We celebrate vintage pattern cutters, independent ateliers, and repair culture. Preservation is the truest luxury of the modern age.
              </p>
            </div>
          </div>
        </div>

        {/* Editorial Masthead Directory */}
        <div className="bg-[#F8F5EE] border border-[#E7DFD2] p-8 mb-14">
          <div className="text-xs uppercase font-sans tracking-[0.22em] text-[#6B1724] font-semibold mb-6">
            EDITORIAL MASTHEAD
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-xs font-sans">
            <div>
              <span className="text-[#9C948B] uppercase tracking-wider block mb-1">Editor-in-Chief</span>
              <strong className="text-sm font-serif block text-[#111010]">Sloane Montgomery</strong>
              <span className="text-[#68625D]">Paris Bureau</span>
            </div>
            <div>
              <span className="text-[#9C948B] uppercase tracking-wider block mb-1">Features Director</span>
              <strong className="text-sm font-serif block text-[#111010]">Camille Laurent</strong>
              <span className="text-[#68625D]">Milan & Paris</span>
            </div>
            <div>
              <span className="text-[#9C948B] uppercase tracking-wider block mb-1">Senior Trend Analyst</span>
              <strong className="text-sm font-serif block text-[#111010]">Marcus Vance</strong>
              <span className="text-[#68625D]">London Bureau</span>
            </div>
            <div>
              <span className="text-[#9C948B] uppercase tracking-wider block mb-1">Street Style Editor</span>
              <strong className="text-sm font-serif block text-[#111010]">Devon Park</strong>
              <span className="text-[#68625D]">Tokyo & New York</span>
            </div>
            <div>
              <span className="text-[#9C948B] uppercase tracking-wider block mb-1">Accessories Editor</span>
              <strong className="text-sm font-serif block text-[#111010]">Elena Rostova</strong>
              <span className="text-[#68625D]">Copenhagen Bureau</span>
            </div>
            <div>
              <span className="text-[#9C948B] uppercase tracking-wider block mb-1">Beauty Director</span>
              <strong className="text-sm font-serif block text-[#111010]">Clara Thorne</strong>
              <span className="text-[#68625D]">New York Bureau</span>
            </div>
          </div>
        </div>

        {/* Back button */}
        <div className="text-center">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#111010] hover:bg-[#6B1724] text-[#FDFBF7] text-xs font-sans tracking-[0.2em] uppercase font-medium transition-colors"
          >
            <span>RETURN TO FRONT PAGE</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
