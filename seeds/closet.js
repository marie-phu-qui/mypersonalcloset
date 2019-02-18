
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('closet').del()
    .then(function () {
      // Inserts seed entries
      return knex('closet').insert([
        {itemImg : '/images/closet/1.png'},
        {itemImg : '/images/closet/2.png'},
        {itemImg : '/images/closet/3.png'},
        {itemImg : '/images/closet/4.png'},
        {itemImg : '/images/closet/5.png'},
        {itemImg : '/images/closet/6.png'},
        {itemImg : '/images/closet/7.png'},
        {itemImg : '/images/closet/8.png'},
        {itemImg : '/images/closet/9.png'},
        {itemImg : '/images/closet/10.png'},
        {itemImg : '/images/closet/11.png'}
      ]);
    });
};
