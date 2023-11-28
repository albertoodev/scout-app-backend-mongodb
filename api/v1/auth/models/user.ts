import mongoose, { Schema } from "mongoose";
import IUser from "../interfaces/user";
import constants from "../../../../utils/constants/constants";
import userMiddlewares from "../../../../utils/db/middlewares/user";

const UserSchema: Schema<IUser> = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please provide a first name"],
    minlength: 3,
    maxlength: 20,
  },
  lastName: {
    type: String,
    required: [true, "Please provide a last name"],
    minlength: 3,
    maxlength: 20,
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

UserSchema.methods.comparePassword = function (
  this: IUser,
  candidatePassword: string
): Promise<boolean> {
  console.log(this);
  return userMiddlewares.verifyPassword(candidatePassword, this.password ?? "");
};

UserSchema.methods.output = function (this: IUser) {
  return {
    _id: this._id,
    firstName: this.firstName,
    lastName: this.lastName,
    email: this.email,
    phone: this.phone,
    bio: this.bio,
    code: this.code,
    role: (this.code as any).role,
    children: (this.code as any).children,
    createdAt: this.createdAt,
  };
};
UserSchema.pre("save", userMiddlewares.cryptPassword as any);
UserSchema.pre("save", userMiddlewares.decrementCodeLimit as any);
UserSchema.post("save", userMiddlewares.incrementCodeLimit as any);

const User = mongoose.model<IUser>("User", UserSchema);
export { IUser };
export default User;
