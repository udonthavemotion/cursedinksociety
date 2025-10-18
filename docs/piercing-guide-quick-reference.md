# Piercing Guide Quick Reference

## 📁 File Locations

### Components
- `src/components/PiercingGuideSection.astro` - Main guide section
- `src/components/GuideCard.astro` - Individual guide cards

### Data
- `src/data/piercingGuides.ts` - All guide content & pricing

### Images
- `public/piercing-guides/anatomy/` - Anatomical diagrams (5)
- `public/piercing-guides/examples/` - Real examples (4)
- `public/piercing-guides/education/` - Educational content (1)
- `public/piercing-guides/compliance/` - Age notice (1)

### Scripts
- `scripts/convert-piercing-guides.js` - Image conversion utility

## 🎨 Design System

### Colors
- Primary Purple: `#8a2be2`
- Hover Purple: `#a855f7`
- Glass Background: `rgba(255, 255, 255, 0.02)`
- Glass Border: `rgba(138, 43, 226, 0.15)`
- Text Primary: `#ffffff`
- Text Secondary: `rgba(255, 255, 255, 0.75)`

### Typography
- Section Title: `clamp(2.5rem, 5vw, 4rem)`
- Guide Title: `clamp(1.25rem, 2.5vw, 1.75rem)`
- Body Text: `1rem` / `line-height: 1.7`
- Small Text: `0.875rem`

### Spacing
- Section Padding: `clamp(4rem, 10vw, 8rem) 1.5rem`
- Card Gap: `1.5rem`
- Internal Padding: `1.75rem 2rem`

### Border Radius
- Large: `24px` (sections)
- Medium: `16px` (images)
- Small: `12px` (buttons)
- Chips: `50px` (pills)

## 📊 Content Structure

### 7 Piercing Guides

1. **Ear Piercings** - $50-$70
   - 11 types (Lobe, Helix, Tragus, Rook, Daith, Conch, etc.)
   - Pain Level: 2/5
   - Healing: 6-8 weeks (lobe) / 3-12 months (cartilage)

2. **Nose Piercings** - $50
   - 2 types (Nostril, Septum)
   - Pain Level: 3/5
   - Healing: 4-6 months (nostril) / 6-8 weeks (septum)

3. **Eyebrow Piercings** - $60-$80
   - 3 types (Vertical, Horizontal, Double)
   - Pain Level: 2/5
   - Healing: 6-8 weeks

4. **Oral Piercings** - $60
   - 4 types (Tongue, Lip, Labret, etc.)
   - Pain Level: 4/5
   - Healing: 4-6 weeks (tongue) / 6-8 weeks (lip)

5. **Navel Piercings** - $60-$80
   - 3 types (Standard, Floating, Bottom)
   - Pain Level: 3/5
   - Healing: 6-12 months

6. **Surface Piercings** - $100
   - 6 types (Bridge, Anti-Eyebrow, Sternum, Hip, Nape, etc.)
   - Pain Level: 3/5
   - Healing: 3-6 months

7. **Genital Piercings** - $100+
   - 6 types (VCH, Christina, Triangle, Prince Albert, Frenum, Jacob's Ladder)
   - Pain Level: 4/5
   - Healing: 4-12 weeks (varies)
   - **18+ ONLY** with government-issued photo ID

## 🔄 Common Updates

### Update Pricing
Edit `src/data/piercingGuides.ts`:
```typescript
{
  id: 'ear-piercings',
  priceRange: '$55 - $75', // Change here
  // ...
}
```

### Add New Piercing Type
Edit `src/data/piercingGuides.ts`, add to `piercingTypes` array:
```typescript
piercingTypes: [
  'Lobe',
  'Helix',
  'Your New Type Here' // Add here
]
```

### Replace Image
1. Convert to WebP: `npx sharp-cli --input new-image.jpg --output public/piercing-guides/anatomy/ear-piercings.webp --webp-quality 85 --resize 1200`
2. Rebuild: `npm run build`

### Change Category Colors
Edit component styles in `src/components/PiercingGuideSection.astro`:
```css
.filter-button.active {
  background: #8a2be2; /* Change color */
}
```

## 🎯 User Flow

1. **Land on Page** → Hero introduces Harley
2. **Click "View Guide & Pricing"** → Scrolls to guide section
3. **See Age Notice** → Clear 18+ requirement
4. **Filter by Category** → Click Ear, Nose, Face, etc.
5. **Expand Guide** → Click accordion to see details
6. **Review Info** → Anatomy, pricing, healing time, pain level
7. **Click CTA** → "Message Harley to Book" → Facebook Messenger
8. **Continue to Portfolio** → See real client work
9. **Review Aftercare** → Existing accordion section
10. **Book Appointment** → Final CTA footer

## 🚀 Performance Tips

### Image Optimization
- Use WebP format (85% quality)
- Max width: 1200px
- Lazy loading enabled by default
- Total guide images: ~880KB

### Code Splitting
- Components are scoped (no global CSS pollution)
- Minimal JavaScript (native browser features)
- Accordion uses `<details>` (zero JS)

### Best Practices
- Preload critical images in head (if needed)
- Use `fetchpriority="high"` for above-fold images
- Compress assets with astro-compress (automatic)

## 🔍 SEO Optimization

### Structured Data
Location: `src/pages/piercing.astro` (lines 78-112)
- Person Schema (Harley Halford)
- Image Gallery Schema
- **Service Schema (NEW)** - Pricing catalog

### Keywords Targeted
- "ear piercing Houma LA"
- "nose piercing prices Louisiana"
- "professional body piercer near me"
- "piercing aftercare guide"
- "Harley Halford piercer"

### Meta Tags
- Title: "Piercings by Harley Halford | Houma, LA"
- Description includes pricing and experience

## ♿ Accessibility

### WCAG 2.1 AA Compliance
✅ Keyboard navigation (Tab, Enter, Space)
✅ ARIA labels and roles
✅ Focus visible indicators
✅ High contrast text (4.5:1+)
✅ Alt text for all images
✅ Semantic HTML5
✅ Reduced motion support
✅ Screen reader friendly

### Testing Tools
- axe DevTools (Chrome extension)
- WAVE (Web Accessibility Evaluation Tool)
- Lighthouse Accessibility audit
- NVDA/JAWS screen readers

## 📱 Responsive Breakpoints

### Mobile (< 640px)
- Single column layout
- Stacked cards
- Reduced padding
- Larger tap targets (44px min)
- Smaller font sizes

### Tablet (640-1024px)
- Two column grid for stats
- Comfortable spacing
- Larger filter buttons

### Desktop (> 1024px)
- Two column grid for content
- Maximum width: 1400px
- Enhanced hover effects
- Optimal reading line length

## 🛠️ Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Convert new guide images
node scripts/convert-piercing-guides.js

# Check for linting errors
npm run lint
```

## 📞 Support Links

### CTA Destinations
- **Message Harley:** https://www.facebook.com/harley.halford
- **Contact Studio:** /contact (internal page)

### Social Media
- Facebook: Harley Halford (linked throughout)

## 🎨 Customization Examples

### Change Accent Color
Find and replace `#8a2be2` with your new color in:
- `src/components/GuideCard.astro`
- `src/components/PiercingGuideSection.astro`

### Modify Card Border Radius
Edit `border-radius: 24px` in `.guide-card` class

### Adjust Animation Speed
Edit `transition: all 0.3s` timing values

### Change Filter Button Style
Modify `.filter-button` class in `PiercingGuideSection.astro`

## 🐛 Troubleshooting

### Images Not Loading
1. Check file paths in `src/data/piercingGuides.ts`
2. Verify images exist in `public/piercing-guides/`
3. Rebuild: `npm run build`

### Accordion Not Opening
1. Check browser console for errors
2. Verify `<details>` element is not disabled
3. Test JavaScript filtering logic

### Filter Not Working
1. Check `data-category` attributes match guide categories
2. Verify JavaScript event listeners attached
3. Test with browser console open

### Build Errors
1. Run `npm install` to update dependencies
2. Check TypeScript errors: `npx tsc --noEmit`
3. Review error messages for missing imports

## 📈 Analytics Tracking

### Recommended Events
- Guide card expand (click)
- Category filter selection
- "Message Harley" CTA clicks
- Section scroll depth
- Image interactions

### Google Analytics 4 Example
```javascript
// Track guide expansion
document.querySelectorAll('.guide-card').forEach(card => {
  card.addEventListener('toggle', () => {
    if (card.open) {
      gtag('event', 'guide_expanded', {
        guide_id: card.dataset.category
      });
    }
  });
});
```

---

**Last Updated:** October 16, 2025  
**Maintained By:** Development Team  
**Questions?** See full implementation doc

