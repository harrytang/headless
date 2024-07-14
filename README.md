# Headless

Headless CMS for my official website.

## Actions permissions

Go to Settings -> Actions > General > Workflow permissions and select `Read and write permissions`

## Transfer

Transfer data from one Strapi to another Strapi:

```bash
docker compose exec -it strapi /bin/sh
npm run strapi transfer -- --to https://headless-next.harrytang.xyz/admin --to-token $TRANSFER_TOKEN --force
npm run strapi transfer -- --to https://headless.harrytang.xyz/admin --to-token $TRANSFER_TOKEN --force
npm run strapi transfer -- --to http://headless-srv.harrytang-prod:1337/admin --to-token $TRANSFER_TOKEN --force
```
