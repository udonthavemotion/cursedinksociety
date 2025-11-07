# Visual Test Checklist - Piercing Guide Implementation

## 🚀 Dev Server Access

The development server should now be running at:
**http://localhost:4321/piercing**

## ✅ Visual Tests to Perform

### 1. Hero Section
- [ ] Hero loads correctly
- [ ] "View Guide & Pricing" button text is correct
- [ ] Button links to #piercing-guides (smooth scroll)
- [ ] All existing content intact

### 2. Guide Section - Desktop (> 1024px)

#### Section Header
- [ ] "Piercing Guide & Pricing" title displays with gradient
- [ ] Subtitle is readable and centered
- [ ] Purple glow effect visible at top

#### Age Notice
- [ ] "18 and up only" image displays on left
- [ ] Text is readable with yellow accent color
- [ ] Notice has yellow border
- [ ] Responsive layout looks good

#### Category Filters
- [ ] 7 filter buttons display (All, Ear, Nose, Face, Oral, Body, Surface)
- [ ] Emojis show next to each label
- [ ] "All Guides" is active by default (purple background)
- [ ] Hover effect works (lighter background, lift up)
- [ ] Click changes active state
- [ ] Filters show/hide correct guides

#### Guide Cards
- [ ] 7 cards display in vertical stack
- [ ] Cards have glass morphism effect (semi-transparent)
- [ ] Purple border visible
- [ ] Expand icon (+) on right side

#### Card Interaction
- [ ] Click card header to expand
- [ ] + icon rotates 45° when open
- [ ] Border changes to brighter purple when open
- [ ] Shadow appears when open
- [ ] Content reveals smoothly

#### Expanded Card Content (Test with "Ear Piercings")
- [ ] Anatomy image loads (ear diagram)
- [ ] Example photos display below anatomy (if available)
- [ ] Two-column layout on desktop
- [ ] Left: Images / Right: Info

##### Info Section
- [ ] Description paragraph readable
- [ ] Quick stats box (3 columns):
  - [ ] Healing Time
  - [ ] Pain Level (● indicators)
  - [ ] Age Requirement
- [ ] Purple background on stats box
- [ ] Piercing type chips display in grid
- [ ] Chips have hover effect (lift and glow)
- [ ] Aftercare list shows with bullets
- [ ] Purple bullet markers
- [ ] "Message Harley to Book" button:
  - [ ] Full width
  - [ ] Purple background
  - [ ] Hover lifts and glows
  - [ ] Links to Facebook

#### Education Section (Bottom)
- [ ] "Understanding Irritation Bumps" heading
- [ ] Irritation bumps image on left
- [ ] Text content on right
- [ ] Two-column layout
- [ ] "Message Harley About Aftercare" button works
- [ ] Rounded corners and purple border

### 3. Guide Section - Tablet (640-1024px)
- [ ] Filters wrap to multiple rows if needed
- [ ] Card content remains two-column
- [ ] Age notice wraps content
- [ ] Quick stats show 2-3 columns
- [ ] Type chips wrap nicely
- [ ] Images scale appropriately

### 4. Guide Section - Mobile (< 640px)

#### Layout Changes
- [ ] All content single column
- [ ] Filters smaller with more wrapping
- [ ] Age notice image scales down (80px)
- [ ] Card padding reduced
- [ ] Expand icon still visible

#### Card Content
- [ ] Anatomy image full width
- [ ] Info section below (not side-by-side)
- [ ] Quick stats single column (stacked)
- [ ] Type chips wrap to multiple rows
- [ ] Button full width and tappable
- [ ] Minimum 44px tap targets
- [ ] Education section single column

### 5. Gallery Section (Below Guides)
- [ ] Portfolio gallery still works
- [ ] Filtering still functional
- [ ] Lightbox still opens
- [ ] No interference with guide section

### 6. Aftercare Section
- [ ] Still displays correctly
- [ ] Accordion still works
- [ ] No layout shifts

### 7. CTA Footer
- [ ] Still displays correctly
- [ ] Links still work

## ♿ Accessibility Tests

### Keyboard Navigation
- [ ] Tab through filter buttons
- [ ] Space/Enter activates filter
- [ ] Tab into guide cards
- [ ] Enter/Space expands card
- [ ] Tab through card content
- [ ] Tab to "Book" button
- [ ] Focus indicators visible (purple outline)

### Screen Reader
- [ ] Section has proper heading hierarchy (h2, h3)
- [ ] Filter nav has aria-label
- [ ] Filter buttons have aria-pressed state
- [ ] Images have descriptive alt text
- [ ] Details/summary announces correctly
- [ ] Lists are announced properly

### Visual Accessibility
- [ ] Text contrast meets WCAG AA (4.5:1)
- [ ] Focus indicators at least 2px
- [ ] Color is not the only indicator
- [ ] Text is readable at 200% zoom

## 🎨 Design Consistency

### Color Palette
- [ ] Purple accent: #8a2be2 used consistently
- [ ] Glass background: subtle transparency
- [ ] Text white/semi-white on dark
- [ ] Hover states consistent across components

### Typography
- [ ] Font sizes scale with clamp()
- [ ] Line heights comfortable (1.6-1.7)
- [ ] Letter spacing appropriate
- [ ] Hierarchy clear (h2 > h3 > p)

### Spacing
- [ ] Consistent gap between cards (1.5rem)
- [ ] Proper internal padding
- [ ] Section breathing room
- [ ] Mobile spacing reduced appropriately

### Borders & Radius
- [ ] All cards 24px radius
- [ ] Buttons 12px radius
- [ ] Images 12-16px radius
- [ ] Chips 50px radius (pills)

## 🔄 Interaction Tests

### Filtering
1. Click "Ear" filter
   - [ ] Only ear piercing card shows
   - [ ] Other cards hide
   - [ ] Active state changes
   - [ ] Smooth scroll to grid

2. Click "All Guides"
   - [ ] All 7 cards reappear
   - [ ] Active state on "All"
   - [ ] Animation delay staggers

3. Click each category
   - [ ] Correct cards show/hide
   - [ ] No console errors

### Accordion Behavior
1. Expand one card
   - [ ] Opens smoothly
   - [ ] Content fully visible
   - [ ] No layout shift in other cards

2. Expand multiple cards
   - [ ] All can be open simultaneously
   - [ ] Page doesn't jump
   - [ ] Scroll position maintained

3. Filter while cards open
   - [ ] Cards filter correctly
   - [ ] Open state preserved if visible
   - [ ] Closed if hidden

### Hover Effects
- [ ] Filter buttons lift on hover
- [ ] Guide card header highlights
- [ ] Type chips lift slightly
- [ ] Book button glows
- [ ] Images scale slightly
- [ ] Smooth transitions (0.3s)

### Mobile Touch
- [ ] Tap targets at least 44x44px
- [ ] No hover states stuck on mobile
- [ ] Smooth scroll works
- [ ] No horizontal scroll
- [ ] Pinch zoom works

## 🚀 Performance Tests

### Loading
- [ ] Images lazy load (check Network tab)
- [ ] WebP format served
- [ ] No layout shift as images load
- [ ] Smooth scroll doesn't lag

### Animations
- [ ] Stagger animation on page load
- [ ] No janky transitions
- [ ] 60fps animations
- [ ] Reduced motion respected (if set)

### Console
- [ ] No JavaScript errors
- [ ] No 404s in Network tab
- [ ] No React/hydration warnings
- [ ] Structured data validates

## 🔍 Content Verification

### Guide Completeness (Check All 7)
1. **Ear Piercings**
   - [ ] Price: $50-$70
   - [ ] 11 types listed
   - [ ] Pain: 2/5
   - [ ] Healing: 6-8 weeks / 3-12 months

2. **Nose Piercings**
   - [ ] Price: $50
   - [ ] 2 types (Nostril, Septum)
   - [ ] Pain: 3/5

3. **Eyebrow Piercings**
   - [ ] Price: $60-$80
   - [ ] Example photo shows
   - [ ] Pain: 2/5

4. **Oral Piercings**
   - [ ] Price: $60
   - [ ] Tongue diagram shows
   - [ ] Pain: 4/5

5. **Navel Piercings**
   - [ ] Price: $60-$80
   - [ ] Floating navel shown
   - [ ] Pain: 3/5

6. **Surface Piercings**
   - [ ] Price: $100
   - [ ] Multiple examples
   - [ ] Pain: 3/5

7. **Genital Piercings**
   - [ ] Price: $100+
   - [ ] 18+ ONLY emphasized
   - [ ] Diagram appropriate
   - [ ] Pain: 4/5

### Links
- [ ] All "Message Harley" buttons → facebook.com/harley.halford
- [ ] Open in new tab (target="_blank")
- [ ] Have rel="noopener noreferrer"

## 📱 Device Testing

### Browsers (Desktop)
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Mobile Devices
- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] Tablet (iPad)
- [ ] Small phone (<375px)

### Screen Sizes
- [ ] 320px (iPhone SE)
- [ ] 375px (iPhone 12)
- [ ] 768px (iPad)
- [ ] 1024px (iPad Pro)
- [ ] 1440px (Desktop)
- [ ] 1920px (Large Desktop)

## 🐛 Known Issues to Watch For

### Potential Problems
- [ ] Images not loading → check paths
- [ ] Accordion stuck → check details element
- [ ] Filter not working → check data-category
- [ ] Layout shift → check image dimensions
- [ ] Slow scroll → check animation frames

### Browser-Specific
- [ ] Safari: Details/summary styling
- [ ] Firefox: Smooth scroll
- [ ] Edge: WebP support (should be fine)
- [ ] Mobile Safari: Touch targets

## ✅ Sign-Off Checklist

Before deploying to production:
- [ ] All visual tests pass
- [ ] No console errors
- [ ] Accessibility tests pass
- [ ] Performance is acceptable
- [ ] Content is accurate
- [ ] Prices verified with client
- [ ] Links work correctly
- [ ] Mobile responsive
- [ ] Cross-browser tested
- [ ] Client approval received

---

## 🎯 Quick Test Command

```bash
# Open in browser
npm run dev
# Then navigate to: http://localhost:4321/piercing

# Or use Chrome DevTools Device Mode for mobile testing
```

## 📸 Screenshots to Take

For documentation/client approval:
1. Full page overview (desktop)
2. Guide section with all cards
3. Expanded ear piercing guide
4. Mobile view (375px)
5. Filter interaction (different categories)
6. Age requirement notice
7. Education section

---

**Testing Date:** __________  
**Tester Name:** __________  
**Issues Found:** __________  
**Status:** ☐ Pass ☐ Fail ☐ Needs Fixes

