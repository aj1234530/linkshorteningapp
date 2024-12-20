import { createClient } from "redis";
export const redisClient = createClient();
redisClient.on("error", (err) => console.log("Redis Client Error", err));
redisClient
  .connect()
  .then(() => console.log("coonected"))
  .catch((err) => console.log(err));

console.log("sdafdsjl");
