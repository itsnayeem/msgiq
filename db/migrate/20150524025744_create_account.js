exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTable('account', function (table) {
            table.uuid('id').index('account_id', 'hash').primary().unique();
            table.string('username').index('account_username', 'btree').unique();
            table.string('email').index('account_email', 'btree').unique();
            table.string('password');
            table.timestamp('created_at');
            table.timestamp('updated_at');
        })
    ]);
};

exports.down = function (knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('account')
    ]);
};
