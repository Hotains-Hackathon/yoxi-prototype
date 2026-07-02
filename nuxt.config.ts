// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  srcDir: "app",
  css: ["~/assets/styles/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  modules: ["@nuxt/ui", "@nuxt/image"],
  fonts: {
    // 暫不下載字型
    providers: {
      google: false,
      bunny: false,
      fontshare: false,
      fontsource: false,
    },
  },
  nitro: {
    // 開發環境下使用記憶體快取
    devStorage: {
      cache: {
        driver: "memory",
      },
    },
  },
});
