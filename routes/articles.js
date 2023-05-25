const express = require('express')
const router = express.Router()

const articles = [
    {message: 'JSON article masih kosong'}
]
router.get('/', function(req, res) {
    res.json(articles)
})

module.exports = articles