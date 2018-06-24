FROM mhart/alpine-node:8
WORKDIR  /app
COPY . .
RUN npm install
EXPOSE 4000
CMD [ "node", "index.js" ]