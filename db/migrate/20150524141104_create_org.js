exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('org', function (table) {
            table.uuid('id').index('org_id', 'hash').primary().unique();
            table.uuid('owner_id').index('org_owner_id', 'hash').unique();
            table.string('name');
            table.timestamp('created_at').defaultTo(knex.raw('now()'));
            table.timestamp('updated_at').defaultTo(knex.raw('now()'));
        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('org')
    ]);
};
