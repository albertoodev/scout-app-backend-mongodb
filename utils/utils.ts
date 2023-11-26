import { Types } from "mongoose";

/// fore [mongoose]
const stringToObjectId = (id: string): Types.ObjectId => new Types.ObjectId(id);

const listToObjectId = (list: string[]): Types.ObjectId[] =>
  list.map((id) => stringToObjectId(id));

const filterValidProperties = (
  validKeys: string[],
  properties: Record<string, any>
): Record<string, any> => {
  const filteredProperties: Record<string, any> = {};
  validKeys.forEach((input) => {
    if (properties[input]) filteredProperties[input] = properties[input];
  });
  return filteredProperties;
};

export {
  /// for [mongoose]
  stringToObjectId,
  listToObjectId,
  /// for [request]
  filterValidProperties,
};
