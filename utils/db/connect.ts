import mongoose from "mongoose";

export const connectDB = function (url: string) {
  mongoose.connect(url);
  mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB");
  });
};
