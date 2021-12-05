require('dotenv').config(); //Variables de entorno

const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

//Server settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Static files
app.use(express.static(path.join(__dirname, '/public'))); 

app.use(express.urlencoded({ extended: false }));   //Conección a la base de datos de mysql
app.use(myConnection(mysql, {
    host: process.env.DB_HOST,
    user: process.env.DB_USER, 
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT, 
    database: process.env.DB_NAME
}, 'single')); 

//Server routes
const routes = require('./routes/orders');
app.use('/', routes);  

//Start the server
app.listen(app.get('port'), ()=>{
    console.log(`Server running at port ${app.get('port')}`); 
})