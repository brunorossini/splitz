import { Router } from "express";

import AuthController from "../controllers/auth.controller";

const router = Router();

router.post("/", AuthController.create);

export default router;
