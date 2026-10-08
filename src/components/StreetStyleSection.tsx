import React, { useState } from 'react';
import { Camera, MapPin, ArrowRight } from 'lucide-react';
import { Article, IMAGES } from '../data/articles';

interface StreetStyleSectionProps {
  articles: Article[];
  onSelectArticle: (articleId: string) => void;
}

export const StreetStyleSection: React.FC<StreetStyleSectionProps> = ({
  articles,
  onSelectArticle,
}) => {
  const [selectedCity, setSelectedCity] = useState<'All' | 'Paris' | 'Tokyo' | 'Copenhagen' | 'New York' | 'Milan'>('All');

  const streetSnaps = [
    {
      id: 'snap-1',
      city: 'Paris',
      location: 'Rue Vieille du Temple, Le Marais',
      photographer: 'Camille Laurent',
      look: 'Oversized charcoal wool blazer, wide-leg ecru trousers, burgundy leather bag.',
      image: IMAGES.streetStyle,
      palette: ['#2B2A29', '#EAE5DB', '#6B1724'],
      caption: 'The art of Parisian nonchalance: tailoring paired with casual ease.',
    },
    {
      id: 'snap-2',
      city: 'Copenhagen',
      location: 'Kongens Nytorv',
      photographer: 'Soren Lind',
      look: 'Double-breasted trench coat with architectural lapel and lug-sole oxfords.',
      image: IMAGES.hero,
      palette: ['#C4A482', '#1C1917', '#8B5A2B'],
      caption: 'Scandinavian minimalism elevated through fluid textures and protective layering.',
    },
    {
      id: 'snap-3',
      city: 'Tokyo',
      location: 'Cat Street, Harajuku',
      photographer: 'Kenji Sato',
      look: 'Archival pleated Issey Miyake coat over vintage selvedge denim.',
      image: IMAGES.featuredLongform,
      palette: ['#1A1A1A', '#3A4D6B', '#D1C7BD'],
      caption: 'Architectural pleats and artisanal denim mastery in Shibuya district.',
    },
    {
      id: 'snap-4',
      city: 'Milan',
      location: 'Via Montenapoleone',
      photographer: 'Matteo Rossi',
      look: 'Caramel cashmere overcoat, chocolate suede loafers, horn-rim spectacles.',
      image: IMAGES.celebrity,
      palette: ['#995D3F', '#3B2F2F', '#F4F1EA'],
      caption: 'Italian sprezzatura: tonal earthy shades and supple brushed textures.',
    },
  ];

  const filteredSnaps = selectedCity === 'All'
    ? streetSnaps
    : streetSnaps.filter((s) => s.city === selectedCity);

  return (
    <section className="py-16 sm:py-24 border-b border-[#E6DFD5] bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#E8E1D5]">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-sans tracking-[0.22em] text-[#6B1724] uppercase font-semibold mb-1">
              <Camera className="w-3.5 h-3.5" />
              <span>GLOBAL FIELD PHOTOGRAPHY</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#111010] font-normal tracking-tight">
              STREET STYLE DISPATCH
            </h2>
          </div>
          <div className="mt-2 md:mt-0 flex items-center gap-2">
            {(['All', 'Paris', 'Tokyo', 'Copenhagen', 'Milan'] as const).map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`text-xs font-sans uppercase tracking-wider px-2.5 py-1 transition-colors ${
                  selectedCity === city
                    ? 'bg-[#111010] text-[#FDFBF7] font-medium'
                    : 'text-[#68625D] hover:text-[#111010]'
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Editorial Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredSnaps.map((snap) => (
            <div
              key={snap.id}
              className="bg-[#FDFBF7] border border-[#E8E0D4] overflow-hidden group hover:border-[#111010] transition-colors"
            >
              <div className="aspect-[3/4] w-full overflow-hidden bg-[#E7DFD3] relative">
                <img
                  src={snap.image}
                  alt={snap.look}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#111010]/85 text-white text-[10px] font-sans px-2 py-0.5 tracking-wider uppercase flex items-center gap-1">
                  <MapPin className="w-2.5 h-2.5" />
                  {snap.city}
                </div>
              </div>

              <div className="p-4">
                <div className="text-[11px] font-sans text-[#78716C] mb-1 flex items-center justify-between">
                  <span>Photo: {snap.photographer}</span>
                  <div className="flex items-center gap-1">
                    {snap.palette.map((color, idx) => (
                      <span
                        key={idx}
                        className="w-2.5 h-2.5 rounded-full border border-black/10 inline-block"
                        style={{ backgroundColor: color }}
                        title="Palette nuance"
                      />
                    ))}
                  </div>
                </div>

                <div className="font-serif text-sm text-[#111010] font-medium mb-1">
                  {snap.location}
                </div>

                <p className="font-sans text-xs text-[#5C5651] leading-relaxed mb-3">
                  {snap.look}
                </p>

                <div className="text-[11px] font-serif italic text-[#78716C] border-t border-[#F2ECE1] pt-2">
                  “{snap.caption}”
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Street Style Essays */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#E8E1D5]">
          {articles
            .filter((a) => a.category === 'Street Style' || a.tags.includes('Street Style'))
            .slice(0, 3)
            .map((art) => (
              <div key={art.id} className="border-l-2 border-[#6B1724] pl-4 py-1">
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#6B1724] block mb-1">
                  EDITORIAL DOSSIER
                </span>
                <h4
                  onClick={() => onSelectArticle(art.id)}
                  className="font-serif text-lg text-[#111010] hover:text-[#6B1724] transition-colors cursor-pointer mb-1 leading-snug"
                >
                  {art.title}
                </h4>
                <p className="text-xs text-[#68625D] font-sans line-clamp-2 leading-relaxed mb-2">
                  {art.deck}
                </p>
                <button
                  onClick={() => onSelectArticle(art.id)}
                  className="inline-flex items-center gap-1 text-[11px] text-[#111010] hover:text-[#6B1724] font-sans uppercase tracking-wider font-semibold"
                >
                  <span>Read Dispatch</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
