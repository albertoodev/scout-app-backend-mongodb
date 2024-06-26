import User from "../models/user";
import IUser from "../interfaces/user";

const create = async (user: IUser): Promise<IUser> => {
  return (await User.create(user)) as IUser;
};

const getById = async (id: string) => {
  let user = await User.findById(id).populate("code", "role children");
  console.log(user);
  return user?.output();
};

const getByEmail = async (email: string): Promise<IUser> => {
  return await User.findOne({ email })
    .populate("code", "role children")
    .select("+password");
};

const getByPhone = async (phone: string): Promise<IUser> => {
  return await User.findOne({ phone })
    .populate("code", "role children")
    .select("+password");
};

const isUsed = async (data: any): Promise<boolean> => {
  const user = await User.findOne(data);
  return !!user;
};

const getAll = async (queries: any): Promise<IUser[]> => {
  const users: any = await User.find(queries).populate("code", "role children");
  return users.map((user: IUser) => user.output());
};

const update = async (findQuery:any, data: any): Promise<IUser | null> => {
  return await User.findOneAndUpdate(findQuery, data, {
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
