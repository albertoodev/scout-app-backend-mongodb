import { Document } from "mongoose";

interface IEmailVerificationCode extends Document {
  verCode: string;
  email: string;
  type: string;
  createdAt: Date;
  updatedAt?: Date;
}

export default IEmailVerificationCode;
