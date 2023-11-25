import { Request, Response, NextFunction } from "express";
import { createCustomError } from "../errors/custom-error";
import constants from "../constants/constants";

const validateBodyInputs = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const body = req.body as Record<string, any>;
  for (const input in body) {
    if (constants.regExp[input] && !constants.regExp[input].test(body[input])) {
      throw createCustomError(`Please provide a valid ${input}`, 400);
    }
  }
  next();
};

export default validateBodyInputs;
