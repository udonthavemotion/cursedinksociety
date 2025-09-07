// Research-informed SEO: Dynamic sitemap generation
import siteData from '../data/cis.json';

export async function get() {
  const pages = [
    {
      url: '',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: '1.0'
    },
    {
      url: 'artists',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: '0.8'
    }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>https://${siteData.site.domain}/${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
</urlset>`;

  return {
    body: sitemap,
    headers: {
      'Content-Type': 'application/xml'
    }
  };
}
