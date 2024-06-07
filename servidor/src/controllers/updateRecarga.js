const db = require('../models/db')

module.exports.updateRecarga = (req, res) => {
    const { id_usuario,referencia,monto,estado,fecha_recarga,id_recarga} = req.body;
  
    const consult = 'UPDATE recargas SET id_usuario=?,referencia=?,monto=?,estado=?,fecha_recarga=? WHERE id_recarga = ? ';
  
    try {
        console.log(id_usuario)
      db.query(consult, [id_usuario,referencia,monto,estado,fecha_recarga,id_recarga], (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error al modificar el recarga"); 
        } else {
            console.log("Recarga modificado con éxito");
            console.log(id_usuario,estado, id_recarga)
            res.send("Recarga modificado con éxito"); 
        }
      });
    } catch (error) {
      console.error(error);
    }
  };