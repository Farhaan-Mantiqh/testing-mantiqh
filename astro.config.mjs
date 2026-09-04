import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import node from "@astrojs/node";



import react from "@astrojs/react";



// https://astro.build/config
export default defineConfig({
    output: "server",

    server: {
        port: 3000,
    },

    adapter: node({
        mode: "standalone",
    }),

    vite: {
        plugins: [tailwindcss()],
    },

    integrations: [react()],
});
