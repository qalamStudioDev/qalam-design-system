import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import viteTsConfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteTsConfigPaths(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: "src/main.ts",
      formats: ["es", "umd"],
      name: "QalamDesignSystem",
      fileName: format => `qalam-design-system.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
