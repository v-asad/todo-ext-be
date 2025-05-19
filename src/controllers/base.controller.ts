import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

export class BaseController<TCreateInput, TUpdateInput> {
  protected model: any;
  protected modelName: string;

  constructor(prismaClient: PrismaClient, modelAccessor: keyof PrismaClient) {
    this.model = prismaClient[modelAccessor];
    this.modelName = modelAccessor as string;
  }

  create = async (req: Request, res: Response) => {
    try {
      const data: TCreateInput = req.body;
      const result = await this.model.create({ data });
      res.status(201).json(result);
    } catch (err) {
      console.error(`[${this.modelName}] Create Error:`, err);
      res.status(400).json({ error: "Create failed" });
    }
  };

  getAll = async (req: Request, res: Response) => {
    try {
      const result = await this.model.findMany();
      res.json(result);
    } catch (err) {
      console.error(`[${this.modelName}] GetAll Error:`, err);
      res.status(500).json({ error: "Fetch failed" });
    }
  };

  getOne = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const result = await this.model.findUnique({ where: { id } });
      if (!result)
        res.status(404).json({ error: `${this.modelName} not found` });
      else res.json(result);
    } catch (err) {
      console.error(`[${this.modelName}] GetOne Error:`, err);
      res.status(400).json({ error: "Fetch failed" });
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const data: TUpdateInput = req.body;
      const result = await this.model.update({ where: { id }, data });
      res.json(result);
    } catch (err) {
      console.error(`[${this.modelName}] Update Error:`, err);
      res.status(400).json({ error: "Update failed" });
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const result = await this.model.delete({ where: { id } });
      res.json(result);
    } catch (err) {
      console.error(`[${this.modelName}] Delete Error:`, err);
      res.status(400).json({ error: "Delete failed" });
    }
  };
}
