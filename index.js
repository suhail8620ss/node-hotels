const express = require('express')
const person = require('./routes/person')
const menu = require('./routes/menu')
let connection = require('./connection')
const app = express()
connection()
app.use(person);
app.use(menu);
app.listen(5000, (err) => {
     if (err) {
          console.log(err);
     } else {
          console.log("Server is listen on 5000 Port...")
     }
})