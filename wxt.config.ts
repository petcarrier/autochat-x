import { defineConfig } from 'wxt';
import tailwindcss from '@tailwindcss/vite'

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  manifest: {
    permissions: ['storage'],
    side_panel: {
      default_path: 'sidebar.html'
    }
  },
  vite: (configEnv) => ({
    plugins: [
      tailwindcss()
    ],
  }),
});
