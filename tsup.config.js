import { defineConfig } from "tsup";

export default defineConfig({
  entry: { banditypes: "src/index.ts" },
  format: ["esm", "cjs"],
  minify: false,
  sourcemap: false,
  clean: true,
});
