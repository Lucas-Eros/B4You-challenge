import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import transactionRoutes from './src/routes/transactionRoutes';
import knex from 'knex';
import knexConfig from './knexfile';
import dotenv from 'dotenv';

const app: Application = express();

dotenv.config({ path: './environments/.env' });
const port = process.env.PORT || 3000; 
const db = knex(knexConfig);

db.migrate.latest().then(() => {
  console.log('Migrations executed successfully! ✔');
}).catch(error => {
  console.error('Error running migrations:', error);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', transactionRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port} 🚀`);
});

export default app;
