import { Router } from "express";
import registrationsCodeController from "../controllers/registration-code-controller";

const router = Router();

router
  .route("/")
  .post(registrationsCodeController.create)
  .get(registrationsCodeController.getAll);

  router.post("/verify/:code", registrationsCodeController.verify);

router
  .route("/:id")
  .get(registrationsCodeController.getById)
  .put(registrationsCodeController.update)
  .delete(registrationsCodeController.remove);


export default router;
