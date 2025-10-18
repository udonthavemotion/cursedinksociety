# 🎯 **COMPREHENSIVE PROMPT FOR PIERCING PAGE REDESIGN AGENT**

Here's the complete prompt to give your agent. Copy and paste this:

---

## **PROJECT: Enhance Piercing Page to Meet Industry Standards**

### **CONTEXT**
Our piercing page at `/piercing` has been audited against 2024-2025 professional piercing industry standards. We need to update content, add missing critical information, and ensure legal compliance while maintaining current performance and UX excellence.

**Files to modify:**
- `src/pages/piercing.astro` (main page)
- `src/components/PiercingGuideSection.astro` (guide section)
- `src/data/piercingGuides.ts` (guide data structure and content)
- Create: `src/components/JewelryMaterialsBadge.astro` (new component)
- Create: `src/components/SafetyProtocolsSection.astro` (new component)

---

## **PHASE 1: CRITICAL FIXES (Do First)** 🚨

### 1. Add Jewelry Materials Section

**Where:** Add after the Harley hero section in `piercing.astro`, before the guide section.

**Content to add:**
```astro
<!-- Jewelry Materials Section -->
<section class="materials-section" aria-labelledby="materials-heading">
  <div class="materials-container">
    <h2 id="materials-heading" class="section-heading">Premium Jewelry Materials</h2>
    <p class="materials-intro">
      We exclusively use the highest quality materials for initial piercings and healing, 
      prioritizing your safety and comfort.
    </p>
    
    <div class="materials-grid">
      <div class="material-card">
        <div class="material-icon">🛡️</div>
        <h3>ASTM F136 Implant-Grade Titanium</h3>
        <p>
          Medical-grade titanium that's hypoallergenic, lightweight, and biocompatible. 
          Our standard for all initial piercings.
        </p>
        <ul class="material-features">
          <li>99.9% nickel-free</li>
          <li>Won't tarnish or corrode</li>
          <li>Safe for sensitive skin</li>
        </ul>
      </div>
      
      <div class="material-card">
        <div class="material-icon">✨</div>
        <h3>14k/18k Solid Gold</h3>
        <p>
          Solid gold options available for those who prefer precious metals. 
          Never plated or gold-filled.
        </p>
        <ul class="material-features">
          <li>Nickel-free alloys only</li>
          <li>Available in yellow, white, rose</li>
          <li>Upgrade fee applies</li>
        </ul>
      </div>
      
      <div class="material-card">
        <div class="material-icon">🔩</div>
        <h3>Internally Threaded & Threadless</h3>
        <p>
          All jewelry features smooth, safe threading systems that won't 
          irritate or damage your piercing channel.
        </p>
        <ul class="material-features">
          <li>No sharp edges</li>
          <li>Easy to change when healed</li>
          <li>Professional standard</li>
        </ul>
      </div>
    </div>
    
    <div class="materials-note">
      <strong>What We Never Use:</strong> Externally threaded jewelry, mystery metals, 
      plated jewelry, or nickel-containing "surgical steel" for initial piercings.
    </div>
  </div>
</section>
```

**Styling:** Use glass-morphism cards matching existing brand aesthetic (dark purple accents, rgba backgrounds).

---

### 2. Expand Aftercare Section

**Where:** Replace the current accordion aftercare section in `piercing.astro` with comprehensive guidance.

**Update existing accordion to include:**

```astro
<details class="accordion-item">
  <summary class="accordion-trigger">
    <h3>How do I clean my new piercing?</h3>
    <span class="accordion-icon" aria-hidden="true">+</span>
  </summary>
  <div class="accordion-content">
    <h4>Step-by-Step Cleaning:</h4>
    <ol>
      <li><strong>Wash your hands</strong> thoroughly with antibacterial soap</li>
      <li><strong>Spray sterile saline</strong> directly onto the piercing (both sides)</li>
      <li><strong>Let it sit</strong> for 30-60 seconds to soften any crusties</li>
      <li><strong>Gently remove debris</strong> with clean gauze if needed</li>
      <li><strong>Pat dry</strong> with disposable paper towels (never cloth)</li>
    </ol>
    
    <h4>Recommended Products:</h4>
    <ul>
      <li><strong>NeilMed Piercing Aftercare Spray</strong> (0.9% sterile saline)</li>
      <li>OR any sterile wound wash saline solution (0.9% sodium chloride)</li>
      <li>Available at most pharmacies or from Harley</li>
    </ul>
    
    <h4>❌ DO NOT USE:</h4>
    <ul class="danger-list">
      <li>Rubbing alcohol or hydrogen peroxide</li>
      <li>Antibiotic ointments (too heavy, trap bacteria)</li>
      <li>Tea tree oil or essential oils</li>
      <li>Homemade salt water (wrong concentration)</li>
      <li>Harsh soaps or cleansers</li>
    </ul>
    
    <p class="emphasis"><strong>NEVER rotate or twist your jewelry</strong> during cleaning. 
    This damages healing tissue and introduces bacteria.</p>
  </div>
</details>

<details class="accordion-item">
  <summary class="accordion-trigger">
    <h3>What should I avoid during healing?</h3>
    <span class="accordion-icon" aria-hidden="true">+</span>
  </summary>
  <div class="accordion-content">
    <ul class="danger-list">
      <li>🏊 <strong>Swimming</strong> (pools, hot tubs, lakes, ocean) for at least 6-8 weeks</li>
      <li>💄 <strong>Makeup, lotions, or hair products</strong> near the piercing site</li>
      <li>👆 <strong>Touching or playing</strong> with your jewelry</li>
      <li>😴 <strong>Sleeping directly on</strong> new ear/face piercings (use travel pillow)</li>
      <li>🚫 <strong>Changing jewelry</strong> before fully healed</li>
      <li>🍺 <strong>Alcohol consumption</strong> 24 hours before/after piercing (thins blood)</li>
      <li>🤧 <strong>Oral contact</strong> for oral piercings during initial healing</li>
      <li>💊 <strong>Blood thinners</strong> unless medically necessary (aspirin, ibuprofen first few days)</li>
    </ul>
  </div>
</details>

<details class="accordion-item">
  <summary class="accordion-trigger">
    <h3>When do I need to downsize my jewelry?</h3>
    <span class="accordion-icon" aria-hidden="true">+</span>
  </summary>
  <div class="accordion-content">
    <p class="emphasis">
      <strong>Downsizing is REQUIRED for optimal healing!</strong>
    </p>
    <p>
      Your initial jewelry is intentionally longer to accommodate swelling during the first few weeks. 
      Once swelling subsides, you MUST return to have it replaced with properly-fitted jewelry.
    </p>
    
    <h4>Downsize Timeline:</h4>
    <ul>
      <li><strong>Ear cartilage:</strong> 6-8 weeks after piercing</li>
      <li><strong>Lobes:</strong> 4-6 weeks after piercing</li>
      <li><strong>Nostril:</strong> 6-8 weeks after piercing</li>
      <li><strong>Navel:</strong> 8-12 weeks after piercing</li>
      <li><strong>Oral:</strong> 2-4 weeks after piercing (critical!)</li>
    </ul>
    
    <p>
      <strong>Why it matters:</strong> Oversized jewelry causes snagging, trauma, migration, 
      and irritation bumps. Proper-length jewelry promotes faster healing.
    </p>
    
    <a href="https://www.facebook.com/harley.halford" target="_blank" rel="noopener noreferrer" class="inline-cta">
      Message Harley to Schedule Downsize
    </a>
  </div>
</details>

<details class="accordion-item">
  <summary class="accordion-trigger">
    <h3>What are signs of infection vs. normal healing?</h3>
    <span class="accordion-icon" aria-hidden="true">+</span>
  </summary>
  <div class="accordion-content">
    <h4>✅ Normal Healing (don't panic!):</h4>
    <ul>
      <li>Mild tenderness and redness for first 1-2 weeks</li>
      <li>Clear or light yellow crusty discharge (lymph fluid)</li>
      <li>Slight swelling (peaks day 3-5, then subsides)</li>
      <li>Occasional itching as it heals</li>
    </ul>
    
    <h4>⚠️ Irritation (not infection - fixable!):</h4>
    <ul>
      <li>Small bumps around piercing (irritation bumps)</li>
      <li>Extra redness after snagging or trauma</li>
      <li>Caused by: bumping, sleeping on it, wrong aftercare, too-long jewelry</li>
      <li><strong>Solution:</strong> Contact Harley to assess and adjust care routine</li>
    </ul>
    
    <h4>🚨 Infection (seek medical attention!):</h4>
    <ul class="danger-list">
      <li>Hot, radiating pain (not just tenderness)</li>
      <li>Excessive swelling that worsens after 48 hours</li>
      <li>Green or yellow pus (foul-smelling)</li>
      <li>Red streaks spreading from piercing</li>
      <li>Fever or feeling unwell</li>
    </ul>
    
    <p class="emphasis">
      <strong>If you suspect infection, see a doctor immediately.</strong> Do NOT remove jewelry 
      without medical guidance (can trap infection). Contact Harley and your healthcare provider.
    </p>
  </div>
</details>
```

---

### 3. Add Health Contraindications Section

**Where:** Add before the piercing guide section, after materials section.

**Create new section:**

```astro
<!-- Health & Safety Section -->
<section class="health-section" aria-labelledby="health-heading">
  <div class="health-container">
    <h2 id="health-heading" class="section-heading">Who Can Get Pierced?</h2>
    
    <div class="health-content">
      <div class="health-requirements">
        <h3>✅ Requirements:</h3>
        <ul>
          <li><strong>18+ years old</strong> with valid government-issued photo ID</li>
          <li>Generally healthy with no active infections</li>
          <li>Not under the influence of alcohol or drugs</li>
          <li>Realistic expectations about healing and aftercare commitment</li>
        </ul>
      </div>
      
      <div class="health-contraindications">
        <h3>❌ Cannot Pierce If You Have:</h3>
        <ul class="danger-list">
          <li><strong>Active skin infections</strong> or conditions in the piercing area</li>
          <li><strong>Uncontrolled diabetes</strong> (impairs healing)</li>
          <li><strong>Blood clotting disorders</strong> (hemophilia, etc.)</li>
          <li><strong>Are currently on blood thinners</strong> (warfarin, daily aspirin, etc.)</li>
          <li><strong>Recent cosmetic procedures</strong> in the area (Botox, fillers, etc.)</li>
          <li><strong>Active cold sore outbreak</strong> (for oral piercings)</li>
          <li><strong>Sunburn or fresh tan</strong> in the piercing area</li>
        </ul>
      </div>
      
      <div class="health-consult">
        <h3>⚠️ Consultation Required:</h3>
        <ul>
          <li><strong>Pregnancy or breastfeeding</strong> (some piercings okay, others not recommended)</li>
          <li><strong>Keloid scarring history</strong> (high-risk assessment needed)</li>
          <li><strong>Autoimmune conditions</strong> (case-by-case evaluation)</li>
          <li><strong>Allergies to metals</strong> (we'll discuss material options)</li>
          <li><strong>Taking immunosuppressants</strong> (may affect healing)</li>
        </ul>
        <p>
          If you have any of these conditions, <strong>contact Harley before booking</strong> 
          to discuss whether piercing is safe for you.
        </p>
      </div>
    </div>
    
    <div class="health-note">
      <strong>Honesty Protects You:</strong> Please disclose all relevant health information. 
      This ensures your safety and helps Harley provide appropriate care. All information is confidential.
    </div>
  </div>
</section>
```

---

### 4. Update `piercingGuides.ts` Data Structure

**Add new fields to the interface:**

```typescript
export interface PiercingGuide {
  id: string;
  category: 'ear' | 'nose' | 'face' | 'oral' | 'body' | 'surface' | 'genital';
  title: string;
  priceRange: string;
  description: string;
  anatomyImage: string;
  exampleImages: string[];
  healingTime: string;
  painLevel: number;
  ageRequirement: string;
  aftercareHighlights: string[];
  piercingTypes: string[];
  
  // NEW FIELDS - Add these:
  downsizeTimeline: string;
  initialJewelryStyle: string;
  jewelryChangeWhen: string;
  sleepingAdvice: string;
  activityRestrictions: string[];
  commonIssues: string[];
  anatomyNote?: string; // Optional, for piercings requiring assessment
}
```

**Update each guide entry** (example for ear piercings):

```typescript
{
  id: 'ear-piercings',
  category: 'ear',
  title: 'Ear Piercings',
  priceRange: '$50 - $70 (jewelry included)',
  description: 'From classic lobes to intricate cartilage work, ear piercings offer endless possibilities for personal expression. Harley specializes in curated ear stacks and precise placement for balanced aesthetics.',
  anatomyImage: '/piercing-guides/anatomy/ear-piercings.webp',
  exampleImages: ['/piercing-guides/examples/ear-industrial-helix.webp'],
  healingTime: '6-8 weeks (lobe) / 6-9 months (cartilage, up to 12 months complete)',
  painLevel: 2,
  ageRequirement: '18+ with valid ID',
  aftercareHighlights: [
    'Clean twice daily with sterile saline solution (NeilMed or similar)',
    'Avoid sleeping on the pierced ear for 8-12 weeks',
    'Don\'t change jewelry until fully healed',
    'Keep hair products away from fresh piercings',
    'Never rotate or twist the jewelry'
  ],
  piercingTypes: [
    'Lobe', 'Upper Lobe', 'Helix', 'Forward Helix',
    'Tragus', 'Anti-Tragus', 'Rook', 'Daith',
    'Conch', 'Industrial', 'Flat'
  ],
  // NEW:
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
}
```

**Repeat this update for ALL 7 piercing guides** with appropriate information for each type.

---

### 5. Add Safety & Credentials Section

**Where:** Add after the materials section, before guides.

**Create:**

```astro
<!-- Safety & Credentials Section -->
<section class="safety-section" aria-labelledby="safety-heading">
  <div class="safety-container">
    <h2 id="safety-heading" class="section-heading">Safety & Sterilization</h2>
    
    <div class="safety-grid">
      <div class="safety-card">
        <div class="safety-icon">🏥</div>
        <h3>Autoclave Sterilization</h3>
        <ul>
          <li>Medical-grade autoclave on-site</li>
          <li>Spore tested monthly for effectiveness</li>
          <li>All reusable tools fully sterilized</li>
        </ul>
      </div>
      
      <div class="safety-card">
        <div class="safety-icon">💉</div>
        <h3>Single-Use Needles</h3>
        <ul>
          <li>Every needle used once and disposed</li>
          <li>Opened in front of client</li>
          <li>Never reused under any circumstances</li>
        </ul>
      </div>
      
      <div class="safety-card">
        <div class="safety-icon">📦</div>
        <h3>Pre-Sterilized Jewelry</h3>
        <ul>
          <li>Jewelry arrives individually packaged</li>
          <li>Autoclaved before use</li>
          <li>Never handled until your appointment</li>
        </ul>
      </div>
      
      <div class="safety-card">
        <div class="safety-icon">🧤</div>
        <h3>Strict Hygiene Protocol</h3>
        <ul>
          <li>Fresh gloves for every client</li>
          <li>Surfaces disinfected between appointments</li>
          <li>Hospital-grade disinfectants used</li>
        </ul>
      </div>
    </div>
    
    <div class="credentials">
      <h3>Harley's Qualifications</h3>
      <ul class="cred-list">
        <li>✓ 8+ years professional piercing experience</li>
        <li>✓ Licensed Louisiana Body Art Practitioner</li>
        <li>✓ Bloodborne Pathogen Certified</li>
        <li>✓ First Aid & CPR Certified</li>
        <li>✓ Continuous education in advanced techniques</li>
        <li>✓ Member of professional piercing community</li>
      </ul>
    </div>
    
    <div class="compliance-note">
      <strong>Louisiana Health Department Compliant:</strong> Our studio meets or exceeds all 
      Louisiana Department of Health requirements for body art establishments. Recent inspection 
      records available upon request.
    </div>
  </div>
</section>
```

---

## **PHASE 2: HIGH PRIORITY ADDITIONS** 📋

### 6. Add Policies Section

**Where:** Add above the CTA footer in `piercing.astro`.

```astro
<!-- Policies Section -->
<section class="policies-section" aria-labelledby="policies-heading">
  <div class="policies-container">
    <h2 id="policies-heading" class="section-heading">Booking & Policies</h2>
    
    <div class="policies-grid">
      <div class="policy-card">
        <h3>📅 Appointments</h3>
        <p>
          <strong>By appointment only.</strong> Message Harley on Facebook to check availability 
          and book your session. Walk-ins accommodated when schedule allows, but appointments 
          receive priority.
        </p>
      </div>
      
      <div class="policy-card">
        <h3>💰 Pricing & Deposits</h3>
        <ul>
          <li><strong>Prices include</strong> implant-grade titanium jewelry</li>
          <li><strong>Solid gold upgrade:</strong> Additional $30-100 depending on piece</li>
          <li><strong>$25 non-refundable deposit</strong> required to book</li>
          <li><strong>Deposit applied</strong> to service cost</li>
          <li><strong>Payment:</strong> Cash, card, Venmo, CashApp accepted</li>
        </ul>
      </div>
      
      <div class="policy-card">
        <h3>🔄 Cancellation Policy</h3>
        <ul>
          <li><strong>24-hour notice required</strong> for deposit refund</li>
          <li><strong>Same-day cancellations</strong> forfeit deposit</li>
          <li><strong>No-shows</strong> forfeit deposit and may require new deposit to rebook</li>
          <li><strong>Rescheduling:</strong> Free with 48-hour notice</li>
        </ul>
      </div>
      
      <div class="policy-card">
        <h3>📋 What to Bring</h3>
        <ul>
          <li><strong>Valid government-issued photo ID</strong> (required, no exceptions)</li>
          <li>Payment for service</li>
          <li>Clean, comfortable clothing</li>
          <li>Reference images if desired (optional)</li>
        </ul>
      </div>
      
      <div class="policy-card">
        <h3>🎨 Jewelry Policy</h3>
        <ul>
          <li><strong>We provide</strong> all initial jewelry (included in price)</li>
          <li><strong>Cannot use outside jewelry</strong> for new piercings (safety/sterility)</li>
          <li><strong>Jewelry upgrades</strong> available at time of piercing</li>
          <li><strong>Jewelry changes/downsizes:</strong> $10-15 service fee if you bring your own</li>
        </ul>
      </div>
      
      <div class="policy-card">
        <h3>📸 Portfolio Photography</h3>
        <p>
          We love showcasing our work! Photo consent is optional but appreciated. 
          Your face can be cropped for privacy. Let Harley know your preference.
        </p>
      </div>
    </div>
    
    <div class="policy-footer">
      <strong>Multiple Piercings:</strong> You can get multiple piercings in one session! 
      Discuss quantity with Harley based on your anatomy, pain tolerance, and healing capacity.
    </div>
  </div>
</section>
```

---

### 7. Update Individual Guide Cards Display

**In `src/components/GuideCard.astro`** (you'll need to check if this file exists, or update how cards are rendered):

**Add these new sections to each expanded guide card:**

```astro
<!-- Add after existing info section, before Book button -->

<div class="guide-jewelry-info">
  <h4>Initial Jewelry</h4>
  <p>{guide.initialJewelryStyle}</p>
  <p class="jewelry-note">
    Implant-grade titanium included. Solid gold upgrades available.
  </p>
</div>

<div class="guide-downsize-alert">
  <div class="alert-icon">⏰</div>
  <div class="alert-content">
    <strong>Important: Downsizing Required</strong>
    <p>{guide.downsizeTimeline}</p>
  </div>
</div>

{guide.anatomyNote && (
  <div class="anatomy-notice">
    <strong>Anatomy Assessment:</strong> {guide.anatomyNote}
  </div>
)}

<div class="guide-restrictions">
  <h4>Activity Restrictions</h4>
  <ul>
    {guide.activityRestrictions.map(restriction => (
      <li>{restriction}</li>
    ))}
  </ul>
</div>

<div class="guide-timeline">
  <h4>When Can I...</h4>
  <ul>
    <li><strong>Downsize jewelry:</strong> {guide.downsizeTimeline}</li>
    <li><strong>Change to different jewelry:</strong> {guide.jewelryChangeWhen}</li>
    <li><strong>Stop daily cleaning:</strong> After fully healed (see healing time above)</li>
  </ul>
</div>

{guide.commonIssues.length > 0 && (
  <div class="common-issues">
    <h4>Common Issues & Solutions</h4>
    <ul>
      {guide.commonIssues.map(issue => (
        <li>{issue}</li>
      ))}
    </ul>
    <p class="issue-note">
      Contact Harley at first sign of issues for guidance - early intervention prevents complications!
    </p>
  </div>
)}
```

---

### 8. Add FAQ for Piercing-Specific Questions

**Add before policies section:**

```astro
<!-- Piercing FAQ Section -->
<section class="piercing-faq-section" aria-labelledby="faq-heading">
  <div class="faq-container">
    <h2 id="faq-heading" class="section-heading">Common Questions</h2>
    
    <div class="faq-grid">
      <details class="faq-item">
        <summary>Can I get multiple piercings in one session?</summary>
        <p>
          Yes! Most clients can comfortably get 2-4 piercings in one session. Factors include 
          pain tolerance, anatomy, and your ability to avoid sleeping on multiple sides. Harley 
          will advise on the best approach for your goals.
        </p>
      </details>
      
      <details class="faq-item">
        <summary>Do you pierce with hoops?</summary>
        <p>
          No. Initial piercings must be done with flat-back studs (labret posts) for optimal healing. 
          Hoops move too much and delay healing. Once fully healed (6-12 months), you can switch to hoops.
        </p>
      </details>
      
      <details class="faq-item">
        <summary>When can I go swimming after getting pierced?</summary>
        <p>
          Avoid pools, hot tubs, lakes, and oceans for <strong>at least 6-8 weeks</strong> minimum. 
          For cartilage piercings, wait 3-4 months. Swimming submerges your piercing in bacteria-filled 
          water and significantly increases infection risk.
        </p>
      </details>
      
      <details class="faq-item">
        <summary>Can I bring my own jewelry for the piercing?</summary>
        <p>
          No. For safety and sterility reasons, we only use jewelry from verified professional suppliers 
          that meet our quality standards. Your jewelry likely isn't internally threaded or properly sterilized. 
          Once healed, you can wear any jewelry you like!
        </p>
      </details>
      
      <details class="faq-item">
        <summary>My piercing has a bump - is it infected?</summary>
        <p>
          Probably not! Small bumps around piercings are usually <strong>irritation bumps</strong>, 
          not infections. Common causes: sleeping on it, snagging, wrong aftercare, jewelry too long. 
          Message Harley with a photo - most irritation bumps resolve with simple care adjustments.
        </p>
      </details>
      
      <details class="faq-item">
        <summary>How much does solid gold jewelry cost?</summary>
        <p>
          Solid gold upgrades typically add $30-100+ to the base price, depending on the piece size 
          and gold content (14k vs 18k). Harley can show you options during your appointment. 
          Gold is great for people with titanium sensitivities.
        </p>
      </details>
      
      <details class="faq-item">
        <summary>Can I work out or exercise after getting pierced?</summary>
        <p>
          Light exercise is fine immediately. For intense workouts: Wait 24-48 hours, then resume with 
          caution. Avoid exercises that directly impact the piercing (ear piercings + helmet sports, 
          navel + sit-ups, etc.). Clean thoroughly with saline after sweating.
        </p>
      </details>
      
      <details class="faq-item">
        <summary>What if my jewelry falls out?</summary>
        <p>
          <strong>Act fast!</strong> Piercings can close in minutes to hours, especially new ones. 
          If it's during business hours, contact Harley immediately. Don't force jewelry back in 
          yourself - you can damage tissue. If healed (6+ months), you may be able to reinsert 
          carefully after cleaning.
        </p>
      </details>
    </div>
  </div>
</section>
```

---

## **PHASE 3: POLISH & ENHANCEMENTS** ✨

### 9. Add Testimonials Section

**Where:** Before the final CTA footer.

```astro
<!-- Testimonials Section -->
<section class="testimonials-section" aria-labelledby="testimonials-heading">
  <div class="testimonials-container">
    <h2 id="testimonials-heading" class="section-heading">Client Love</h2>
    
    <div class="testimonials-grid">
      <!-- Add 4-6 real testimonials here -->
      <div class="testimonial-card">
        <div class="stars">⭐⭐⭐⭐⭐</div>
        <p class="testimonial-text">
          "Harley made my first piercing experience so comfortable! Her attention to placement 
          and aftercare instructions were incredible. My helix healed perfectly."
        </p>
        <p class="testimonial-author">— Sarah M.</p>
      </div>
      
      <!-- Add more testimonials -->
    </div>
    
    <p class="testimonials-cta">
      Ready to join them? <a href="https://www.facebook.com/harley.halford" target="_blank" rel="noopener noreferrer">
        Message Harley to Book
      </a>
    </p>
  </div>
</section>
```

*Note: You'll need to provide real testimonials or ask client for them.*

---

### 10. Update Pricing Display

**In `piercingGuides.ts`, update all `priceRange` fields:**

Change from:
```typescript
priceRange: '$50 - $70'
```

To:
```typescript
priceRange: 'Starting at $50 (titanium jewelry included, gold upgrade +$30-100)'
```

Apply to all guides with appropriate pricing.

---

### 11. Add Jewelry Type Educational Section (Optional but Recommended)

**Create new section showing jewelry types:**

```astro
<!-- Jewelry Types Section -->
<section class="jewelry-types-section" aria-labelledby="jewelry-types-heading">
  <div class="jewelry-types-container">
    <h2 id="jewelry-types-heading" class="section-heading">Understanding Jewelry Styles</h2>
    
    <div class="jewelry-types-grid">
      <div class="jewelry-type-card">
        <h3>Flat-Back Labret Stud</h3>
        <p>
          Most common for initial piercings. Flat back sits flush against skin, won't snag. 
          Used for: ears, nose, lips, most body piercings.
        </p>
      </div>
      
      <div class="jewelry-type-card">
        <h3>Curved Barbell</h3>
        <p>
          Gentle curve follows body contours. Used for: eyebrow, navel, some ear piercings 
          (rook, daith). Only after healed.
        </p>
      </div>
      
      <div class="jewelry-type-card">
        <h3>Seamless Hoops</h3>
        <p>
          Classic circular look with no visible closure. Can only be worn once piercing is 
          fully healed (6+ months). Great for nostrils, lobes, helixes.
        </p>
      </div>
      
      <div class="jewelry-type-card">
        <h3>Clicker Hoops</h3>
        <p>
          Hinged segment makes changing easy. Popular for septum and daith. Available after healing. 
          Range from simple to ornate designs.
        </p>
      </div>
    </div>
  </div>
</section>
```

---

## **STYLING GUIDELINES**

All new sections should match existing brand aesthetic:

```css
/* Core variables (already defined, reference these) */
--gradient-bg: linear-gradient(135deg, #0a0a0a 0%, #1a1423 100%);
--glass-bg: rgba(255, 255, 255, 0.02);
--glass-border: rgba(138, 43, 226, 0.15);
--glow-primary: rgba(138, 43, 226, 0.4);
--accent: #8a2be2;

/* New section styling */
.materials-section,
.health-section,
.safety-section,
.policies-section {
  padding: clamp(3rem, 8vw, 6rem) 1.5rem;
  background: var(--gradient-bg);
}

.material-card,
.safety-card,
.policy-card {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.material-card:hover,
.safety-card:hover {
  border-color: var(--accent);
  box-shadow: 0 4px 20px var(--glow-primary);
  transform: translateY(-2px);
}

.danger-list {
  color: rgba(255, 255, 255, 0.85);
}

.danger-list li::marker {
  content: "❌ ";
}

.emphasis {
  font-weight: 600;
  color: var(--accent);
}

/* Grid layouts */
.materials-grid,
.safety-grid,
.policies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

/* Responsive */
@media (max-width: 768px) {
  .materials-grid,
  .safety-grid {
    grid-template-columns: 1fr;
  }
}
```

---

## **TESTING CHECKLIST**

After implementing, verify:

- [ ] All new sections render correctly on desktop (1920px, 1440px, 1024px)
- [ ] Mobile responsive (iPhone SE 320px, iPhone 12 375px, iPad 768px)
- [ ] All internal links work (#anchors)
- [ ] External links open in new tab with `rel="noopener noreferrer"`
- [ ] Accordion animations smooth
- [ ] No console errors
- [ ] Build passes (`npm run build`)
- [ ] Images lazy load correctly
- [ ] Focus states visible for keyboard navigation
- [ ] Screen reader announces sections correctly (test with NVDA/JAWS)
- [ ] Color contrast meets WCAG AA (4.5:1 minimum)
- [ ] Page load under 3 seconds
- [ ] No layout shift (CLS score 0)

---

## **CONTENT TO GATHER FROM CLIENT**

Before finalizing, get from client:

1. **Harley's exact credentials:**
   - Louisiana license number (if displayable)
   - Certifications (APP membership? Bloodborne pathogen cert date?)
   - Training history

2. **Exact jewelry upgrade pricing:**
   - 14k gold upgrade cost range
   - 18k gold upgrade cost range
   - Any gemstone options and pricing

3. **Studio compliance:**
   - Recent health department inspection date
   - Autoclave spore testing frequency
   - Insurance coverage details (if to be mentioned)

4. **Policies:**
   - Exact deposit amount ($25 suggested, verify)
   - Payment methods accepted (Venmo/CashApp usernames if applicable)
   - Cancellation/rescheduling specifics

5. **Client testimonials:**
   - Get 4-6 real testimonials with names (first name + last initial)
   - Get permission to use
   - Star ratings if from Facebook/Google

---

## **FILES STRUCTURE SUMMARY**

After completion, you should have:

```
src/
├── pages/
│   └── piercing.astro (MODIFIED - added sections)
├── components/
│   ├── PiercingGuideSection.astro (MODIFIED - updated cards)
│   └── GuideCard.astro (CHECK IF EXISTS - may need to create)
├── data/
│   └── piercingGuides.ts (MODIFIED - new fields, updated content)
```

---

## **FINAL NOTES**

- **Performance First:** Keep lazy loading, optimize any new images to WebP under 100KB
- **Accessibility:** Maintain ARIA labels, keyboard nav, focus states
- **Brand Consistency:** Match existing dark luxury gothic aesthetic
- **Mobile Priority:** Test on real devices, not just DevTools
- **SEO:** Update meta descriptions to mention new features (materials, safety, etc.)
- **No Breaking Changes:** Preserve existing gallery, filtering, lightbox functionality

**Estimated Time:** 6-8 hours for full implementation + testing.

**Priority Order:** Phases 1 → 2 → 3. If time-constrained, complete Phase 1 entirely before moving to Phase 2.

---

Good luck! This will bring your piercing page to industry-leading professional standards. 🎯✨