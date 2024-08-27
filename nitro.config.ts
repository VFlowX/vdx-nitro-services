// https://nitro.unjs.io/config
export default defineNitroConfig({
  storage: {
    fs: {
      driver: "fs",
      base: "./data/",
    },
  },
  baseURL: "/",
  timing: true,
  errorHandler: "~/error",
  imports: {
    dirs: [
      "services/**/*.ts",
    ],
  },
  preset: "bun",
  sourceMap: false,
  minify: true,
  noPublicDir: true,
  // inlineDynamicImports: true,
})
