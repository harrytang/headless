export default ({ env }) => ({
  seo: {
    enabled: true,
  },
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST"),
        port: env("SMTP_PORT", 587),
        auth: {
          user: env("SMTP_USERNAME"),
          pass: env("SMTP_PASSWORD"),
        },
      },
      settings: {
        defaultFrom: env("SMTP_FROM"),
        defaultReplyTo: env("SMTP_FROM"),
      },
    },
  },
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        baseUrl: `https://${env("STORAGE_HOST")}`,
        rootPath: env("STORAGE_ROOT_PATH"),
        credentials: {
          accessKeyId: env("CF_ACCESS_KEY_ID"),
          secretAccessKey: env("CF_ACCESS_SECRET"),
        },
        s3Options: {
          region: "auto",
          endpoint: env("CF_ENDPOINT"),
          params: {
            Bucket: env("CF_BUCKET"),
          },
        },
      },
    },
  },
});
