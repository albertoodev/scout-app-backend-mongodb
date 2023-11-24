import EmailVerificationCode from "../models/email-verification-code";
import IEmailVerificationCode from "../interfaces/email-verification-code";

const createEmailVerificationCode = async (
  code: string,
  email: string,
  type: string
): Promise<IEmailVerificationCode> => {
  const verificationCode = new EmailVerificationCode({
    code,
    email,
    type,
  });
  return await verificationCode.save();
};

export default {
  createEmailVerificationCode,
};