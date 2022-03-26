const express = require('express')
const path = require('path')
const app = express()
const port = 3000


//EJS template engine
app.set("views", "./views");
app.set("view engine", "pug");

//Add static file  like js and css
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
  res.render('pages/home')
})

app.listen(port, () => {
  console.log(`Example app listening on : http://localhost:${port}`)
})
