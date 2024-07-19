# Headless

Headless CMS for my official website.

## Actions permissions

Go to Settings -> Actions > General > Workflow permissions and select `Read and write permissions`

## Transfer

Transfer data from one Strapi to another Strapi:

- Push data from local to staging:

  ```bash
  npm run strapi transfer -- --to https://headless-next.harrytang.xyz/admin --to-token $PUSH_TOKEN
  ```

- Pull data from staging to production:

  ```bash
  npm run strapi transfer -- --to http://headless-srv.harrytang-prod:1337/admin --to-token $PUSH_TOKEN
  ```

- Pull data from production to local:

  ```bash
  npm run strapi transfer -- --from https://headless.harrytang.xyz/admin --from-token $PULL_TOKEN
  ```
