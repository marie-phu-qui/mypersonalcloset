const express = require('express')
const path = require('path')
const server = express()

const closet = require('./routes/closet')

server.use(express.static(path.join(__dirname, '..', 'public')))
server.use(express.json())

server.use('/', closet)

module.exports = server