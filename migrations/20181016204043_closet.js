
exports.up = function(knex, Promise) {
    return knex.schema.createTable('closet', function (table) {
      table.increments('id')
      table.string('itemImg')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('closet')
  };
  