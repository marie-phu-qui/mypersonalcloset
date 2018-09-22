exports.up = function (knex, Promise) {
    return knex.schema.createTable("closet", table => {
        table.increments("id").primary()
        table.string("spring")
        table.string("summer")
        table.string("autumn")
        table.string("winter")
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable("closet")
};