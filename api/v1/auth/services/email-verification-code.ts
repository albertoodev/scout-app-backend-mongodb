import EmailVerificationCode from "../models/email-verification-code";
import IEmailVerificationCode from "../interfaces/email-verification-code";

const create = async (
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

const getAll = async (queries: any): Promise<IEmailVerificationCode[]> => {
  return await EmailVerificationCode.find(queries);
};

const getOne = async (id: string): Promise<IEmailVerificationCode | null> => {
  return await EmailVerificationCode.findById(id);
};

const update = async (
  id: string,
  data: any
): Promise<IEmailVerificationCode | null> => {
  return await EmailVerificationCode.findByIdAndUpdate(id, data, {
    new: true,
  });
};

const remove = async (id: string): Promise<IEmailVerificationCode | null> => {
  return await EmailVerificationCode.findByIdAndDelete(id);
};

export default {
  create,
  getAll,
  getOne,
  update,
  remove,
};
