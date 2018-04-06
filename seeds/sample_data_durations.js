
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('durations').del()
    .then(function () {
      // Inserts seed entries
      return knex('durations').insert([
        {id: 1, startDate: '2018/1/15', endDate: '2018/4/15'},
        {id: 2, startDate: '2017/1/15', endDate: '2017/4/15'},
        {id: 3, startDate: '2017/1/15', endDate: '2017/4/15'},
      ]);
    });
};
