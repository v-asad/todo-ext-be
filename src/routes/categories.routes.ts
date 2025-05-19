import { Router } from "express";

import CategoriesController from "../controllers/categories.controller";

const categoriesRouter = Router();

const categoriesController = new CategoriesController();

categoriesRouter.get("/", categoriesController.getAll);
categoriesRouter.get("/:id", categoriesController.getOne);
categoriesRouter.post("/", categoriesController.create);
categoriesRouter.patch("/:id", categoriesController.update);
categoriesRouter.delete("/:id", categoriesController.delete);

export default categoriesRouter;
