// SEO endpoint: keeps /sitemap.xml reachable for crawlers and deployment checks.
import siteData from '../data/cis.json';

const siteUrl = `https://www.${siteData.site.domain}`;
const lastmod = new Date().toISOString();

const pages = [
  { url: '/', changefreq: 'weekly', priority: '1.0' },
  { url: '/artists', changefreq: 'weekly', priority: '0.9' },
  ...siteData.artists.map((artist) => ({
    url: `/artists/${artist.slug}`,
    changefreq: 'monthly',
    priority: '0.8',
  })),
  { url: '/gallery', changefreq: 'weekly', priority: '0.8' },
  { url: '/piercing', changefreq: 'weekly', priority: '0.8' },
  { url: '/services', changefreq: 'monthly', priority: '0.7' },
  { url: '/about', changefreq: 'monthly', priority: '0.6' },
  { url: '/contact', changefreq: 'monthly', priority: '0.7' },
  { url: '/consultation', changefreq: 'monthly', priority: '0.7' },
  { url: '/privacy', changefreq: 'yearly', priority: '0.2' },
  { url: '/terms', changefreq: 'yearly', priority: '0.2' },
];

function escapeXml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export async function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map((page) => `  <url>
    <loc>${escapeXml(new URL(page.url, siteUrl).toString())}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`)
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
