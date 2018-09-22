const express = require('express')
const path = require('path')
const server = express()

const closetRoutes = require('./routes/closetRoutes');

server.use(express.static(path.join(__dirname, '..', 'public')))
server.use(express.json())

server.use('/api/v1/closet', closetRoutes)

module.exports = server