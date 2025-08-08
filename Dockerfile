# Use a small, secure Node.js base image
FROM node:20-alpine AS base

# Set working directory
WORKDIR /app

# Install only production dependencies (faster & smaller image)
COPY package*.json ./
RUN npm ci --omit=dev

# Copy the rest of the application
COPY . .

# Ensure the container runs as a non-root user for security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Expose the app port
EXPOSE 3000

# Run the app
CMD ["node", "index.js"]
