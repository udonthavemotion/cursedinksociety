#!/usr/bin/env node

/**
 * Mobile UX Audit Script
 * Checks for common mobile usability issues:
 * - Touch targets < 44x44px (WCAG 2.2 AA)
 * - Hover-only interactions (unusable on touch)
 * - Text < 16px (causes iOS zoom)
 * - Missing viewport meta or incorrect settings
 * 
 * Usage: node scripts/audit-mobile-ux.js
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const SRC_DIR = './src';
const ISSUES = [];

// Recursive file search
function getFiles(dir, files = []) {
  const entries = readdirSync(dir);
  
  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);
    
    if (stat.isDirectory()) {
      getFiles(fullPath, files);
    } else if (entry.endsWith('.astro') || entry.endsWith('.tsx') || entry.endsWith('.jsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Check for small touch targets
function checkTouchTargets(content, filePath) {
  const lines = content.split('\n');
  
  lines.forEach((line, idx) => {
    // Check for padding/width/height that might be too small
    const smallPaddingRegex = /padding:\s*([0-9.]+)(px|rem)/g;
    const smallWidthRegex = /(width|height|min-width|min-height):\s*([0-9.]+)(px|rem)/g;
    
    let match;
    while ((match = smallPaddingRegex.exec(line)) !== null) {
      const value = parseFloat(match[1]);
      const unit = match[2];
      
      if (unit === 'px' && value < 12) {
        ISSUES.push({
          file: filePath,
          line: idx + 1,
          type: 'TOUCH_TARGET',
          severity: 'WARNING',
          message: `Small padding (${value}px) may create touch target < 44px`,
          code: line.trim()
        });
      }
    }
    
    // Check for :hover without :focus or :active
    if (line.includes(':hover') && !line.includes(':focus') && !line.includes(':active')) {
      ISSUES.push({
        file: filePath,
        line: idx + 1,
        type: 'HOVER_ONLY',
        severity: 'WARNING',
        message: ':hover without :focus/:active may not work on touch devices',
        code: line.trim()
      });
    }
    
    // Check for small font sizes
    const smallFontRegex = /font-size:\s*([0-9.]+)(px|rem)/g;
    while ((match = smallFontRegex.exec(line)) !== null) {
      const value = parseFloat(match[1]);
      const unit = match[2];
      
      if ((unit === 'px' && value < 16) || (unit === 'rem' && value < 1)) {
        ISSUES.push({
          file: filePath,
          line: idx + 1,
          type: 'SMALL_TEXT',
          severity: 'INFO',
          message: `Font size ${value}${unit} may cause iOS zoom (use 16px+ for inputs)`,
          code: line.trim()
        });
      }
    }
    
    // Check for viewport meta
    if (line.includes('viewport') && line.includes('user-scalable=no')) {
      ISSUES.push({
        file: filePath,
        line: idx + 1,
        type: 'ACCESSIBILITY',
        severity: 'ERROR',
        message: 'user-scalable=no prevents accessibility zoom (WCAG fail)',
        code: line.trim()
      });
    }
  });
}

function main() {
  console.log('🔍 Mobile UX Audit Starting...\n');
  
  const files = getFiles(SRC_DIR);
  console.log(`Scanning ${files.length} files...\n`);
  
  for (const file of files) {
    const content = readFileSync(file, 'utf-8');
    checkTouchTargets(content, file);
  }
  
  // Group issues by type
  const byType = ISSUES.reduce((acc, issue) => {
    acc[issue.type] = acc[issue.type] || [];
    acc[issue.type].push(issue);
    return acc;
  }, {});
  
  console.log('📊 Mobile UX Issues Found:\n');
  
  for (const [type, issues] of Object.entries(byType)) {
    console.log(`\n${type} (${issues.length} issues):`);
    console.log('─'.repeat(80));
    
    for (const issue of issues.slice(0, 10)) { // Show first 10
      console.log(`${issue.severity} | ${issue.file}:${issue.line}`);
      console.log(`  ${issue.message}`);
      console.log(`  Code: ${issue.code}`);
      console.log('');
    }
    
    if (issues.length > 10) {
      console.log(`  ... and ${issues.length - 10} more issues\n`);
    }
  }
  
  console.log('\n✅ Audit complete!');
  console.log(`Total issues: ${ISSUES.length}`);
  console.log('\n📝 Recommendations:');
  console.log('1. Ensure all tap targets are ≥ 44x44px (buttons, links, form fields)');
  console.log('2. Add :focus and :active styles alongside :hover');
  console.log('3. Use 16px+ font size for input fields to prevent iOS zoom');
  console.log('4. Test on real devices (iPhone 14, Pixel 7) with touch interactions');
  console.log('5. Run axe DevTools accessibility scan on mobile viewport');
}

main();

