
exports.up = function(knex, Promise) {
    return knex.schema.createTable('internships', function (table) {
        table.increments('id');
        table.string('company_id');
        table.string('intern_id');
        table.integer('duration_id').notNull();
        table.string('status').notNull();
        table.datetime('deleted_at')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('internships');
};
