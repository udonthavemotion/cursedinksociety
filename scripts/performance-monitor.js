#!/usr/bin/env node

/**
 * Performance Monitoring Script
 * Automated Lighthouse audits and Core Web Vitals tracking
 */

import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs';
import path from 'path';

const execAsync = promisify(exec);

// Configuration
const config = {
  url: process.env.SITE_URL || 'http://localhost:4321',
  outputDir: './performance-reports',
  thresholds: {
    performance: 90,
    accessibility: 95,
    bestPractices: 90,
    seo: 95,
    lcp: 2500, // Largest Contentful Paint (ms)
    fid: 100,  // First Input Delay (ms)
    cls: 0.1   // Cumulative Layout Shift
  }
};

// Ensure output directory exists
if (!fs.existsSync(config.outputDir)) {
  fs.mkdirSync(config.outputDir, { recursive: true });
}

/**
 * Run Lighthouse audit
 */
async function runLighthouseAudit() {
  console.log('🔍 Running Lighthouse audit...');
  
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const reportPath = path.join(config.outputDir, `lighthouse-${timestamp}.json`);
  
  try {
    // Install lighthouse if not already installed
    try {
      await execAsync('npx lighthouse --version');
    } catch {
      console.log('📦 Installing Lighthouse...');
      await execAsync('npm install -g lighthouse');
    }

    // Run Lighthouse audit
    const command = [
      'npx lighthouse',
      config.url,
      '--output=json',
      '--output-path=' + reportPath,
      '--chrome-flags="--headless --no-sandbox"',
      '--throttling-method=simulate',
      '--form-factor=desktop',
      '--screenEmulation.disabled=false'
    ].join(' ');

    await execAsync(command);
    
    // Parse and analyze results
    const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
    const scores = {
      performance: Math.round(report.lhr.categories.performance.score * 100),
      accessibility: Math.round(report.lhr.categories.accessibility.score * 100),
      bestPractices: Math.round(report.lhr.categories['best-practices'].score * 100),
      seo: Math.round(report.lhr.categories.seo.score * 100)
    };

    // Core Web Vitals
    const lcp = report.lhr.audits['largest-contentful-paint']?.numericValue || 0;
    const fid = report.lhr.audits['max-potential-fid']?.numericValue || 0;
    const cls = report.lhr.audits['cumulative-layout-shift']?.numericValue || 0;

    console.log('\n📊 Lighthouse Scores:');
    console.log(`  Performance: ${scores.performance}% ${scores.performance >= config.thresholds.performance ? '✅' : '❌'}`);
    console.log(`  Accessibility: ${scores.accessibility}% ${scores.accessibility >= config.thresholds.accessibility ? '✅' : '❌'}`);
    console.log(`  Best Practices: ${scores.bestPractices}% ${scores.bestPractices >= config.thresholds.bestPractices ? '✅' : '❌'}`);
    console.log(`  SEO: ${scores.seo}% ${scores.seo >= config.thresholds.seo ? '✅' : '❌'}`);

    console.log('\n🎯 Core Web Vitals:');
    console.log(`  LCP: ${Math.round(lcp)}ms ${lcp <= config.thresholds.lcp ? '✅' : '❌'}`);
    console.log(`  FID: ${Math.round(fid)}ms ${fid <= config.thresholds.fid ? '✅' : '❌'}`);
    console.log(`  CLS: ${cls.toFixed(3)} ${cls <= config.thresholds.cls ? '✅' : '❌'}`);

    // Save summary
    const summary = {
      timestamp: new Date().toISOString(),
      url: config.url,
      scores,
      webVitals: { lcp: Math.round(lcp), fid: Math.round(fid), cls: parseFloat(cls.toFixed(3)) },
      reportPath
    };

    fs.writeFileSync(
      path.join(config.outputDir, 'latest-summary.json'),
      JSON.stringify(summary, null, 2)
    );

    console.log(`\n📄 Full report saved to: ${reportPath}`);
    return summary;

  } catch (error) {
    console.error('❌ Lighthouse audit failed:', error.message);
    throw error;
  }
}

/**
 * Run performance tests
 */
async function runPerformanceTests() {
  console.log('🚀 Starting Performance Monitoring...\n');
  
  try {
    const summary = await runLighthouseAudit();
    
    // Check if all thresholds are met
    const allPassed = 
      summary.scores.performance >= config.thresholds.performance &&
      summary.scores.accessibility >= config.thresholds.accessibility &&
      summary.scores.bestPractices >= config.thresholds.bestPractices &&
      summary.scores.seo >= config.thresholds.seo &&
      summary.webVitals.lcp <= config.thresholds.lcp &&
      summary.webVitals.fid <= config.thresholds.fid &&
      summary.webVitals.cls <= config.thresholds.cls;

    if (allPassed) {
      console.log('\n🎉 All performance thresholds met!');
      process.exit(0);
    } else {
      console.log('\n⚠️  Some performance thresholds not met. Check the report for details.');
      process.exit(1);
    }

  } catch (error) {
    console.error('\n❌ Performance monitoring failed:', error.message);
    process.exit(1);
  }
}

/**
 * Generate performance report
 */
async function generateReport() {
  console.log('📈 Generating performance trend report...');
  
  try {
    const reportFiles = fs.readdirSync(config.outputDir)
      .filter(file => file.startsWith('lighthouse-') && file.endsWith('.json'))
      .sort()
      .slice(-10); // Last 10 reports

    const trends = [];
    
    for (const file of reportFiles) {
      const reportPath = path.join(config.outputDir, file);
      const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
      
      trends.push({
        timestamp: report.lhr.fetchTime,
        performance: Math.round(report.lhr.categories.performance.score * 100),
        lcp: Math.round(report.lhr.audits['largest-contentful-paint']?.numericValue || 0),
        fid: Math.round(report.lhr.audits['max-potential-fid']?.numericValue || 0),
        cls: parseFloat((report.lhr.audits['cumulative-layout-shift']?.numericValue || 0).toFixed(3))
      });
    }

    const trendReport = {
      generatedAt: new Date().toISOString(),
      trends,
      averages: {
        performance: Math.round(trends.reduce((sum, t) => sum + t.performance, 0) / trends.length),
        lcp: Math.round(trends.reduce((sum, t) => sum + t.lcp, 0) / trends.length),
        fid: Math.round(trends.reduce((sum, t) => sum + t.fid, 0) / trends.length),
        cls: parseFloat((trends.reduce((sum, t) => sum + t.cls, 0) / trends.length).toFixed(3))
      }
    };

    fs.writeFileSync(
      path.join(config.outputDir, 'performance-trends.json'),
      JSON.stringify(trendReport, null, 2)
    );

    console.log('📊 Performance trend report generated');
    console.log(`📄 Report saved to: ${path.join(config.outputDir, 'performance-trends.json')}`);

  } catch (error) {
    console.error('❌ Failed to generate report:', error.message);
  }
}

// CLI handling
const command = process.argv[2];

switch (command) {
  case 'audit':
    runPerformanceTests();
    break;
  case 'report':
    generateReport();
    break;
  default:
    console.log('Usage:');
    console.log('  node scripts/performance-monitor.js audit  - Run performance audit');
    console.log('  node scripts/performance-monitor.js report - Generate trend report');
    break;
}
