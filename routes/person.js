const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router();
const personcontroller = require('../controllers/personcontroller')
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
     extended: false
}))

router.post('/add/person', (req, res) => {
     personcontroller.addPerson(req, res)
})
router.get('/person', (req, res) => {
     personcontroller.getPerson(req, res);
})
router.put('/person/:id', (req, res) => {
     personcontroller.editPerson(req, res);
})
router.delete('/person/delete/:id', (req, res) => {
     personcontroller.deletePerson(req, res);
})
module.exports = router