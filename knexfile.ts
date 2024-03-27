import * as path from 'path';
import { Knex } from 'knex';

const knexConfig: Knex.Config = {
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: '1234',
        database: 'postgres'
    },
    migrations: {
        directory: path.join(__dirname, 'src', 'migrations')
    }
};

export default knexConfig;
