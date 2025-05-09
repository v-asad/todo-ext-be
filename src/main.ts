import express, { Request, Response } from "express";
import dotenv from "dotenv";
import mainRouter from "./routes";

/** CONFIGURATIONS */
dotenv.config();

/** GLOBALS */
const PORT = process.env.PORT;

const app = express();

/** MIDDLEWARES */
app.use(express.json());

/** ROUTES */
app.use("/", mainRouter);

/** LISTENERS */
app.listen(PORT, () => console.info("Listening on ::" + PORT));
