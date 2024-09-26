import express, { Request, Response } from "express";

export default function(): express.Application {
  const app = express();

  app.get("/", async (req: Request, res: Response) => {
    res.send("Hello World!");
  });

  return app;
};
