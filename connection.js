const mongoose = require('mongoose')

async function connection() {
     try{
         await mongoose.connect('mongodb://localhost:27017/hotels-88')
          console.log("Data base connected successfull..");
     } catch(err) {
          console.log(err);
     }
}

module.exports = connection;