# Google Maps Embed - Final Setup Instructions

## Current Status
✅ The map embed is successfully integrated into the contact page
✅ Beautifully styled with glass morphism effects matching the site aesthetic
✅ Fully responsive across all devices
✅ Interactive overlay card with studio information

## Getting Your Actual Google Maps Embed Code

To replace the template URL with your real location, follow these steps:

### Option 1: From Google Maps
1. Go to [Google Maps](https://www.google.com/maps)
2. Search for "488 Corporate Dr STE 11, Houma, LA 70360" or "Cursed Ink Society"
3. Click on the location marker
4. Click the "Share" button
5. Select the "Embed a map" tab
6. Copy the iframe code
7. Extract just the `src` URL from that iframe

### Option 2: From Google Business Profile
1. Log into your [Google Business Profile](https://business.google.com/)
2. Go to your Cursed Ink Society location
3. Look for the map widget or share options
4. Get the embed code
5. Extract the `src` URL

### Where to Update the URL

The embed URL is in: `src/pages/contact.astro`

Find line ~212 and replace the current `src` attribute:

```html
<iframe
  src="YOUR_ACTUAL_GOOGLE_MAPS_EMBED_URL_HERE"
  width="100%"
  height="100%"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
  title="Cursed Ink Society Location Map">
</iframe>
```

After updating, run `npm run build` to rebuild the site.

## Features Implemented

### Design Elements
- **Glass morphism effects** - Translucent overlay card with blur effects
- **Animated info card** - Slides in smoothly on page load
- **Hover effects** - Subtle animations on map container and overlay card
- **Accent colors** - Uses site's red accent (`#ff3c2b`) for borders and glows
- **Grayscale filter** - Map starts slightly desaturated, full color on hover

### Responsive Design
- Desktop (1024px+): Full height map with large info card overlay
- Tablet (768px): Adjusted spacing and button layouts
- Mobile (480px): Stacked layout, optimized card size
- Small mobile (360px): Compact design with smaller icons
- Landscape mode: Optimized height for horizontal screens

### Accessibility Features
- Proper ARIA labels and semantic HTML
- Keyboard navigation support
- Reduced motion support for users with motion sensitivity
- High contrast borders for better visibility
- Touch-friendly hit targets (44px minimum)

### Performance Optimizations
- Lazy loading enabled (`loading="lazy"`)
- Proper referrer policy
- CSS transforms using GPU acceleration
- Optimized animations with `will-change`

## Testing Checklist

After updating the real embed URL:
- [ ] Map loads correctly on desktop
- [ ] Map loads correctly on mobile
- [ ] Info card displays properly
- [ ] Hover effects work smoothly
- [ ] "Get Directions" button opens correct location
- [ ] Phone link in overlay card works
- [ ] Map is interactive (zoom, pan, etc.)

## Notes

- The current template URL uses placeholder coordinates that approximate Houma, LA
- Once you add the real Google Maps URL, the map will show your exact location
- Consider enabling Google Business features like reviews, photos, and hours directly on the map
- The info card shows your phone number and current hours from the contact data

---

Last Updated: October 18, 2025

