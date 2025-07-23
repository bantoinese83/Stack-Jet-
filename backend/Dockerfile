# Dockerfile for Development (backend)
FROM node:18-alpine
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy app source
COPY . .

# Start the development server (with nodemon)
CMD ["npm", "run", "dev"]
