# Use a lightweight Node.js base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json* ./
RUN npm install --production

# Copy the rest of your app
COPY . .

# Expose a port (optional, only if your app listens on one)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
