import { Query, QueryParams, TransactionDetail } from '../models/Types';
import pool from '../utils/dbConnection';
import { amountFormatter } from '../utils/Utils';


export async function createTransaction(transactionDetails: TransactionDetail): Promise<TransactionDetail> {
    try {
        let amount: number = transactionDetails.amount
        const randomStatus: number = Math.floor(Math.random() * 3) + 1;

        if (!Number.isInteger(amount)) {
            amount = amountFormatter(transactionDetails.amount)
        }
        const client = await pool.connect();
        const query: Query = {
            text: 'INSERT INTO transactions (document_number, amount, full_name, email, card_number, cvv, expire_date, placeholder, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
            values: [
                transactionDetails.document_number,
                amount,
                transactionDetails.full_name,
                transactionDetails.email,
                transactionDetails.card.number,
                transactionDetails.card.cvv,
                transactionDetails.card.expire_date,
                transactionDetails.card.placeholder,
                randomStatus
            ],
        };
        const result = await client.query(query);
        client.release();
        console.log('Transaction created!')
        return result.rows[0];
    } catch (error) {
        console.error(error);
        throw new Error('Error creating transaction.');
    }
}

export async function getTransactions(params: QueryParams): Promise<any> {
    const { document_number, email, page, size, id_status } = params;
    let query = 'SELECT * FROM transactions WHERE 1=1 '
    if (document_number) {
        query += `AND document_number = ${document_number}`;
    }
    if (email) {
        query += `AND email = ${email}`;
    }
    if (id_status) {
        query += `AND status = ${id_status}`;
    }
    if (page && size) {
        query += ` LIMIT ${size} OFFSET ${(page - 1) * size}`;
    }

    try {
        const client = await pool.connect();
        const result = await client.query(query);
        return result.rows;
    } catch (error) {
        console.error('Error fetching transaction:', error);
        throw new Error('Error fetching transaction.');
    }
}


