import { Router } from "express";
import asyncWrapper from "../utils/middlewares/async-wrapper";
import { Request, Response } from "express";

const router = Router();

// api routes
router.get(
  "/",
  asyncWrapper(async (req: Request, res: Response) => {
    throw new Error("testing error handler");
  })
);

export default router;
