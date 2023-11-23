import { Router } from "express";
import userRouter from "./user-router";
import registrationCodeRouter from "./registration-code-router";
import authController from "../controllers/auth-controller";

const router = Router();

// user routes
router.use("/users", userRouter);
// registration code routes
router.use("/registration-codes", registrationCodeRouter);
// login routes
router.post("/login", authController.login);

// registration routes
router.post("/verify-email", authController.verifyEmail);
router.post("/check-verification-code", authController.checkVerificationCode);
router.post("/register", authController.register);

// forgot password routes
router
  .route("/reset-password")
  .post(authController.forgotPassword)
  .put(authController.resetPassword);

export default router;
