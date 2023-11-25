import mongoose, { Document } from "mongoose";

/// the id of the registration code is the registration code itself (string)
interface IRegistrationCode extends Document {
  role: string;
  limit: number;
  children?: mongoose.Types.ObjectId[];
  createdAt: Date;
}
export default IRegistrationCode;
