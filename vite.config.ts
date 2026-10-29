import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";


// https://vitejs.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  server: {
    host: "localhost",
    port: 8080,
  },
  plugins: [
    react(),
  ].filter(Boolean),
  build: {
    // Chunk splitting only applies to the browser build, not the prerender (SSR) build.
    rollupOptions: isSsrBuild ? {} : {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['@radix-ui/react-dialog', 'clsx', 'tailwind-merge'],
          animations: ['framer-motion'],
        },
      },
    },
  },
  // CommonJS packages that Node can't import by name in the prerender bundle; let Vite bundle them.
  ssr: {
    noExternal: ["react-helmet-async"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));