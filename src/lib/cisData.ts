import { slugify } from "./slugify";
import cisDataRaw from "../data/cis.json";

// Type for CIS artist data structure
export interface CISArtist {
  name: string;
  slug: string;
  positioning: string;
  bio: string;
  specialties: string[];
  experience: string;
  avatar: string;
  instagram: string;
  featuredWork: string[];
  portfolio: string[];
  cta: {
    text: string;
    url: string;
  };
}

export function normalizeCISArtist(artist: CISArtist): CISArtist & { slug: string } {
  return {
    ...artist,
    slug: slugify(artist.slug ?? artist.name ?? "untitled"),
  };
}

// Normalize all artists in CIS data
const normalizedCISData = {
  ...cisDataRaw,
  artists: cisDataRaw.artists.map(normalizeCISArtist)
};

export default normalizedCISData;
