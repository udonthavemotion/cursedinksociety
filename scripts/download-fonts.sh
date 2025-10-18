#!/bin/bash

###############################################################################
# Download and optimize Google Fonts for self-hosting
# Reduces mobile latency by eliminating external font requests
#
# Usage: bash scripts/download-fonts.sh
###############################################################################

set -e

FONTS_DIR="./public/fonts"
mkdir -p "$FONTS_DIR"

echo "📥 Downloading fonts from Google Fonts..."

# Orbitron 400 (Latin subset)
curl -o "$FONTS_DIR/orbitron-latin-400.woff2" \
  "https://fonts.gstatic.com/s/orbitron/v31/yMJMMIlzdpvBhQQL_SC3X9yhF25-T1nyGy6BoWgz.woff2"

# Orbitron 700 (Latin subset)
curl -o "$FONTS_DIR/orbitron-latin-700.woff2" \
  "https://fonts.gstatic.com/s/orbitron/v31/yMJMMIlzdpvBhQQL_SC3X9yhF25-T1nyKy-doWgz.woff2"

# Orbitron 900 (Latin subset)
curl -o "$FONTS_DIR/orbitron-latin-900.woff2" \
  "https://fonts.gstatic.com/s/orbitron/v31/yMJMMIlzdpvBhQQL_SC3X9yhF25-T1nyAyidoWgz.woff2"

# Cinzel Variable (Latin subset) - from @fontsource-variable
# Note: You're already using @fontsource-variable/cinzel in package.json
# We can extract the woff2 from node_modules
if [ -f "node_modules/@fontsource-variable/cinzel/files/cinzel-latin-wght-normal.woff2" ]; then
  cp "node_modules/@fontsource-variable/cinzel/files/cinzel-latin-wght-normal.woff2" \
     "$FONTS_DIR/cinzel-variable-latin.woff2"
  echo "✅ Copied Cinzel Variable from @fontsource-variable"
else
  echo "⚠️  Cinzel Variable not found in node_modules, install @fontsource-variable/cinzel"
fi

echo "✅ Fonts downloaded to $FONTS_DIR"
echo ""
echo "📊 Font sizes:"
ls -lh "$FONTS_DIR"/*.woff2

echo ""
echo "📝 Next steps:"
echo "1. Update Layout.astro to use self-hosted fonts"
echo "2. Remove Google Fonts links from all layouts"
echo "3. Test font loading on mobile (iOS Safari, Android Chrome)"
echo "4. Verify font-display:swap shows fallback immediately"

