// Generates public/sitemap.xml from the routes below. Runs automatically before `npm run build`.
// Add new pages here when you add new routes.
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')

// Slugs are read from the data files with a regex, so this script does not need to import JSX/icons.
// Only top-level entries count (4-space indent); nested references like a department's
// facilities list are indented further and are skipped.
const slugsFrom = (file) => [
  ...new Set([...readFileSync(resolve(root, file), 'utf8').matchAll(/^ {4}slug: '([a-z0-9-]+)',$/gm)].map((match) => match[1])),
]

const departmentSlugs = slugsFrom('src/data/departments.js')
const facilitySlugs = slugsFrom('src/data/facilities.js')

const SITE_URL = (process.env.SITE_URL ?? 'https://www.ekdanthospital.com').replace(/\/$/, '')

const routes = [
  { path: '/', priority: '1.0', changefreq: 'monthly' },
  { path: '/about', priority: '0.7', changefreq: 'yearly' },
  { path: '/departments', priority: '0.9', changefreq: 'monthly' },
  ...departmentSlugs.map((slug) => ({ path: `/departments/${slug}`, priority: '0.8', changefreq: 'monthly' })),
  { path: '/facilities', priority: '0.9', changefreq: 'monthly' },
  ...facilitySlugs.map((slug) => ({ path: `/facilities/${slug}`, priority: '0.8', changefreq: 'monthly' })),
  { path: '/doctors', priority: '0.8', changefreq: 'weekly' },
  { path: '/gallery', priority: '0.6', changefreq: 'monthly' },
  { path: '/contact', priority: '0.9', changefreq: 'yearly' },
  { path: '/appointment', priority: '0.9', changefreq: 'yearly' },
  { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms-of-use', priority: '0.3', changefreq: 'yearly' },
]

const today = new Date().toISOString().slice(0, 10)

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`

writeFileSync(resolve(root, 'public/sitemap.xml'), xml)
console.log(`sitemap.xml written with ${routes.length} URLs (${SITE_URL})`)
