import react from "@vitejs/plugin-react";
import { defineConfig, UserConfig } from "vite";
import viteTsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteTsconfigPaths()],

  server: {
    port: 3000,
    open: true,
    watch: {
      usePolling: true
    }
  }
} as UserConfig);
