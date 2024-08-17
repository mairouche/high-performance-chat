# High-performance Chat with Typescript, Redis and Websockets

![Medium](https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white)

## Medium article about this repository

[High-performance Chat with Websocket & Redis in 10min !](https://medium.com/@meidi.airouche/high-performance-chat-with-websocket-redis-in-10min-0498ffaa43b4)

## Project structure

```css
.
├── docker-compose.yml
├── Dockerfile
├── src
│   ├── index.ts
│   ├── server.ts
│   ├── redisClient.ts
│   └── types.ts
├── tsconfig.json
└── package.json
```

## Get started

Launch the backend stack (Nodejs server + redis) with :

```bash
docker-compose up --build
```

Open the `index.html` file in your web browser and start sending messages !
