import { Router } from "express";

import UsersController from "../controllers/users.controller";

const usersRouter = Router();

const usersController = new UsersController();

usersRouter.get("/", usersController.getAll);
usersRouter.get("/:id", usersController.getOne);
usersRouter.post("/", usersController.create);
usersRouter.patch("/:id", usersController.update);
usersRouter.delete("/:id", usersController.delete);

export default usersRouter;
