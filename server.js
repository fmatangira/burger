const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const db = require('./models');
// const main = require('../views/main.js');

app.use(express.static("public"));

require('./controllers/html-routes.js')(app)


db.sequelize.sync().then(()=>{
    
    app.listen(PORT,()=>{

        console.log(`Localhost is listening on port: ${PORT}`);
        
    })

})
