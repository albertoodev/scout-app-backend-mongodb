import { Request, Response, NextFunction } from "express";
import { JwtPayload } from "jsonwebtoken";
import { verifyPasswordResetToken } from "../jwt/token-service";
import env from "../env/env";
import { create } from "domain";
import { createCustomError } from "../errors/custom-error";

const SECRET_KEY: string = env.jwtSecretKey;
if (!SECRET_KEY) {
  throw new Error(
    "JWT secret key is not defined. Please set the JWT_SECRET_KEY environment variable."
  );
}

export interface AuthenticatedRequest extends Request {
  decodedToken?: JwtPayload;
}

export function authenticateMiddleware(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void {
  const token = req.header("Authorization");

  if (!token) {
    throw createCustomError("Authorization token not exist", 401);
  }

  try {
    const decodedToken = verifyPasswordResetToken(token);

    req.decodedToken = decodedToken;
    next();
  } catch (error) {
    throw createCustomError("Invalid authorization token.", 401);
  }
}
