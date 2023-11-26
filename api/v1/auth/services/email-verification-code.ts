import EmailVerificationCode from "../models/email-verification-code";
import IEmailVerificationCode from "../interfaces/email-verification-code";

const create = async (
  verCode: string,
  email: string,
  type?: string
): Promise<IEmailVerificationCode> => {
  const verificationCode = new EmailVerificationCode({
    verCode,
    email,
    type,
  });
  return await verificationCode.save();
};

const isExist = async (
  verCode: string,
  email: string,
  type: string
): Promise<boolean> => {
  return !!(await EmailVerificationCode.findOne({
    email,
    type,
    verCode,
  }).select("verCode"));
};

const remove = async (id: string): Promise<IEmailVerificationCode | null> => {
  return await EmailVerificationCode.findByIdAndDelete(id);
};

export default {
  create,
  isExist,
  remove,
};
