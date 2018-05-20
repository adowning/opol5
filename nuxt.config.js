export default {
  mode: "spa",
  srcDir: "web/",
  head: {
    titleTemplate: "Nuxt HN | %s",
    meta: [
      {
        property: "og:image",
        content:
          "https://user-images.githubusercontent.com/904724/26879447-689b56a8-4b91-11e7-968f-5eea1d6c71b4.png"
      },
      { property: "twitter:card", content: "summary_large_image" },
      { property: "twitter:site", content: "@nuxt_js" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  loading: {
    color: "#59cc93"
  },
  manifest: {
    name: "Nuxt Hacker News",
    description: "HackerNews clone built with Nuxt.js",
    theme_color: "#188269"
  },
  modules: ["@nuxtjs/pwa", "@nuxtjs/axios"],
  axios: {
    proxy: true
  },
  proxy: {
    "/api/news": {
      target: "https://api.hnpwa.com/v0/",
      pathRewrite: { "^/api/news": "" }
    },
    "/api/assets": {
      target: "https://api.hnpwa.com/v0/",
      pathRewrite: { "^/api/assets": "" }
    },
    "/api/users": {
      target: "https://api.hnpwa.com/v0/",
      pathRewrite: { "^/api/users": "" }
    }
  },

  // plugins: ["~/plugins/filters"],
  serverMiddleware: ["~/common/cache.js"],
  render: {
    http2: {
      push: true
    },
    static: {
      maxAge: "1y",
      setHeaders(res, path) {
        if (path.includes("sw.js")) {
          res.setHeader("Cache-Control", `public, max-age=${15 * 60}`)
        }
      }
    }
  }
}
