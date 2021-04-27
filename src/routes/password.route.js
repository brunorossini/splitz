import { Router } from "express";

import PasswordController from "../controllers/password.controller";

const router = Router();

router.put("/", PasswordController.update);

export default router;
