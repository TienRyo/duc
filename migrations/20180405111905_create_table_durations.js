
exports.up = function(knex, Promise) {
  return knex.schema.createTable('durations', function (table) {
      table.increments('id');
      table.string('startDate');
      table.string('endDate');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('durations');
};
