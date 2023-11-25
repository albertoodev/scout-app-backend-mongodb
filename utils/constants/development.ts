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
  regExp: {
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
    phone: /^(05|06|07)\d{8}$/, // only for algerian local phone numbers
    verCode: /^\d{6}$/,
    code: /^[0-9a-fA-F]{24}$/, // only for mongodb object id
  } as Record<string, RegExp>,
};
