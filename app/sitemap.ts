import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://eazy-lyrics-vercel.vercel.app/',
      lastModified: new Date(),
    },
  ];
}
