export interface ArtistStats {
  creativity: number;
  experience: number;
  mastery: number;
  technique: number;
  artistry: number;
}

export interface Artist {
  name: string;
  slug: string;
  avatar: string;
  title: string;
  styles: string[];
  stats: ArtistStats;
  blurb: string;
  bio: string;
  specialties: string[];
  experience: string;
  instagram: string;
  featuredWork: string[];
  portfolio: string[];
  cta: {
    text: string;
    url: string;
  };
}

export const artists: Artist[] = [
  {
    name: "Seth Wood",
    slug: "seth-wood",
    avatar: "/assets/artists/seth-wood/seth woodd.jpg",
    title: "Guild Master",
    styles: ["Traditional", "Japanese", "Naturalistic"],
    stats: {
      creativity: 95,
      experience: 98,
      mastery: 97,
      technique: 96,
      artistry: 94
    },
    blurb: "Seth Wood is a tattoo artist with over 25 years of experience, specializing in naturalistic interpretations of American Traditional and Japanese tattooing.",
    bio: "Seth Wood is a tattoo artist with over 25 years of experience, specializing in naturalistic interpretations of American Traditional and Japanese tattooing. His work reflects decades of dedication to the craft, bringing authenticity and depth to every piece.",
    specialties: ["Naturalistic American Traditional", "Naturalistic Japanese", "Black & Grey"],
    experience: "25+ years",
    instagram: "@sethta2_bp",
    featuredWork: [
      "/assets/artists/seth-wood/seth wooid.jpg",
      "/assets/artists/seth-wood/wooody.jpg"
    ],
    portfolio: [
      "/assets/artists/seth-wood/seth woodd.jpg",
      "/assets/artists/seth-wood/seth wooid.jpg",
      "/assets/artists/seth-wood/wooody.jpg"
    ],
    cta: { text: "DM Seth", url: "https://instagram.com/sethta2_bp" }
  },
  {
    name: "Ashley Wood",
    slug: "ashley-wood",
    avatar: "/assets/artists/ashley-wood/ashley profile pic.jpg",
    title: "Chromancer",
    styles: ["Color", "Newschool", "Kawaii"],
    stats: {
      creativity: 97,
      experience: 89,
      mastery: 92,
      technique: 93,
      artistry: 96
    },
    blurb: "Ashley Wood brings vibrant energy to tattooing through her mastery of color work and newschool styles. Her passion for pop culture and kawaii aesthetics creates pieces that are both bold and playful.",
    bio: "Ashley Wood brings vibrant energy to tattooing through her mastery of color work and newschool styles. Her passion for pop culture and kawaii aesthetics creates pieces that are both bold and playful.",
    specialties: ["Color", "Newschool", "Kawaii", "Dotwork"],
    experience: "10+ years",
    instagram: "@ashleyxxkarma",
    featuredWork: [
      "/assets/artists/ashley-wood/ashleee.jpg",
      "/assets/artists/ashley-wood/ashley.jpg",
      "/assets/artists/ashley-wood/ashley1.jpg"
    ],
    portfolio: [
      "/assets/artists/ashley-wood/1212.jpg",
      "/assets/artists/ashley-wood/ash.jpg",
      "/assets/artists/ashley-wood/ashleee.jpg",
      "/assets/artists/ashley-wood/ashley profile pic.jpg",
      "/assets/artists/ashley-wood/ashley.jpg",
      "/assets/artists/ashley-wood/ashley1.jpg"
    ],
    cta: { text: "DM Ashley", url: "https://instagram.com/ashleyxxkarma" }
  },
  {
    name: "Anthony Boudreaux",
    slug: "anthony-boudreaux",
    avatar: "/assets/artists/anthony-boudreaux/ant.jpg",
    title: "Artisan",
    styles: ["Traditional", "Color", "Custom"],
    stats: {
      creativity: 91,
      experience: 94,
      mastery: 90,
      technique: 92,
      artistry: 88
    },
    blurb: "Anthony Boudreaux is known for his versatility and approachable style, making him the perfect choice for walk-in consultations. His work spans traditional and modern styles with a focus on custom design work.",
    bio: "Anthony Boudreaux is known for his versatility and approachable style, making him the perfect choice for walk-in consultations. His work spans traditional and modern styles with a focus on custom design work.",
    specialties: ["Traditional", "Color", "Custom Design"],
    experience: "15+ years",
    instagram: "@buddha_ta2",
    featuredWork: [
      "/assets/artists/anthony-boudreaux/anthony.jpg",
      "/assets/artists/anthony-boudreaux/antonio.jpg",
      "/assets/artists/anthony-boudreaux/Buddha.jpg"
    ],
    portfolio: [
      "/assets/artists/anthony-boudreaux/ant.jpg",
      "/assets/artists/anthony-boudreaux/anthony.jpg",
      "/assets/artists/anthony-boudreaux/antonio.jpg",
      "/assets/artists/anthony-boudreaux/Buddha.jpg",
      "/assets/artists/anthony-boudreaux/ffff.jpg"
    ],
    cta: { text: "DM Anthony", url: "https://instagram.com/buddha_ta2" }
  },
  {
    name: "Luis Reymundo",
    slug: "luis-reymundo",
    avatar: "/assets/artists/luis-reymundo/364403173_6546138555476097_5096559160903234762_n.jpg",
    title: "Pattern Keeper",
    styles: ["Geometric", "Bold Linework", "Abstract"],
    stats: {
      creativity: 93,
      experience: 91,
      mastery: 95,
      technique: 97,
      artistry: 92
    },
    blurb: "Luis Reymundo specializes in bold linework and geometric patterns, creating striking pieces that combine precision with artistic vision. His work stands out for its clean execution and creative compositions.",
    bio: "Luis Reymundo specializes in bold linework and geometric patterns, creating striking pieces that combine precision with artistic vision. His work stands out for its clean execution and creative compositions.",
    specialties: ["Geometric", "Bold Linework", "Abstract"],
    experience: "12+ years",
    instagram: "@luisreyart",
    featuredWork: [
      "/assets/artists/luis-reymundo/456455404_18445571008001635_6969315202827007293_n.jpg",
      "/assets/artists/luis-reymundo/467432302_18462618712001635_305217261839614881_n.jpg",
      "/assets/artists/luis-reymundo/471592296_18470350378001635_1918605122947633000_n.jpg"
    ],
    portfolio: [
      "/assets/artists/luis-reymundo/364403173_6546138555476097_5096559160903234762_n.jpg",
      "/assets/artists/luis-reymundo/456455404_18445571008001635_6969315202827007293_n.jpg",
      "/assets/artists/luis-reymundo/467432302_18462618712001635_305217261839614881_n.jpg",
      "/assets/artists/luis-reymundo/471592296_18470350378001635_1918605122947633000_n.jpg",
      "/assets/artists/luis-reymundo/474900987_18475574725001635_752176309467884586_n.jpg",
      "/assets/artists/luis-reymundo/490061122_18490861651001635_2883115908723174436_n.jpg"
    ],
    cta: { text: "DM Luis", url: "https://instagram.com/luisreyart" }
  },
  {
    name: "Cody Crochet",
    slug: "cody-crochet",
    avatar: "/assets/artists/cody-crochet/profile.jpg",
    title: "Reality Bender",
    styles: ["Realism", "Anime", "Illustrative"],
    stats: {
      creativity: 96,
      experience: 89,
      mastery: 93,
      technique: 94,
      artistry: 98
    },
    blurb: "Cody Crochet is a 10-year veteran tattoo artist specializing in anime, illustrated, and videogame tattoos. His color work brings characters and designs to life with incredible detail and vibrancy.",
    bio: "Cody Crochet is a 10-year veteran tattoo artist specializing in anime, illustrated, and videogame tattoos. His color work brings characters and designs to life with incredible detail and vibrancy.",
    specialties: ["Realism", "Anime", "Illustrated", "Color Work", "Videogame Tattoos"],
    experience: "10+ years",
    instagram: "@codycrochettattoos",
    featuredWork: [
      "/assets/artists/cody-crochet/madman.jpg",
      "/assets/artists/cody-crochet/vap.jpg",
      "/assets/artists/cody-crochet/461579945_8425251807517552_3928962516021655041_n.jpg"
    ],
    portfolio: [
      "/assets/artists/cody-crochet/codeh.jpg",
      "/assets/artists/cody-crochet/madman.jpg",
      "/assets/artists/cody-crochet/vap.jpg",
      "/assets/artists/cody-crochet/461507171_8425251814184218_1491388684752563128_n.jpg",
      "/assets/artists/cody-crochet/461509714_8425251817517551_50151589144047544_n.jpg",
      "/assets/artists/cody-crochet/461528404_8425251827517550_2728663571583936772_n.jpg",
      "/assets/artists/cody-crochet/461579945_8425251807517552_3928962516021655041_n.jpg",
      "/assets/artists/cody-crochet/461609351_8425251820850884_9008576989091778140_n.jpg",
      "/assets/artists/cody-crochet/461683376_8433512910024775_9068907170483629013_n.jpg"
    ],
    cta: { text: "DM Cody", url: "https://instagram.com/codycrochettattoos" }
  },
  {
    name: "Trent",
    slug: "trent",
    avatar: "/assets/artists/trent/profile.jpg",
    title: "Vision Scribe",
    styles: ["Neo-Traditional", "Illustrative", "Watercolor"],
    stats: {
      creativity: 92,
      experience: 86,
      mastery: 89,
      technique: 91,
      artistry: 90
    },
    blurb: "Trent brings together classic neo-traditional techniques with modern illustrative approaches, creating timeless pieces that stand out for their craftsmanship and artistic vision.",
    bio: "Trent brings together classic neo-traditional techniques with modern illustrative approaches, creating timeless pieces that stand out for their craftsmanship and artistic vision.",
    specialties: ["Neo-Traditional", "Illustrative", "Watercolor"],
    experience: "8+ years",
    instagram: "@trenttattoo",
    featuredWork: [
      "/assets/artists/trent/r.jpg",
      "/assets/artists/trent/rr.jpg",
      "/assets/artists/trent/tt.jpg"
    ],
    portfolio: [
      "/assets/artists/trent/profile.jpg",
      "/assets/artists/trent/r.jpg",
      "/assets/artists/trent/rr.jpg",
      "/assets/artists/trent/tt.jpg"
    ],
    cta: { text: "DM Trent", url: "https://instagram.com/trenttattoo" }
  }
];

// Guild stats for the right rail
export const guildStats = {
  totalArtists: artists.length,
  combinedExperience: artists.reduce((sum, artist) => {
    const years = parseInt(artist.experience.replace(/\D/g, '')) || 0;
    return sum + years;
  }, 0),
  totalMasterpieces: 150,
  stylesOffered: Array.from(new Set(artists.flatMap(artist => artist.styles))).length,
  guildLevel: 87,
  activeMembers: 6,
  completedWorks: 247
};

// Enhanced reviews with more content
export const guildReviews = [
  {
    id: 1,
    author: "Alex Chen",
    avatar: "/assets/reviews/alex-chen.jpg",
    rating: 5,
    comment: "Seth's Japanese dragon piece exceeded all expectations. The detail and craftsmanship are incredible! The shading work is phenomenal and the line work is so clean. Will definitely be back for more work.",
    date: "2024-01-15",
    verified: true,
    tattooType: "Japanese Dragon",
    artist: "Seth Wood"
  },
  {
    id: 2,
    author: "Maria Rodriguez",
    avatar: "/assets/reviews/maria-rodriguez.jpg",
    rating: 5,
    comment: "Ashley's color work brought my character design to life perfectly. Highly recommend! The attention to detail in the color gradients and the way she captured the character's personality is amazing.",
    date: "2024-01-12",
    verified: true,
    tattooType: "Anime Character",
    artist: "Ashley Wood"
  },
  {
    id: 3,
    author: "James Wilson",
    avatar: "/assets/reviews/james-wilson.jpg",
    rating: 5,
    comment: "Luis's geometric mandala is stunning. Clean lines and perfect execution. The composition is incredible and the geometric patterns flow so naturally. Absolutely love it!",
    date: "2024-01-10",
    verified: true,
    tattooType: "Geometric Mandala",
    artist: "Luis Reymundo"
  },
  {
    id: 4,
    author: "Sarah Johnson",
    avatar: "/assets/reviews/sarah-johnson.jpg",
    rating: 5,
    comment: "Cody's realism work on my portrait tattoo is absolutely breathtaking. The likeness is uncanny and the shading work is masterful. Worth every penny!",
    date: "2024-01-08",
    verified: true,
    tattooType: "Portrait",
    artist: "Cody Crochet"
  },
  {
    id: 5,
    author: "Mike Thompson",
    avatar: "/assets/reviews/mike-thompson.jpg",
    rating: 5,
    comment: "Trent's neo-traditional rose sleeve is exactly what I envisioned. The craftsmanship is top-tier and the consultation process was so thorough. Amazing experience!",
    date: "2024-01-05",
    verified: true,
    tattooType: "Neo-Traditional Sleeve",
    artist: "Trent"
  }
];

// Guild chat messages
export const guildChat = [
  {
    id: 1,
    author: "Seth",
    avatar: "👨‍🎨",
    message: "New dragon sketch ready for review! This one's got some serious detail work 🐉",
    timestamp: "2m ago",
    type: "message"
  },
  {
    id: 2,
    author: "Ashley",
    avatar: "🎨",
    message: "Love it! The scales look amazing. The flow is perfect ✨",
    timestamp: "1m ago",
    type: "message"
  },
  {
    id: 3,
    author: "Luis",
    avatar: "⚔️",
    message: "Clean lines as always 👌 The perspective work is spot on",
    timestamp: "30s ago",
    type: "message"
  },
  {
    id: 4,
    author: "Cody",
    avatar: "🖼️",
    message: "Just finished a detailed character portrait. Client is thrilled! 🎉",
    timestamp: "5m ago",
    type: "message"
  },
  {
    id: 5,
    author: "Trent",
    avatar: "🌹",
    message: "Working on a beautiful watercolor rose. The colors are popping! 🌈",
    timestamp: "8m ago",
    type: "message"
  },
  {
    id: 6,
    author: "Guild Master",
    avatar: "👑",
    message: "New apprentice applications are now open! Looking for dedicated artists who want to join our family. 📜",
    timestamp: "15m ago",
    type: "announcement"
  }
];
