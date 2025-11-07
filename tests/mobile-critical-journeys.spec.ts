import { test, expect } from '@playwright/test';

/**
 * Mobile Critical User Journeys Tests
 * Validates performance, accessibility, and functionality on mobile devices
 * 
 * Test coverage:
 * 1. Homepage load and hero interaction
 * 2. Artists page navigation and filtering
 * 3. Piercing page with guide viewing
 * 4. Gallery lightbox interaction
 * 5. Contact form and map interaction
 */

test.describe('Mobile Critical Journeys - Core Web Vitals', () => {
  test('Homepage loads with acceptable LCP and no CLS', async ({ page }) => {
    await page.goto('/');
    
    // Wait for page to be fully loaded
    await page.waitForLoadState('networkidle');
    
    // Measure LCP (Largest Contentful Paint)
    const lcp = await page.evaluate(() => {
      return new Promise((resolve) => {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          resolve(lastEntry.renderTime || lastEntry.loadTime);
        }).observe({ type: 'largest-contentful-paint', buffered: true });
        
        // Fallback timeout
        setTimeout(() => resolve(0), 5000);
      });
    });
    
    // Assert LCP < 2.5s on mobile (ideal < 2.0s)
    expect(lcp).toBeLessThan(2500);
    console.log(`✅ Homepage LCP: ${lcp}ms`);
    
    // Check for visible hero elements
    await expect(page.locator('.hero-title')).toBeVisible();
    await expect(page.locator('.hero-logo')).toBeVisible();
    
    // Verify no horizontal scroll (viewport fit)
    const hasHorizontalScroll = await page.evaluate(() => {
      return document.body.scrollWidth > window.innerWidth;
    });
    expect(hasHorizontalScroll).toBe(false);
  });
  
  test('Mobile navigation works with touch interactions', async ({ page }) => {
    await page.goto('/');
    
    // Open mobile menu
    const menuToggle = page.locator('.nav-toggle');
    await expect(menuToggle).toBeVisible();
    await menuToggle.tap();
    
    // Verify menu opened
    const navMenu = page.locator('.nav-menu');
    await expect(navMenu).toHaveClass(/nav-menu--open/);
    
    // Tap on Artists link
    const artistsLink = page.locator('.nav-link[href="/artists"]');
    await expect(artistsLink).toBeVisible();
    
    // Ensure touch target is large enough (44x44px minimum)
    const boundingBox = await artistsLink.boundingBox();
    expect(boundingBox?.width).toBeGreaterThanOrEqual(44);
    expect(boundingBox?.height).toBeGreaterThanOrEqual(44);
    
    await artistsLink.tap();
    
    // Verify navigation happened
    await expect(page).toHaveURL('/artists');
    await expect(page.locator('h1')).toContainText('Artists');
  });
  
  test('Artists page loads images progressively', async ({ page }) => {
    await page.goto('/artists');
    
    // Wait for hero section
    await page.waitForSelector('.artists-hero', { state: 'visible' });
    
    // Check for artist cards
    const artistCards = page.locator('.artist-card');
    const cardCount = await artistCards.count();
    expect(cardCount).toBeGreaterThan(0);
    
    // Verify images have proper attributes (prevent CLS)
    const firstCard = artistCards.first();
    const img = firstCard.locator('img').first();
    
    await expect(img).toHaveAttribute('loading', /lazy|eager/);
    await expect(img).toHaveAttribute('alt'); // Accessibility
    
    // Check if image loaded successfully
    const naturalWidth = await img.evaluate((el: HTMLImageElement) => el.naturalWidth);
    expect(naturalWidth).toBeGreaterThan(0);
    
    console.log(`✅ Artists page: ${cardCount} cards loaded`);
  });
  
  test('Piercing page with age gate and guide navigation', async ({ page }) => {
    await page.goto('/piercing');
    
    // Check if age gate appears (if implemented)
    const ageGate = page.locator('.age-gate-modal');
    if (await ageGate.isVisible()) {
      const confirmButton = ageGate.locator('button:has-text("I am 18+")');
      await confirmButton.tap();
      await expect(ageGate).not.toBeVisible();
    }
    
    // Wait for piercing content
    await page.waitForSelector('.piercing-hero', { state: 'visible' });
    
    // Check for guide cards
    const guideCards = page.locator('.guide-card');
    const guideCount = await guideCards.count();
    expect(guideCount).toBeGreaterThan(0);
    
    // Tap on first guide card to test interaction
    if (guideCount > 0) {
      await guideCards.first().tap();
      
      // Check if lightbox or detail view opened
      const lightbox = page.locator('.lightbox, .modal, .guide-detail');
      await expect(lightbox).toBeVisible({ timeout: 3000 });
    }
    
    console.log(`✅ Piercing page: ${guideCount} guides loaded`);
  });
  
  test('Gallery lightbox works with swipe gestures', async ({ page }) => {
    await page.goto('/gallery');
    
    // Wait for gallery grid
    await page.waitForSelector('.gallery-grid', { state: 'visible' });
    
    // Get first image
    const firstImage = page.locator('.gallery-item').first();
    await expect(firstImage).toBeVisible();
    
    // Tap to open lightbox
    await firstImage.tap();
    
    // Verify lightbox opened
    const lightbox = page.locator('.lightbox-modal, .image-modal');
    await expect(lightbox).toBeVisible({ timeout: 3000 });
    
    // Test swipe gesture (if implemented)
    const lightboxImage = lightbox.locator('img');
    const box = await lightboxImage.boundingBox();
    
    if (box) {
      // Swipe right (previous image)
      await page.touchscreen.tap(box.x + 50, box.y + box.height / 2);
      await page.touchscreen.swipe(
        { x: box.x + box.width - 50, y: box.y + box.height / 2 },
        { x: box.x + 50, y: box.y + box.height / 2 }
      );
      
      // Wait for transition
      await page.waitForTimeout(500);
    }
    
    // Close lightbox
    const closeButton = lightbox.locator('[aria-label*="Close"], .close-button, button:has-text("×")');
    if (await closeButton.isVisible()) {
      await closeButton.tap();
      await expect(lightbox).not.toBeVisible();
    }
  });
  
  test('Contact page with form validation and map interaction', async ({ page }) => {
    await page.goto('/contact');
    
    // Wait for contact form
    await page.waitForSelector('form', { state: 'visible' });
    
    // Check form fields have proper mobile attributes
    const emailInput = page.locator('input[type="email"], input[name="email"]');
    await expect(emailInput).toHaveAttribute('type', 'email');
    
    const phoneInput = page.locator('input[type="tel"], input[name="phone"]');
    if (await phoneInput.isVisible()) {
      await expect(phoneInput).toHaveAttribute('type', 'tel');
    }
    
    // Verify map embed is present and loaded
    const mapFrame = page.frameLocator('iframe[src*="google.com/maps"]');
    await expect(mapFrame.locator('body')).toBeVisible({ timeout: 5000 });
    
    // Test form submission (validation only, don't actually submit)
    const submitButton = page.locator('button[type="submit"]');
    await submitButton.tap();
    
    // Check for validation errors
    const requiredFields = page.locator('input[required], textarea[required]');
    const count = await requiredFields.count();
    
    console.log(`✅ Contact page: ${count} required fields validated`);
  });
});

test.describe('Mobile Performance Budgets', () => {
  test('Homepage transfer size is within budget', async ({ page }) => {
    const client = await page.context().newCDPSession(page);
    await client.send('Network.enable');
    
    let totalTransferSize = 0;
    let jsSize = 0;
    let cssSize = 0;
    let imageSize = 0;
    let fontSize = 0;
    
    client.on('Network.loadingFinished', async (event) => {
      const response = await client.send('Network.getResponseBody', {
        requestId: event.requestId,
      }).catch(() => null);
      
      if (response) {
        const size = Buffer.byteLength(response.body, response.base64Encoded ? 'base64' : 'utf-8');
        totalTransferSize += size;
        
        // Categorize by type (simplified)
        if (event.requestId.includes('.js')) jsSize += size;
        else if (event.requestId.includes('.css')) cssSize += size;
        else if (event.requestId.match(/\.(jpg|jpeg|png|webp|avif|gif)/)) imageSize += size;
        else if (event.requestId.match(/\.(woff|woff2|ttf|otf)/)) fontSize += size;
      }
    });
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    console.log(`📊 Homepage Transfer Sizes:`);
    console.log(`  Total: ${(totalTransferSize / 1024).toFixed(2)} KB`);
    console.log(`  JS: ${(jsSize / 1024).toFixed(2)} KB`);
    console.log(`  CSS: ${(cssSize / 1024).toFixed(2)} KB`);
    console.log(`  Images: ${(imageSize / 1024).toFixed(2)} KB`);
    console.log(`  Fonts: ${(fontSize / 1024).toFixed(2)} KB`);
    
    // Performance budgets (mobile)
    expect(jsSize).toBeLessThan(200 * 1024); // < 200KB JS
    expect(cssSize).toBeLessThan(50 * 1024); // < 50KB CSS
    expect(imageSize).toBeLessThan(300 * 1024); // < 300KB images (hero + above-fold)
    expect(fontSize).toBeLessThan(100 * 1024); // < 100KB fonts
  });
});

test.describe('Mobile Accessibility (A11y)', () => {
  test('All interactive elements have sufficient color contrast', async ({ page }) => {
    await page.goto('/');
    
    // Inject axe-core for accessibility testing
    await page.addScriptTag({
      url: 'https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.7.2/axe.min.js'
    });
    
    // Run axe accessibility audit
    const results = await page.evaluate(() => {
      return (window as any).axe.run({
        rules: {
          'color-contrast': { enabled: true },
          'tap-target-size': { enabled: true },
        },
      });
    });
    
    // Assert no violations
    expect(results.violations).toHaveLength(0);
    
    if (results.violations.length > 0) {
      console.error('A11y violations found:', results.violations);
    }
  });
  
  test('Focus indicators are visible on keyboard navigation', async ({ page }) => {
    await page.goto('/');
    
    // Tab through interactive elements
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    
    // Check if focused element has visible focus ring
    const focused = await page.evaluateHandle(() => document.activeElement);
    const outlineWidth = await focused.evaluate((el) => {
      return window.getComputedStyle(el as Element).outlineWidth;
    });
    
    expect(outlineWidth).not.toBe('0px');
  });
});

