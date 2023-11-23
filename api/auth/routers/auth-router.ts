import { Router } from "express";
import authController from "../controllers/auth-controller";

const router = Router();

// login routes
router.post("/login", authController.login);

// registration routes
router.post("/verifyEmail", authController.verifyEmail);
router.post("/checkVerificationCode", authController.checkVerificationCode);
router.post("/register", authController.register);

// forgot password routes
router
  .route("/reset-password")
  .post(authController.forgotPassword)
  .put(authController.resetPassword);

export default router;
