import { Document } from "mongoose";

interface IEmailVerificationCode extends Document {
  code: string;
  email: string;
  type: string;
  createdAt: Date;
  updatedAt?: Date;
}

export default IEmailVerificationCode;
