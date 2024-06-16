// https://nitro.unjs.io/config
export default defineNitroConfig({
  baseURL: "/",
  experimental: {
    asyncContext: true,
  },
  timing: true,
  errorHandler: "~/error",
  imports: {
    dirs: [
      "services/**/*.ts",
    ],
  },
  sourceMap: false,
  minify: false,
})
