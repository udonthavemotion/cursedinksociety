# Launch Process Guide

This document outlines the simple process to transition from the coming-soon page to the live website.

## Current Setup

### Pre-Launch Structure
- `/` (root) → Coming-soon page (`src/pages/index.astro`)
- `/coming-soon` → Coming-soon page (`src/pages/coming-soon.astro`)
- `/homepage` → Full website (`src/pages/homepage.astro`)
- `/preview` → Redirects to `/homepage` (via `vercel.json`)

### URLs
- **Coming-soon**: `https://www.cursedinksocietytattoo.com/`
- **Preview**: `https://www.cursedinksocietytattoo.com/homepage`
- **Legacy redirect**: `/preview` → `/homepage`

## Launch Process (3 Simple Steps)

### Step 1: Backup Current Index
```bash
# Backup the coming-soon page
mv src/pages/index.astro src/pages/index.astro.backup
```

### Step 2: Make Homepage the New Index
```bash
# Copy homepage to become the new root
cp src/pages/homepage.astro src/pages/index.astro
```

### Step 3: Clean Up (Optional)
```bash
# Remove the coming-soon page if no longer needed
rm src/pages/coming-soon.astro

# Remove the separate homepage file (now redundant)
rm src/pages/homepage.astro
```

## Alternative: Environment-Based Launch

For more control, you can use environment variables to conditionally show content:

### Update `src/pages/index.astro`
```astro
---
// Check if site should show coming-soon or full site
const isLaunched = import.meta.env.PUBLIC_SITE_LAUNCHED === 'true';

// Import appropriate components
import ComingSoonLayout from './coming-soon.astro';
import HomepageLayout from './homepage.astro';
---

{isLaunched ? <HomepageLayout /> : <ComingSoonLayout />}
```

### Environment Variables
- **Pre-launch**: `PUBLIC_SITE_LAUNCHED=false`
- **Post-launch**: `PUBLIC_SITE_LAUNCHED=true`

## Rollback Process

If you need to rollback to coming-soon:

```bash
# Restore from backup
mv src/pages/index.astro.backup src/pages/index.astro
```

## Vercel Configuration

The `vercel.json` file includes:
- Redirect from `/preview` to `/homepage` (permanent)
- Cache headers for optimal performance
- Sitemap rewrite for SEO

## Mobile Optimizations Applied

✅ **Stats Section Mobile Fixes:**
- Responsive flexbox layout that maintains horizontal alignment
- Proper spacing and sizing for small screens
- Text truncation to prevent overflow
- Optimized font sizes using `clamp()` for fluid scaling
- Special handling for screens < 360px width

✅ **Performance Optimizations:**
- Progressive enhancement for Three.js effects
- Mobile-specific optimizations
- Reduced motion support
- Lazy loading for non-critical assets

## Testing Checklist

Before launch, verify:
- [ ] `/homepage` displays correctly on all devices
- [ ] Stats section (150+, 6, 38+) renders properly on mobile
- [ ] Social media links work correctly
- [ ] Artists page navigation functions
- [ ] Mobile responsiveness across different screen sizes
- [ ] Performance scores remain high (Lighthouse)

## Post-Launch

After launching:
1. Update any internal links that reference `/homepage` to `/`
2. Set up 301 redirects if needed for SEO
3. Update social media and marketing materials with the new URL structure
4. Monitor analytics for any 404 errors

## Safe Rollback Note

The current structure allows for instant rollback by simply reverting the index.astro file. The coming-soon page remains available at `/coming-soon` until explicitly removed.
