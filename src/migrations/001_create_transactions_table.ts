import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('transactions', table => {
        table.increments('id').primary();
        table.string('document_number');
        table.integer('amount');
        table.string('full_name');
        table.string('email');
        table.bigInteger('card_number');
        table.integer('cvv');
        table.string('expire_date');
        table.string('placeholder');
        table.integer('status');

    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists('transactions');
}
