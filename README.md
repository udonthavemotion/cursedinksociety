# 🎨 Cursed Ink Society

A premium tattoo artist portfolio and booking website built with Astro, Tailwind CSS, and TypeScript.

## 🚀 Quick Start

```bash
# Setup Node 20
nvm use

# Install dependencies
npm ci

# Copy environment variables (if needed)
cp .env.example .env

# Start development server
npm run dev
```

## 📋 Available Scripts

| Command              | Description                          |
|---------------------|--------------------------------------|
| `npm run dev`       | Start development server            |
| `npm run build`     | Build for production                |
| `npm run preview`   | Preview production build            |
| `npm run typecheck` | Run TypeScript type checking        |
| `npm run lint`      | Run ESLint                          |
| `npm run format`    | Format code with Prettier           |

## 🏗️ Tech Stack

- **Framework**: Astro 5.x
- **Styling**: Tailwind CSS 4.x
- **Language**: TypeScript
- **3D Graphics**: Three.js
- **Build Tool**: Vite
- **Deployment**: Vercel

## 📁 Project Structure

```
src/
├── components/      # Reusable Astro components
├── layouts/         # Page layouts
├── pages/           # Route pages
│   ├── artists/     # Artist profile pages
│   ├── gallery/     # Gallery pages
│   └── [other]/     # Main pages
├── data/            # Static data files
└── styles/          # Global styles

public/              # Static assets
docs/               # Documentation
```

## 🚀 Deployment

### Vercel (Recommended)

1. Connect GitHub repository to Vercel
2. Vercel auto-detects Astro configuration
3. Set environment variables in Vercel dashboard
4. Automatic deployments on `main` branch pushes

### Manual Build

```bash
npm run build
# Upload dist/ directory to hosting provider
```

## 🔧 Environment Setup

See `.env.example` for required environment variables. Currently includes:
- Site configuration
- Optional analytics
- Social media links

## 📱 Features

- **Responsive Design**: Mobile-first approach
- **SEO Optimized**: Meta tags, sitemap, robots.txt
- **Performance**: Image optimization and compression
- **Accessibility**: Semantic HTML and ARIA support
- **3D Elements**: Interactive Three.js components

## 🧪 Development

1. Create feature branch from `main`
2. Make changes following existing patterns
3. Test locally: `npm run build && npm run preview`
4. Run quality checks: `npm run format && npm run typecheck && npm run lint`
5. Create pull request with CI validation

## 📖 Documentation

See `docs/HANDOFF.md` for detailed development setup, deployment instructions, and project maintenance guide.

---

Built with ❤️ for tattoo artists who deserve premium digital experiences.
