const express = require('express')
const router = express.Router()

const meat = [
    {id: 100, type: 'Chicken', threshold: 0.8},
    {id: 101, type: 'Beef', threshold: 0.5}
]
router.get('/', function(req, res) {
    res.json(meat)
})

module.exports = meat