const { response } = require('express');
const Person = require('../models/Person');
// const person = require('../models/Person')

async function addPerson(req, res) {
     try {
          console.log(req.body, "req.body");
          let newPerson = new Person(req.body);
          await newPerson.save();
          console.log("Data Saved");
          res.status(200).json(response)
     } catch (err) {
          console.log(err);
          res.status(500).json({ error: "Internal Error" });
     }
}
async function getPerson(req, res) {
     try {
          let persons = await Person.find({})
          console.log(persons);
          res.send(persons);
     } catch (err) {
          console.log(err);
     }
}
async function editPerson(req, res) {
     try {
          let personId = req.params.id;  // extract the id from the url parameter
          console.log(req.body, "req.body");
          let updatedPersonData = req.body;  // updated data from the person
          let response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
               new: true, // return the updated document
               runValidators: true, // Run Mongoose validation
          })
          if (!response) {
               return res.status(404).json({ error: "Person not found" });
          }
          console.log("Data Updated..");
     } catch (err) {
          console.log(err);
          res.status(500).json({ error: "Internal Server Error" });
     }
}
async function deletePerson(req, res) {
     try {
          const personId = req.params.id;
          // Assuming you have person model
          const response = await Person.findByIdAndDelete(personId)
          if (!response) {
               return res.status(404).json({ error: "Person not found..." });
          }
          console.log("Data Deleted..");
          res.status(200).json({ message: "person Deleted Successfully..." });
     } catch (err) {
          console.log(err);
          res.status(500).json({ error: "Internal Server Error..."});
     }
}
module.exports = {
     addPerson,
     getPerson,
     editPerson,
     deletePerson
}