# ---- Backend Dockerfile ----
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy dependency files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your backend source code
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Expose backend port
EXPOSE 4000

# Start backend server
CMD ["npm", "run", "dev"]
