import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.get("/", (_: Request, res: Response) => {
  res.send("Welcome");
});

app.listen(PORT, () => console.info("Listening on ::" + PORT));
