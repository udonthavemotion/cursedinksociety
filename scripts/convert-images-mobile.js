#!/usr/bin/env node

/**
 * Mobile Image Optimization Script
 * Converts JPG/PNG to WebP/AVIF with responsive sizes for mobile performance
 * 
 * Usage: node scripts/convert-images-mobile.js
 */

import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, parse, relative } from 'path';
import { existsSync } from 'fs';

const INPUT_DIR = './public/assets';
const OUTPUT_DIR = './public/assets-optimized';
const BRAND_DIR = './public/brand';

// Mobile-first responsive breakpoints
const SIZES = [
  { suffix: '320w', width: 320 },   // Small mobile
  { suffix: '480w', width: 480 },   // Mobile portrait
  { suffix: '768w', width: 768 },   // Tablet portrait / large mobile
  { suffix: '1024w', width: 1024 }, // Desktop / tablet landscape
  { suffix: '1280w', width: 1280 }, // Large desktop
];

// Quality settings optimized for mobile
const QUALITY = {
  webp: 82,  // Good balance for mobile
  avif: 65,  // More aggressive compression
  jpeg: 80,  // Fallback quality
};

async function ensureDir(dir) {
  if (!existsSync(dir)) {
    await mkdir(dir, { recursive: true });
  }
}

async function getImages(dir, extensions = ['.jpg', '.jpeg', '.png']) {
  const files = [];
  
  async function scan(currentDir) {
    const entries = await readdir(currentDir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = join(currentDir, entry.name);
      
      if (entry.isDirectory()) {
        await scan(fullPath);
      } else if (extensions.includes(parse(entry.name).ext.toLowerCase())) {
        files.push(fullPath);
      }
    }
  }
  
  await scan(dir);
  return files;
}

async function optimizeImage(inputPath) {
  const { dir, name, ext } = parse(inputPath);
  const relativeDir = relative(INPUT_DIR, dir);
  const outputDirPath = join(OUTPUT_DIR, relativeDir);
  
  await ensureDir(outputDirPath);
  
  console.log(`📸 Processing: ${relative(process.cwd(), inputPath)}`);
  
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Skip if already small enough (< 400px)
    if (metadata.width < 400) {
      console.log(`  ⏭️  Skipping (already small: ${metadata.width}px)`);
      return;
    }
    
    // Generate responsive sizes
    for (const size of SIZES) {
      if (size.width >= metadata.width) continue; // Skip if larger than original
      
      const outputName = `${name}-${size.suffix}`;
      
      // WebP version (primary)
      const webpPath = join(outputDirPath, `${outputName}.webp`);
      await image
        .clone()
        .resize(size.width, null, { withoutEnlargement: true })
        .webp({ quality: QUALITY.webp, effort: 6 })
        .toFile(webpPath);
      
      console.log(`  ✅ ${size.suffix}.webp (${size.width}px)`);
      
      // AVIF version (modern browsers, optional)
      const avifPath = join(outputDirPath, `${outputName}.avif`);
      try {
        await image
          .clone()
          .resize(size.width, null, { withoutEnlargement: true })
          .avif({ quality: QUALITY.avif, effort: 6 })
          .toFile(avifPath);
        
        console.log(`  ✅ ${size.suffix}.avif (${size.width}px)`);
      } catch (err) {
        console.log(`  ⚠️  AVIF failed (${err.message})`);
      }
    }
    
    // Full-size WebP for original dimensions
    const fullWebpPath = join(outputDirPath, `${name}.webp`);
    await image
      .clone()
      .webp({ quality: QUALITY.webp, effort: 6 })
      .toFile(fullWebpPath);
    
    console.log(`  ✅ Full size .webp`);
    
  } catch (error) {
    console.error(`  ❌ Error processing ${inputPath}:`, error.message);
  }
}

async function optimizeBrandImages() {
  console.log('\n🎨 Optimizing brand images (logo, favicon)...\n');
  
  const brandImages = await getImages(BRAND_DIR);
  
  for (const image of brandImages) {
    await optimizeImage(image);
  }
}

async function main() {
  console.log('🚀 Mobile Image Optimization Starting...\n');
  console.log(`📁 Input: ${INPUT_DIR}`);
  console.log(`📁 Output: ${OUTPUT_DIR}`);
  console.log(`📏 Sizes: ${SIZES.map(s => s.width + 'px').join(', ')}\n`);
  
  const images = await getImages(INPUT_DIR);
  
  console.log(`Found ${images.length} images to optimize\n`);
  
  // Process in batches to avoid memory issues
  const BATCH_SIZE = 5;
  for (let i = 0; i < images.length; i += BATCH_SIZE) {
    const batch = images.slice(i, i + BATCH_SIZE);
    await Promise.all(batch.map(optimizeImage));
  }
  
  // Optimize brand images separately
  await optimizeBrandImages();
  
  console.log('\n✨ Image optimization complete!');
  console.log('\n📊 Next steps:');
  console.log('1. Review images in /public/assets-optimized/');
  console.log('2. Update .astro files with responsive srcset');
  console.log('3. Test on mobile devices (iOS Safari, Android Chrome)');
  console.log('4. Run Lighthouse Mobile audit to verify improvements');
}

main().catch(console.error);

