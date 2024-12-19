require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/18', (req, res) => {
  res.send('Virat Kohli')
})
app.get('/chameleon', (req, res) => {
  res.send('Chameleon Route')
})
app.get('/7', (req, res) => {
  res.send('7 - Thala for a reason')
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})