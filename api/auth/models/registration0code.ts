import mongoose, { Document, Schema } from "mongoose";

/// the id of the registration code is the registration code itself (string)
interface IRegistrationCode extends Document {
  used: boolean;
  role: string;
  createdAt: Date;
  updatedAt?: Date;
}

const RegistrationCodeSchema: Schema<IRegistrationCode> = new mongoose.Schema({
  used: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    enum: ["admin", "leader", "parent"],
    default: "parent",
  },
  createdAt: {
    type: Date,
    expires: 60 * 5, // expires in 5 minutes
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const RegistrationCode = mongoose.model<IRegistrationCode>(
  "RegistrationCode",
  RegistrationCodeSchema
);

export { RegistrationCode, IRegistrationCode };
