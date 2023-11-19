import mongoose from "mongoose";

export function connectDB(url: string): void {
  mongoose.connect(url);
  mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB");
  });
}
