# pull official base image
FROM node:latest

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json ./
COPY package-lock.json ./

RUN npm install -g npm@latest
RUN rm -rf node_modules
RUN npm install

# add app
COPY . ./

# start app
CMD ["npm", "start"]