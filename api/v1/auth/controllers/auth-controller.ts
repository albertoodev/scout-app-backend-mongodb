import { Request, Response } from "express";
import { createCustomError } from "../../../../utils/errors/custom-error";

// login
const login = async (req: Request, res: Response): Promise<void> => {
  throw createCustomError("Not implemented", 501);
};

// registration
const verifyEmail = async (req: Request, res: Response): Promise<void> => {
  throw createCustomError("Not implemented", 501);
};

/// this method is for checking the verification code for email and forgot password
const checkVerificationCode = async (
  req: Request,
  res: Response
): Promise<void> => {
  throw createCustomError("Not implemented", 501);
};

const register = async (req: Request, res: Response): Promise<void> => {
  throw createCustomError("Not implemented", 501);
};

// forgot password
const forgotPassword = async (req: Request, res: Response): Promise<void> => {
  throw createCustomError("Not implemented", 501);
};

const resetPassword = async (req: Request, res: Response): Promise<void> => {
  throw createCustomError("Not implemented", 501);
};

export default {
  login,
  verifyEmail,
  checkVerificationCode,
  register,
  forgotPassword,
  resetPassword,
};
