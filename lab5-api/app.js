const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/api/messages', (req,res) => {
  res.json({
    "status": "succes",
    "message": "was posted",
  });
});

app.get('/api/messages/:id', (req, res) => {
  let id = req.params.id;

  res.json({
    "from": "jonathan",
    "to": "s1mple",
    "message": `juu de s1mple ${id}`,
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})