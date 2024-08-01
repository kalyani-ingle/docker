# Base image
FROM node:14

# Set working directory
WORKDIR /usr/src/app

# Copies files or directories from the host machine to the container.
COPY package*.json ./

# Run commands
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Informs Docker that the container listens on specified ports
Expose 8080

# Command to run when container starts
CMD ["node", "server.js"]
