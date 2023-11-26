import e, { Request, Response } from "express";
import { createCustomError } from "../../../../utils/errors/custom-error";
import userService from "../services/user-service";
import EmailVerificationCodeService from "../services/email-verification-code";
import sendEmail, { MailType } from "../../../../utils/mailer/mailer";
// login
const login = async (req: Request, res: Response): Promise<void> => {
  throw createCustomError("Not implemented", 501);
};

// registration
const verifyEmail = async (req: Request, res: Response): Promise<void> => {
  const { email } = req.body;
  const isUsed = await userService.isUsed({ email });
  if (isUsed) {
    throw createCustomError("Email is already used", 400);
  }
  const verCode = Math.floor(100000 + Math.random() * 900000);
  const code = await EmailVerificationCodeService.create(
    verCode.toString(),
    email
  );
  if (!code) {
    throw createCustomError("Something went wrong", 500);
  }
  const options = {
    to: email,
    subject: "Email Verification Code",
    html: {
      mailType: MailType.VERIFICATION_CODE,
      mailData: {
        email,
        code: verCode.toString(),
      },
    },
  };
  sendEmail(options, (err, info) => {
    if (err) {
      throw err;
    }
    res.status(200).json({
      message: "Verification code sent successfully",
    });
  });
};

/// this method is for checking the verification code for email and forgot password
const checkVerificationCode = async (
  req: Request,
  res: Response
): Promise<void> => {
  throw createCustomError("Not implemented", 501);
};

const register = async (req: Request, res: Response): Promise<void> => {
  throw createCustomError("Not implemented", 501);
};

// forgot password
const forgotPassword = async (req: Request, res: Response): Promise<void> => {
  throw createCustomError("Not implemented", 501);
};

const resetPassword = async (req: Request, res: Response): Promise<void> => {
  throw createCustomError("Not implemented", 501);
};

export default {
  login,
  verifyEmail,
  checkVerificationCode,
  register,
  forgotPassword,
  resetPassword,
};
