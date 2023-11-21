import { Router } from "express";
import { Request, Response } from "express";
import { createCustomError } from "../utils/errors/custom-error";

const router = Router();

// api routes
router.get("/", async (req: Request, res: Response) => {
  throw createCustomError("Not Implemented", 501);
});

export default router;
