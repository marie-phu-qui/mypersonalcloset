const express = require('express')
const router = express.Router()
const request = require('superagent')


router.get('/', (req, res) => {
  request.send('hello')
      .catch(err => {
        console.log(err)
      })
})

// router.get('/', (req, res) => {
//     db.getArticles()
//       .then(articles => {
//         let randomArticleObject = articles[Math.floor(Math.random() * 22)]
//         res.json(randomArticleObject.article)
//       })
//   })
  
  
  module.exports = router