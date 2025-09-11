/**
 * Video Optimization Script for Ashley's Hero Video
 * 
 * This script provides instructions and commands to optimize the large ashley-hero.mp4 file
 * for better web performance.
 * 
 * Current file: 86MB (too large for web)
 * Target: <10MB for optimal web performance
 */

console.log(`
🎬 Ashley Hero Video Optimization Guide
=====================================

Current file: public/assets/5649204-uhd_3840_2160_25fps.mp4 (82MB, 4K UHD)
Target size: <10MB for optimal web performance

OPTION 1: Using FFmpeg (Recommended)
-----------------------------------
If you have FFmpeg installed, run this command:

ffmpeg -i "public/assets/5649204-uhd_3840_2160_25fps.mp4" \\
  -vcodec libx264 \\
  -crf 28 \\
  -preset medium \\
  -vf "scale=1920:1080" \\
  -acodec aac \\
  -b:a 128k \\
  -movflags +faststart \\
  "public/assets/ashley-hero-optimized.mp4"

OPTION 2: Online Tools
---------------------
Upload to one of these online video compressors:
- https://www.freeconvert.com/video-compressor
- https://www.videosmaller.com/
- https://clideo.com/compress-video

Settings to use:
- Resolution: 1920x1080 (or 1280x720 for smaller size)
- Bitrate: 2-4 Mbps
- Format: MP4 (H.264)
- Audio: AAC, 128kbps

OPTION 3: Manual Settings for Online Tools
-----------------------------------------
- Video Codec: H.264
- Quality: 70-80%
- Frame Rate: 30fps (or original)
- Audio Codec: AAC
- Audio Bitrate: 128kbps

After optimization:
1. Replace the original file or rename optimized version
2. Update the code if needed
3. Test the video loads quickly on both desktop and mobile

Current code optimizations applied:
- Changed preload from "auto" to "metadata"
- Disabled 4K video on mobile (shows fallback image, saves 82MB)
- Optimized 4K video scaling and performance for desktop
- Reduced opacity and playback rate for performance
`);
