import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/custom-error";

const errorHandlerMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err);
  if (err instanceof CustomError)
    return res.status(err.statusCode).send({ message: err.message });
  return res.status(500).send({ message: "Something went wrong" });
};

export default errorHandlerMiddleware;
