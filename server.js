const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const db = require('./models');

// Use the express.static middleware to serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./controllers/html-routes.js')(app)


db.sequelize.sync().then(()=>{
    
    app.listen(PORT,()=>{

        console.log(`Localhost server is listening on port: ${PORT}`);
        
    })

})
