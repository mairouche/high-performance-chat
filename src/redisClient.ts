import { createClient } from "redis";

const client = createClient({
  url: "redis://redis:6379", // we'll create the docker image later
});

client.on("error", (err) => {
  console.error("Redis Client Error", err);
});

client.connect();

export default client;
