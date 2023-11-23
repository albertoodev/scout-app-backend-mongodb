import { Router } from "express";
import registrationsCodeController from "../controllers/registration-code-controller";

const router = Router();

router
  .route("/")
  .post(registrationsCodeController.createRegistrationCode)
  .get(registrationsCodeController.getRegistrationCodes);

router
  .route("/:id")
  .put(registrationsCodeController.updateRegistrationCode)
  .delete(registrationsCodeController.deleteRegistrationCode);

router.post("/verify", registrationsCodeController.verifyRegistrationCode);

export default router;
