# Piercing Page Age Verification & Content Protection

## Overview
Comprehensive 18+ age verification and content protection system for the piercing portfolio page, ensuring minors cannot view intimate body piercing content.

## Implementation Date
October 16, 2025

## Features Implemented

### 1. Age Gate Modal
- **Component**: `AgeGateModal.astro` (integrated into `/piercing` page)
- **Trigger**: Automatically shown on page load
- **Verification**: Checkbox-based self-verification
- **Persistence**: 24-hour cookie + localStorage backup
- **Behavior**: 
  - Blocks all page interaction until verified
  - Cannot be dismissed without verification or exiting
  - Redirects to homepage on "Exit" button
  - Escape key also exits to homepage

### 2. Content Blur Protection

#### Gallery-Wide Protection
- **Before verification**: Entire gallery blurred (40px blur)
- **Category filters**: Blurred (8px) and disabled
- **Overlay**: Dark overlay prevents interaction
- **Status**: Controlled by `data-age-ok` attribute on `<html>` element

#### Intimate Content Extra Protection
- **Categories**: `genital`, `nipple`
- **Blur Level**: 20px blur (even after age verification)
- **Hover Behavior**: Blur removes on hover/focus (age-verified users only)
- **Visual Indicators**:
  - 🔒 Lock icon on filter buttons
  - Intimate warning overlay on images
  - Yellow warning borders

### 3. Content Warnings

#### Page-Level Warning
```html
⚠️ 18+ Content: This portfolio contains images of body piercings, 
including intimate areas. All images show professional piercing work 
and are presented for educational and consultation purposes only.
```

#### Image-Level Warnings
- Overlay badge: "🔒 Intimate Piercing"
- Displayed on genital and nipple piercing images
- Fades out on hover (verified users)

### 4. Lightbox Protection
- Sensitive images marked with `data-sensitive="true"`
- Maintains blur in lightbox view
- Category information preserved across lightbox navigation

## Technical Details

### Data Attributes
```html
<!-- HTML element -->
<html data-age-ok="true"> <!-- Set after verification -->

<!-- Gallery items -->
<figure data-category="genital" data-sensitive="true">

<!-- Filter buttons -->
<button data-category="genital" data-sensitive="true">
```

### CSS Selectors
```css
/* Before verification - blur everything */
html:not([data-age-ok]) .gallery-section .gallery-grid {
  filter: blur(40px);
}

/* After verification - blur only intimate content */
.gallery-item[data-sensitive="true"] .image-btn img {
  filter: blur(20px);
}

/* Remove blur on hover (verified users) */
html[data-age-ok] .gallery-item[data-sensitive="true"] .image-btn:hover img {
  filter: blur(0px);
}
```

### Cookie Management
- **Name**: `cis_age_ok`
- **Value**: `1`
- **Expiration**: 24 hours
- **Path**: `/`
- **SameSite**: `Strict`
- **Backup**: localStorage mirror

## Sensitive Categories
1. **Genital**: All genital piercings
2. **Nipple**: Nipple piercings

## User Experience Flow

### First Visit
1. Page loads with blurred content
2. Age gate modal appears (cannot be dismissed)
3. User must check "I am 18+" checkbox
4. "Continue" button becomes enabled
5. User clicks "Continue"
6. Modal closes, `data-age-ok` set on `<html>`
7. Gallery becomes visible
8. Intimate images remain blurred until hover

### Returning Visit (within 24 hours)
1. Page loads
2. Cookie/localStorage checked
3. If verified: Content immediately visible
4. If not: Age gate shown again

### Mobile Considerations
- Touch-friendly modal buttons
- Responsive warning badges
- Adjusted blur levels for performance
- Stack layout for small screens

## Accessibility

### ARIA Attributes
- `role="dialog"` on age gate modal
- `aria-labelledby` and `aria-describedby`
- `role="alert"` on content warnings
- `aria-hidden` state management
- `aria-pressed` for filter buttons
- `aria-label` for icon-only elements

### Keyboard Navigation
- Tab order preserved
- Escape key exits to homepage
- Focus management in modal
- Checkbox keyboard accessible

### Screen Readers
- Warning text read aloud
- Lock icons have aria-labels
- Sensitive content clearly announced

## Security Considerations

### Best Effort Protection
- User-select disabled on sensitive images
- Touch-callout disabled (iOS)
- Screenshot protection (limited browser support)
- Right-click context menu still available (browser default)

### Compliance
- Self-verification only (no ID check)
- Clear warning language
- Educational/professional purpose stated
- Link to age verification policy

## Performance Impact

### CSS Performance
- Uses CSS `filter: blur()` (GPU-accelerated)
- Transitions: 0.3s ease
- No JavaScript needed for blur toggle

### JavaScript Payload
- Age gate: ~2KB minified
- Gallery script: No increase
- Total: Minimal impact

### Lighthouse Considerations
- Modal blocks FCP (by design)
- Images lazy-loaded
- Blur doesn't affect image loading
- Mobile optimized

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Backdrop blur: 90%+ support
- CSS filter blur: 95%+ support
- Fallback: No blur, warnings still shown

## Testing Checklist
- [ ] Age gate appears on first load
- [ ] Gallery is fully blurred before verification
- [ ] Checkbox enables continue button
- [ ] Cookie persists verification for 24 hours
- [ ] Intimate images remain blurred after verification
- [ ] Blur removes on hover (desktop)
- [ ] Lightbox shows warnings for sensitive content
- [ ] Mobile layout works correctly
- [ ] Escape key redirects to homepage
- [ ] Exit button redirects to homepage
- [ ] Warning badges visible on filter buttons
- [ ] Content warning notice displays correctly
- [ ] Console is clean (no errors)

## Maintenance Notes

### To Add More Sensitive Categories
```typescript
// In piercing.astro frontmatter
const sensitiveCats = new Set(['genital', 'nipple', 'newCategory']);
```

### To Adjust Blur Levels
```css
/* In piercing.astro styles */
html:not([data-age-ok]) .gallery-section .gallery-grid {
  filter: blur(40px); /* Adjust this value */
}
```

### To Change Cookie Duration
```typescript
// In AgeGateModal.astro
private cookieExpireDays: number = 1; // Change this value
```

## Files Modified
1. `src/pages/piercing.astro` - Main implementation
2. `src/components/AgeGateModal.astro` - Existing component (reused)

## Legal Considerations
- Age verification policy page: `/policies/age-verification`
- Terms of service updated
- Educational/professional purpose clearly stated
- Louisiana health department compliant

## Future Enhancements
1. More robust age verification (ID check service)
2. Analytics for verification rates
3. Custom blur levels per category
4. Time-based auto-logout option
5. Parental control integration

