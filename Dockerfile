FROM node:8

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

COPY . .

# RUN npm run build
# ?

EXPOSE 4200
CMD [ "npm", "run", "serve:sw" ]