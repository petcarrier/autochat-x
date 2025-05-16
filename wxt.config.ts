import { defineConfig } from 'wxt';
import tailwindcss from '@tailwindcss/vite'

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: 'src',
  modules: ['@wxt-dev/module-react'],
  manifest: {
    permissions: ['storage', 'sidepanel'],
    host_permissions: ['*://*.x.com/*', '*://*.twitter.com/*', '*://*.google.com/*'],
  },
  vite: () => ({
    plugins: [
      tailwindcss()
    ],
  }),
});
