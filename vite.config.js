import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Позволяет Vite принимать соединения извне
    port: 3000, // Убедитесь, что этот порт совпадает с тем, что указан в docker-compose
  },
});
