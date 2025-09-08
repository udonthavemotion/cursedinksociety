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
    title: "Guild Master & Elder",
    styles: ["Naturalistic Traditional", "Japanese", "Black & Grey", "Fine Line"],
    stats: {
      creativity: 95,
      experience: 98,
      mastery: 97,
      technique: 96,
      artistry: 94
    },
    blurb: "With 25+ years of tattoo mastery, Seth brings authentic craftsmanship to every piece. His naturalistic interpretations of American Traditional and Japanese styles have earned him legendary status in the tattoo community.",
    bio: "Seth Wood is a tattoo artist with over 25 years of experience, specializing in naturalistic interpretations of American Traditional and Japanese tattooing. His work reflects decades of dedication to the craft, bringing authenticity and depth to every piece. A true elder in the tattoo world, Seth's expertise spans multiple styles while maintaining the highest standards of traditional tattoo artistry.",
    specialties: ["Naturalistic American Traditional", "Naturalistic Japanese", "Black & Grey Mastery", "Fine Line Work", "Large Scale Pieces"],
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
    cta: { text: "View Instagram", url: "https://instagram.com/sethta2_bp" }
  },
  {
    name: "Ashley Wood",
    slug: "ashley-wood",
    avatar: "/assets/artists/ashley-wood/ashley profile pic.jpg",
    title: "Chromancer & Pop Culture Specialist",
    styles: ["Color Mastery", "Newschool", "Kawaii", "Pop Culture", "Illustrative"],
    stats: {
      creativity: 97,
      experience: 89,
      mastery: 92,
      technique: 93,
      artistry: 96
    },
    blurb: "The Chromancer weaves color magic into every tattoo. Ashley's vibrant mastery of color work and pop culture themes brings characters to life with bold energy and kawaii charm that captures the soul of modern tattooing.",
    bio: "Ashley Wood brings vibrant energy to tattooing through her mastery of color work and newschool styles. Her passion for pop culture and kawaii aesthetics creates pieces that are both bold and playful. As a true color specialist, Ashley's work represents the evolution of tattooing into a vibrant, contemporary art form that celebrates imagination and self-expression.",
    specialties: ["Color Mastery", "Newschool", "Kawaii", "Pop Culture", "Dotwork", "Character Design"],
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
    cta: { text: "View Instagram", url: "https://instagram.com/ashleyxxkarma" }
  },
  {
    name: "Anthony Boudreaux",
    slug: "anthony-boudreaux",
    avatar: "/assets/artists/anthony-boudreaux/ant.jpg",
    title: "The Versatile Craftsman",
    styles: ["Traditional", "Color", "Custom Design", "Walk-in Specialist", "Mixed Media"],
    stats: {
      creativity: 91,
      experience: 94,
      mastery: 90,
      technique: 92,
      artistry: 88
    },
    blurb: "Anthony's versatility knows no bounds. With 15+ years crafting custom tattoos, he seamlessly blends traditional techniques with modern innovation. Perfect for walk-ins and those seeking a personalized artistic journey.",
    bio: "Anthony Boudreaux is known for his versatility and approachable style, making him the perfect choice for walk-in consultations. His work spans traditional and modern styles with a focus on custom design work. Having worked at prestigious shops like Hard 2 Love Tattoo and Another Realm Tattoo, Anthony brings a wealth of experience and adaptability to every client interaction.",
    specialties: ["Traditional Mastery", "Color Work", "Custom Design", "Walk-in Consultations", "Mixed Style Pieces"],
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
    cta: { text: "View Instagram", url: "https://instagram.com/buddha_ta2" }
  },
  {
    name: "Luis Reymundo",
    slug: "luis-reymundo",
    avatar: "/assets/artists/luis-reymundo/364403173_6546138555476097_5096559160903234762_n.jpg",
    title: "The Geometric Visionary",
    styles: ["Geometric Mastery", "Bold Linework", "Abstract", "Sacred Geometry", "Precision Art"],
    stats: {
      creativity: 93,
      experience: 91,
      mastery: 95,
      technique: 97,
      artistry: 92
    },
    blurb: "Luis Reymundo is the master of sacred geometry and precision. With 12+ years of perfecting bold linework and geometric patterns, he creates striking pieces that blend mathematical precision with artistic vision and spiritual depth.",
    bio: "Luis Reymundo specializes in bold linework and geometric patterns, creating striking pieces that combine precision with artistic vision. His work stands out for its clean execution and creative compositions. Having worked at esteemed studios like Another Realm Tattoo and Black Pearl Tattoo, Luis brings a unique perspective that merges technical precision with artistic innovation.",
    specialties: ["Sacred Geometry", "Bold Linework Mastery", "Abstract Composition", "Precision Drafting", "Geometric Mandalas"],
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
    cta: { text: "View Instagram", url: "https://instagram.com/luisreyart" }
  },
  {
    name: "Cody Crochet",
    slug: "cody-crochet",
    avatar: "/assets/artists/cody-crochet/461683376_8433512910024775_9068907170483629013_n.jpg",
    title: "The Anime & Illustration Virtuoso",
    styles: ["Anime Mastery", "Illustrative", "Color Realism", "Videogame Art", "Character Design"],
    stats: {
      creativity: 96,
      experience: 89,
      mastery: 93,
      technique: 94,
      artistry: 98
    },
    blurb: "Cody Crochet bends reality through masterful illustration. As a 10-year veteran specializing in anime, videogame, and character tattoos, he brings fantastical worlds to life with unparalleled detail and vibrant color mastery.",
    bio: "Cody Crochet is a 10-year veteran tattoo artist specializing in anime, illustrated, and videogame tattoos. His color work brings characters and designs to life with incredible detail and vibrancy. With thousands of posts showcasing his work, Cody has established himself as a leading voice in the anime and videogame tattoo community, known for his ability to capture the essence of beloved characters and worlds.",
    specialties: ["Anime Character Tattoos", "Illustrative Realism", "Color Mastery", "Videogame Tattoos", "Fantasy Art", "Character Portraits"],
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
    cta: { text: "View Instagram", url: "https://instagram.com/codycrochettattoos" }
  },
  {
    name: "Trent",
    slug: "trent",
    avatar: "/assets/artists/trent/profile.jpg",
    title: "Professional Tattoo Apprentice",
    styles: ["Anime Mastery", "Neo-Traditional", "Bold Linework", "Character Art", "Black & Grey"],
    stats: {
      creativity: 96,
      experience: 78,
      mastery: 82,
      technique: 88,
      artistry: 94
    },
    blurb: "Trent embodies professional excellence in tattoo artistry. As a dedicated apprentice at Cursed Ink Society, he brings meticulous precision and artistic vision to every piece, specializing in anime-inspired work and neo-traditional designs.",
    bio: "Trent is a professional tattoo apprentice at Cursed Ink Society, committed to mastering the craft through dedication and precision. His work showcases clean linework, thoughtful composition, and a professional approach to tattoo artistry. With a focus on anime characters and neo-traditional styles, Trent represents the future of professional tattooing at Cursed Ink Society.",
    specialties: ["Anime Character Work", "Neo-Traditional Mastery", "Bold Linework", "Clean Execution", "Professional Standards"],
    experience: "Apprentice",
    instagram: "@tattooz_by_trent",
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
    cta: { text: "View Instagram", url: "https://instagram.com/tattooz_by_trent" }
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
