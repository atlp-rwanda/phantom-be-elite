# to grab the node image premade from docker hub hosted online and download it 
FROM node:16

RUN npm install --location=global nodemon
# create the folder in the docker image called to hold all of the files which will be added into it
WORKDIR /app

# copy the package.json into the /app folder
COPY package.json .

# install all the packages into the container
RUN npm cache clear \
    npm install

# copy remaning files of the project into the image folder ==> /app
COPY . ./

# setting environment variables
ENV PORT 3001

# communicate the port open for the communicating to its files
EXPOSE $PORT

# command to be run as "npm start" to start the server inside the image
CMD ["npm","run","dev"]
