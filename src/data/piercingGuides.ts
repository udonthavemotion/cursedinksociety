/**
 * Piercing Guide Data Structure
 * Educational resources for clients to learn about piercing types, pricing, and aftercare
 */

export interface PiercingGuide {
  id: string;
  category: 'ear' | 'nose' | 'face' | 'oral' | 'body' | 'surface' | 'genital';
  title: string;
  priceRange: string;
  description: string;
  anatomyImage: string;
  exampleImages: string[];
  healingTime: string;
  painLevel: number; // 1-5 scale
  ageRequirement: string;
  aftercareHighlights: string[];
  piercingTypes: string[];
  // New fields for industry compliance
  downsizeTimeline: string;
  initialJewelryStyle: string;
  jewelryChangeWhen: string;
  sleepingAdvice: string;
  activityRestrictions: string[];
  commonIssues: string[];
  anatomyNote?: string; // Optional, for piercings requiring assessment
}

export const piercingGuides: PiercingGuide[] = [
  {
    id: 'ear-piercings',
    category: 'ear',
    title: 'Ear Piercings',
    priceRange: 'Starting at $50 (implant-grade titanium included)',
    description: 'From classic lobes to intricate cartilage work, ear piercings offer endless possibilities for personal expression. Harley specializes in curated ear stacks and precise placement for balanced aesthetics.',
    anatomyImage: '/piercing-guides/anatomy/ear-piercings.webp',
    exampleImages: [],
    healingTime: '6-8 weeks (lobe) / 6-9 months (cartilage, up to 12 months complete)',
    painLevel: 2,
    ageRequirement: 'Minors require ID, birth certificate, and parent with ID',
    aftercareHighlights: [
      'Clean twice daily with sterile saline solution (NeilMed or similar)',
      'Avoid sleeping on the pierced ear for 8-12 weeks',
      'Don\'t change jewelry until fully healed',
      'Keep hair products away from fresh piercings',
      'Never rotate or twist the jewelry'
    ],
    piercingTypes: [
      'Lobe',
      'Upper Lobe',
      'Helix',
      'Forward Helix',
      'Tragus',
      'Anti-Tragus',
      'Rook',
      'Daith',
      'Conch',
      'Industrial',
      'Flat'
    ],
    downsizeTimeline: 'Return in 6-8 weeks for cartilage, 4-6 weeks for lobes to downsize to proper-length jewelry',
    initialJewelryStyle: 'Flat-back labret stud in implant-grade titanium (16g or 18g)',
    jewelryChangeWhen: 'Can change jewelry after 6-9 months (cartilage) or 8 weeks (lobe) when fully healed',
    sleepingAdvice: 'Use a travel/donut pillow to avoid direct pressure. Sleeping on fresh piercings causes irritation bumps.',
    activityRestrictions: [
      'Avoid earbuds/headphones that press on piercing for 4-6 weeks',
      'Keep phones clean (wipe with alcohol before calls)',
      'Be cautious with hair styling and brushing'
    ],
    commonIssues: [
      'Irritation bumps (from snagging or pressure)',
      'Angle changes if bumped repeatedly',
      'Extended healing if jewelry not downsized'
    ]
  },
  {
    id: 'nose-piercings',
    category: 'nose',
    title: 'Nose Piercings',
    priceRange: 'Starting at $50 (implant-grade titanium included)',
    description: 'Nostril and septum piercings are timeless classics. Harley ensures precise placement that complements your facial structure for a balanced, natural look.',
    anatomyImage: '/piercing-guides/anatomy/nose-piercings.webp',
    exampleImages: [],
    healingTime: '4-6 months (nostril) / 6-8 weeks (septum)',
    painLevel: 3,
    ageRequirement: 'Minors require ID, birth certificate, and parent with ID',
    aftercareHighlights: [
      'Spray with sterile saline solution 2x daily',
      'Do not twist, rotate, or move jewelry',
      'Irritation bumps are common - practice LITHA (Leave It The Hell Alone)',
      'Avoid makeup, lotions, and harsh products near piercing'
    ],
    piercingTypes: [
      'Nostril',
      'Septum'
    ],
    downsizeTimeline: 'Return in 6-8 weeks for nostril downsizing. Septum may not require downsize.',
    initialJewelryStyle: 'Flat-back labret stud for nostril (18g), circular barbell for septum (16g)',
    jewelryChangeWhen: 'Nostril: 4-6 months. Septum: 6-8 weeks (can switch to clicker/seamless ring)',
    sleepingAdvice: 'Avoid sleeping on the side with fresh nostril piercing. Use a travel pillow with cutout for face.',
    activityRestrictions: [
      'No swimming in pools, lakes, or ocean for 6-8 weeks minimum',
      'Avoid makeup and skincare products on/near piercing',
      'Don\'t blow nose forcefully during initial healing'
    ],
    commonIssues: [
      'Irritation bumps from snagging or movement',
      'Keloid formation in predisposed individuals',
      'Septum flipping can cause irritation if done too early'
    ]
  },
  {
    id: 'eyebrow-piercings',
    category: 'face',
    title: 'Eyebrow Piercings',
    priceRange: 'Starting at $60 (implant-grade titanium included)',
    description: 'Bold and expressive, eyebrow piercings are surface piercings that require proper jewelry and careful placement. Migration and rejection are possible, so quality jewelry is essential.',
    anatomyImage: '/piercing-guides/examples/eyebrow-double.webp',
    exampleImages: [],
    healingTime: '6-8 weeks initial / 2-4 months complete',
    painLevel: 2,
    ageRequirement: 'Minors require ID, birth certificate, and parent with ID',
    aftercareHighlights: [
      'Spray with sterile saline 2x daily',
      'Avoid makeup, skincare products, and snagging',
      'Monitor for signs of migration or rejection',
      'High-quality curved barbells reduce rejection risk'
    ],
    piercingTypes: [
      'Vertical Eyebrow',
      'Horizontal Eyebrow',
      'Double Eyebrow'
    ],
    downsizeTimeline: 'Return in 6-8 weeks to assess and potentially downsize to shorter barbell',
    initialJewelryStyle: 'Curved barbell in implant-grade titanium (16g)',
    jewelryChangeWhen: 'Can change jewelry after 2-4 months when fully healed',
    sleepingAdvice: 'Sleep on opposite side or back to avoid putting pressure on piercing',
    activityRestrictions: [
      'No swimming for 6-8 weeks',
      'Avoid makeup and skincare on/near piercing',
      'Be careful with sunglasses and face masks'
    ],
    commonIssues: [
      'Migration and rejection (monitor regularly)',
      'Snagging on towels or clothing',
      'Swelling from makeup or product irritation'
    ],
    anatomyNote: 'Not everyone has suitable anatomy. Assessment required for proper placement to reduce rejection risk.'
  },
  {
    id: 'oral-piercings',
    category: 'oral',
    title: 'Oral Piercings',
    priceRange: 'Starting at $60 (implant-grade titanium included)',
    description: 'Tongue, lip, and labret piercings require special care and quality jewelry. Oral piercings heal faster than most due to saliva\'s natural healing properties, but proper aftercare is essential.',
    anatomyImage: '/piercing-guides/examples/tongue.webp',
    exampleImages: [],
    healingTime: '4-6 weeks (tongue) / 2-3 months (lip/labret)',
    painLevel: 3,
    ageRequirement: 'Minors require ID, birth certificate, and parent with ID',
    aftercareHighlights: [
      'Rinse with alcohol-free mouthwash or saline after eating/drinking',
      'Avoid spicy, hot, acidic foods and alcohol during healing',
      'Downsize bar length after swelling reduces (critical step)',
      'Check jewelry regularly for tightness - oral jewelry can loosen'
    ],
    piercingTypes: [
      'Tongue (Center)',
      'Lip',
      'Labret',
      'Monroe',
      'Medusa',
      'Snake Bites'
    ],
    downsizeTimeline: 'CRITICAL: Return in 2-4 weeks for mandatory downsize. Long bars damage teeth and gums.',
    initialJewelryStyle: 'Straight barbell (tongue) or flat-back labret (lip) in implant-grade titanium (14g-16g)',
    jewelryChangeWhen: 'Can change jewelry after 4-6 weeks (tongue) or 2-3 months (lip) when fully healed',
    sleepingAdvice: 'Sleep on back or opposite side for lip piercings. Tongue piercings don\'t affect sleep position.',
    activityRestrictions: [
      'No oral contact (kissing, oral sex) for 2-4 weeks minimum',
      'Avoid smoking and vaping during healing',
      'No alcohol consumption for first 2 weeks',
      'Avoid spicy, hot, acidic foods and crunchy foods'
    ],
    commonIssues: [
      'Tooth and gum damage from oversized jewelry (MUST downsize)',
      'Speech changes initially (resolves quickly)',
      'Increased salivation first few days'
    ],
    anatomyNote: 'Tongue web and frenulum piercings require specific anatomy assessment.'
  },
  {
    id: 'navel-piercings',
    category: 'body',
    title: 'Navel Piercings',
    priceRange: 'Starting at $60 (implant-grade titanium included)',
    description: 'Navel piercings require proper anatomy assessment. Not everyone has suitable anatomy for a traditional navel piercing - floating navel variations may be recommended based on your anatomy.',
    anatomyImage: '/piercing-guides/anatomy/navel-piercings.webp',
    exampleImages: [],
    healingTime: '6-12 months (often 9-12 months)',
    painLevel: 3,
    ageRequirement: 'Minors require ID, birth certificate, and parent with ID',
    aftercareHighlights: [
      'Spray with sterile saline solution 2x daily',
      'Wear high-waisted, loose pants or low-waisted to avoid pressure',
      'Avoid swimming in pools, lakes, or hot tubs during healing',
      'Expect a long healing time - patience is key with navels'
    ],
    piercingTypes: [
      'Standard Navel',
      'Floating Navel',
      'Bottom Navel'
    ],
    downsizeTimeline: 'Return in 8-12 weeks to assess swelling and potentially downsize to proper-length jewelry',
    initialJewelryStyle: 'Curved barbell in implant-grade titanium (14g)',
    jewelryChangeWhen: 'Can change jewelry after 9-12 months when FULLY healed (don\'t rush this)',
    sleepingAdvice: 'Sleep on back or sides. Avoid stomach sleeping for first 3-6 months.',
    activityRestrictions: [
      'No swimming for 6-8 weeks minimum (ideally 3-4 months)',
      'Avoid tight waistbands and belts that press on piercing',
      'No sit-ups or abdominal exercises for 4-6 weeks',
      'Be cautious with clothing changes (easy to snag)'
    ],
    commonIssues: [
      'Migration and rejection (especially with improper anatomy)',
      'Irritation bumps from clothing pressure',
      'Extended healing time (often takes full 12 months)'
    ],
    anatomyNote: 'ANATOMY ASSESSMENT REQUIRED. Not everyone can support a traditional navel piercing. Floating navel may be recommended.'
  },
  {
    id: 'surface-piercings',
    category: 'surface',
    title: 'Surface Piercings',
    priceRange: 'Starting at $100 (implant-grade titanium surface bar included)',
    description: 'Surface piercings (bridge, sternum, nape) and surface anchors have high migration and rejection rates. They require implant-grade surface bars, expert placement, and understanding that rejection is always possible.',
    anatomyImage: '/piercing-guides/anatomy/surface-piercings.webp',
    exampleImages: [],
    healingTime: '3-6 months (if successful)',
    painLevel: 3,
    ageRequirement: 'Minors require ID, birth certificate, and parent with ID',
    aftercareHighlights: [
      'Must use proper surface bars (not curved barbells)',
      'Monitor daily for signs of migration or rejection',
      'Avoid any pressure, snagging, or trauma to area',
      'Be prepared for possible rejection - it\'s common with surface work'
    ],
    piercingTypes: [
      'Bridge',
      'Anti-Eyebrow',
      'Sternum',
      'Hip',
      'Nape',
      'Surface Anchors/Dermals'
    ],
    downsizeTimeline: 'Generally not downsized. Surface bars are placed at proper length initially.',
    initialJewelryStyle: 'Surface bar (staple-shaped) in implant-grade titanium (14g)',
    jewelryChangeWhen: 'Can change after 3-6 months IF fully healed and showing no signs of rejection',
    sleepingAdvice: 'Avoid sleeping on area entirely. Use pillows to prevent rolling onto piercing.',
    activityRestrictions: [
      'No swimming for 6-8 weeks minimum',
      'Avoid clothing that rubs or puts pressure on area',
      'No saunas or hot tubs during healing',
      'Be extremely careful with seatbelts (sternum/chest piercings)'
    ],
    commonIssues: [
      'Migration (jewelry moving toward surface)',
      'Rejection (body pushing jewelry out completely)',
      'Scarring if rejected (hypertrophic scars common)'
    ],
    anatomyNote: 'HIGH REJECTION RISK. Surface piercings are temporary for many people. Understand this risk before proceeding.'
  },
  {
    id: 'genital-piercings',
    category: 'genital',
    title: 'Genital Piercings',
    priceRange: 'Starting at $100 (implant-grade titanium included)',
    description: 'Genital piercings require extensive anatomical knowledge and consultation. Healing times vary significantly by placement. Professional assessment is required to determine anatomy suitability.',
    anatomyImage: '/piercing-guides/anatomy/genital-piercings.webp',
    exampleImages: [],
    healingTime: '4-12 weeks (highly variable by placement)',
    painLevel: 4,
    ageRequirement: '18+ ONLY with government-issued photo ID',
    aftercareHighlights: [
      'Spray with sterile saline 2x daily',
      'Abstain from sexual contact during initial healing period',
      'Wear clean, breathable cotton underwear',
      'Many genital piercings heal quickly due to blood flow'
    ],
    piercingTypes: [
      'VCH (Vertical Clitoral Hood)',
      'Christina',
      'Triangle',
      'Prince Albert',
      'Frenum',
      'Ampallang',
      'Other intimate placements'
    ],
    downsizeTimeline: 'Varies by placement. Consultation required for specific timeline (typically 4-8 weeks)',
    initialJewelryStyle: 'Varies by placement: curved barbells, straight barbells, or CBRs in implant-grade titanium',
    jewelryChangeWhen: 'Can change after fully healed (4-12 weeks depending on specific piercing)',
    sleepingAdvice: 'Wear loose, breathable underwear to bed. Sleep position typically not affected.',
    activityRestrictions: [
      'NO sexual contact for minimum 4 weeks (varies by placement)',
      'No swimming for 6-8 weeks',
      'Avoid tight clothing and synthetic fabrics',
      'No baths or hot tubs during healing (shower only)'
    ],
    commonIssues: [
      'Swelling (expected, especially first week)',
      'Urination changes (for some piercings, temporary)',
      'Increased sensitivity (often desired effect)'
    ],
    anatomyNote: 'MANDATORY CONSULTATION AND ANATOMY ASSESSMENT. Not all anatomy is suitable for all genital piercings.'
  }
];

// Utility function to get guide by ID
export function getGuideById(id: string): PiercingGuide | undefined {
  return piercingGuides.find(guide => guide.id === id);
}

// Utility function to get guides by category
export function getGuidesByCategory(category: PiercingGuide['category']): PiercingGuide[] {
  return piercingGuides.filter(guide => guide.category === category);
}

// Get all categories
export function getAllCategories(): string[] {
  return Array.from(new Set(piercingGuides.map(guide => guide.category)));
}

