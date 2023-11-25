import { Types } from "mongoose";

const stringToObjectId = (id: string): Types.ObjectId => new Types.ObjectId(id);

const listToObjectId = (list: string[]): Types.ObjectId[] =>
  list.map((id) => stringToObjectId(id));
export { stringToObjectId, listToObjectId };
