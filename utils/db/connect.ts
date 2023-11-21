import mongoose from "mongoose";

export const connectDB = async function (url: string) {
  await mongoose.connect(url);
  mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB");
  });
};
