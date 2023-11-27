import mongoose, { Schema } from "mongoose";
import IUser from "../interfaces/user";
import constants from "../../../../utils/constants/constants";
import userMiddlewares from "../../../../utils/db/middlewares/user";

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
    match: [constants.regExp.email, "Please provide a valid email"],
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
    ref: "RegistrationCode",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre("save", userMiddlewares.decrementCodeLimit as any);
UserSchema.post("save", userMiddlewares.incrementCodeLimit as any);

const User = mongoose.model<IUser>("User", UserSchema);
export { IUser };
export default User;
