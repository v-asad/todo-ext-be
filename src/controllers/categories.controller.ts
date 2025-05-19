import { Prisma, PrismaClient } from "@prisma/client";
import { BaseController } from "./base.controller";

const prisma = new PrismaClient();

class CategoriesController extends BaseController<
  Prisma.CategoryCreateInput,
  Prisma.CategoryUpdateInput
> {
  constructor() {
    super(prisma, "category");
  }
}

export default CategoriesController;
