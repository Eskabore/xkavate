import { Router } from "express";
import { getUser } from "../controllers/general.js";

const router = new Router();

router.get('/user/:id', getUser);

export default router;