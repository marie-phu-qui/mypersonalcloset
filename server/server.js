const express = require('express')
const path = require('path')
const server = express()

const closet = require('./routes/closet')

server.use(express.static(path.join(__dirname, '..', 'public')))
server.use(express.json())

server.use('/', closet)

server.get('/about', function(req, res){
    res.send('The personal closet allows you to have an easy scroll around your closet. It gives you the sensation of online buying without the consumtion. Rediscover your own gems. Be happy with what you have.')
})

module.exports = server