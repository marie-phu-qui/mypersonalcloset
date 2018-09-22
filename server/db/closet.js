const knex = require('knex')
const config = require('../../knexfile').development
const db = knex(config)

function getCloset() {
    return db('closet').then(items => {
        return items.map(item => {
            item.type = item.type
            item.img = item.img
            item.season = item.season
            item.color = item.color
            return item
        })
    })
}

module.exports = {
    getCloset
}