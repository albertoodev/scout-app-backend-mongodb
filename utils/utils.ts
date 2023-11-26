import { Types } from "mongoose";

/// fore [mongoose]
const stringToObjectId = (id: string): Types.ObjectId => new Types.ObjectId(id);

const listToObjectId = (list: string[]): Types.ObjectId[] =>
  list.map((id) => stringToObjectId(id));

/// for [request]
const filterValidQueries = (
  validKeys: string[],
  queryParams: Record<string, any>
): Record<string, any> => {
  const filteredQueries: Record<string, any> = {};
  validKeys.forEach((input) => {
    if (queryParams[input]) filteredQueries[input] = queryParams[input];
  });
  return filteredQueries;
};

export {
  /// for [mongoose]
  stringToObjectId,
  listToObjectId,
  /// for [request]
  filterValidQueries,
};
