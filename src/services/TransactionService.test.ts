import { createTransaction } from './TransactionService';
import pool from '../utils/dbConnection';
import { TransactionDetail } from '../models/Types';

jest.mock('../utils/dbConnection', () => ({
 connect: jest.fn().mockResolvedValue({
    query: jest.fn().mockResolvedValue({
      rows: [{ id: 1, amount: 100, document_number: '123456', full_name: 'John Doe', email: 'john@example.com', status: 1 }],
    }),
    release: jest.fn(),
 }),
}));

describe('TransactionService', () => {
 it('should create a transaction successfully', async () => {
    const transactionDetails: TransactionDetail = {
        amount: 100,
        document_number: '123456',
        full_name: 'John Doe',
        email: 'john@example.com',
        card: {
            number: '1234567890123456',
            cvv: '123',
            expire_date: '12/24',
            placeholder: 'John Doe',
        },
        status: '1'
    };

    const result = await createTransaction(transactionDetails);

    expect(result).toEqual({
      id: 1,
      amount: 100,
      document_number: '123456',
      full_name: 'John Doe',
      email: 'john@example.com',
      status: 1,
    });

    expect(pool.connect).toHaveBeenCalled();
    expect((await pool.connect()).query).toHaveBeenCalledWith(expect.any(Object));
    expect((await pool.connect()).release).toHaveBeenCalled();
 });
});