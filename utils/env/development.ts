import dotenv from "dotenv";
dotenv.config();

export default {
  port: process.env.DPORT || 3000,
  dbUrl:
    process.env.DMONGO_URL || "mongodb://localhost:27017/scout-management-app",
  jwtSecretKey: process.env.JWT_SECRET_KEY || "default_secret_key",
  mailer: {
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: process.env.REDIRECT_URI,
    refreshToken: process.env.REFRESH_TOKEN,
    email: process.env.EMAIL,
  },
};
