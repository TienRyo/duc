
exports.up = function(knex, Promise) {
  return knex.schema.createTable('company_managers', function (table) {
      table.increments('id');
      table.string('name').notNull();
      table.string('phone');
      table.string('company_id');
      table.string('gender');
      table.string('email');
      table.string('address');
      table.datetime('deleted_at');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('company_managers')
};
