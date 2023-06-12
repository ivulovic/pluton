import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsConfigPaths()],
  server: {
    proxy: {
      "/api/v1": {
        target: "https://pluton.rs",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/api": {
        target: "http://localhost:5001",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
