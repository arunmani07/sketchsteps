import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Actions exposes OWNER/REPOSITORY. This keeps asset paths correct
// even when the repository is not named "sketchsteps".
const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isUserSite = repository?.endsWith('.github.io');
const base = process.env.GITHUB_ACTIONS
  ? (isUserSite ? '/' : `/${repository || 'sketchsteps'}/`)
  : '/';

export default defineConfig({
  plugins: [react()],
  base,
  server: { port: 5173 },
});
