import mongoose, { Document } from "mongoose";
import IRegistrationCode from "./registration-code";

interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  bio?: string;
  code: mongoose.Types.ObjectId | IRegistrationCode;
  createdAt?: Date;
}

export default IUser;

/// i made this interface to be used when returning user data to the client
/// so that the password field is not returned to the client
/// nor the code and the children infos
/// i ll return only the ids of the children and the user role

interface IUserOutput {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  bio?: string;
  role: string;
  children?: mongoose.Types.ObjectId[];
  createdAt: Date;
  updatedAt?: Date;
}

export { IUserOutput };
