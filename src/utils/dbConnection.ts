import { Pool } from 'pg';

const user = process.env.DB_USER || 'postgres';
const password = process.env.DB_PASSWORD || '1234';
const host = process.env.DB_HOST || 'localhost';
const port = process.env.DB_PORT || '5432';
const database = process.env.DB_NAME || 'postgres';

const connectionString = `postgresql://${user}:${password}@${host}:${port}/${database}`;

const pool = new Pool({
    connectionString: connectionString,
});

export default pool;
