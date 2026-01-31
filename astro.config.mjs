import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://your-news-site.github.io',
  integrations: [
    // Add any integrations here, e.g.:
    // react(),
    // sitemap(),
  ],
  build: {
    format: 'file', // Use 'directory' or 'file' for URL format
  },
  trailingSlash: 'ignore', // Can be 'always', 'never', or 'ignore'
});
