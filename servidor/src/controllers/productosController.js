const db = require('../models/db')

module.exports.productos = (req,res) =>{
    db.query('SELECT * FROM producto', (err, result)=>{
        if (err) {
            console.log(err);
            res.status(500).send("Error al obtener productos");
        }else{
            console.log("productos obtenidos con éxito"); 
            res.send(result); 
        }
    });
}