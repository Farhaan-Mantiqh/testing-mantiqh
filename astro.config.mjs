import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    output: "server",

    server: {
        port: 3000,
    },

    adapter: vercel(),

    vite: {
        plugins: [tailwindcss()],
    },

    integrations: [react()],
});
