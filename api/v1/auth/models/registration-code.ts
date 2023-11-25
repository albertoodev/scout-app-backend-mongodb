import mongoose, { Schema } from "mongoose";
import IRegistrationCode from "../interfaces/registration-code";

/// the id of the registration code is the registration code itself (string)
const RegistrationCodeSchema: Schema<IRegistrationCode> = new mongoose.Schema({
  role: {
    type: String,
    enum: ["admin", "leader", "parent"],
    default: "parent",
  },
  limit: {
    type: Number,
    default: 1,
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
    default: Date.now,
  },
});

const RegistrationCode = mongoose.model<IRegistrationCode>(
  "RegistrationCode",
  RegistrationCodeSchema
);

export default RegistrationCode;
