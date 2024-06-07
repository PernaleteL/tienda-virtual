const db = require('../models/db')
const jwt = require('jsonwebtoken');

module.exports.buy = (req, res) => {
    const { saldo, id_usuario,id_producto,titulo,url, costo  } = req.body;
  
    const consult = 'UPDATE usuarios SET saldo=? WHERE id_usuario=?';
    const consult2 = 'INSERT INTO compra(id_usuario,id_prodcuto,url,titulo,costo) VALUES(?,?,?,?,?)';
  
    try {
        db.query(consult, [saldo,id_usuario], (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error al modificar el empleado"); 
            } else {
                console.log("Balance actualizado con éxito");
                res.send("Balance actualizado con éxito"); 
            }
      });
    } catch (error) {
      console.error(error);
    }

  }