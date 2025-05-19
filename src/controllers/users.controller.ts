import { Prisma, PrismaClient } from "@prisma/client";
import { BaseController } from "./base.controller";

const prisma = new PrismaClient();

class UsersController extends BaseController<
  Prisma.UserCreateInput,
  Prisma.UserUpdateInput
> {
  constructor() {
    super(prisma, "user");
  }
}

export default UsersController;
