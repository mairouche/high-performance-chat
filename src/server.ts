import express from "express";
import { WebSocketServer } from "ws";
import redisClient from "./redisClient";
import { ChatMessage } from "./chatMessage";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Chat server is running");
});

const server = app.listen(port, () => {
  console.log(`Web server is running on http://localhost:${port}`);
});

const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  console.log("Client connected");

  // Send chat history to new client
  redisClient.lRange("chat_message", 0, -1).then(
    (messages) => {
      messages.forEach((message) => {
        ws.send(message);
      });
    },
    (error) => {
      console.error("Error retrieving messages from Redis", error);
      return;
    }
  );

  ws.on("message", (data) => {
    const message: ChatMessage = JSON.parse(data.toString());
    message.timestamp = Date.now();
    const messageString = JSON.stringify(message);

    // Save message to Redis
    redisClient.rPush("chat_messages", messageString);
    redisClient.lTrim("chat_messages", -100, -1); // Keep only the last 100 messages

    // Broadcast message to all clients
    wss.clients.forEach((client) => {
      if (client.readyState === ws.OPEN) {
        client.send(messageString);
      }
    });
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

console.log("WebSocket server is running on ws://localhost:3000");
