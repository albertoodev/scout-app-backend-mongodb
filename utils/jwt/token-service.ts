import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const secretKey = process.env.JWT_SECRET_KEY;
if (!secretKey) {
  throw new Error("JWT secret key is not defined.Check env.");
}

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
