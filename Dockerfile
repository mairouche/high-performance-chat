# Use official Nodejs image
FROM node:18

# Work directory
WORKDIR /usr/src/app

# Copy package.json & package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy sources files
COPY . .

# Compile Typescript
RUN npm run build

# Expose web server port
EXPOSE 3000

# Start the server
CMD ["npm", "start"]