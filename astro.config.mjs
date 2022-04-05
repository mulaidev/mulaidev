import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://mulai.dev',
  integrations: [tailwind()]
})
