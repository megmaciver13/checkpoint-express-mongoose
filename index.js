const express = require('express')
const hbs = require('hbs')
const parser = require('body-parser')

const app = express()

app.set('view engine', 'hbs')

app.use(parser.urlencoded({ extended: true }))
app.use(bodyParser.json())



app.listen(3000, () => {
  console.log('You are now connected to port 3000!')
})

module.exports = app
