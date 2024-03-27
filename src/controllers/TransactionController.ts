import { Request, Response } from 'express';
import * as TransactionService from '../services/TransactionService';
import { QueryParams } from '../models/Types';



export async function createTransaction(req: Request, res: Response): Promise<void> {
  try {
    const transactionDetails = req.body;
    const createdTransaction = await TransactionService.createTransaction(transactionDetails);
    res.status(200).json(createdTransaction);
  }
  catch (error: any) {
    console.error('Erro:', error);
    res.status(500).json({ message: error.message });
  }
}

export const getTransactions = async (req: Request, res: Response) => {
  const { document_number, email, page, size, id_status }: QueryParams = req.query;

  try {
    const transactions: [] = await TransactionService.getTransactions({ document_number, email, page, size, id_status });
    if (transactions.length === 0) {
      console.log("Data not found!")
      res.status(404).json(transactions);
    }
    else {
      console.log("Data found!")
      res.status(200).json(transactions);
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};