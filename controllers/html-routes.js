const main = require('../views/main.js');
const db = require('../models');
const submain = require('../views/submain.js');
const readyRender = require('../views/readyrender.js');
const devourRender = require('../views/devourrender.js');

module.exports = function (app) {

    app.get('/', function (req, res) {

        async function getNames() {
            try {
                await db.burgers.findAll().then(function (data) {

                    let names = []
                    let devour = []

                    for (let i = 0; i < data.length; i++) {
                        console.log("DATA", data[i].dataValues.name)
                        if (data[i].dataValues.devour === false) {
                            names.push(readyRender.render(data[i].dataValues.name, i + 1))
                        } else {
                            devour.push(devourRender.render(data[i].dataValues.name, i + 1))
                        }
                    }

                    res.send(main.render(submain.render(names.join(' '), devour.join(' '))))

                })
            } catch (error) {
                console.log(error);

            }
        }
        getNames();
    })

    app.post('/create', function (req, res) {
        db.burgers.create({
            name: req.body.name,
            devour: req.body.devour
        }).then(() =>
            // console.log(data)
            res.json('success')

        );
    })

    app.put('/update', function (req, res) {
        // console.log(parseInt(req.body.id));
        
        db.burgers.update({
            devour: parseInt(req.body.devour)
        }, {
            where: {
                id: parseInt(req.body.id)
            }
        }).then(()=> res.json('success'))
    })
}