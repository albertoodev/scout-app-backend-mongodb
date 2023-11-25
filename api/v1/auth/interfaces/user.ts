import mongoose, { Document } from "mongoose";

interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  bio?: string;
  code: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt?: Date;
}

export default IUser;