import express from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());
app.post("/createshortlinks", async (req, res) => {
  try {
    console.log("hello");
    const { shortenedUrl, originalUrl } = req.body;
    console.log(req.body);
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

app.get("/getoriginallink", async (req, res) => {
  try {
    const { shortenedUrl } = req.body;
    const urlobject = await prisma.url.findFirst({
      where: { shortenedUrl: shortenedUrl },
    });
    res.status(200).json({ originalUrl: urlobject?.originalUrl });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error encountered" });
  }
});

app.listen(8080);
