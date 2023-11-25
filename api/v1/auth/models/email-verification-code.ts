import mongoose, { Schema } from "mongoose";
import constants from "../../../../utils/constants/constants";
import IEmailVerificationCode from "../interfaces/email-verification-code";

const EmailVerificationCodeSchema: Schema<IEmailVerificationCode> =
  new mongoose.Schema({
    verCode: {
      type: String,
      required: true,
      unique: true,
      match: [constants.regExp.code, "Please provide a valid code"],
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      match: [constants.regExp.email, "Please provide a valid email"],
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
export default EmailVerificationCode;
