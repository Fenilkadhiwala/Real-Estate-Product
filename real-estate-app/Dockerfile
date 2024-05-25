FROM node:20.12.2-alpine3.18
WORKDIR /app
COPY package*.json ./
RUN npm install
EXPOSE 3000
CMD ["npm","start"]

