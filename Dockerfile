FROM node:alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY next.config.js ./
COPY postcss.config.js ./
COPY tailwind.config.js ./
COPY components ./components
COPY lib ./lib
COPY pages ./pages
COPY public ./public
COPY styles ./styles

EXPOSE 3000
CMD ["yarn", "dev"]

