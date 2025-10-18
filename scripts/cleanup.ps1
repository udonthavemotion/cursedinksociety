param(
  [switch]$DryRun = $true
)

$keepDirs = @('src','public')
$keepFiles = @('astro.config.mjs','package.json','package-lock.json','tsconfig.json','tailwind.config.mjs','postcss.config.js','vercel.json','README.md')

# Note: Excluding 'scripts' to avoid deleting this cleanup script while running
$removeDirs = @(
  'archive','dist','docs','node_modules',
  '.astro','.claude','.clinerules','.cursor','.github','.kilo','.kiro','.roo','.taskmaster','.trae','.vscode','.windsurf','.zed'
)

$removeFilePatterns = @(
  'animate-social-icons.js','enhance-branding-visual.js','optimize-ashley-video.js','remove-background-card.js','test-*.js','update-artists-hero.js',
  'BRANDING-UPDATE-SUMMARY.md','CACHE-INVALIDATION-GUIDE.md','DEPLOYMENT*.md','FINAL-DEPLOYMENT-ACTION-PLAN.txt','HERO3D-PERFORMANCE-FIXES.md','LAUNCH-PROCESS.md','LEGAL*.md','PERFORMANCE*.md','SCROLL-FIX-DEPLOYMENT-SUMMARY.md'
)

function Remove-Path($path) {
  if (Test-Path $path) {
    if ($DryRun) { Write-Host "DRY-RUN: Would remove $path" -ForegroundColor Yellow }
    else {
      Remove-Item $path -Recurse -Force -ErrorAction SilentlyContinue
      Write-Host "Removed $path" -ForegroundColor Green
    }
  }
}

# Remove directories excluding keep list
Get-ChildItem -Path . -Directory -Force | ForEach-Object {
  if ($keepDirs -notcontains $_.Name -and $removeDirs -contains $_.Name) { Remove-Path $_.FullName }
}

# Remove files excluding keep list
Get-ChildItem -Path . -File -Force | ForEach-Object {
  if ($keepFiles -contains $_.Name) { return }
  foreach ($pattern in $removeFilePatterns) {
    if ($_.Name -like $pattern) { Remove-Path $_.FullName; break }
  }
}

Write-Host "Cleanup complete. DryRun=$DryRun" -ForegroundColor Cyan


