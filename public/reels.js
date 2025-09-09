/**
 * Seth Wood Reels Modal Functionality
 * Lightweight video modal with accessibility and reduced motion support
 */

(function() {
  'use strict';
  
  const modal = document.getElementById('reel-modal');
  const player = document.getElementById('reel-player');
  
  if (!modal || !player) {
    console.warn('Reels modal elements not found');
    return;
  }
  
  /**
   * Open modal with video source
   * @param {string} src - Video source URL
   */
  function openModal(src) {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    modal.hidden = false;
    player.innerHTML = `
      <video 
        src="${src}" 
        ${reduceMotion ? '' : 'autoplay'} 
        controls 
        playsinline 
        style="width:100%;height:100%;background:#000"
        aria-label="Seth Wood tattoo reel video"
      ></video>
    `;
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    // Focus video for keyboard accessibility
    const video = player.querySelector('video');
    if (video) {
      video.focus();
    }
    
    // Announce to screen readers
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = 'Video modal opened. Press Escape to close.';
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }
  
  /**
   * Close modal and cleanup
   */
  function closeModal() {
    modal.hidden = true;
    player.innerHTML = '';
    document.body.style.overflow = '';
    
    // Return focus to the button that opened the modal
    const activeReel = document.querySelector('.reel:focus-within');
    if (activeReel) {
      const playButton = activeReel.querySelector('.reel__play');
      if (playButton) {
        playButton.focus();
      }
    }
  }
  
  /**
   * Handle modal backdrop and close button clicks
   */
  modal.addEventListener('click', function(e) {
    if (e.target.hasAttribute('data-close')) {
      closeModal();
    }
  });
  
  /**
   * Handle escape key to close modal
   */
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !modal.hidden) {
      closeModal();
    }
  });
  
  /**
   * Initialize reel cards
   */
  function initializeReels() {
    const reelCards = document.querySelectorAll('.reel');
    
    reelCards.forEach(function(card) {
      const playButton = card.querySelector('.reel__play');
      const videoSrc = card.dataset.src;
      
      if (!playButton || !videoSrc) {
        console.warn('Reel card missing play button or video source:', card);
        return;
      }
      
      // Click handler for play button
      playButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        openModal(videoSrc);
      });
      
      // Click handler for entire card
      card.addEventListener('click', function(e) {
        // Don't trigger if clicking the play button (handled above)
        if (e.target === playButton) return;
        
        e.preventDefault();
        openModal(videoSrc);
      });
      
      // Keyboard accessibility for card
      card.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(videoSrc);
        }
      });
      
      // Make card focusable
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `Play reel video: ${card.querySelector('img')?.alt || 'Seth Wood tattoo reel'}`);
    });
  }
  
  /**
   * Create poster images from video if not provided
   * This is a fallback - ideally posters should be pre-generated
   */
  function generatePosterFallback(video, poster) {
    if (poster.complete && poster.naturalHeight !== 0) {
      return; // Poster already loaded
    }
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    video.addEventListener('loadeddata', function() {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      ctx.drawImage(video, 0, 0);
      
      try {
        const dataURL = canvas.toDataURL('image/jpeg', 0.8);
        poster.src = dataURL;
      } catch (e) {
        console.warn('Could not generate video poster:', e);
      }
    }, { once: true });
    
    video.currentTime = 1; // Seek to 1 second for better frame
  }
  
  /**
   * Initialize when DOM is ready
   */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeReels);
  } else {
    initializeReels();
  }
  
  // Expose functions for external use if needed
  window.SethReels = {
    open: openModal,
    close: closeModal
  };
  
})();
