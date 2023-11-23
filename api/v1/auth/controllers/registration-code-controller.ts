import { Request, Response } from "express";
import { createCustomError } from "../../../../utils/errors/custom-error";

const createRegistrationCode = async (
  req: Request,
  res: Response
): Promise<void> => {
  throw createCustomError("Not implemented", 501);
};

const verifyRegistrationCode = async (
  req: Request,
  res: Response
): Promise<void> => {
  throw createCustomError("Not implemented", 501);
};

const getRegistrationCodes = async (
  req: Request,
  res: Response
): Promise<void> => {
  throw createCustomError("Not implemented", 501);
};

/// this method is for updating the rule of the registration code or the usage of it (used or not)
const updateRegistrationCode = async (
  req: Request,
  res: Response
): Promise<void> => {
  throw createCustomError("Not implemented", 501);
};

const deleteRegistrationCode = async (
  req: Request,
  res: Response
): Promise<void> => {
  throw createCustomError("Not implemented", 501);
};

export default {
  createRegistrationCode,
  verifyRegistrationCode,
  getRegistrationCodes,
  updateRegistrationCode,
  deleteRegistrationCode,
};
