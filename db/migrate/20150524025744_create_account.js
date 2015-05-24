exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTable('account', function (table) {
            table.string('id').index('id', 'hash').primary().unique();
            table.string('username').index('username', 'btree').unique();
            table.string('password');
            table.timestamp('created_at').defaultTo(knex.raw('now()'));
            table.timestamp('updated_at').defaultTo(knex.raw('now()'));
        })
    ]);
};

exports.down = function (knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('account')
    ]);
};
