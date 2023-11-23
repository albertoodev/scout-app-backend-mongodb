import mongoose, { Document, Schema } from "mongoose";
import { emailRegExp } from "../../../../utils/reg-exp/reg-exp";

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

const UserSchema: Schema<IUser> = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 20,
  },
  lastName: {
    type: String,
    required: [true, "Please provide a last name"],
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    match: [emailRegExp, "Please provide a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    select: false,
  },
  phone: {
    type: String,
    required: [true, "Please provide a phone number"],
    unique: true,
  },
  role: {
    type: String,
    enum: ["admin", "leader", "parent"],
    default: "parent",
  },
  bio: {
    type: String,
  },
  children: [
    {
      type: Schema.Types.ObjectId,
      ref: "Scout",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

const User = mongoose.model<IUser>("User", UserSchema);

export { User, IUser };
