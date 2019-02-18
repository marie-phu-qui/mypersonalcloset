const express = require('express')
const router = express.Router()
const request = require('superagent')


router.get('/', (req, res) => {
  request.send('hello')
      // .catch(err => {
      //   console.log(err)
      // })
})
  
  module.exports = router