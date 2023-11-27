import User from "../models/user";
import IUser, { IUserOutput } from "../interfaces/user";

const create = async (user: IUser): Promise<IUserOutput> => {
  return (await User.create(user)) as IUserOutput;
};

const getById = async (id: string): Promise<IUser> => {
  return await User.findById(id).select("-password");
};

const getByEmail = async (email: string): Promise<IUser> => {
  return await User.findOne({ email }).select("-password");
};

const isUsed = async (data: any): Promise<boolean> => {
  const user = await User.findOne(data);
  return !!user;
};

const getByPhone = async (phone: string): Promise<IUser> => {
  return await User.findOne({ phone }).select("-password");
};

const getAll = async (queries: any): Promise<IUserOutput[]> => {
  const users: any = await User.find(queries)
    .populate("code", "role children")
    .select("-password");
  return users.map((user: any) => {
    return {
      ...user.toJSON(),
      code: user.code._id,
      role: user.code.role,
      children: user.code.children,
    };
  });
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
  isUsed,
};
