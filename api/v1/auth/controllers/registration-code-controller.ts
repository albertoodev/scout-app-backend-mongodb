import { Request, Response } from "express";
import { createCustomError } from "../../../../utils/errors/custom-error";
import IRegistrationCode from "../interfaces/registration-code";
import RegistrationCodeService from "../services/registration-code";
import { listToObjectId, filterValidProperties } from "../../../../utils/utils";

// create registration code
const create = async (req: Request, res: Response): Promise<void> => {
  let data: IRegistrationCode = req.body;
  data.children = listToObjectId((data.children as string[]) ?? []);
  const registrationCode = await RegistrationCodeService.create(data);
  if (!registrationCode) {
    throw createCustomError("Registration code not created", 500);
  }
  res.status(201).json(registrationCode);
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
  const filter = filterValidProperties(["role"], req.query);
  const registrationCodes = await RegistrationCodeService.find(filter);
  if (!registrationCodes) {
    throw createCustomError("Registration codes not found", 404);
  }
  res.status(200).json(registrationCodes);
};

const getById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const registrationCode = await RegistrationCodeService.findById(id);
  if (!registrationCode) {
    throw createCustomError("Registration code not found", 404);
  }
  res.status(200).json(registrationCode);
};

/// this method is for updating the role of the registration code or the usage of it (used or not)
const update = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const data = filterValidProperties(["role", "limit", "children"], req.body);
  const registrationCode = await RegistrationCodeService.update(id, data);
  if (!registrationCode) {
    throw createCustomError("Registration code not found", 404);
  }
  res.status(200).json(registrationCode);
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
