import mongoose, { Document, Schema } from "mongoose";
import {
  emailRegExp,
  emailVerificationCodeRegExp,
} from "../../../utils/reg-exp/reg-exp";

interface IEmailVerificationCode extends Document {
  code: string;
  email: string;
  type: string;
  createdAt: Date;
  updatedAt?: Date;
}

const EmailVerificationCodeSchema: Schema<IEmailVerificationCode> =
  new mongoose.Schema({
    code: {
      type: String,
      required: true,
      unique: true,
      match: [emailVerificationCodeRegExp, "Please provide a valid code"],
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      match: [emailRegExp, "Please provide a valid email"],
    },
    type: {
      type: String,
      enum: ["email", "forgot-password"],
      default: "email",
    },
    createdAt: {
      type: Date,
      expires: 60 * 5, // expires in 5 minutes
      default: Date.now,
    },
  });
const EmailVerificationCode = mongoose.model<IEmailVerificationCode>(
  "EmailVerificationCode",
  EmailVerificationCodeSchema
);
export { EmailVerificationCode, IEmailVerificationCode };
