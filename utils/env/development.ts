import dotenv from "dotenv";
dotenv.config();

export default {
  port: process.env.PORT || 3000,
  dbUrl:
    process.env.MONGO_URL || "mongodb://localhost:27017/scout-management-app",
  mailer: {
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: process.env.REDIRECT_URI,
    refreshToken: process.env.REFRESH_TOKEN,
    email: process.env.EMAIL,
  },
};
