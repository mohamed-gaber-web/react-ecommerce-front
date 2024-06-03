import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr'; // support svg as a component
import tsconfigPaths from 'vite-tsconfig-paths'; // support alias paths

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), tsconfigPaths()],
})
