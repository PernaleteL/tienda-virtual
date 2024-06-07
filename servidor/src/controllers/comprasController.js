const db = require('../models/db')

module.exports.compras = (req,res) =>{
    const id_usuario = req.body.idU;
    const consult='SELECT * FROM compra WHERE id_usuario = ?';
    const consult2='SELECT saldo FROM usuarios WHERE id_usuario = ?';

  db.query(consult2, [id_usuario], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error al obtener compras");
    } else {
      console.log("compras obtenidas con éxito");
      res.send(result);
     console.log(result,id_usuario)
    }
  });
}