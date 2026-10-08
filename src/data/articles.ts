// Curated local images generated for The Style Edit
export const IMAGES = {
  hero: '/src/assets/images/hero_fashion_trends_2026_1791431297274.jpg',
  featuredLongform: '/src/assets/images/featured_longform_fashion_change_1791431317128.jpg',
  streetStyle: '/src/assets/images/street_style_copenhagen_coat_1791431330291.jpg',
  celebrity: '/src/assets/images/celebrity_red_carpet_evening_1791431342732.jpg',
  beauty: '/src/assets/images/beauty_dewy_minimalist_glow_1791431355088.jpg',
};

export type Category = 
  | 'Trending' 
  | 'Style Guides' 
  | 'Clothing' 
  | 'Street Style' 
  | 'Celebrity Style' 
  | 'Beauty' 
  | 'Videos'
  | 'Culture';

export interface Article {
  id: string;
  slug: string;
  title: string;
  deck: string;
  category: Category;
  subcategory?: string;
  author: {
    name: string;
    role: string;
    avatarInitials: string;
  };
  publishedDate: string;
  readTime: string;
  image: string;
  imageCaption?: string;
  featured?: boolean;
  trending?: boolean;
  isDailyUpdate?: boolean;
  dailyBadge?: 'TREND ALERT' | 'STYLE GUIDE' | 'STREET STYLE' | 'CELEBRITY STYLE' | 'BEAUTY';
  tags: string[];
  pullQuote?: string;
  pullQuoteAttribution?: string;
  content: string[]; // rich paragraphs or markdown sections
  sections?: {
    heading: string;
    body: string[];
    subImage?: string;
    subImageCaption?: string;
    quote?: string;
  }[];
}

export const ARTICLES: Article[] = [
  {
    id: 'art-01',
    slug: 'the-biggest-fashion-trends-taking-over-2026',
    title: 'The Biggest Fashion Trends Taking Over 2026',
    deck: 'From runway moments to street-style statements, discover the trends defining what we wear right now.',
    category: 'Trending',
    subcategory: 'Runway & Forecast',
    author: {
      name: 'Camille Laurent',
      role: 'Fashion Features Director',
      avatarInitials: 'CL',
    },
    publishedDate: 'October 7, 2026',
    readTime: '9 min read',
    image: IMAGES.hero,
    imageCaption: 'Architectural drapes and quiet fluid tailoring dominate the Autumn/Winter collections.',
    featured: true,
    trending: true,
    tags: ['Trends 2026', 'Tailoring', 'Runway', 'Minimalism', 'Outerwear'],
    pullQuote: 'The silhouette of 2026 is uncompromisingly relaxed yet razor-sharp in execution.',
    pullQuoteAttribution: 'Camille Laurent, Paris',
    content: [
      'As we move through 2026, fashion finds itself standing at a rare, intoxicating crossroads: the end of frantic micro-trend exhaustion and the triumphant resurgence of considered, architectural dressing.',
      'For the past four seasons, runways in Milan and Paris offered polite nods toward minimalism. But this season, that restraint has crystallized into a deliberate uniform. We are witnessing the dethroning of disposable aesthetics in favour of tactile permanence: double-faced cashmere coats cut with sculptural shoulders, trousers that pool with intentional weight over low-profile loafers, and an uncompromising dedication to garments that move like liquid poetry.',
      'What separates 2026 from the minimalist eras of the nineties is proportion. Where Helmut Lang and Jil Sander celebrated stark, severe geometry, today’s leading designers are introducing softness. Shoulders remain dropped and generous; fabrics carry brushed textures and organic slubs; and colour is treated as an atmosphere rather than a visual shout.'
    ],
    sections: [
      {
        heading: '1. The Resurgence of Architectural Tailoring',
        body: [
          'Forget the suffocating tightness of traditional suiting. The modern blazer is an overcoat in miniature: uncanvassed, unlined, and cut with generous armholes that encourage fluid, dynamic movement.',
          'Styling this season demands high-low contrasts. Pair a double-breasted charcoal wool jacket with washed vintage selvedge denim and a tissue-weight silk tee. The juxtaposition between Savile Row precision and effortless street pragmatism is where true contemporary luxury lives.'
        ]
      },
      {
        heading: '2. The Palette: Warm Alabaster, Deep Merlot & Bitter Chocolate',
        body: [
          'If 2024 was defined by stark grey monochrome, 2026 has warmed up considerably. Designers have embraced a richer, more tactile spectrum anchored by warm alabaster, raw butter, deep merlot, and bitter espresso.',
          'These shades possess an inherent dignity. They do not fade when the trend cycle turns, and they photograph with an unmistakable cinematic depth in natural afternoon light.'
        ]
      },
      {
        heading: '3. Tactile Heritage: Shearling, Brushed Mohair & Raw Linens',
        body: [
          'In an era where screens dominate human attention, our desire for tactile reassurance in what we wear has reached fever pitch. Consumers are gravitating toward materials that announce their presence through touch.',
          'From heavy gauge fisherman knits with irregular loops to cloud-soft brushed alpaca stoles, 2026 celebrates the sensory beauty of authentic yarn craft.'
        ]
      }
    ]
  },
  {
    id: 'art-02',
    slug: 'how-fashion-is-changing-in-2026',
    title: 'How Fashion Is Changing in 2026: The Shift Beyond Algorithms to Tactile Identity',
    deck: 'An extensive editorial investigation into Gen-Z sartorial autonomy, archival curation, the death of seasonal cycles, and why personal identity has officially replaced the algorithmic trend.',
    category: 'Culture',
    subcategory: 'Long-Form Essay',
    author: {
      name: 'Sloane Montgomery',
      role: 'Editor-in-Chief',
      avatarInitials: 'SM',
    },
    publishedDate: 'October 7, 2026',
    readTime: '14 min read',
    image: IMAGES.featuredLongform,
    imageCaption: 'The new cohort of style architects eschews fast-fashion clones in pursuit of archival depth and bespoke texture.',
    featured: true,
    trending: true,
    tags: ['Long-form', 'Gen Z', 'Social Media', 'Archival Fashion', 'Sustainability', 'Identity'],
    pullQuote: 'Style is no longer about following one aesthetic. It is about building an identity.',
    pullQuoteAttribution: 'THE STYLE EDIT Curatorial Dispatch, 2026',
    content: [
      'To understand where fashion is headed in 2026, one must first understand what it feels like to survive the Great Trend Fatigue. Between 2021 and 2025, digital culture subjected consumers to a dizzying carousel of micro-aesthetics: cottagecore gave way to indie sleaze, mob wife aesthetic clashed with quiet luxury, and brat green flickered out within a single sunlit fortnight.',
      'By the close of last year, the exhaustion was palpable. Fashion enthusiasts realized that a wardrobe assembled around fifteen-second viral loops was inherently disposable, fragile, and hollow. Today, the pendulum has swung with breathtaking force toward the exact opposite pole: intentionality, archival provenance, tactile durability, and radical personal consistency.'
    ],
    sections: [
      {
        heading: 'The algorithmic burnout and the collapse of the fifteen-minute aesthetic',
        quote: 'When every algorithm rewards imitation, distinct personal style becomes an act of quiet rebellion.',
        body: [
          'For nearly a decade, platforms like TikTok and Instagram served as the de facto art directors of global youth culture. Algorithms were engineered to surface rapid-fire consumer novelties, rewarding ultra-fast fashion manufacturers who could sample a runway look, fabricate it in synthetic polyester, and land it on a teenager’s doorstep inside seven days.',
          'In 2026, this loop has decisively fractured. The younger generation—often stereotyped as passive consumers of algorithmic dopamine—has developed an acute resistance to digital conformity. There is now a social penalty attached to looking like a composite rendering of the For You Page.',
          'Instead of adopting a ready-made aesthetic package wholesale, modern dressers treat clothing like a curated bibliography. An ensemble today might combine an 1998 Helmut Lang moleskin jacket found in an Antwerp consignment boutique, a pair of Japanese raw denim jeans broken in over three years, and handmade ceramic earrings purchased directly from an independent ceramicist.'
        ]
      },
      {
        heading: 'Gen Z, archival archeology, and the new luxury of provenance',
        body: [
          'What constitutes luxury in 2026? It is certainly not a logo-stamped canvas tote bag sold in hundreds of duty-free boutiques worldwide. For discerning Gen Z and millennial dressers, true sartorial status is rooted in provenance—the ability to tell a compelling story about how a garment came into your possession.',
          'Platforms dedicated to archival peer-to-peer trading and specialist curators have eclipsed mainstream department stores in cultural relevance. Young buyers are memorizing collection dates, fabric mill codes, and design tenure: Phoebe Philo’s Celine, Nicolas Ghesquière’s early Balenciaga, Martin Margiela’s artisan line.',
          'This is not mere nostalgia; it is historical literacy. By wearing pieces with documented lineage, dressers anchor themselves in something enduring against the ephemeral blur of modern digital life.'
        ]
      },
      {
        heading: 'Streetwear meets Savile Row: The synthesis of comfort and discipline',
        quote: 'The sharpest outfit in 2026 feels as forgiving as lounge fleece, yet looks like an oil portrait.',
        body: [
          'The old binary between formalwear and streetwear has dissolved permanently. We are no longer having the tedious debate over whether sneakers belong in the boardroom or whether a necktie signifies corporate surrender.',
          'What has emerged is a synthesis: soft tailoring cut with streetwear ergonomics. Trousers feature concealed drawstrings and deep front pleats that allow for cycling or twelve-hour strolls across metropolitan cobblestones. Blazers are designed without rigid horsehair chest canvases, draping with the unpretentious ease of a vintage chore coat.',
          'This synthesis represents the triumph of lived experience. Fashion is no longer judged solely by how it appears in a frozen two-dimensional mirror selfie; it is evaluated by how it breathes when you sit on a flight, climb the metro stairs, or dance until three in the morning.'
        ]
      },
      {
        heading: 'The environmental reckoning: From performative greenwashing to repair culture',
        body: [
          'Consumers in 2026 are immune to hollow corporate sustainability declarations. Terms like "eco-conscious collection" and "recycled polyester blend" are met with justified skepticism.',
          'In response, a vibrant culture of visible mending and creative upcycling has flourished. Visible sashiko embroidery on frayed denim cuffs, resoled Goodyear-welted boots with natural crepe rubbers, and hand-darned cashmere sweaters are worn as badges of honor. Caring for a piece of clothing over a decade has replaced buying ten disposable garments as the ultimate ethical statement.'
        ]
      },
      {
        heading: 'Looking toward 2027: The rise of personal mythologies',
        quote: 'Style is no longer about following one aesthetic. It is about building an identity.',
        body: [
          'As we look toward the horizon of 2027, the future of fashion belongs not to mega-conglomerates dictating seasonal themes from high-rise Parisian boardrooms, but to individuals cultivating their own distinct visual languages.',
          'The modern wardrobe is a library of personal choices. It reflects where you have travelled, the artists whose books you read, the music you listen to when the city sleeps, and the tactile materials that make you feel invincible against the chaos of the world.',
          'In 2026, the question is no longer "What is in fashion?" The question that matters is: "Who are you when you get dressed in the morning?"'
        ]
      }
    ]
  },
  {
    id: 'art-03',
    slug: 'the-fashion-trends-youre-about-to-see-everywhere',
    title: 'The Fashion Trends You’re About to See Everywhere',
    deck: 'From butter-yellow layers to sculptural belts, these are the key shifts arriving at every boutique and street corner.',
    category: 'Trending',
    subcategory: 'Trend Forecast',
    author: {
      name: 'Marcus Vance',
      role: 'Senior Trend Analyst',
      avatarInitials: 'MV',
    },
    publishedDate: 'October 6, 2026',
    readTime: '6 min read',
    image: IMAGES.streetStyle,
    trending: true,
    tags: ['Trend Report', 'Autumn 2026', 'Wardrobe', 'Silhouettes'],
    content: [
      'Every fashion cycle produces a handful of visual motifs that capture the cultural mood before the public even realizes they are seeking them. This season, that mood is defined by tactile warmth and calculated imperfection.',
      'From oversized belted trench coats draped with deliberate nonchalance to the return of brushed mohair scarves in rich burgundy, these trends are designed for real life, not just staged photo shoots.'
    ]
  },
  {
    id: 'art-04',
    slug: 'why-statement-accessories-are-making-a-comeback',
    title: 'Why Statement Accessories Are Making a Comeback',
    deck: 'As garments become more streamlined and architectural, bags, vintage brass brooches, and sculpted cuffs take center stage.',
    category: 'Clothing',
    subcategory: 'Accessories',
    author: {
      name: 'Elena Rostova',
      role: 'Accessories Editor',
      avatarInitials: 'ER',
    },
    publishedDate: 'October 5, 2026',
    readTime: '5 min read',
    image: IMAGES.celebrity,
    trending: true,
    tags: ['Accessories', 'Jewellery', 'Bags', 'Vintage'],
    content: [
      'When your everyday uniform consists of quiet navy tailoring and ivory cashmere, the accessories you choose bear the weight of your personal punctuation.',
      'We are witnessing a glorious renaissance of statement hardware: heavyweight cast-brass cuffs that feel like wearable Brâncuși sculptures, structured vanity cases carried by hand, and vintage intaglio signet rings collected from flea markets.'
    ]
  },
  {
    id: 'art-05',
    slug: 'the-new-rules-of-everyday-dressing',
    title: 'The New Rules of Everyday Dressing',
    deck: 'Throw out the outdated dress codes: how to navigate hybrid work, relaxed evenings, and the modern smart-casual dilemma.',
    category: 'Style Guides',
    subcategory: 'Everyday Style',
    author: {
      name: 'Camille Laurent',
      role: 'Fashion Features Director',
      avatarInitials: 'CL',
    },
    publishedDate: 'October 4, 2026',
    readTime: '7 min read',
    image: IMAGES.streetStyle,
    trending: true,
    tags: ['Everyday Style', 'Capsule', 'Smart Casual', 'Wardrobe Formula'],
    content: [
      'The traditional divide between work clothes and weekend clothes has become obsolete. Today’s most capable dressers operate with a unified wardrobe that pivots seamlessly between an 11 AM strategy presentation and an 8 PM natural wine bar.',
      'The secret lies in texture orchestration and silhouette balance. When your trouser has tailored structure, your top can be effortless; when your knitwear is dense and plush, a sleek leather shoe grounds the entire equation.'
    ]
  },
  {
    id: 'art-06',
    slug: 'the-return-of-relaxed-tailoring',
    title: 'The Return of Relaxed Tailoring: How to Wear a Suit Without Feeling Stiff',
    deck: 'Unstructured shoulders, fluid wool gabardine, and pooling cuffs—the modern suit is the ultimate symbol of quiet confidence.',
    category: 'Clothing',
    subcategory: 'Tailoring',
    author: {
      name: 'Marcus Vance',
      role: 'Senior Trend Analyst',
      avatarInitials: 'MV',
    },
    publishedDate: 'October 3, 2026',
    readTime: '6 min read',
    image: IMAGES.hero,
    trending: true,
    tags: ['Tailoring', 'Suits', 'Menswear-Inspired', 'Power Dressing'],
    content: [
      'Tailoring has finally shed its rigid corporate baggage. The modern suit does not constrain the body; it liberates it.',
      'Cut from fluid wool gabardines and lightweight linen blends, contemporary blazers feel more like refined cardigans. Pair them with simple tank tops, worn-in sneakers, or polished Chelsea boots for a look that commands respect through ease.'
    ]
  },
  {
    id: 'art-07',
    slug: 'the-colours-defining-fashion-right-now',
    title: 'The Colours Defining Fashion Right Now',
    deck: 'Step aside, clinical black: the palette of 2026 belongs to deep burgundy, warm butter, slate olive, and toasted almond.',
    category: 'Trending',
    subcategory: 'Colour Theory',
    author: {
      name: 'Sloane Montgomery',
      role: 'Editor-in-Chief',
      avatarInitials: 'SM',
    },
    publishedDate: 'October 2, 2026',
    readTime: '5 min read',
    image: IMAGES.celebrity,
    trending: true,
    tags: ['Colour Trends', 'Burgundy', 'Earth Tones', 'Styling Tips'],
    content: [
      'Colour in 2026 is rich, grounded, and emotionally resonant. Rather than high-voltage synthetics, fashion houses have drawn inspiration from natural pigments: dried madder root, oxidized bronze, aged parchment, and roasted coffee beans.',
      'These shades offer infinite modularity. A deep wine burgundy jacket functions with the versatility of a navy coat, yet imparts an unmistakable richness that catches the low autumn light.'
    ]
  },
  {
    id: 'art-08',
    slug: 'why-gen-z-is-changing-the-way-we-dress',
    title: 'Why Gen Z Is Changing the Way We Dress',
    deck: 'From gender-fluid silhouettes to archival Japanese denim, the youth demographic is rewriting fashion’s century-old rulebook.',
    category: 'Trending',
    subcategory: 'Cultural Phenomenon',
    author: {
      name: 'Devon Park',
      role: 'Youth Culture & Streetwear Editor',
      avatarInitials: 'DP',
    },
    publishedDate: 'October 1, 2026',
    readTime: '8 min read',
    image: IMAGES.streetStyle,
    trending: true,
    tags: ['Gen Z', 'Culture', 'Subculture', 'Vintage Sourcing'],
    content: [
      'Generational commentary often reduces Gen Z fashion to fleeting internet aesthetics. But look beneath the surface, and you discover the most technically literate, historically curious generation of fashion consumers in history.',
      'They can spot a Riri zipper from across the room, distinguish between 13oz and 16oz raw denim weaves, and value the patina of twenty-year-old boots over fresh factory packaging.'
    ]
  },

  // TODAY IN FASHION ARTICLES
  {
    id: 'art-today-01',
    slug: 'the-new-silhouette-everyone-is-talking-about',
    title: 'The New Silhouette Everyone Is Talking About',
    deck: 'The barrel-leg trouser meets the sculpted cropped jacket—why this contrasting proportion is dominating street style.',
    category: 'Trending',
    subcategory: 'Silhouette Watch',
    isDailyUpdate: true,
    dailyBadge: 'TREND ALERT',
    author: { name: 'Camille Laurent', role: 'Fashion Features Director', avatarInitials: 'CL' },
    publishedDate: 'Today · Oct 7, 2026',
    readTime: '4 min read',
    image: IMAGES.hero,
    tags: ['Trend Alert', 'Trousers', 'Silhouette', 'Runway Update'],
    content: [
      'Every few seasons, a proportion shift occurs that initially divides critics before becoming the dominant silhouette of the era.',
      'The curved, sculpted barrel-leg trouser is currently claiming that mantle. When anchored with a razor-sharp cropped wool jacket, it creates an architectural line that feels fresh, assertive, and undeniably chic.'
    ]
  },
  {
    id: 'art-today-02',
    slug: '7-ways-to-style-a-white-shirt-without-looking-basic',
    title: '7 Ways to Style a White Shirt Without Looking Basic',
    deck: 'From asymmetric buttons to backwards collars and knit vests, how to elevate fashion’s most humble essential.',
    category: 'Style Guides',
    subcategory: 'Wardrobe Essentials',
    isDailyUpdate: true,
    dailyBadge: 'STYLE GUIDE',
    author: { name: 'Elena Rostova', role: 'Styling Specialist', avatarInitials: 'ER' },
    publishedDate: 'Today · Oct 7, 2026',
    readTime: '6 min read',
    image: IMAGES.featuredLongform,
    tags: ['Style Guide', 'White Shirt', 'Styling Hacks', 'Capsule Wardrobe'],
    content: [
      'A crisp poplin shirt is often championed as the ultimate wardrobe staple, yet too often it is styled like corporate office default.',
      'Here are seven high-fashion styling formulas: buttoning only the middle three buttons over high-waisted fluid trousers; rolling cuffs up to the elbow with an oversized watch; layering under a deep-V cashmere pullover; and tucking just one side while leaving the hem trailing.'
    ]
  },
  {
    id: 'art-today-03',
    slug: 'what-fashion-lovers-are-wearing-right-now',
    title: 'What Fashion Lovers Are Wearing Right Now',
    deck: 'Direct dispatches from Le Marais, Aoyama, and SoHo: the real-time looks inspiring our moodboards today.',
    category: 'Street Style',
    subcategory: 'Daily Street Dispatch',
    isDailyUpdate: true,
    dailyBadge: 'STREET STYLE',
    author: { name: 'Devon Park', role: 'Street Style Editor', avatarInitials: 'DP' },
    publishedDate: 'Today · Oct 7, 2026',
    readTime: '5 min read',
    image: IMAGES.streetStyle,
    tags: ['Street Style', 'Paris', 'Tokyo', 'NYC', 'Real Outfits'],
    content: [
      'Our photographers in Paris and Tokyo report an undeniable shift: structured vintage blazers paired with utilitarian trousers, buttery leather bags carried under the arm, and an embrace of comfortable, sculptural footwear.',
      'It is an aesthetic that prizes ease without sacrificing an ounce of sartorial rigor.'
    ]
  },
  {
    id: 'art-today-04',
    slug: 'the-best-celebrity-looks-this-week',
    title: 'The Best Celebrity Looks This Week: Red Carpet & Off-Duty',
    deck: 'From minimal satin columns to vintage archival coats at JFK, here are the style stars who nailed the assignment.',
    category: 'Celebrity Style',
    subcategory: 'Weekly Best Dressed',
    isDailyUpdate: true,
    dailyBadge: 'CELEBRITY STYLE',
    author: { name: 'Sloane Montgomery', role: 'Editor-in-Chief', avatarInitials: 'SM' },
    publishedDate: 'Today · Oct 7, 2026',
    readTime: '5 min read',
    image: IMAGES.celebrity,
    tags: ['Celebrity Style', 'Red Carpet', 'Off-Duty', 'Best Dressed'],
    content: [
      'This week’s standout celebrity moments eschewed loud theatrics in favour of impeccable execution. From sculpted satin eveningwear at the Rome Film Gala to effortless airport dressing in tailored camel coats and sunglasses, understated luxury took the crown.'
    ]
  },
  {
    id: 'art-today-05',
    slug: 'the-beauty-trends-taking-over-social-media',
    title: 'The Beauty Trends Taking Over Social Media',
    deck: 'Cloud skin, soft wine-stained lips, and brushed boy brows: the effortless look replacing heavy matte layers.',
    category: 'Beauty',
    subcategory: 'Viral Beauty',
    isDailyUpdate: true,
    dailyBadge: 'BEAUTY',
    author: { name: 'Clara Thorne', role: 'Beauty Director', avatarInitials: 'CT' },
    publishedDate: 'Today · Oct 7, 2026',
    readTime: '4 min read',
    image: IMAGES.beauty,
    tags: ['Beauty', 'Skincare', 'Makeup Trends', 'Minimal Beauty'],
    content: [
      'The era of 12-step heavy contouring is firmly in the rearview mirror. Across runway backstages and social feeds, the focus has shifted to skin vitality: soft satin finishes that look like authentic skin, blurred wine stains tapped onto the center of the lip, and naturally brushed brows.'
    ]
  },

  // STYLE GUIDES
  {
    id: 'art-sg-01',
    slug: 'how-to-build-a-wardrobe-that-actually-works',
    title: 'How to Build a Wardrobe That Actually Works',
    deck: 'Stop buying single pieces that don’t talk to each other: an architect’s approach to building a cohesive personal rotation.',
    category: 'Style Guides',
    subcategory: 'Capsule Wardrobe',
    author: { name: 'Camille Laurent', role: 'Fashion Features Director', avatarInitials: 'CL' },
    publishedDate: 'September 28, 2026',
    readTime: '11 min read',
    image: IMAGES.featuredLongform,
    tags: ['Wardrobe System', 'Capsule Wardrobe', 'Investment Pieces', 'Styling Philosophy'],
    content: [
      'Most people do not suffer from having too few clothes; they suffer from having too many disconnected garments that refuse to converse with one another.',
      'A functional wardrobe functions like an orchestra: every piece must know its timbre and how it supports the rest of the ensemble. By establishing three core anchors—a bespoke jacket, a peerless pair of trousers, and a luxurious knit—dressing each morning transforms from a panic into a calm creative ritual.'
    ]
  },
  {
    id: 'art-sg-02',
    slug: '10-outfit-formulas-you-can-repeat-without-looking-repetitive',
    title: '10 Outfit Formulas You Can Repeat Without Looking Repetitive',
    deck: 'The blueprint uniforms relied upon by fashion editors, stylists, and creatives worldwide.',
    category: 'Style Guides',
    subcategory: 'Outfit Formulas',
    author: { name: 'Elena Rostova', role: 'Styling Specialist', avatarInitials: 'ER' },
    publishedDate: 'September 25, 2026',
    readTime: '8 min read',
    image: IMAGES.streetStyle,
    tags: ['Outfit Formulas', 'Everyday Uniform', 'Workwear', 'Effortless Style'],
    content: [
      'Having a set of reliable outfit formulas is not lazy; it is the hallmark of someone who has mastered their personal aesthetic.',
      'From the "Tonal Column with an Oversized Outer Layer" to the "High-Waist Drape with a Compact Knit," these 10 formulas ensure you look polished in under three minutes flat.'
    ]
  },

  // CLOTHING EDITORIALS
  {
    id: 'art-cl-01',
    slug: 'why-wide-leg-denim-is-still-everywhere',
    title: 'Why Wide-Leg Denim Is Still Everywhere (And How to Hem It Right)',
    deck: 'Skinny jeans may threaten a revival, but the relaxed puddle hem remains unbeatable in comfort and chic proportion.',
    category: 'Clothing',
    subcategory: 'Denim',
    author: { name: 'Devon Park', role: 'Street Style Editor', avatarInitials: 'DP' },
    publishedDate: 'September 22, 2026',
    readTime: '6 min read',
    image: IMAGES.streetStyle,
    tags: ['Denim', 'Wide Leg Jeans', 'Trouser Fit', 'Street Style'],
    content: [
      'Despite seasonal trend predictions threatening the return of restrictive denim, the relaxed wide-leg jean has proven to be an enduring modern classic.',
      'When cut from authentic 100% cotton denim without elastane stretch, wide-leg jeans drape with an architectural dignity that synthetic stretch blends can never replicate.'
    ]
  },
  {
    id: 'art-cl-02',
    slug: 'the-return-of-the-statement-jacket',
    title: 'The Return of the Statement Jacket: Sculptural Lapels and Tactile Wool',
    deck: 'Invest in outerwear that does all the talking before you even speak.',
    category: 'Clothing',
    subcategory: 'Jackets & Coats',
    author: { name: 'Camille Laurent', role: 'Fashion Features Director', avatarInitials: 'CL' },
    publishedDate: 'September 20, 2026',
    readTime: '7 min read',
    image: IMAGES.hero,
    tags: ['Jackets', 'Coats', 'Outerwear', 'Autumn Wardrobe'],
    content: [
      'In cold weather, your coat is not merely an accessory to your outfit—it IS your outfit to everyone you encounter on the street.',
      'This season’s statement jackets feature wide architectural lapels, drop-shoulder volume, and tactile finishes that turn a simple morning commute into a runway entrance.'
    ]
  },

  // STREET STYLE & CELEBRITY
  {
    id: 'art-ss-01',
    slug: 'street-style-report-what-everyone-is-wearing-right-now',
    title: 'Street Style Report: What Everyone Is Wearing Right Now in Milan & Paris',
    deck: 'An extensive photo essay and outfit breakdown from the fashion capitals of Europe.',
    category: 'Street Style',
    subcategory: 'Fashion Capitals',
    author: { name: 'Devon Park', role: 'Street Style Editor', avatarInitials: 'DP' },
    publishedDate: 'September 18, 2026',
    readTime: '9 min read',
    image: IMAGES.streetStyle,
    tags: ['Street Style Report', 'Paris', 'Milan', 'Candid Fashion'],
    content: [
      'Street style has matured beyond theatrical look-at-me peacocking into a masterclass in everyday luxury.',
      'In Milan, it is all about rich caramel suiting and polished loafers; in Paris, it is the understated poetry of a trench coat over vintage selvedge jeans and a well-loved leather shoulder bag.'
    ]
  },
  {
    id: 'art-celeb-01',
    slug: 'how-celebrity-street-style-becomes-mainstream-fashion',
    title: 'How Celebrity Street Style Becomes Mainstream Fashion',
    deck: 'From airport terminals to coffee runs, tracing the pipeline from off-duty celebrity paparazzi shot to global high-street sensation.',
    category: 'Celebrity Style',
    subcategory: 'Cultural Analysis',
    author: { name: 'Sloane Montgomery', role: 'Editor-in-Chief', avatarInitials: 'SM' },
    publishedDate: 'September 15, 2026',
    readTime: '8 min read',
    image: IMAGES.celebrity,
    tags: ['Celebrity Style', 'Paparazzi Culture', 'Off-Duty', 'High Street'],
    content: [
      'The modern celebrity street-style look is a carefully calibrated theatrical production disguised as casual nonchalance.',
      'When an A-list actress steps out in an oversized trench, baseball cap, and chunky loafers, stylists, brands, and trend forecasters move in tandem to decode the commercial appetite of millions.'
    ]
  },

  // BEAUTY
  {
    id: 'art-bty-01',
    slug: 'minimal-makeup-is-having-a-major-moment',
    title: 'Minimal Makeup Is Having a Major Moment: The 5-Minute Editorial Face',
    deck: 'Why skin-first minimalism and sheer wine stains have replaced heavy full-coverage glam.',
    category: 'Beauty',
    subcategory: 'Makeup Guide',
    author: { name: 'Clara Thorne', role: 'Beauty Director', avatarInitials: 'CT' },
    publishedDate: 'September 12, 2026',
    readTime: '5 min read',
    image: IMAGES.beauty,
    tags: ['Minimal Makeup', 'Dewy Skin', 'Beauty Trends', 'Skincare'],
    content: [
      'The modern editorial beauty philosophy starts with high-performance skincare and ends with minimal, targeted correction.',
      'A dab of skin-like concealer around the nose and under the eyes, a warm cream tint blended across cheekbones and lips, and a quick brush through natural brows delivers an effortless, magnetic radiance.'
    ]
  }
];

export interface VideoItem {
  id: string;
  title: string;
  duration: string;
  category: string;
  description: string;
  thumbnail: string;
  author: string;
  timestampChapters: { time: string; title: string }[];
}

export const VIDEOS: VideoItem[] = [
  {
    id: 'vid-01',
    title: 'Paris Runway Review: Behind the Velvet Curtain of Autumn Couture',
    duration: '14:20',
    category: 'Runway & Backstage',
    description: 'An intimate documentary look inside the Parisian ateliers as master tailors assemble hand-canvassed garments hours before showtime.',
    thumbnail: IMAGES.hero,
    author: 'Camille Laurent & Film Team',
    timestampChapters: [
      { time: '00:00', title: 'The Call Sheet & Morning Atelier' },
      { time: '03:45', title: 'Fitting the Sculpted Wool Capes' },
      { time: '08:12', title: 'Soundcheck & Lighting Rehearsal' },
      { time: '11:30', title: 'The First Walk & Finale Silence' },
    ]
  },
  {
    id: 'vid-02',
    title: 'Styling Masterclass: 5 Ways to Knot and Drape the Cashmere Scarf',
    duration: '08:45',
    category: 'Masterclass',
    description: 'Elena Rostova breaks down the subtle micro-folds that transform a basic rectangular shawl into an architectural silhouette.',
    thumbnail: IMAGES.featuredLongform,
    author: 'Elena Rostova',
    timestampChapters: [
      { time: '00:00', title: 'Choosing the Right Yarn Gauge' },
      { time: '02:10', title: 'The Parisian Asymmetric Drape' },
      { time: '04:35', title: 'The Architectural Wrap' },
      { time: '06:50', title: 'The Over-Shoulder Cascade' },
    ]
  },
  {
    id: 'vid-03',
    title: 'Tokyo Streetwear Diary: Harajuku, Daikanyama & Ginza on 35mm',
    duration: '11:15',
    category: 'Street Style Diary',
    description: 'Walking through the backstreets of Shibuya and Daikanyama capturing real youth style, archival vintage collectors, and denim craft.',
    thumbnail: IMAGES.streetStyle,
    author: 'Devon Park',
    timestampChapters: [
      { time: '00:00', title: 'Morning Coffee in Daikanyama' },
      { time: '03:20', title: 'Inside the Vintage Denim Vault' },
      { time: '07:05', title: 'Harajuku Next-Gen Creators' },
      { time: '09:40', title: 'Ginza Night Tailoring' },
    ]
  },
  {
    id: 'vid-04',
    title: 'Editorial Beauty: Mastering the 5-Minute "Cloud Skin" & Wine Stain',
    duration: '06:30',
    category: 'Beauty Guide',
    description: 'Clara Thorne demonstrates skin prep, lightweight tint application, and the blurred burgundy lip signature of Autumn 2026.',
    thumbnail: IMAGES.beauty,
    author: 'Clara Thorne',
    timestampChapters: [
      { time: '00:00', title: 'Glow Prep & Lymphatic Massage' },
      { time: '02:00', title: 'Featherlight Concealer Placement' },
      { time: '04:15', title: 'The Tapped Wine Lip Method' },
    ]
  }
];

export const CLOTHING_CATEGORIES = [
  'All Clothing',
  'Dresses',
  'Tops',
  'Denim',
  'Trousers',
  'Jackets',
  'Knitwear',
  'Skirts',
  'Shoes',
  'Bags',
  'Accessories'
];

export const STYLE_GUIDE_TOPICS = [
  'All Guides',
  'Everyday Style',
  'Workwear',
  'Party Wear',
  'Date Night',
  'Streetwear',
  'College Style',
  'Travel Style',
  'Minimalist Style',
  'Capsule Wardrobe',
  'Seasonal Styling'
];
