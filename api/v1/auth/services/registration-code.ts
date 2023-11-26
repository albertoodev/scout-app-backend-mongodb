import IRegistrationCode from "../interfaces/registration-code";
import RegistrationCode from "../models/registration-code";

const create = async (data: any): Promise<IRegistrationCode> => {
  return await RegistrationCode.create(data);
};

const find = async (queries: any): Promise<IRegistrationCode[]> => {
  return await RegistrationCode.find(queries);
};

const findById = async (code: string): Promise<IRegistrationCode | null> => {
  return await RegistrationCode.findById(code);
};

const update = async (
  id: string,
  data: any
): Promise<IRegistrationCode | null> => {
  return RegistrationCode.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
};

const remove = async (code: string): Promise<IRegistrationCode | null> => {
  return await RegistrationCode.findByIdAndDelete(code);
};

export default {
  create,
  find,
  findById,
  update,
  remove,
};
