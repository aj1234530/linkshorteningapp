import express from "express";
import { redisClient } from "./redisClient"; //redis client import()
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());
app.post("/createshortlinks", async (req, res) => {
  try {
    console.log("hello");
    const {
      shortenedUrl,
      originalUrl,
    }: { shortenedUrl: string; originalUrl: string } = req.body;
    //get the unique thing form shortened url(localhost:3000/dub/12345678)
    console.log(req.body);
    //set to the redis and then in get link fetch from the redis
    redisClient.hSet(`urls:${shortenedUrl}`, {
      link: originalUrl,
      clicks: 0,
    });
    const url = await prisma.url.create({
      data: { shortenedUrl: shortenedUrl, originalUrl: originalUrl },
    });
    console.log(url);
    res.status(200).json({ message: "link shortend" });
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ message: "server error" });
  }
});

app.post("/getoriginallink", async (req, res) => {
  try {
    const { shortenedUrl } = req.body;
    // prisma.$transaction({}) - to avoid use the race condition(multiple requests) use the atomic transaction
    //retrieving from the redis
    // redisClient.hGet()
    const urlobject = await prisma.url.findFirst({
      where: { shortenedUrl: shortenedUrl },
    });
    //increase the counter
    if (urlobject) {
      await prisma.url.update({
        where: { id: urlobject.id },
        data: {
          counter: {
            increment: 1, //look at this syntax we can use increment
          },
        },
      });
    }

    console.log(shortenedUrl, urlobject);
    res.status(200).json({ originalUrl: urlobject?.originalUrl });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error encountered" });
  }
});

app.listen(8080);
