import { Router } from "express";
import { getProducts, getCustomers } from "../controllers/client.js";

const router = new Router();

router.get('/products', getProducts);
router.get('/customers', getCustomers);
router.get('transactions', getTransactions);
export default router;

