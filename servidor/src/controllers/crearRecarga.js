const db = require('../models/db')

module.exports.crearRecarga = (req,res)=>{
    const {id_usuario,referencia,monto} = req.body;

    try {     
        db.query('INSERT INTO recargas(id_usuario,referencia,monto) VALUES(?,?,?)',[id_usuario,referencia,monto],(err,result)=>{
            if (err) {
                console.log(err); // Loguea el error a la consola
                res.status(500).send("Error al registrar recarga");
            } else {
                console.log("Recarga registrado con éxito");
                res.send("Recarga registrado con éxito");
            }
        }) 
    } catch (error) {
        console.error(error);
    }
}