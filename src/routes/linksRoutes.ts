import express, { Request, Response } from "express";
import {
  createShortLinks,
  getoriginalLink,
} from "../controllers/linksControllers";
import { authSessionMiddleware } from "../middlewares/authMiddleware";
export const linkRouter = express.Router();

linkRouter.post("/test/getorginallink", getoriginalLink);

linkRouter.post("/createshortlinks", authSessionMiddleware, createShortLinks);

// linkRouter.post("/getoriginallink", getoriginalLink);//it is based on the frontend redirect using window.location.href

//testing res.reidrect without auth at /api/v1/user/redirect - works default status in inspect is 301
//note i use get request so that i can use this api in browser(what it means?)

//but how you will send this response to the frontend
linkRouter.get("/redirect", (req: Request, res: Response) => {
  res.redirect("https://www.chatgpt.com");
});