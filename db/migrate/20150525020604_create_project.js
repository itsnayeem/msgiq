
exports.up = function(knex, Promise) {

    return Promise.all([
        knex.schema.createTable('project', function (table) {
            table.uuid('id').index('project_id', 'hash').primary().unique();
            table.uuid('org_id').index('project_org_id', 'hash').unique();
            table.string('name');
            table.timestamp('created_at').defaultTo(knex.raw('now()'));
            table.timestamp('updated_at').defaultTo(knex.raw('now()'));
        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('project')
    ]);
};
