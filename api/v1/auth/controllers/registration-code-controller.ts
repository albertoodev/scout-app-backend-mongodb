import { Request, Response } from "express";
import { createCustomError } from "../../../../utils/errors/custom-error";
import IRegistrationCode from "../interfaces/registration-code";
import RegistrationCodeService from "../services/registration-code";

// create registration code
const create = async (req: Request, res: Response): Promise<void> => {
  const data: IRegistrationCode = req.body;
  const registrationCode = await RegistrationCodeService.create(data);
  if (!registrationCode) {
    throw createCustomError("Registration code not created", 500);
  }
  res.status(201).json({ registrationCode });
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
