const db = require('../models/db')

module.exports.compra = (req, res) => {
    const { id_usuario,id_producto,titulo,url, costo  } = req.body;
  
    const consult2 = 'INSERT INTO compra(id_usuario,id_producto,url,titulo,costo) VALUES(?,?,?,?,?)';
  
    try {
        db.query(consult2,[id_usuario,id_producto,url,titulo,costo],(err,result)=>{
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