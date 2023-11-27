import { NextFunction } from "express";
import { DocumentType } from "../types";
import IUser from "../../../api/v1/auth/interfaces/user";
import { createCustomError } from "../../errors/custom-error";
import { IRegistrationCode } from "../../../api/v1/auth/models/registration-code";

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

export { decrementCodeLimit, incrementCodeLimit };
export default { decrementCodeLimit, incrementCodeLimit };

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
