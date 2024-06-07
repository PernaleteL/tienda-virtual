const db = require('../models/db')

module.exports.recargar = (req, res) => {
    const { id_usuario, referencia, monto} = req.body;
  
    const consult2 = 'INSERT INTO recargas(id_usuario,referencia, monto) VALUES(?,?,?)';
  
    try {
        db.query(consult2,[id_usuario,referencia, monto],(err,result)=>{
          if (err) {
            console.log(err); // Loguea el error a la consola
            res.status(500).send("Error al registrar usuario");
        } else {
            console.log("Compra registrada con éxito");
            res.send("Compra registrada con éxito");
        }
        })
      } catch (error) {
        console.error(error);
      }

  }