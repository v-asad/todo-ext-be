import { Prisma, PrismaClient } from "@prisma/client";
import { BaseController } from "./base.controller";

const prisma = new PrismaClient();

class TodoItemsController extends BaseController<
  Prisma.TodoItemCreateInput,
  Prisma.TodoItemUpdateInput
> {
  constructor() {
    super(prisma, "todoItem");
  }
}

export default TodoItemsController;
