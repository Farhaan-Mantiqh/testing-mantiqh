import type { APIRoute } from 'astro';

const baseUrl = 'https://mantiqh.com';
const routes = [
  '/',
  '/about-us',
  '/apply-form',
  // '/askAI',
  // '/blogs',
  '/company',
  '/get-in-touch',
  '/leadAI',
  '/solutions',
  '/work',
];

export const GET: APIRoute = () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
    .map(
      (pathname) =>
        `  <url>\n    <loc>${baseUrl}${pathname}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.75</priority>\n  </url>`
    )
    .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
