#!/bin/bash

###############################################################################
# Audit CLS (Cumulative Layout Shift) Issues
# Finds images and iframes without explicit dimensions
#
# Usage: bash scripts/audit-cls-issues.sh
###############################################################################

set -e

echo "🔍 Auditing CLS Issues (Missing width/height on images and iframes)..."
echo ""

echo "📸 Images without width AND height attributes:"
grep -rn '<img' src/ --include="*.astro" | grep -v 'width=' | grep -v 'height=' | head -20

echo ""
echo "🗺️ Iframes without width AND height attributes:"
grep -rn '<iframe' src/ --include="*.astro" | grep -v 'width=' | grep -v 'height=' | head -20

echo ""
echo "🎞️ Videos without width/height or aspect-ratio:"
grep -rn '<video' src/ public/ --include="*.astro" --include="*.html" | head -10

echo ""
echo "📦 Elements that could cause CLS:"
echo "  - Images: Add width/height or aspect-ratio"
echo "  - Iframes: Reserve space with aspect-ratio container"
echo "  - Fonts: Use font-display:swap and size-adjust"
echo "  - Ads/Embeds: Reserve minimum height"

echo ""
echo "✅ Run 'npm run dev' and test in Chrome DevTools:"
echo "   1. Open DevTools → Performance → Record"
echo "   2. Reload page with Slow 4G throttling"
echo "   3. Check 'Experience' row for layout shifts"
echo "   4. Click on red bars to see which elements shifted"

