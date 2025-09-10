#!/usr/bin/env node

/**
 * Remove Glass-Morphism Background Card from Artists Introduction
 * Keep enhanced text styling but remove the rounded block background
 */

import fs from 'fs/promises';

async function removeBackgroundCard() {
  console.log('🎨 Removing background card, keeping enhanced text...');
  
  const filePath = 'src/components/ArtistsHero.astro';
  
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    
    // Remove the glass-morphism background while keeping enhanced text
    const update = {
      old: `/* Professional artists-specific content - Enhanced */
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
}`,
      new: `/* Professional artists-specific content - Clean Text */
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
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
}`
    };
    
    let updatedContent = content;
    
    if (updatedContent.includes(update.old)) {
      updatedContent = updatedContent.replace(update.old, update.new);
      console.log('✓ Removed glass-morphism background card');
      console.log('✓ Kept enhanced text styling');
      
      await fs.writeFile(filePath, updatedContent, 'utf-8');
      
      console.log('\n✅ Background card removal complete!');
      console.log('\n🎯 What you now have:');
      console.log('• Clean text without background block');
      console.log('• Enhanced font size (1.3rem) for better readability');
      console.log('• Professional text shadow for depth');
      console.log('• Improved color contrast (#f8f8f8)');
      console.log('• Better letter spacing and line height');
      console.log('\n🚀 The text will now float cleanly without the rounded background!');
      
    } else {
      console.log('⚠ Could not find the background card styling to remove');
    }
    
  } catch (error) {
    console.error('❌ Error removing background card:', error.message);
    process.exit(1);
  }
}

removeBackgroundCard();
