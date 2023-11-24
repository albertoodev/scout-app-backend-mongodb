import { Router } from "express";
import userRouter from "./user-router";
import registrationCodeRouter from "./registration-code-router";
import authController from "../controllers/auth-controller";
import requiredFields from "../../../../utils/middlewares/required-fields";

const router = Router();

// user routes
router.use("/users", userRouter);

// registration code routes
router.use("/registration-codes", registrationCodeRouter);

// login routes
router.post(
  "/login",
  requiredFields([
    ["phone", "password"],
    ["email", "password"],
  ]),
  authController.login
);

// registration routes
router.post(
  "/verify-email",
  requiredFields([["email"]]),
  authController.verifyEmail
);

router.post(
  "/check-verification-code",
  requiredFields([["email", "code"]]),
  authController.checkVerificationCode
);

router.post(
  "/register",
  requiredFields([
    ["firstName", "lastName", "email", "password", "phone", "code"],
  ]),
  authController.register
);

// forgot password routes
router
  .route("/reset-password")
  .post(requiredFields([["email"]]), authController.forgotPassword)
  .put(
    requiredFields([["email", "password", "confirmPassword"]]),
    authController.resetPassword
  );

export default router;
