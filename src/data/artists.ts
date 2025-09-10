import { slugify } from "../lib/slugify";

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

export function normalizeArtist(a: Artist): Artist & { slug: string } {
  return {
    ...a,
    slug: slugify(a.slug ?? a.name ?? "untitled"),
  };
}

const rawArtists: Artist[] = [
  {
    name: "Seth Wood",
    slug: "seth-wood",
    avatar: "/assets/artists/seth-wood/SETH PROFILE PICTURE.jpg",
    title: "Neo-Black & Gray Illustrative Artist",
    styles: ["Illustrative", "Neo", "Black & Grey", "Freehand Botanicals"],
    stats: {
      creativity: 95,
      experience: 98,
      mastery: 97,
      technique: 96,
      artistry: 94
    },
    blurb: "Neo-traditional black and gray mastery with illustrative depth. Seth's 7 years of dedicated experience brings artistic vision and technical excellence to every piece through his signature illustrative style.",
    bio: "Seth Wood is a tattoo artist with 7 years of experience, specializing in illustrative work, neo-traditional designs, black & grey mastery, and freehand botanical pieces. His work reflects years of dedication to the craft, bringing artistic vision and illustrative depth to every piece.",
    specialties: ["Illustrative", "Neo", "Black & Grey", "Freehand Botanicals", "High-Contrast Work"],
    experience: "7 years",
    instagram: "@sethta2_bp",
    featuredWork: [
      "/assets/artists/seth-wood/image1 (2).jpeg",
      "/assets/artists/seth-wood/image3 (1).jpeg",
      "/assets/artists/seth-wood/image5 (1).jpeg"
    ],
    portfolio: [
      "/assets/artists/seth-wood/image1 (2).jpeg",
      "/assets/artists/seth-wood/image2 (1).jpeg",
      "/assets/artists/seth-wood/image3 (1).jpeg",
      "/assets/artists/seth-wood/image4 (1).jpeg",
      "/assets/artists/seth-wood/image5 (1).jpeg",
      "/assets/artists/seth-wood/image6 (1).jpeg",
      "/assets/artists/seth-wood/image7 (1).jpeg",
      "/assets/artists/seth-wood/image8 (1).jpeg",
      "/assets/artists/seth-wood/image9 (1).jpeg",
      "/assets/artists/seth-wood/image10 (1).jpeg"
    ],
    cta: { text: "View Instagram", url: "https://instagram.com/sethta2_bp" }
  },
  {
    name: "Ashley Wood",
    slug: "ashley-wood",
    avatar: "/assets/artists/ashley-wood/ashley-profile-pic.jpg",
    title: "Watercolor & Color Specialist",
    styles: ["Watercolor", "Color Specialist", "Fine Line", "Soft Shading", "Illustrative"],
    stats: {
      creativity: 97,
      experience: 89,
      mastery: 92,
      technique: 93,
      artistry: 96
    },
    blurb: "Watercolor mastery meets precision artistry. Ashley's 5 years of dedicated experience brings vibrant color specialization and delicate fine line work to life with soft shading techniques that define modern color tattooing.",
    bio: "Ashley Wood brings vibrant energy to tattooing through her mastery of watercolor techniques and color specialization. Her expertise in fine line work and soft shading creates pieces that are both delicate and bold. As a true watercolor and color specialist, Ashley's work represents the evolution of tattooing into a refined art form that celebrates precision and artistic expression.",
    specialties: ["Watercolor", "Color Specialist", "Fine Line", "Soft Shading", "Dotwork", "Character Design"],
    experience: "5 years",
    instagram: "@ashleyxxkarma",
    featuredWork: [
      "/assets/artists/ashley-wood/tattoo-01.jpg",
      "/assets/artists/ashley-wood/tattoo-02.jpg",
      "/assets/artists/ashley-wood/tattoo-03.jpg"
    ],
    portfolio: [
      "/assets/artists/ashley-wood/tattoo-01.jpg",
      "/assets/artists/ashley-wood/tattoo-02.jpg",
      "/assets/artists/ashley-wood/tattoo-03.jpg",
      "/assets/artists/ashley-wood/tattoo-04.jpg",
      "/assets/artists/ashley-wood/tattoo-05.jpg",
      "/assets/artists/ashley-wood/tattoo-06.jpg",
      "/assets/artists/ashley-wood/tattoo-07.jpg",
      "/assets/artists/ashley-wood/tattoo-08.jpg",
      "/assets/artists/ashley-wood/tattoo-09.jpg",
      "/assets/artists/ashley-wood/tattoo-10.jpg",
      "/assets/artists/ashley-wood/tattoo-11.jpg",
      "/assets/artists/ashley-wood/tattoo-12.jpg",
      "/assets/artists/ashley-wood/tattoo-14.jpg",
      "/assets/artists/ashley-wood/tattoo-15.jpg",
      "/assets/artists/ashley-wood/tattoo-16.jpg",
      "/assets/artists/ashley-wood/tattoo-17.jpg"
    ],
    cta: { text: "View Instagram", url: "https://instagram.com/ashleyxxkarma" }
  },
  {
    name: "Anthony Boudreaux",
    slug: "anthony-boudreaux",
    avatar: "/assets/artists/Anthony/anthon.jpg",
    title: "Black & Grey Realism Master",
    styles: ["Black & Grey", "Realism", "High Contrast", "Texture Detail", "Mixed Media"],
    stats: {
      creativity: 91,
      experience: 94,
      mastery: 90,
      technique: 92,
      artistry: 88
    },
    blurb: "Anthony's mastery of black & grey realism creates stunning depth and texture. With 5 years of dedicated experience, he specializes in high-contrast work and intricate texture detail that brings tattoos to life with photorealistic precision.",
    bio: "Anthony Boudreaux is known for his exceptional skill in black & grey realism and high-contrast work. His mastery of texture detail and photorealistic techniques creates tattoos with incredible depth and dimension. With 5 years of focused experience, Anthony brings precision and artistry to every piece, specializing in the subtle gradations and intricate details that define masterful realism work.",
    specialties: ["Black & Grey", "Realism", "High Contrast", "Texture Detail", "Photorealistic Work"],
    experience: "5 years",
    instagram: "@buddha_ta2",
    featuredWork: [
      "/assets/artists/Anthony/buddha_ta2_1750266594_3657823770568595277_522395724.jpg",
      "/assets/artists/Anthony/buddha_ta2_1750266649_3657824226313421403_522395724.jpg",
      "/assets/artists/Anthony/buddha_ta2_1750266714_3657824772252347663_522395724.jpg"
    ],
    portfolio: [
      "/assets/artists/Anthony/buddha_ta2_1687763131_3133506718218808072_522395724.jpg",
      "/assets/artists/Anthony/buddha_ta2_1687763273_3133507908318885155_522395724.jpg",
      "/assets/artists/Anthony/buddha_ta2_1687763370_3133508453935399608_522395724.mp4",
      "/assets/artists/Anthony/buddha_ta2_1687763693_3133511280619600118_522395724.mp4",
      "/assets/artists/Anthony/buddha_ta2_1696105202_3203485083802265810_522395724.jpg",
      "/assets/artists/Anthony/buddha_ta2_1699559005_3232457682120796051_522395724.jpg",
      "/assets/artists/Anthony/buddha_ta2_1704584449_3274614044673070561_522395724.mp4",
      "/assets/artists/Anthony/buddha_ta2_1719781935_3402099796843496868_522395724.mp4",
      "/assets/artists/Anthony/buddha_ta2_1722653033_3426184080010990405_522395724.mp4",
      "/assets/artists/Anthony/buddha_ta2_1728619400_3476233731405443269_522395724.mp4",
      "/assets/artists/Anthony/buddha_ta2_1730947386_3495762239106116395_522395724.mp4",
      "/assets/artists/Anthony/buddha_ta2_1732606265_3509678193076629234_522395724.jpg",
      "/assets/artists/Anthony/buddha_ta2_1733630254_3518267892972165618_522395724.mp4",
      "/assets/artists/Anthony/buddha_ta2_1743703406_3602767686250725243_522395724.mp4",
      "/assets/artists/Anthony/buddha_ta2_1743703565_3602769004402930368_522395724.mp4",
      "/assets/artists/Anthony/buddha_ta2_1750266594_3657823770568595277_522395724.jpg",
      "/assets/artists/Anthony/buddha_ta2_1750266649_3657824226313421403_522395724.jpg",
      "/assets/artists/Anthony/buddha_ta2_1750266714_3657824772252347663_522395724.jpg",
      "/assets/artists/Anthony/buddha_ta2_1750266747_3657825047960732324_522395724.jpg",
      "/assets/artists/Anthony/buddha_ta2_1750266809_3657825568448800354_522395724.jpg",
      "/assets/artists/Anthony/buddha_ta2_1750266871_3657826088576021428_522395724.jpg",
      "/assets/artists/Anthony/buddha_ta2_1750266941_3657826676290345611_522395724.jpg",
      "/assets/artists/Anthony/buddha_ta2_1750267280_3657829525053210793_522395724.jpg",
      "/assets/artists/Anthony/buddha_ta2_1750267383_3657830388727394041_522395724.jpg",
      "/assets/artists/Anthony/buddha_ta2_1750267429_3657830776365098938_522395724.jpg",
      "/assets/artists/Anthony/buddha_ta2_1750267472_3657831130154460964_522395724.jpg",
      "/assets/artists/Anthony/Buddha.jpg"
    ],
    cta: { text: "View Instagram", url: "https://instagram.com/buddha_ta2" }
  },
  {
    name: "Luis Reymundo",
    slug: "luis-reymundo",
    avatar: "/assets/artists/luis-reymundo/364403173_6546138555476097_5096559160903234762_n.jpg",
    title: "The Traditional Japanese Master",
    styles: ["Traditional Japanese", "Irezumi", "Japanese Dragons", "Koi Fish", "Cherry Blossoms"],
    stats: {
      creativity: 93,
      experience: 91,
      mastery: 95,
      technique: 97,
      artistry: 92
    },
    blurb: "Luis Reymundo is a master of traditional Japanese tattooing. With 9 years of dedication to authentic Japanese techniques, he creates stunning pieces that honor the rich history and cultural significance of this ancient art form.",
    bio: "Luis Reymundo specializes in traditional Japanese artwork, bringing authentic techniques and cultural depth to every piece. With 9 years of experience, he creates stunning traditional Japanese tattoos that honor the rich history and symbolism of this timeless art form. Having worked at esteemed studios like Another Realm Tattoo and Black Pearl Tattoo, Luis brings deep respect for traditional Japanese tattooing methods.",
    specialties: ["Traditional Japanese", "Irezumi", "Japanese Dragons", "Koi Fish", "Cherry Blossoms"],
    experience: "9 years",
    instagram: "@luisreyart",
    featuredWork: [
      "/assets/artists/Luis/456455404_18445571008001635_6969315202827007293_n.jpg",
      "/assets/artists/Luis/467432302_18462618712001635_305217261839614881_n.jpg",
      "/assets/artists/Luis/471592296_18470350378001635_1918605122947633000_n.jpg"
    ],
    portfolio: [
      "/assets/artists/Luis/364403173_6546138555476097_5096559160903234762_n.jpg",
      "/assets/artists/Luis/456455404_18445571008001635_6969315202827007293_n.jpg",
      "/assets/artists/Luis/467432302_18462618712001635_305217261839614881_n.jpg",
      "/assets/artists/Luis/471592296_18470350378001635_1918605122947633000_n.jpg",
      "/assets/artists/Luis/474900987_18475574725001635_752176309467884586_n.jpg",
      "/assets/artists/Luis/490061122_18490861651001635_2883115908723174436_n.jpg",
      "/assets/artists/Luis/ta2luis_1744218745_3607090737312970581_217025634.jpg",
      "/assets/artists/Luis/ta2luis_1744218745_3607090737313120321_217025634.jpg",
      "/assets/artists/Luis/ta2luis_1744218745_3607090737346524272_217025634.jpg",
      "/assets/artists/Luis/ta2luis_1744219002_3607092892306783522_217025634.jpg",
      "/assets/artists/Luis/ta2luis_1744315051_3607898606956838806_217025634.jpg",
      "/assets/artists/Luis/ta2luis_1744405705_3608659070955461998_217025634.jpg",
      "/assets/artists/Luis/ta2luis_1744836591_3612273604341456121_217025634.jpg",
      "/assets/artists/Luis/ta2luis_1745195398_3615283489328969548_217025634.jpg",
      "/assets/artists/Luis/ta2luis_1748107187_3639709348276732522_217025634.jpg",
      "/assets/artists/Luis/ta2luis_1748107406_3639711189098198213_217025634.jpg",
      "/assets/artists/Luis/ta2luis_1748295443_3641288559082245254_217025634.jpg",
      "/assets/artists/Luis/ta2luis_1749493238_3651336384352426320_217025634.jpg",
      "/assets/artists/Luis/ta2luis_1751597960_3668992073718424974_217025634.jpg"
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
    blurb: "Cody Crochet bends reality through masterful illustration. As an 11-year veteran specializing in anime, manga, videogame, and blackwork panel tattoos, he brings fantastical worlds to life with unparalleled detail and vibrant color mastery.",
    bio: "Cody Crochet is an 11-year veteran tattoo artist specializing in anime, manga, illustrated, and videogame tattoos. His color work and blackwork panels bring characters and designs to life with incredible detail and vibrancy. With thousands of posts showcasing his work, Cody has established himself as a leading voice in the anime and videogame tattoo community, known for his ability to capture the essence of beloved characters and worlds.",
    specialties: ["Manga", "Anime", "Blackwork Panels", "Illustrative Realism", "Color Mastery", "Videogame Tattoos"],
    experience: "11 years",
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

// Export normalized artists with safe slugs
export const artists = rawArtists.map(normalizeArtist);

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
