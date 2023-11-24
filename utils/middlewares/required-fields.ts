import { Request, Response, NextFunction } from "express";
import { createCustomError } from "../errors/custom-error";

const requiredFields = (reqFields: string[][]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const body = req.body as Record<string, any>;

    const hasValidCombination = reqFields.some((fields) =>
      fields.every((field) => field in body)
    );

    if (!hasValidCombination) {
      throw createCustomError("Missing required fields", 400);
    }

    // At least one valid combination of fields is present, proceed to the next middleware or route handler
    next();
  };
};

export default requiredFields;
