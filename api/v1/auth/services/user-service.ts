import User from "../models/user";
import IUser from "../interfaces/user";

const createUser = async (user: IUser): Promise<IUser> => {
  return await User.create(user);
};

const getUserById = async (id: string): Promise<IUser> => {
  return await User.findById(id).select("-password");
};

const getUserByEmail = async (email: string): Promise<IUser> => {
  return await User.findOne({ email }).select("-password");
};

const getUserByPhone = async (phone: string): Promise<IUser> => {
  return await User.findOne({ phone }).select("-password");
};

const getUsers = async (queries: any): Promise<IUser[]> => {
  return await User.find(queries).select("-password");
};

const updateUser = async (id: string, data: any): Promise<IUser | null> => {
  return await User.findOneAndUpdate({ _id: id }, data, {
    new: true,
    select: "-password",
  });
};

export default {
  createUser,
  getUserById,
  getUserByEmail,
  getUserByPhone,
  getUsers,
  updateUser,
};
