/**
 * Production Performance Check Script
 * Run this after building to verify optimizations
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '..', 'dist');

// Performance thresholds
const THRESHOLDS = {
  maxJSSize: 300, // KB
  maxCSSSize: 100, // KB
  maxImageSize: 500, // KB
  maxTotalSize: 5000, // KB (5MB)
  minCompressionRatio: 0.3
};

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m'
};

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

function formatBytes(bytes) {
  return (bytes / 1024).toFixed(2) + ' KB';
}

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
    } else {
      arrayOfFiles.push(filePath);
    }
  });

  return arrayOfFiles;
}

function analyzeFiles() {
  log('\n' + '='.repeat(60), colors.cyan);
  log('PRODUCTION PERFORMANCE ANALYSIS', colors.bold + colors.cyan);
  log('='.repeat(60) + '\n', colors.cyan);

  if (!fs.existsSync(distDir)) {
    log('❌ Dist directory not found! Run `npm run build` first.', colors.red);
    process.exit(1);
  }

  const allFiles = getAllFiles(distDir);
  const stats = {
    js: { files: [], totalSize: 0 },
    css: { files: [], totalSize: 0 },
    images: { files: [], totalSize: 0 },
    fonts: { files: [], totalSize: 0 },
    html: { files: [], totalSize: 0 },
    other: { files: [], totalSize: 0 },
    totalSize: 0
  };

  // Categorize files
  allFiles.forEach((file) => {
    const ext = path.extname(file).toLowerCase();
    const size = fs.statSync(file).size;
    const relativePath = path.relative(distDir, file);

    const fileInfo = { path: relativePath, size };

    if (ext === '.js') {
      stats.js.files.push(fileInfo);
      stats.js.totalSize += size;
    } else if (ext === '.css') {
      stats.css.files.push(fileInfo);
      stats.css.totalSize += size;
    } else if (['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.ico'].includes(ext)) {
      stats.images.files.push(fileInfo);
      stats.images.totalSize += size;
    } else if (['.woff', '.woff2', '.ttf', '.otf', '.eot'].includes(ext)) {
      stats.fonts.files.push(fileInfo);
      stats.fonts.totalSize += size;
    } else if (ext === '.html') {
      stats.html.files.push(fileInfo);
      stats.html.totalSize += size;
    } else {
      stats.other.files.push(fileInfo);
      stats.other.totalSize += size;
    }

    stats.totalSize += size;
  });

  // Report
  log('📊 BUNDLE SIZE ANALYSIS\n', colors.bold);

  // JavaScript
  log('JavaScript Files:', colors.cyan);
  stats.js.files
    .sort((a, b) => b.size - a.size)
    .slice(0, 5)
    .forEach((file) => {
      const sizeKB = file.size / 1024;
      const color = sizeKB > THRESHOLDS.maxJSSize ? colors.red : sizeKB > THRESHOLDS.maxJSSize * 0.7 ? colors.yellow : colors.green;
      log(`  ${file.path}: ${formatBytes(file.size)}`, color);
    });
  log(`  Total JS: ${formatBytes(stats.js.totalSize)}\n`, stats.js.totalSize / 1024 > THRESHOLDS.maxJSSize ? colors.red : colors.green);

  // CSS
  log('CSS Files:', colors.cyan);
  stats.css.files
    .sort((a, b) => b.size - a.size)
    .slice(0, 5)
    .forEach((file) => {
      const sizeKB = file.size / 1024;
      const color = sizeKB > THRESHOLDS.maxCSSSize ? colors.red : sizeKB > THRESHOLDS.maxCSSSize * 0.7 ? colors.yellow : colors.green;
      log(`  ${file.path}: ${formatBytes(file.size)}`, color);
    });
  log(`  Total CSS: ${formatBytes(stats.css.totalSize)}\n`, stats.css.totalSize / 1024 > THRESHOLDS.maxCSSSize ? colors.red : colors.green);

  // Images
  log('Largest Images:', colors.cyan);
  stats.images.files
    .sort((a, b) => b.size - a.size)
    .slice(0, 5)
    .forEach((file) => {
      const sizeKB = file.size / 1024;
      const color = sizeKB > THRESHOLDS.maxImageSize ? colors.red : sizeKB > THRESHOLDS.maxImageSize * 0.7 ? colors.yellow : colors.green;
      log(`  ${file.path}: ${formatBytes(file.size)}`, color);
    });
  log(`  Total Images: ${formatBytes(stats.images.totalSize)}\n`, colors.reset);

  // Fonts
  log(`Fonts: ${formatBytes(stats.fonts.totalSize)}`, colors.reset);
  log(`HTML: ${formatBytes(stats.html.totalSize)}`, colors.reset);
  log(`Other: ${formatBytes(stats.other.totalSize)}\n`, colors.reset);

  // Total
  const totalSizeKB = stats.totalSize / 1024;
  const totalColor = totalSizeKB > THRESHOLDS.maxTotalSize ? colors.red : totalSizeKB > THRESHOLDS.maxTotalSize * 0.8 ? colors.yellow : colors.green;
  log(`Total Bundle Size: ${formatBytes(stats.totalSize)}`, colors.bold + totalColor);

  // Performance checks
  log('\n' + '='.repeat(60), colors.cyan);
  log('PERFORMANCE CHECKS', colors.bold + colors.cyan);
  log('='.repeat(60) + '\n', colors.cyan);

  const checks = [];

  // Check 1: JS bundle size
  const jsCheck = stats.js.totalSize / 1024 <= THRESHOLDS.maxJSSize;
  checks.push({
    name: 'JavaScript bundle size',
    pass: jsCheck,
    message: `${formatBytes(stats.js.totalSize)} ${jsCheck ? '≤' : '>'} ${THRESHOLDS.maxJSSize} KB`
  });

  // Check 2: CSS bundle size
  const cssCheck = stats.css.totalSize / 1024 <= THRESHOLDS.maxCSSSize;
  checks.push({
    name: 'CSS bundle size',
    pass: cssCheck,
    message: `${formatBytes(stats.css.totalSize)} ${cssCheck ? '≤' : '>'} ${THRESHOLDS.maxCSSSize} KB`
  });

  // Check 3: Total bundle size
  const totalCheck = totalSizeKB <= THRESHOLDS.maxTotalSize;
  checks.push({
    name: 'Total bundle size',
    pass: totalCheck,
    message: `${formatBytes(stats.totalSize)} ${totalCheck ? '≤' : '>'} ${THRESHOLDS.maxTotalSize} KB`
  });

  // Check 4: Verify critical files exist
  const indexHtml = path.join(distDir, 'index.html');
  const indexExists = fs.existsSync(indexHtml);
  checks.push({
    name: 'Index HTML exists',
    pass: indexExists,
    message: indexExists ? 'index.html found' : 'index.html missing'
  });

  // Check 5: Verify production index exists
  const productionIndex = path.join(distDir, 'index-production', 'index.html');
  const productionExists = fs.existsSync(productionIndex);
  checks.push({
    name: 'Production index exists',
    pass: productionExists,
    message: productionExists ? 'index-production/index.html found' : 'index-production/index.html missing'
  });

  // Check 6: No console logs (check main JS files)
  let consoleLogs = 0;
  stats.js.files.forEach((file) => {
    const content = fs.readFileSync(path.join(distDir, file.path), 'utf-8');
    const matches = content.match(/console\.(log|warn|info|debug)/g);
    if (matches) consoleLogs += matches.length;
  });
  checks.push({
    name: 'No console logs in production',
    pass: consoleLogs === 0,
    message: consoleLogs === 0 ? 'No console logs found' : `Found ${consoleLogs} console logs`
  });

  // Display checks
  let allPassed = true;
  checks.forEach((check) => {
    const icon = check.pass ? '✅' : '❌';
    const color = check.pass ? colors.green : colors.red;
    log(`${icon} ${check.name}: ${check.message}`, color);
    if (!check.pass) allPassed = false;
  });

  // Summary
  log('\n' + '='.repeat(60), colors.cyan);
  log('SUMMARY', colors.bold + colors.cyan);
  log('='.repeat(60) + '\n', colors.cyan);

  if (allPassed) {
    log('🎉 All performance checks passed! Ready for deployment.', colors.bold + colors.green);
  } else {
    log('⚠️  Some checks failed. Review the issues above.', colors.bold + colors.yellow);
    log('   Note: Build will continue - these are warnings only.\n', colors.yellow);
  }

  log('\n💡 TIP: To use the optimized production build:', colors.cyan);
  log('   Rename index-production/index.html to index.html', colors.cyan);
  log('   Or configure your server to serve index-production as the main page.\n', colors.cyan);

  // Return 0 (success) even with warnings to not block deployment
  return 0;
}

// Run analysis
const exitCode = analyzeFiles();
process.exit(exitCode);

