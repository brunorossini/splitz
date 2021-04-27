import { Router } from "express";

import isAuthenticate from "../middlewares/auth.middleware";

import auth from "./auth.route";
import user from "./user.route";
import password from "./password.route";

const router = Router();

router.use("/auth", auth);

// router.use(isAuthenticate);

router.use("/users", user);
router.use("/password", password);

export default router;
