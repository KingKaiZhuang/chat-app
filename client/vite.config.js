import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // 這一行使伺服器監聽所有網絡接口
    port: 5173, // 你可以指定你想要的端口號
    // 設置CORS頭部，允許從特定域名進行訪問（可選）
    cors: {
      origin: "*",
    },
  },
});
