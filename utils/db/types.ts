import mongoose from "mongoose";

type DocumentType<T> = mongoose.Document<unknown, {}, mongoose.FlatRecord<T>> &
  mongoose.FlatRecord<T> & {
    _id: mongoose.Types.ObjectId;
  };

export { DocumentType };
