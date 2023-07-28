const express = require('express');
const app = express();
const {sequelize} = require("./models");
const router = require('./routes');
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(router);
app.listen(port, async function() {
    try{
        return console.log("Server berjalan");
    } catch (error) {
        console.error("Error",error);
    }
    
});