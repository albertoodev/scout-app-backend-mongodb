import EmailVerificationCode from "../models/email-verification-code";
import IEmailVerificationCode from "../interfaces/email-verification-code";

const create = async (
  code: string,
  email: string,
  type?: string
): Promise<IEmailVerificationCode> => {
  const verificationCode = new EmailVerificationCode({
    code,
    email,
    type,
  });
  return await verificationCode.save();
};
const update = async (
  email: string,
  type: string,
  verCode: string
): Promise<IEmailVerificationCode | null> => {
  return await EmailVerificationCode.findOneAndUpdate(
    { email, type },
    { verCode },
    { new: true }
  );
};

const remove = async (id: string): Promise<IEmailVerificationCode | null> => {
  return await EmailVerificationCode.findByIdAndDelete(id);
};

export default {
  create,
  update,
  remove,
};
