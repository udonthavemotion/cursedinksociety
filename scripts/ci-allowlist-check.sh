#!/bin/bash
# CI Allowlist Check Script
# Ensures only approved files are modified in PRs

set -e

# Define the allowlist of approved file paths
ALLOWLIST=(
    "src/pages/piercings.astro"
    "src/components/AgeGateModal.astro"
    "src/content/piercings.json"
    "src/pages/policies/age-verification.astro"
    ".env.example"
    "scripts/ci-allowlist-check.sh"
)

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "🔍 Checking file changes against allowlist..."
echo

# Get the commit range (defaults to comparing with main if not provided)
COMMIT_RANGE="${1:-origin/main...HEAD}"

# Get list of changed files
CHANGED_FILES=$(git diff --name-only "$COMMIT_RANGE" 2>/dev/null || echo "")

if [ -z "$CHANGED_FILES" ]; then
    echo -e "${YELLOW}⚠️  No file changes detected${NC}"
    echo "This might be because:"
    echo "  - No commits exist in the current branch"
    echo "  - The specified commit range is invalid"
    echo "  - All changes have been committed and pushed"
    exit 0
fi

echo "📝 Changed files detected:"
echo "$CHANGED_FILES" | sed 's/^/  /'
echo

# Check each changed file against the allowlist
VIOLATIONS=()
while IFS= read -r file; do
    # Skip empty lines
    [ -z "$file" ] && continue
    
    # Check if file is in allowlist
    ALLOWED=false
    for allowed_file in "${ALLOWLIST[@]}"; do
        if [ "$file" = "$allowed_file" ]; then
            ALLOWED=true
            break
        fi
    done
    
    if [ "$ALLOWED" = false ]; then
        VIOLATIONS+=("$file")
    fi
done <<< "$CHANGED_FILES"

# Report results
if [ ${#VIOLATIONS[@]} -eq 0 ]; then
    echo -e "${GREEN}✅ All file changes are within the approved allowlist!${NC}"
    echo
    echo "Approved files modified:"
    while IFS= read -r file; do
        [ -z "$file" ] && continue
        echo -e "  ${GREEN}✓${NC} $file"
    done <<< "$CHANGED_FILES"
    exit 0
else
    echo -e "${RED}❌ File changes detected outside the approved allowlist!${NC}"
    echo
    echo -e "${RED}Violations:${NC}"
    for violation in "${VIOLATIONS[@]}"; do
        echo -e "  ${RED}✗${NC} $violation"
    done
    echo
    echo -e "${YELLOW}Approved allowlist:${NC}"
    for allowed_file in "${ALLOWLIST[@]}"; do
        echo -e "  ${GREEN}✓${NC} $allowed_file"
    done
    echo
    echo -e "${RED}Please ensure your changes only modify files within the approved scope.${NC}"
    echo "If you need to modify additional files, update the allowlist in this script."
    exit 1
fi
