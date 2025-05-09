import { Request, Response, Router } from "express";

const categoriesRouter = Router();

categoriesRouter.get("/", (req: Request, res: Response) => {
  res.send("Categories");
});

export default categoriesRouter;
