/**
 * Convert piercing guide images to WebP and organize them
 * Runs with Node.js and sharp
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_DIR = path.join(__dirname, '..', 'public', 'piercing guides photo');
const DEST_DIR = path.join(__dirname, '..', 'public', 'piercing-guides');

// Mapping of source files to organized structure
const imageMapping = {
  // Anatomy diagrams
  'Untitled_Artwork 1.jpeg': { dest: 'anatomy/ear-piercings.webp', category: 'ear' },
  'Untitled_Artwork 5.jpeg': { dest: 'anatomy/nose-piercings.webp', category: 'nose' },
  'Untitled_Artwork 10.jpeg': { dest: 'anatomy/navel-piercings.webp', category: 'navel' },
  'Untitled_Artwork 15.jpeg': { dest: 'anatomy/surface-piercings.webp', category: 'surface' },
  'Untitled_Artwork 25.jpeg': { dest: 'anatomy/genital-piercings.webp', category: 'genital' },
  
  // Example photos
  'Untitled_Artwork 3.jpeg': { dest: 'examples/ear-industrial-helix.webp', category: 'ear' },
  'Untitled_Artwork 8.jpeg': { dest: 'examples/eyebrow-double.webp', category: 'eyebrow' },
  'Untitled_Artwork 12.jpeg': { dest: 'examples/tongue.webp', category: 'oral' },
  'Untitled_Artwork 16.jpeg': { dest: 'examples/surface-examples.webp', category: 'surface' },
  
  // Education
  'Untitled_Artwork 20.jpeg': { dest: 'education/irritation-bumps.webp', category: 'education' },
  
  // Compliance
  'Untitled_Artwork 22.jpeg': { dest: 'compliance/age-requirement.webp', category: 'compliance' },
};

// Convert and optimize images
async function convertImages() {
  console.log('🎨 Converting piercing guide images to WebP...\n');
  
  let converted = 0;
  let skipped = 0;
  
  for (const [sourceFile, { dest }] of Object.entries(imageMapping)) {
    const sourcePath = path.join(SOURCE_DIR, sourceFile);
    const destPath = path.join(DEST_DIR, dest);
    
    try {
      // Check if source exists
      if (!fs.existsSync(sourcePath)) {
        console.log(`⚠️  Source not found: ${sourceFile}`);
        skipped++;
        continue;
      }
      
      // Convert to WebP with optimization
      await sharp(sourcePath)
        .webp({
          quality: 85,
          effort: 6
        })
        .resize(1200, null, { // Max width 1200px, maintain aspect ratio
          withoutEnlargement: true,
          fit: 'inside'
        })
        .toFile(destPath);
      
      const stats = fs.statSync(destPath);
      const sizeKB = (stats.size / 1024).toFixed(1);
      console.log(`✅ ${dest} (${sizeKB}KB)`);
      converted++;
      
    } catch (error) {
      console.error(`❌ Error converting ${sourceFile}:`, error.message);
      skipped++;
    }
  }
  
  console.log(`\n📊 Conversion complete!`);
  console.log(`   ✅ Converted: ${converted}`);
  console.log(`   ⚠️  Skipped: ${skipped}`);
  console.log(`\n💾 Total images: ${converted} WebP files`);
}

// Run conversion
convertImages().catch(console.error);

