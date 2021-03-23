const express = require('express')
const app = express()
const port = 3000
const routerMessages = require("./routers/messages");
const pug = require("pug");

app.set("view engine", "pug");

app.get('/', (req, res) => {
  res.render('index', { title: 'Lab5 - api', message: 'Hi welcome to lab5 - api!' })
})

app.use("/api/v1/messages", routerMessages);



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})