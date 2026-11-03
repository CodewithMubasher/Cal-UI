import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    button: "src/components/button/index.ts",
  },
  format: ["esm"],
  dts: true,
  clean: true,
  sourcemap: true,
  treeshake: true,
  external: ["react", "react-dom"],
  // Every output file starts with "use client" so Next.js App Router works
  banner: { js: '"use client";' },
});
