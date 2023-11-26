import { Request, Response } from "express";
import { createCustomError } from "../../../../utils/errors/custom-error";
import IRegistrationCode from "../interfaces/registration-code";
import RegistrationCodeService from "../services/registration-code";
import { listToObjectId } from "../../../../utils/db/utils";

// create registration code
const create = async (req: Request, res: Response): Promise<void> => {
  let data: IRegistrationCode = req.body;
  data.children = listToObjectId((data.children as string[]) ?? []);
  const registrationCode = await RegistrationCodeService.create(data);
  if (!registrationCode) {
    throw createCustomError("Registration code not created", 500);
  }
  res.status(201).json({ registrationCode });
};

// verify registration code
const verify = async (req: Request, res: Response): Promise<void> => {
  const { code } = req.params;
  const registrationCode = await RegistrationCodeService.findById(code);
  const found = !!registrationCode;
  res.status(200).json({
    found,
  });
};

const getAll = async (req: Request, res: Response): Promise<void> => {
  const { role } = req.query;
  let filter = {};
  if (role) {
    filter = { role: role.toString() };
  }
  const registrationCodes = await RegistrationCodeService.find(filter);
  if (!registrationCodes) {
    throw createCustomError("Registration codes not found", 404);
  }
  res.status(200).json({ registrationCodes });
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
