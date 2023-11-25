import { Request, Response } from "express";
import { createCustomError } from "../../../../utils/errors/custom-error";

const create = async (req: Request, res: Response): Promise<void> => {
  throw createCustomError("Not implemented", 501);
};

const verify = async (req: Request, res: Response): Promise<void> => {
  throw createCustomError("Not implemented", 501);
};

const getAll = async (req: Request, res: Response): Promise<void> => {
  throw createCustomError("Not implemented", 501);
};

const getById = async (req: Request, res: Response): Promise<void> => {
  throw createCustomError("Not implemented", 501);
};
/// this method is for updating the rule of the registration code or the usage of it (used or not)
const update = async (req: Request, res: Response): Promise<void> => {
  throw createCustomError("Not implemented", 501);
};

const remove = async (req: Request, res: Response): Promise<void> => {
  throw createCustomError("Not implemented", 501);
};

export default {
  create,
  verify,
  getAll,
  getById,
  update,
  remove,
};
