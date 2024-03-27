import { Request, Response } from 'express';
import * as TransactionController from './TransactionController';
import * as TransactionService from '../services/TransactionService';

jest.mock('../services/TransactionService');

describe('TransactionController', () => {
 it('should create a transaction', async () => {
    const req = {
      body: {
        "document_number": "12245678152",
        "amount": 19.80,
        "full_name": "John Doe",
        "email": "john@example.com",
        "card": { 
          "number": "1212567241123456",
          "cvv": "159",
          "expire_date": "10/2029",
          "placeholder": "John D"
        }
      }
    } as Request;
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() } as unknown as Response;
    (TransactionService.createTransaction as jest.Mock).mockResolvedValue({
      "id": 5,
      "document_number": "12245678152",
      "amount": 1980,
      "full_name": "John Doe",
      "email": "john@example.com",
      "card_number": "1212567241123456",
      "cvv": 159,
      "expire_date": "10/2029",
      "placeholder": "John D",
      "status": 3
    });

    await TransactionController.createTransaction(req, res);

    expect(TransactionService.createTransaction).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      "id": 5,
      "document_number": "12245678152",
      "amount": 1980,
      "full_name": "John Doe",
      "email": "john@example.com",
      "card_number": "1212567241123456",
      "cvv": 159,
      "expire_date": "10/2029",
      "placeholder": "John D",
      "status": 3
    });
 });
});