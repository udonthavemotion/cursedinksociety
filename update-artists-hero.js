#!/usr/bin/env node
// Note: keep hero updates free of heavy transparent overlay blocks.

/**
 * Professional Branding Update for ArtistsHero Component
 * Updates hero text to more professional, branded copy
 */

import fs from 'fs/promises';

async function updateArtistsHero() {
  console.log('🎨 Updating Artists Hero with professional branding...');
  
  const filePath = 'src/components/ArtistsHero.astro';
  
  try {
    // Read the current file
    const content = await fs.readFile(filePath, 'utf-8');
    
    // Define the replacements
    const updates = [
      // Update the tagline
      {
        old: '      <!-- Subtle Tagline -->\n      <p class="tagline">Where artistry meets the mystical</p>',
        new: '      <!-- Professional Tagline -->\n      <p class="tagline">Louisiana\'s Premier Tattoo Collective</p>'
      },
      
      // Update the artists introduction
      {
        old: '      <!-- Artists-Specific Introduction -->\n      <p class="artists-intro">\n        Discover our collective of master tattoo artists, each bringing unique vision and unparalleled skill to every piece. From custom designs to traditional work, our guild creates lasting art that tells your story.\n      </p>',
        new: '      <!-- Professional Artists Introduction -->\n      <p class="artists-intro">\n        Six master artists. One extraordinary vision. Our award-winning collective brings decades of combined expertise to every custom piece, specializing in traditional artistry, contemporary designs, and sacred ink that honors your unique story.\n      </p>'
      },
      
      // Update the stats
      {
        old: '            <span class="stat-number">12+</span>\n            <span class="stat-label">Artists</span>',
        new: '            <span class="stat-number">6</span>\n            <span class="stat-label">Master Artists</span>'
      },
      
      {
        old: '            <span class="stat-number">8</span>\n            <span class="stat-label">Art Styles</span>',
        new: '            <span class="stat-number">12</span>\n            <span class="stat-label">Specialties</span>'
      },
      
      // Update CSS for professional tagline
      {
        old: '/* Minimal tagline */\n.tagline {\n  font-size: 1.1rem;\n  font-weight: 300;\n  letter-spacing: 0.05em;\n  margin-bottom: 3rem;\n  opacity: 0.9;\n  max-width: 400px;\n  line-height: 1.5;\n}',
        new: '/* Professional tagline */\n.tagline {\n  font-size: 1.2rem;\n  font-weight: 500;\n  letter-spacing: 0.08em;\n  margin-bottom: 3rem;\n  opacity: 0.95;\n  max-width: 500px;\n  line-height: 1.4;\n  color: #f5f5f5;\n  text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);\n}'
      },
      
      // Update artists intro CSS
      {
        old: '/* Artists-specific content */\n.artists-intro {\n  font-size: 1.2rem;\n  font-weight: 300;\n  letter-spacing: 0.02em;\n  margin-bottom: 4rem;\n  opacity: 0.85;\n  max-width: 500px;\n  line-height: 1.6;\n  text-align: center;\n}',
        new: '/* Professional artists-specific content */\n.artists-intro {\n  font-size: 1.1rem;\n  font-weight: 300;\n  letter-spacing: 0.02em;\n  margin-bottom: 4rem;\n  opacity: 0.9;\n  max-width: 600px;\n  line-height: 1.7;\n  text-align: center;\n  color: rgba(245, 245, 245, 0.9);\n}'
      }
    ];
    
    let updatedContent = content;
    let changesApplied = 0;
    
    // Apply each update
    for (const update of updates) {
      if (updatedContent.includes(update.old)) {
        updatedContent = updatedContent.replace(update.old, update.new);
        changesApplied++;
        console.log(`✓ Applied update ${changesApplied}/${updates.length}`);
      } else {
        console.log(`⚠ Could not find text to replace for update ${changesApplied + 1}`);
      }
    }
    
    // Write the updated content back to the file
    await fs.writeFile(filePath, updatedContent, 'utf-8');
    
    console.log(`\n✅ Professional branding updates complete!`);
    console.log(`📊 Applied ${changesApplied}/${updates.length} updates`);
    console.log('\n🎯 Professional branding improvements:');
    console.log('• Updated tagline to "Louisiana\'s Premier Tattoo Collective"');
    console.log('• Enhanced intro with "Six master artists. One extraordinary vision."');
    console.log('• Added "award-winning collective" and "decades of combined expertise"');
    console.log('• Updated stats to "6 Master Artists" and "12 Specialties"');
    console.log('• Enhanced CSS styling for better visual impact');
    
    console.log('\n🚀 Next steps:');
    console.log('1. Check the changes in your browser');
    console.log('2. Test the updated hero section');
    console.log('3. Deploy when ready');
    
  } catch (error) {
    console.error('❌ Error updating ArtistsHero:', error.message);
    process.exit(1);
  }
}

// Run the update
updateArtistsHero();
