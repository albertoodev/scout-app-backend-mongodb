import User from "../models/user";
import IUser from "../interfaces/user";

const create = async (user: IUser): Promise<IUser> => {
  return await User.create(user);
};

const getById = async (id: string): Promise<IUser> => {
  return await User.findById(id).select("-password");
};

const getByEmail = async (email: string): Promise<IUser> => {
  return await User.findOne({ email }).select("-password");
};

const getByPhone = async (phone: string): Promise<IUser> => {
  return await User.findOne({ phone }).select("-password");
};

const getAll = async (queries: any): Promise<IUser[]> => {
  return await User.find(queries).select("-password");
};

const update = async (id: string, data: any): Promise<IUser | null> => {
  return await User.findOneAndUpdate({ _id: id }, data, {
    new: true,
    select: "-password",
  });
};
const remove = async (id: string): Promise<IUser | null> => {
  return await User.findByIdAndDelete(id);
};

export default {
  create,
  getById,
  getByEmail,
  getByPhone,
  getAll,
  update,
  remove,
};
