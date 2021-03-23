const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/messages', (req, res) => {
  res.json({
    "from": "jonathan",
    "to": "s1mple",
    "message": "juu de s1mple",
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})