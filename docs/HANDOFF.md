# 🚀 Cursed Ink Society - Release Handoff

## Quickstart on Any Mac

```bash
# Clone and setup
git clone <repo-url> cursed-ink-society
cd cursed-ink-society

# Setup Node (will use .nvmrc automatically)
nvm use

# Install dependencies
npm ci

# Copy environment variables (if needed)
cp .env.example .env
# Edit .env with actual values if required

# Start development
npm run dev
```

## 📋 Development Commands

```bash
# Development
npm run dev          # Start dev server with HMR
npm run build        # Production build
npm run preview      # Preview production build locally

# Code Quality
npm run typecheck    # TypeScript type checking
npm run lint         # ESLint checking
npm run format       # Prettier formatting

# Combined quality check
npm run format && npm run typecheck && npm run lint && npm run build
```

## 🏗️ Project Structure

```
src/
├── components/      # Reusable Astro components
├── layouts/         # Page layouts
├── pages/           # Route pages
├── data/            # Static data files
└── styles/          # Global styles

public/              # Static assets (images, videos)
dist/               # Build output (gitignored)
```

## 🎨 Key Features

- **Astro Framework**: Static site generation with component islands
- **Tailwind CSS**: Utility-first styling with custom theme
- **TypeScript**: Type-safe development
- **Responsive Design**: Mobile-first approach
- **SEO Optimized**: Meta tags, sitemap, robots.txt
- **Performance**: Image optimization, compression, lazy loading

## 🚀 Deployment

### Vercel (Recommended)

1. Connect GitHub repo to Vercel
2. Vercel will auto-detect Astro and use `vercel.json` config
3. Set environment variables in Vercel dashboard
4. Deploy automatically on `main` branch pushes

### Manual Build

```bash
npm run build
# Upload dist/ to your hosting provider
```

## 🔧 Environment Variables

See `.env.example` for required variables. Currently minimal - add as needed:
- `PUBLIC_SITE_NAME`
- `PUBLIC_SITE_URL`
- Analytics IDs (optional)
- Contact form endpoints (if applicable)

## 🧪 Development Workflow

1. **Feature Development**: Create feature branch from `main`
2. **Code Changes**: Make changes following existing patterns
3. **Testing**: Run build locally, check responsive design
4. **Code Quality**: `npm run format && npm run typecheck && npm run lint`
5. **PR**: Create pull request, CI will run automated checks
6. **Merge**: Merge to `main` after approval

## 📱 Responsive Breakpoints

- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

## 🎯 Performance Targets

- Lighthouse: 90+ scores across all metrics
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1

## 🐛 Known Issues & TODOs

None identified in current release. All pages have proper titles and meta descriptions.

## 📞 Support

- **Tech Stack**: Astro, Tailwind CSS, TypeScript
- **Node Version**: 20.x (see .nvmrc)
- **Build Tool**: Vite (via Astro)
- **Deployment**: Vercel or static hosting

## 🔄 Next Steps

1. Test deployment on Vercel
2. Set up analytics if needed
3. Add contact form integration if required
4. Optimize images further if needed
5. Consider adding PWA features if beneficial

---

**Ready for production deployment!** 🎉
