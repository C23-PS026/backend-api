const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.send('Welcome to MeatFYI (test)!')
})

// const meat = require('./routes/meat.js')
// app.use('/meat', meat)

// const articles = require('./routes/articles.js')
// app.use('/articles', articles)

app.get('/articles', function(req, res) {
    res.send('Anda mengakses /articles')
})

app.get('*', function(req, res) {
    res.send('Invalid URL')
})

// FOR DEVELOPMENT ONLY
// app.listen(3000)

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})