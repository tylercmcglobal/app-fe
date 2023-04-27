FROM node:18
WORKDIR /app
COPY package.json .
COPY . .
RUN yarn
RUN yarn build
EXPOSE 4173
CMD ["yarn", "preview"]