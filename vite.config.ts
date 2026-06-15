import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  server: {
    preset: "vercel",
  },
  nitro: {
    preset: "vercel",
  },
  vite: {
    build: {
      chunkSizeWarningLimit: 1500,
    },
  },
} as any);
