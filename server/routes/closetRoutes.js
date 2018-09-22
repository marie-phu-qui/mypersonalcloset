const express = require('express')
const router = express.Router()

const db = require('../db/closet')

router.get('/', (req, res) => {
    db.getCloset()
        .then(item => {
            res.json(item)
        })
})

module.exports = router