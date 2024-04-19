import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // O server é responsável por configurar o servidor de desenvolvimento.
  server: {
    host: "0.0.0.0", // Torna o servidor acessível em qualquer endereço IP e não apenas em localhost.
    port: 3000, // Define a porta do servidor.
  },
  plugins: [react()],
});
