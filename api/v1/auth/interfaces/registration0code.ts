import { Document } from "mongoose";

/// the id of the registration code is the registration code itself (string)
interface IRegistrationCode extends Document {
  used: boolean;
  role: string;
  createdAt: Date;
  updatedAt?: Date;
}
export default IRegistrationCode;
