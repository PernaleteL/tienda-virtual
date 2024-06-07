const db = require('../models/db')

module.exports.updateUsuario = (req, res) => {
    const { nombre,apellido,usuario,clave,saldo,roll,id_usuario} = req.body;
  
    const consult = 'UPDATE usuarios SET nombre=?,apellido=?,usuario=?,clave=?,saldo=?,roll=? WHERE id_usuario = ? ';
  
    try {
        console.log(id_usuario)
      db.query(consult, [nombre,apellido,usuario,clave,saldo,roll,id_usuario], (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error al modificar el usuario"); 
        } else {
            console.log("Usuario modificado con éxito");
            console.log(id_usuario)
            res.send("Producto modificado con éxito"); 
        }
      });
    } catch (error) {
      console.error(error);
    }
  };