import mongoose, { Schema } from "mongoose";
import regExp from "../../../../utils/reg-exp/reg-exp";
import IUser from "../interfaces/user";

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
    match: [regExp.email, "Please provide a valid email"],
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

  bio: {
    type: String,
  },
  code: {
    type: Schema.Types.ObjectId,
    ref: "EmailVerificationCode",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

const User = mongoose.model<IUser>("User", UserSchema);

export default User;
