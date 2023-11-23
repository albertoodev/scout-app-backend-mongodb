import { Router } from "express";
import userController from "../controllers/user-controller";
const router = Router();

router.get("/", userController.getAllUsers);

router
  .route("/:id")
  .get(userController.getUser)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

export default router;
