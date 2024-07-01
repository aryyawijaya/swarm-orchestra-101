import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/

const PORT = process.env.VITE_BACKEND_URL || '';

export default defineConfig({
  plugins: [react()],
  server: {
    port: Number(PORT),
    host: true,
    origin: `http://0.0.0.0:${PORT}`,
  },
});
