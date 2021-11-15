# syntax=docker/dockerfile:1

FROM ubuntu-chrome-nodejs
# ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

# RUN npm install --production
RUN npm install

COPY . .

CMD [ "npm", "run", "test"]
# CMD [ "node", "test.js"]
