import { Router } from "express";
import registrationsCodeController from "../controllers/registration-code-controller";

const router = Router();

router
  .route("/")
  .post(registrationsCodeController.create)
  .get(registrationsCodeController.getAll);

router
  .route("/:id")
  .get(registrationsCodeController.getById)
  .put(registrationsCodeController.update)
  .delete(registrationsCodeController.remove);

router.post("/verify", registrationsCodeController.verify);

export default router;
