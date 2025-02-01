import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/my-portfolio/",
  build: {
    outDir: "build", // Define a pasta de saída correta
  },
});