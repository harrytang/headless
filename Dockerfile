# Creating multi-stage build for production
FROM node:24-alpine AS build
ARG NODE_ENV=production
ARG STRAPI_ADMIN_BACKEND_URL
ENV NODE_ENV=${NODE_ENV}
ENV STRAPI_ADMIN_BACKEND_URL=${STRAPI_ADMIN_BACKEND_URL}
ENV PATH=/opt/node_modules/.bin:$PATH
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev git > /dev/null 2>&1
WORKDIR /opt/
COPY package.json package-lock.json ./
RUN npm install -g node-gyp
RUN npm config set fetch-retry-maxtimeout 600000 -g && npm install --legacy-peer-deps --only=production
WORKDIR /opt/app
COPY . .
RUN npm run build

# Creating final production image
FROM node:24-alpine
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
RUN apk add --no-cache vips-dev
ENV PATH=/opt/node_modules/.bin:$PATH
WORKDIR /opt/
COPY --from=build /opt/node_modules ./node_modules
WORKDIR /opt/app
COPY --from=build /opt/app ./
RUN chown -R node:node /opt/app
USER node
EXPOSE 1337
CMD ["npm", "run", "start"]
