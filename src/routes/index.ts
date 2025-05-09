import { Router } from "express";
import categoriesRouter from "./categories.routes";

const mainRouter = Router();

mainRouter.use("/categories", categoriesRouter);

export default mainRouter;
