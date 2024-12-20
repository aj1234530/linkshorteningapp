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
    }: { shortenedUrl: string; originalUrl: any } = req.body;

    console.log(req.body, "received from the body"); //

    //set to the redis and then in get link fetch from the redis
    await redisClient.hSet(`urls:/dub/${shortenedUrl}`, {
      link: originalUrl,
      clicks: 0,
    });
    // const url = await prisma.url.create({
    //   data: { shortenedUrl: shortenedUrl, originalUrl: originalUrl },
    // });
    // console.log(url);
    res.status(200).json({
      message: "link shortened",
      shortenedUrl: `localhost:5173/dub/${shortenedUrl}`,
    });
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ message: "server error" });
  }
});

app.post("/getoriginallink", async (req, res) => {
  try {
    const { shortenedUrl } = req.body;
    console.log(shortenedUrl, "fafsffsffdsfsd"); //check the data received
    // //redis logic to get the original link
    const originalUrl = await redisClient.hGet(`urls:${shortenedUrl}`, "link");
    await redisClient.hIncrBy(`url:${shortenedUrl}`, "clicks", 1);
    console.log(originalUrl);
    //commented out the prisma logic
    // const urlobject = await prisma.url.findFirst({
    //   where: { shortenedUrl: shortenedUrl },
    // });
    //increase the counter
    // if (urlobject) {
    //   await prisma.url.update({
    //     where: { id: urlobject.id },
    //     data: {
    //       counter: {
    //         increment: 1, //
    //       },
    //     },
    //   });
    //   console.log(shortenedUrl, urlobject);
    // }
    // res.status(200).json({ originalUrl: urlobject?.originalUrl });
    res.status(200).json({ originalUrl: originalUrl });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error encountered" });
  }
});

app.listen(8080);
