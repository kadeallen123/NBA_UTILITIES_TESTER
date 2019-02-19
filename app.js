const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const routes = require('./routes')

app.use(routes)
app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')

const PORT = 5000
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
})