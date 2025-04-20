const MenuItem = require('../models/Menu');

async function addMenu(req, res) {
     try {
          console.log(req.body, "req.body");
          let newMenu = new MenuItem(req.body);
          await newMenu.save();
          console.log("Data Saved Successfully...");
           res.status(200).json(newMenu);
     } catch (err) {
          console.log(err);
          res.status(500).json({error: "Internal Error"});
     }
}
async function getMenu(req, res) {
     try{
          let menuItem = await MenuItem.find({})
          console.log(menuItem);
          res.send(menuItem)
     } catch(err) {
          console.log(err);
     }
}
module.exports = {
     addMenu,
     getMenu
}