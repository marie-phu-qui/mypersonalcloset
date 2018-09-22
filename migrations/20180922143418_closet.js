exports.up = function (knex, Promise) {
    return knex.schema.createTable("closet", table => {
        table.increments("id").primary()
        table.string("type")
        table.string("img")
        table.string("season")
        table.string("color")
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable("closet")
};