import { Request, Response, NextFunction } from "express";
import { createCustomError } from "../errors/custom-error";

const asyncWrapper = (fn: Function) => {
  /// maybe i ll change the syntax later and use the express-async-errors package or use the try catch for custom error handling
  return function (req: Request, res: Response, next: NextFunction) {
    fn(req, res, next).catch((err: Error) =>
      next(createCustomError(err.message, 500))
    );
  };
};

export default asyncWrapper;
