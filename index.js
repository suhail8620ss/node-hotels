const express = require('express')
const person = require('./routes/person')
const menu = require('./routes/menu')
let connection = require('./connection')
require('dotenv').config();
const app = express()
connection()
app.use(person);
app.use(menu);

const PORT = process.env.PORT || 3000
app.listen(PORT, (err) => {
     if (err) {
          console.log(err);
     } else {
          console.log("Server is listen on 3000 Port...")
     }
})