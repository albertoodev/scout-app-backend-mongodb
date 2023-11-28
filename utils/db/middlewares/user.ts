import { NextFunction } from "express";
import { DocumentType } from "../types";
import IUser from "../../../api/v1/auth/interfaces/user";
import { createCustomError } from "../../errors/custom-error";
import { IRegistrationCode } from "../../../api/v1/auth/models/registration-code";
import bcrypt from "bcrypt";

/// pre methods
// login
async function verifyPassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  return await bcrypt.compare(password, hashedPassword);
}

// register
async function decrementCodeLimit(
  this: DocumentType<IUser>,
  next: NextFunction
) {
  const code: IRegistrationCode | null = await getCodeLimit(this);

  if (code.limit === 0) {
    throw createCustomError("This registration code is already used", 400);
  }
  code.limit -= 1;
  code
    .save()
    .then((_) => {
      next();
    })
    .catch((err: any) => {
      throw err;
    });
}

async function incrementCodeLimit(
  error: Error,
  doc: DocumentType<IUser>,
  next: NextFunction
): Promise<void> {
  if (doc.isNew && error) {
    console.log("error in post fun");
    console.log(error);
    const code: IRegistrationCode | null = await getCodeLimit(doc);
    code.limit += 1;
    code
      .save()
      .then((_) => {
        next();
      })
      .catch((err: any) => {
        throw err;
      });
  }
}

async function cryptPassword(this: DocumentType<IUser>, next: NextFunction) {
  if (!this.isNew) {
    next();
  }
  if (!this.password) {
    throw createCustomError("Please provide a password", 400);
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
  next();
}

export {
  verifyPassword,
  cryptPassword,
  decrementCodeLimit,
  incrementCodeLimit,
};
export default {
  verifyPassword,
  cryptPassword,
  decrementCodeLimit,
  incrementCodeLimit,
};

/// private methods

const getCodeLimit = async (
  doc: DocumentType<IUser>
): Promise<IRegistrationCode> => {
  const code: IRegistrationCode | null = await doc
    .model("RegistrationCode")
    .findById(doc.code);

  if (!code) {
    throw createCustomError("Registration code not found", 404);
  }
  return code;
};
