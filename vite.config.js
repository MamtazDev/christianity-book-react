import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// export default defineConfig({
//   publicDir: 'public',
//   define: {
//     'process.env.SOME_KEY': JSON.stringify(env.SOME_KEY)
//   },
//   plugins: [react()],
//   server: {
//     port: 5000,
//   },
// });

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.SOME_KEY": JSON.stringify(env.SOME_KEY),
    },
    plugins: [react()],
    server: {
      port: 5000,
      host: "0.0.0.0",
    },
  };
});
