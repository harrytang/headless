export default [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::cors",
    config: {
      // the web app sends Strapi-Response-Format from the browser too (load more articles)
      headers: ["Content-Type", "Authorization", "Origin", "Accept", "Strapi-Response-Format"],
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            process.env.STORAGE_HOST,
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            process.env.STORAGE_HOST,
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
