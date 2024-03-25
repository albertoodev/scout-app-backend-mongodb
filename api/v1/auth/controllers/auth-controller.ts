import { Request, Response } from "express";
import { createCustomError } from "../../../../utils/errors/custom-error";
import userService from "../services/user-service";
import emailVerificationCodeService from "../services/email-verification-code";
import sendEmail, { MailType } from "../../../../utils/mailer/mailer";
import constants from "../../../../utils/constants/constants";
import { IUser } from "../models/user";
import { generateToken } from "../../../../utils/jwt/token-service";

// login
const login = async (req: Request, res: Response): Promise<void> => {
  const { email, phone, password } = req.body;
  let user;
  if (email) {
    user = await userService.getByEmail(email);
  } else if (phone) {
    user = await userService.getByPhone(phone);
  }
  if (!user) {
    throw createCustomError("User not found", 400);
  }
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw createCustomError("Invalid credentials", 400);
  }
  const token = generateToken(
    {
      id: user._id,
      email: user.email,
      role: (user.code as any).role,
    },
    "1h"
  );
  const data = user.output();
  res.status(200).json({
    data,
    token,
    message: "Logged in successfully",
  });
};

// registration
const verifyEmail = async (req: Request, res: Response): Promise<void> => {
  const { email } = req.body;
  const isUsed = await userService.isUsed({ email });
  if (isUsed) {
    throw createCustomError("Email is already used", 400);
  }
  const verCode = Math.floor(100000 + Math.random() * 900000);
  const code = await emailVerificationCodeService.create(
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
  sendEmail(options, (err, _) => {
    if (err) {
      throw err;
    }
    res.status(200).json({
      message: "Verification code sent successfully",
    });
  });
};

/// this method is for checking the verification code for only for email verification code
const checkVerificationCode = async (
  req: Request,
  res: Response
): Promise<void> => checkCode(req, res, "email");

const register = async (req: Request, res: Response): Promise<void> => {
  const data: IUser = req.body;
  const user = await userService.create(data);
  if (!user) {
    throw createCustomError("User not created", 500);
  }
  res.status(201).json({
    success: true,
    message: "User created successfully",
  });
};

// forgot password
const forgotPassword = async (req: Request, res: Response): Promise<void> => {
  const { email } = req.body;
  const isUsed = await userService.isUsed({ email });

  if (!isUsed) {
    throw createCustomError("User does not exist.", 404);
  }
  const verCode = Math.floor(100000 + Math.random() * 900000);
  const code = await emailVerificationCodeService.create(
    verCode.toString(),
    email,
    "forgot-password"
  );
  if (!code) {
    throw createCustomError("Something went wrong", 500);
  }
  // send mail with the code to reset password
  const options = {
    to: email,
    subject: "Reset Password Code",
    html: {
      mailType: MailType.RESET_PASSWORD,
      mailData: {
        email,
        code: verCode.toString(),
      },
    },
  };
  sendEmail(options, (err, _) => {
    if (err) {
      throw err;
    }
    res.status(200).json({
      message: "Verification code sent successfully",
    });
  });
};

const resetPassword = async (req: Request, res: Response): Promise<void> => {
  const { email, password, confirmPassword } = req.body;
  //validate password and confirm password
  if (password !== confirmPassword) {
    throw createCustomError("Passwords do not match", 400);
  }
  const user = await userService.update({ email }, { password });
  if (!user) {
    throw createCustomError("Email does not exist in our  database.", 404);
  }
  res.status(200).json({
    success: true,
    message: "Reset Password Successfully.",
  });
};

const checkResetPassCode = async (req: Request, res: Response): Promise<void> =>
  checkCode(req, res, "forgot-password");

const checkCode = async (
  req: Request,
  res: Response,
  type: "email" | "forgot-password"
): Promise<void> => {
  const { email, verCode } = req.body;
  const isExist = await emailVerificationCodeService.isExist(
    verCode,
    email,
    type
  );
  if (!isExist) {
    throw createCustomError("Invalid code", 400);
  }
  await emailVerificationCodeService.remove(isExist._id);
  res.status(200).json({
    valid: true,
    message: "The code is valid",
  });
};
export default {
  login,
  verifyEmail,
  checkVerificationCode,
  register,
  forgotPassword,
  resetPassword,
  checkResetPassCode,
};
