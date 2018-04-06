
exports.up = function(knex, Promise) {
  return knex.schema.createTable('transcripts', function (table) {
      table.increments('id');
      table.integer('intern_code').notNull();
      table.float('marks');
      table.datetime('deleted_at')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('transcripts')
};
