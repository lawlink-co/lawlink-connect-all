import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    // Brotli compression (best compression ratio, modern browsers)
    viteCompression({
      algorithm: "brotliCompress",
      ext: ".br",
      threshold: 1024, // Only compress files > 1KB
    }),
    // Gzip fallback for older browsers
    viteCompression({
      algorithm: "gzip",
      ext: ".gz",
      threshold: 1024,
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
