import mongoose, { Schema } from "mongoose";
import IRegistrationCode from "../interfaces/registration0code";

/// the id of the registration code is the registration code itself (string)
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

export default RegistrationCode;
