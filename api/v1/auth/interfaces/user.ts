import mongoose, { Document } from "mongoose";
import IRegistrationCode from "./registration-code";

interface IUser extends Document {
  [x: string]: any;
  firstName: string;
  lastName: string;
  email: string;
  password: string | undefined;
  phone: string;
  bio?: string;
  code: mongoose.Types.ObjectId | IRegistrationCode;
  createdAt?: Date;
  output(): {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    bio?: string;
    code: string;
    role: string;
    children: string[];
    createdAt?: Date;
  };
}

export default IUser;
