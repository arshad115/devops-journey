import express, { Request, Response } from "express";

export default function(): express.Application {
  const app = express();
  const port = process.env.PORT || 3000;

  app.get("/", async (req: Request, res: Response) => {
    res.send("Hello World!");
  });

  return app;
};
