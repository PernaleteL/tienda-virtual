const db = require('../models/db')

module.exports.buscarRecarga = (req, res) => {
    const { id_recarga } = req.body;
  
    const consult = 'SELECT * FROM recargas WHERE id_recarga = ?';
  
    try {
      db.query(consult, [id_recarga], (err, results) => {
        if (err) {
          res.send(err);
        }
        if (results.length > 0) {
          console.log(id_recarga)
          const product = results[0]; // Accede a la primera fila de resultados
            const respuesta={
                id_usuario:product.id_usuario,
                referencia:product.referencia,
                monto:product.monto,
                estado:product.estado,
                fecha_recarga:product.fecha_recarga
            }
            res.send(respuesta)
        } else {
          console.log('Producto incorrecto');
          res.send({ message: 'Producto incorrecto' });
        }
      });
    } catch (error) {
      console.error(error);
    }
  };