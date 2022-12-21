import { Router } from "express";

const router = new Router();

router.get('/user/:id', getUser);

export default Router;