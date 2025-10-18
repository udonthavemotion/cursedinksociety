/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Updated Cursed Ink Society brand palette - matches global.css
        'cursed-red': '#dc143c', // Crimson red
        'cursed-red-dark': '#b22222', // Deeper red
        'cursed-black': '#0a0a0c', // Deep black
        'cursed-black-light': '#0f0a10', // Slightly lighter black
        'cursed-gold': '#d4af37', // Metallic gold
        'cursed-silver': '#c0c0c0', // Metallic silver
        'cursed-white': '#f5f5f5', // Clean white
        'cursed-muted': '#e9e2d8', // Muted ink color
        // Piercings page minimal theme
        'bgdark': '#0B0B0B',
        'bgcard': '#121212',
        'line': '#2A2A2A',
        'accent': '#dc143c',
        'text': '#EDEDED',
        'muted': '#B3B3B3',
      },
      fontFamily: {
        // Research-aligned typography
        'display': ['Cinzel', 'serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Performance-optimized font sizes
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.6' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      borderRadius: {
        'md': '4px',
      },
      letterSpacing: {
        'tight': '0.08em',
      },
      animation: {
        // Performance-conscious animations
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
