import mongoose, { Document, Schema } from "mongoose";
import { IScout } from "../../scout/models/scout";
interface IUser extends Document {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  role: UserRole;
  bio?: string;
  children: mongoose.Types.ObjectId[] | IScout[];
  createdAt: Date;
  updatedAt: Date;
}

enum UserRole {
  admin = "admin",
  leader = "leader",
  parent = "parent",
}

export {
  IUser,
};
