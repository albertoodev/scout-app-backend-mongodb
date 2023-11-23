import { Request, Response } from "express";
import { createCustomError } from "../../../../utils/errors/custom-error";

const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  throw createCustomError("Not implemented", 501);
};

const getUser = async (req: Request, res: Response): Promise<void> => {
  throw createCustomError("Not implemented", 501);
};

const updateUser = async (req: Request, res: Response): Promise<void> => {
  throw createCustomError("Not implemented", 501);
};

const deleteUser = async (req: Request, res: Response): Promise<void> => {
  throw createCustomError("Not implemented", 501);
};

export default {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
};
