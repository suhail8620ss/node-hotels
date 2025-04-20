const mongoose  = require('mongoose');
const Schema = mongoose.Schema;
const personSchema = new Schema({
     name: {
          type: String,
          required: true
     },
     age: {
          type: Number
     },
     work: {
          type: String,
          enum: ['chef', 'waiter', 'manager'],
          required: true
     },
     mobile: {
          type: String,
          required: true
     },
     email: {
          type: String,
     },
     address: {
          type: String,
     },
     salary: {
          type: Number,
          required: true
     }
})
const Person = mongoose.model('Person', personSchema)
module.exports = Person;