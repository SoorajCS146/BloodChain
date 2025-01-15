
# Base image.
FROM node:18

# Setting the working directory.
WORKDIR /ourApp

# Copying only the dependencies first.
COPY package*.json ./

# Installing the dependencies.
RUN npm install

# Copying the rest of the code.
COPY . . 

# Expose the port that the Node.js app will run on.
EXPOSE 3000

# Starting the app.
CMD ["npm", "start"]