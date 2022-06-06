import { Router } from "express";
import auth from "./auth";
import healthcheck from "./healthcheck"

const router = Router();

router.use("/auth", auth);
router.use("/healthcheck", healthcheck);

export default router;