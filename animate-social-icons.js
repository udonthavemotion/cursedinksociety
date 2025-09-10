#!/usr/bin/env node

/**
 * Add Creative Animations to Instagram and Facebook Icons
 * Enhances social media icons with mystical, professional animations
 */

import fs from 'fs/promises';

async function animateSocialIcons() {
  console.log('✨ Adding creative animations to social media icons...');
  
  const filePath = 'src/components/ArtistsHero.astro';
  
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    
    const updates = [
      // Add new keyframe animations for social icons
      {
        old: `@keyframes shimmer {
  0%, 100% {
    background-position: -200% center;
  }
  50% {
    background-position: 200% center;
  }
}`,
        new: `@keyframes shimmer {
  0%, 100% {
    background-position: -200% center;
  }
  50% {
    background-position: 200% center;
  }
}

/* Social Media Icon Animations */
@keyframes socialFloat {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
}

@keyframes socialGlow {
  0%, 100% {
    filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.3));
  }
  50% {
    filter: drop-shadow(0 0 20px rgba(220, 20, 60, 0.6))
            drop-shadow(0 0 40px rgba(220, 20, 60, 0.3));
  }
}

@keyframes socialPulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

@keyframes socialRotate {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-5deg);
  }
  75% {
    transform: rotate(5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes socialRipple {
  0% {
    box-shadow: 0 0 0 0 rgba(220, 20, 60, 0.4);
  }
  70% {
    box-shadow: 0 0 0 20px rgba(220, 20, 60, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(220, 20, 60, 0);
  }
}`
      },
      
      // Enhanced social link container
      {
        old: `/* Minimal social links */
.social-minimal {
  display: flex;
  gap: 3rem;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}`,
        new: `/* Enhanced social links with animations */
.social-minimal {
  display: flex;
  gap: 4rem;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  perspective: 1000px;
}`
      },
      
      // Enhanced social link styling with animations
      {
        old: `.social-link {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.5rem 0.8rem;
  background: transparent;
  border: none;
  border-radius: 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 0.02em;
  backdrop-filter: none;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
}`,
        new: `.social-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border: 2px solid transparent;
  border-radius: 50px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.03em;
  backdrop-filter: blur(5px);
  position: relative;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  animation: socialFloat 4s ease-in-out infinite;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.social-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.6s ease;
}

.social-link:hover::before {
  left: 100%;
}`
      },
      
      // Enhanced hover effects
      {
        old: `.social-link:hover {
  transform: translateY(-1px);
  opacity: 0.8;
}`,
        new: `.social-link:hover {
  transform: translateY(-8px) scale(1.05);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(220, 20, 60, 0.5);
  box-shadow: 
    0 8px 25px rgba(0, 0, 0, 0.3),
    0 0 30px rgba(220, 20, 60, 0.3);
  animation: socialFloat 4s ease-in-out infinite, socialGlow 2s ease-in-out infinite;
}

.social-link:active {
  transform: translateY(-5px) scale(0.98);
  animation: socialRipple 0.6s ease-out;
}`
      },
      
      // Enhanced SVG icon animations
      {
        old: `.social-link svg {
  width: 18px;
  height: 18px;
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.social-link:hover svg {
  opacity: 1;
}`,
        new: `.social-link svg {
  width: 20px;
  height: 20px;
  opacity: 0.85;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.2));
}

.social-link:hover svg {
  opacity: 1;
  transform: scale(1.2);
  animation: socialRotate 0.8s ease-in-out;
  filter: drop-shadow(0 0 15px rgba(220, 20, 60, 0.6));
}

/* Individual platform-specific colors on hover */
.social-link[href*="instagram"]:hover {
  border-color: rgba(225, 48, 108, 0.6);
  box-shadow: 
    0 8px 25px rgba(0, 0, 0, 0.3),
    0 0 30px rgba(225, 48, 108, 0.4);
}

.social-link[href*="instagram"]:hover svg {
  filter: drop-shadow(0 0 15px rgba(225, 48, 108, 0.8));
}

.social-link[href*="facebook"]:hover {
  border-color: rgba(24, 119, 242, 0.6);
  box-shadow: 
    0 8px 25px rgba(0, 0, 0, 0.3),
    0 0 30px rgba(24, 119, 242, 0.4);
}

.social-link[href*="facebook"]:hover svg {
  filter: drop-shadow(0 0 15px rgba(24, 119, 242, 0.8));
}`
      },
      
      // Add staggered animation delays
      {
        old: `/* Mobile responsive adjustments */`,
        new: `/* Staggered animation delays */
.social-link:nth-child(1) {
  animation-delay: 0s;
}

.social-link:nth-child(2) {
  animation-delay: 0.5s;
}

/* Mobile responsive adjustments */`
      }
    ];
    
    let updatedContent = content;
    let changesApplied = 0;
    
    for (const update of updates) {
      if (updatedContent.includes(update.old)) {
        updatedContent = updatedContent.replace(update.old, update.new);
        changesApplied++;
        console.log(`✓ Applied animation enhancement ${changesApplied}/${updates.length}`);
      } else {
        console.log(`⚠ Could not find content for enhancement ${changesApplied + 1}`);
      }
    }
    
    await fs.writeFile(filePath, updatedContent, 'utf-8');
    
    console.log(`\n✅ Social media icon animations complete!`);
    console.log(`📊 Applied ${changesApplied}/${updates.length} enhancements`);
    console.log('\n🎭 Creative animations added:');
    console.log('• Floating animation - Icons gently float up and down');
    console.log('• Hover glow effects - Mystical glow on hover');
    console.log('• Scale and rotate - Icons grow and rotate on hover');
    console.log('• Platform-specific colors - Instagram pink, Facebook blue');
    console.log('• Ripple effect - Click animation with expanding ring');
    console.log('• Shimmer sweep - Light sweep animation on hover');
    console.log('• Staggered timing - Icons animate with different delays');
    console.log('\n🎨 Visual enhancements:');
    console.log('• Glassmorphism background with blur');
    console.log('• Rounded pill shape design');
    console.log('• Enhanced shadows and depth');
    console.log('• Larger, more prominent icons');
    
  } catch (error) {
    console.error('❌ Error adding social icon animations:', error.message);
    process.exit(1);
  }
}

animateSocialIcons();
