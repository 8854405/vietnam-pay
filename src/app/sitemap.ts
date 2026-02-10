import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://vietnampay.net'
  const now = new Date('2026-02-10')
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/services/`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/blog/vietnam-payment-guide/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog/vietnam-payment-methods/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/about/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contact/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/payment-system/`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/blog/vietnam-payment-system-guide/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ]
}
