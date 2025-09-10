import cisData from '../data/cis.json';
import { artists as artistsData } from '../data/artists';
import type { Artist } from '../data/artists';

export interface PortfolioItem {
  id: string;
  image: string;
  video?: string;
  artist: string;
  artistSlug: string;
  title: string;
  alt: string;
  specialty: string;
  type: 'image' | 'video';
  source: 'cis' | 'artists';
  originalIndex: number;
}

// Define artistic descriptors that match Cursed Ink Society's style
const artisticDescriptors = [
  "Masterful Creation", "Artistic Vision", "Ink Mastery", "Cursed Artistry", 
  "Dark Elegance", "Timeless Craft", "Bold Expression", "Sacred Ink",
  "Mystical Design", "Shadow & Light", "Eternal Art", "Forbidden Ink",
  "Ancient Wisdom", "Brutal Beauty", "Ethereal Form", "Divine Darkness",
  "Primal Power", "Celestial Craft", "Infernal Art", "Legendary Work"
];

/**
 * Determines if a file path is a video based on extension
 */
function isVideoFile(path: string): boolean {
  const videoExtensions = ['.mp4', '.webm', '.mov', '.avi'];
  return videoExtensions.some(ext => path.toLowerCase().endsWith(ext));
}

/**
 * Merges portfolio data from both cis.json and artists.ts
 * Prioritizes artists.ts data when available, falls back to cis.json
 */
function mergeArtistData(): Artist[] {
  const mergedArtists: Artist[] = [];

  // Start with cis.json artists as base
  for (const cisArtist of cisData.artists) {
    // Find matching artist in artists.ts
    const artistsMatch = artistsData.find(a => a.slug === cisArtist.slug);
    
    if (artistsMatch) {
      // Use artists.ts data with cis.json as fallback
      mergedArtists.push({
        ...artistsMatch,
        // Merge portfolio arrays, prioritizing artists.ts, then cis.json
        portfolio: [
          ...(artistsMatch.portfolio || []),
          ...(cisArtist.portfolio || []).filter(item => 
            !(artistsMatch.portfolio || []).includes(item)
          )
        ]
      });
    } else {
      // Convert cis.json format to Artist format
      mergedArtists.push({
        name: cisArtist.name,
        slug: cisArtist.slug,
        avatar: cisArtist.avatar,
        title: cisArtist.positioning.split(' - ')[0] || cisArtist.positioning,
        styles: cisArtist.specialties || [],
        stats: {
          creativity: 85,
          experience: 85,
          mastery: 85,
          technique: 85,
          artistry: 85
        },
        blurb: cisArtist.bio,
        bio: cisArtist.bio,
        specialties: cisArtist.specialties || [],
        experience: cisArtist.experience,
        instagram: cisArtist.instagram,
        featuredWork: cisArtist.featuredWork || [],
        portfolio: cisArtist.portfolio || [],
        cta: cisArtist.cta
      });
    }
  }

  return mergedArtists;
}

/**
 * Aggregates all portfolio items from all artists into a unified array
 * Automatically detects videos and creates appropriate metadata
 */
export function aggregatePortfolioItems(): PortfolioItem[] {
  const mergedArtists = mergeArtistData();
  const allPortfolioItems: PortfolioItem[] = [];

  mergedArtists.forEach((artist, artistIndex) => {
    const portfolioItems = artist.portfolio || [];
    
    portfolioItems.forEach((item, itemIndex) => {
      const descriptorIndex = (artistIndex * 10 + itemIndex) % artisticDescriptors.length;
      const primarySpecialty = artist.specialties?.[0] || artist.styles?.[0] || "Custom Art";
      const isVideo = isVideoFile(item);
      
      allPortfolioItems.push({
        id: `${artist.slug}-${itemIndex}`,
        image: isVideo ? '' : item,
        video: isVideo ? item : undefined,
        artist: artist.name,
        artistSlug: artist.slug,
        title: artisticDescriptors[descriptorIndex],
        alt: `${primarySpecialty} ${isVideo ? 'video' : 'tattoo'} by ${artist.name} - Cursed Ink Society artistry`,
        specialty: primarySpecialty,
        type: isVideo ? 'video' : 'image',
        source: 'cis', // We could track this if needed
        originalIndex: itemIndex
      });
    });
  });

  return allPortfolioItems;
}

/**
 * Gets portfolio items for a specific artist
 */
export function getArtistPortfolioItems(artistSlug: string): PortfolioItem[] {
  const allItems = aggregatePortfolioItems();
  return allItems.filter(item => item.artistSlug === artistSlug);
}

/**
 * Gets all merged artist data
 */
export function getMergedArtists(): Artist[] {
  return mergeArtistData();
}

/**
 * Gets a specific merged artist by slug
 */
export function getMergedArtist(slug: string): Artist | undefined {
  const mergedArtists = mergeArtistData();
  return mergedArtists.find(artist => artist.slug === slug);
}

/**
 * Gets total count of portfolio items across all artists
 */
export function getTotalPortfolioCount(): number {
  return aggregatePortfolioItems().length;
}

/**
 * Gets portfolio items with pagination support
 */
export function getPaginatedPortfolioItems(page: number = 1, itemsPerPage: number = 12): {
  items: PortfolioItem[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
  hasMore: boolean;
} {
  const allItems = aggregatePortfolioItems();
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const items = allItems.slice(startIndex, endIndex);
  
  return {
    items,
    totalItems: allItems.length,
    totalPages: Math.ceil(allItems.length / itemsPerPage),
    currentPage: page,
    hasMore: endIndex < allItems.length
  };
}

/**
 * Gets portfolio items with prioritized artists and randomization
 * Prioritizes Cody, Luis, Ashley, and Anthony, then randomizes the rest
 */
export function getPrioritizedPortfolioItems(): PortfolioItem[] {
  const allItems = aggregatePortfolioItems();
  
  // Define priority artists (in order of preference)
  const priorityArtists = ['cody-crochet', 'luis-reymundo', 'ashley-wood', 'anthony-boudreaux'];
  
  // Separate items by priority
  const priorityItems: PortfolioItem[] = [];
  const regularItems: PortfolioItem[] = [];
  
  allItems.forEach(item => {
    if (priorityArtists.includes(item.artistSlug)) {
      priorityItems.push(item);
    } else {
      regularItems.push(item);
    }
  });
  
  // Shuffle function using Fisher-Yates algorithm
  function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
  
  // Randomize priority items (so Cody, Luis, Ashley, Anthony appear in random order at top)
  const shuffledPriorityItems = shuffleArray(priorityItems);
  
  // Randomize regular items  
  const shuffledRegularItems = shuffleArray(regularItems);
  
  // Combine: priority items first, then regular items
  return [...shuffledPriorityItems, ...shuffledRegularItems];
}