import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/login', '/logout'],
    },
    sitemap: 'https://eazy-lyrics-vercel.vercel.app/sitemap.xml',
  };
}
