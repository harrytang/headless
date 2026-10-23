export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: env("STRAPI_ADMIN_BACKEND_URL", "http://localhost:1337"),
  proxy: {
    // trust X-Forwarded-* from the gateway, which terminates TLS (admin login needs secure cookies)
    koa: env.bool("IS_PROXIED", true),
  },
  app: {
    keys: env.array("APP_KEYS"),
  },
  logger: {
    updates: {
      // Renovate tracks Strapi releases; the notifier also rewrites .strapi-updater.json,
      // which fails with ESTALE on Docker Desktop bind mounts in local dev
      enabled: false,
    },
  },
});
