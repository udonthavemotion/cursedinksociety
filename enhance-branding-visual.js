#!/usr/bin/env node

/**
 * Enhanced Visual Branding Update for ArtistsHero Component
 * Makes the professional branding much more visually prominent
 */

import fs from 'fs/promises';

async function enhanceBrandingVisual() {
  console.log('🎨 Enhancing visual impact of professional branding...');
  
  const filePath = 'src/components/ArtistsHero.astro';
  
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    
    // Much more dramatic visual updates
    const updates = [
      // Make tagline much more prominent
      {
        old: `/* Professional tagline */
.tagline {
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  margin-bottom: 3rem;
  opacity: 0.95;
  max-width: 500px;
  line-height: 1.4;
  color: #f5f5f5;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
}`,
        new: `/* Professional tagline - Enhanced Visual Impact */
.tagline {
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  margin-bottom: 3rem;
  opacity: 1;
  max-width: 650px;
  line-height: 1.3;
  color: #ffffff;
  text-shadow: 
    0 0 30px rgba(255, 255, 255, 0.8),
    0 0 60px rgba(220, 20, 60, 0.4),
    0 2px 4px rgba(0, 0, 0, 0.3);
  text-transform: uppercase;
  background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 50%, #ffffff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shimmer 3s ease-in-out infinite;
}`
      },
      
      // Make artists intro more prominent
      {
        old: `/* Professional artists-specific content */
.artists-intro {
  font-size: 1.1rem;
  font-weight: 300;
  letter-spacing: 0.02em;
  margin-bottom: 4rem;
  opacity: 0.9;
  max-width: 600px;
  line-height: 1.7;
  text-align: center;
  color: rgba(245, 245, 245, 0.9);
}`,
        new: `/* Professional artists-specific content - Enhanced */
.artists-intro {
  font-size: 1.3rem;
  font-weight: 400;
  letter-spacing: 0.03em;
  margin-bottom: 4rem;
  opacity: 1;
  max-width: 700px;
  line-height: 1.6;
  text-align: center;
  color: #f8f8f8;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem 3rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}`
      },
      
      // Add shimmer animation
      {
        old: `@keyframes architecturalRotate {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}`,
        new: `@keyframes architecturalRotate {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

@keyframes shimmer {
  0%, 100% {
    background-position: -200% center;
  }
  50% {
    background-position: 200% center;
  }
}`
      },
      
      // Enhance brand mark
      {
        old: `/* Subtle brand identifier */
.brand-mark {
  font-size: 0.9rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  font-weight: 300;
  margin-bottom: 1.5rem;
  opacity: 0.8;
  color: var(--ink);
}`,
        new: `/* Enhanced brand identifier */
.brand-mark {
  font-size: 1rem;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 2rem;
  opacity: 1;
  color: #ffffff;
  text-shadow: 0 0 20px rgba(220, 20, 60, 0.6);
  border-bottom: 2px solid rgba(220, 20, 60, 0.3);
  padding-bottom: 0.5rem;
  display: inline-block;
}`
      },
      
      // Make stats more prominent
      {
        old: `.stat-item {
  text-align: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  min-width: 160px;
}`,
        new: `.stat-item {
  text-align: center;
  padding: 2rem 1.5rem;
  background: rgba(255, 255, 255, 0.08);
  border: 2px solid rgba(220, 20, 60, 0.3);
  border-radius: 20px;
  backdrop-filter: blur(15px);
  min-width: 180px;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
  border-color: rgba(220, 20, 60, 0.5);
  box-shadow: 
    0 12px 48px rgba(0, 0, 0, 0.4),
    0 0 30px rgba(220, 20, 60, 0.3);
}`
      }
    ];
    
    let updatedContent = content;
    let changesApplied = 0;
    
    for (const update of updates) {
      if (updatedContent.includes(update.old)) {
        updatedContent = updatedContent.replace(update.old, update.new);
        changesApplied++;
        console.log(`✓ Applied visual enhancement ${changesApplied}/${updates.length}`);
      } else {
        console.log(`⚠ Could not find content for enhancement ${changesApplied + 1}`);
      }
    }
    
    await fs.writeFile(filePath, updatedContent, 'utf-8');
    
    console.log(`\n✅ Visual branding enhancement complete!`);
    console.log(`📊 Applied ${changesApplied}/${updates.length} enhancements`);
    console.log('\n🎯 Visual improvements:');
    console.log('• Tagline: Larger, bolder, with gradient text and shimmer animation');
    console.log('• Introduction: Glass-morphism background with enhanced readability');
    console.log('• Brand mark: Glowing effect with underline accent');
    console.log('• Stats: Enhanced hover effects and stronger visual presence');
    console.log('• Typography: Increased contrast and visual hierarchy');
    
  } catch (error) {
    console.error('❌ Error enhancing visual branding:', error.message);
    process.exit(1);
  }
}

enhanceBrandingVisual();
