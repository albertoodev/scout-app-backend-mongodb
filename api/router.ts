import { Router } from "express";
import asyncWrapper from "../utils/middlewares/async-wrapper";
import { Request, Response, NextFunction } from "express";
import { createCustomError } from "../utils/errors/custom-error";

const router = Router();

// api routes
router.get(
  "/",
  asyncWrapper(async (req: Request, res: Response, next: NextFunction) => {
    next(createCustomError("Not Found", 404));
  })
);

export default router;
