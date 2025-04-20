const express = require('express');
const bodyParser = require('body-parser')
const router = express.Router();
const menucontroller = require('../controllers/menucontroller')
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
     extended: false
}))

router.post('/menu', (req, res) => {
     console.log("WE are in add user route");
     menucontroller.addMenu(req, res)
})
router.get('/getmenu', (req, res) => {
     menucontroller.getMenu(req, res)
})
module.exports = router;