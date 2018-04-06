
exports.up = function(knex, Promise) {
    return knex.schema.createTable('interns', function (table) {
        table.integer('code').notNull();
        table.string('name').notNull();
        table.string('status');
        table.string('gender');
        table.integer('phone');
        table.string('email');
        table.string('address');
        table.string('deleted_at')
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('interns')
};
