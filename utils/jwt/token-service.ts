import jwt, { JwtPayload } from "jsonwebtoken";
import env from "../env/env";

const secretKey = env.jwtSecretKey;
if (!secretKey) {
  throw new Error("JWT secret key is not defined.Check env.");
}

/// i think i ll add the role to the payload later for the authorization middleware
const generatePasswordResetToken = (
  id: string,
  email: string,
  expiration: string
): string => {
  const payload = { id, email };
  const token = jwt.sign(payload, secretKey, { expiresIn: expiration });
  return token;
};

const verifyPasswordResetToken = (token: string) => {
  const decodedToken = jwt.verify(token, secretKey) as JwtPayload;
  return decodedToken;
};

export { generatePasswordResetToken, verifyPasswordResetToken };
