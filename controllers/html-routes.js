const main = require('../views/main.js');
const db = require('../models');

module.exports = function (app) {
    
    app.get('/', function (req, res) {
        db.burgers.findAll().then(data => res.send(main.render(data[0].dataValues)));
        // res.send(main.render(db.burgers.findAll()));
        // db.burgers.findAll().then(data => console.log(data[0].dataValues));
        
    })

}