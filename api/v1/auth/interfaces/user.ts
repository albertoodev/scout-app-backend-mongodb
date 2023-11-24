import mongoose, { Document } from "mongoose";

interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  role: string;
  bio?: string;
  children?: mongoose.Types.ObjectId[];
  createdAt: Date;
  updatedAt?: Date;
}

export default IUser;
