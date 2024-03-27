
import express, { Router } from 'express';
import * as TransactionController from '../controllers/TransactionController';

const router: Router = express.Router();

router.post('/transaction', TransactionController.createTransaction);

router.get('/transaction', TransactionController.getTransactions)

export default router;
