import jwt, { JwtPayload } from "jsonwebtoken";
import constants from "../constants/constants";

const secretKey = constants.jwtSecretKey;
if (!secretKey) {
  throw new Error("JWT secret key is not defined.Check the constant file.");
}

/// i think i ll add the role to the payload later for the authorization middleware
const generateToken = (
  payload: { id: string; role: string; email: string },
  expiration: string
): string => {
  const token = jwt.sign(payload, secretKey, { expiresIn: expiration });
  return token;
};

const verifyPasswordResetToken = (token: string) => {
  const decodedToken = jwt.verify(token, secretKey) as JwtPayload;
  return decodedToken;
};

export { generateToken, verifyPasswordResetToken };
