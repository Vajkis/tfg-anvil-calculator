import { defineConfig } from 'vite';

export default defineConfig(({ command, isPreview }) => ({
  root: '.',
  base: command === 'build' || isPreview ? '/tfg-anvil-calculator/' : '/',
  server: {
    port: 5173,
    open: true,
  },
}));
