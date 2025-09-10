#!/usr/bin/env node

/**
 * Cache Test Script for Cursed Ink Society
 * Tests if cache invalidation fixes are working correctly
 */

const https = require('https');
const http = require('http');

const SITE_URL = 'https://cursedingksociety.com';
const TEST_ENDPOINTS = [
  '/',
  '/brand/cursed-ink-logo.png',
  '/assets/hero-showcase.mp4',
  '/_astro/three.module.js',
];

function makeRequest(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https:') ? https : http;
    
    const req = client.request(url, { method: 'HEAD' }, (res) => {
      resolve({
        url,
        status: res.statusCode,
        cacheControl: res.headers['cache-control'] || 'none',
        etag: res.headers['etag'] || 'none',
        lastModified: res.headers['last-modified'] || 'none'
      });
    });

    req.on('error', reject);
    req.setTimeout(10000, () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });
    
    req.end();
  });
}

async function testCacheHeaders() {
  console.log('🔍 Testing Cache Headers for Cursed Ink Society\n');
  
  for (const endpoint of TEST_ENDPOINTS) {
    try {
      const fullUrl = endpoint.startsWith('http') ? endpoint : SITE_URL + endpoint;
      const result = await makeRequest(fullUrl);
      
      console.log(`📄 ${endpoint}`);
      console.log(`   Status: ${result.status}`);
      console.log(`   Cache-Control: ${result.cacheControl}`);
      console.log(`   ETag: ${result.etag}`);
      console.log('');
      
      // Validate cache headers
      if (endpoint === '/') {
        if (result.cacheControl.includes('max-age=300')) {
          console.log('   ✅ Homepage cache: CORRECT (5 minutes)');
        } else {
          console.log('   ❌ Homepage cache: INCORRECT (should be 5 minutes)');
        }
      } else if (endpoint.includes('/brand/')) {
        if (result.cacheControl.includes('max-age=3600')) {
          console.log('   ✅ Brand asset cache: CORRECT (1 hour)');
        } else {
          console.log('   ❌ Brand asset cache: INCORRECT (should be 1 hour)');
        }
      } else if (endpoint.includes('/_astro/')) {
        if (result.cacheControl.includes('max-age=31536000')) {
          console.log('   ✅ Astro asset cache: CORRECT (1 year)');
        } else {
          console.log('   ❌ Astro asset cache: INCORRECT (should be 1 year)');
        }
      }
      
    } catch (error) {
      console.log(`❌ ${endpoint}: ${error.message}`);
    }
    
    console.log('');
  }
}

async function testThreeJSLoading() {
  console.log('🎮 Testing Three.js Loading Strategy\n');
  
  try {
    // Test CDN availability
    const cdnResult = await makeRequest('https://unpkg.com/three@0.180.0/build/three.module.js');
    console.log(`📦 Three.js CDN: ${cdnResult.status === 200 ? '✅ Available' : '❌ Unavailable'}`);
    
    // Test if our site loads without errors
    const siteResult = await makeRequest(SITE_URL);
    console.log(`🏠 Site Status: ${siteResult.status === 200 ? '✅ Loading' : '❌ Error'}`);
    
  } catch (error) {
    console.log(`❌ Three.js test failed: ${error.message}`);
  }
}

async function runTests() {
  console.log('🚀 Starting Cache Validation Tests\n');
  console.log('=' .repeat(50));
  
  await testCacheHeaders();
  await testThreeJSLoading();
  
  console.log('=' .repeat(50));
  console.log('✅ Cache validation tests completed');
  console.log('\n📝 Next steps:');
  console.log('1. Deploy using: ./deploy.sh');
  console.log('2. Test in incognito mode');
  console.log('3. Monitor performance with Lighthouse');
  console.log('4. Check Core Web Vitals in Vercel Analytics');
}

// Run tests
runTests().catch(console.error);
