import { Request, Response } from "express";
import { createCustomError } from "../../../../utils/errors/custom-error";
import userService from "../services/user-service";
import { filterValidProperties } from "../../../../utils/utils";

const getAll = async (req: Request, res: Response): Promise<void> => {
  const filter = filterValidProperties(["role", "code"], req.query);
  const users = await userService.getAll(filter);
  if (!users) {
    throw createCustomError("Users not found", 404);
  }
  res.status(200).json(users);
};

const getUser = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const user = await userService.getById(id);
  if (!user) {
    throw createCustomError("User not found", 404);
  }
  res.status(200).json(user);
};

/// still need to implement change registration code for only the admins without forgetting the code limit ofc  
const updateUser = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const data = filterValidProperties(["firstName", "lastName", "phone","email","code"], req.body);
  const user = await userService.update(id, data);
  if (!user) {
    throw createCustomError("User not found", 404);
  }
  res.status(200).json(user);
};

const deleteUser = async (req: Request, res: Response): Promise<void> => {
  throw createCustomError("Not implemented", 501);
};

export default {
  getAll,
  getUser,
  updateUser,
  deleteUser,
};
