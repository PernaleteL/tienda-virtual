const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const routes = require('./api/endPoints')
const router2 = require('./api/endPoints2')

app.use(cors());
app.use(express.json());


//rutas
app.use('/', routes);
app.use('/', router2);

app.listen(3002, () =>{
    console.log("corriendo en el puerto 3002")
});