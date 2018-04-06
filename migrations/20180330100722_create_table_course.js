
exports.up = function(knex, Promise) {
    return knex.schema.createTable('courses', function (table) {
        table.increments('id');
        table.string('duration_id').notNull();
        table.string('status').notNull();
        table.string('name').notNull();
        table.datetime('deleted_at');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('courses');
};
