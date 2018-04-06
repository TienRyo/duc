
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('companies').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('companies').insert([
        {id: 1, name: 'hoa', phone: '12313', email: 'nn@', address:'HN'},
      ]);
    });
};
