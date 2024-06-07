const db = require('../models/db')

module.exports.buscarUsuario = (req, res) => {
    const { id_usuario } = req.body;
  
    const consult = 'SELECT * FROM usuarios WHERE id_usuario = ?';
  
    try {
      db.query(consult, [id_usuario], (err, results) => {
        if (err) {
          res.send(err);
        }
        if (results.length > 0) {
          console.log(id_usuario)
          const product = results[0]; // Accede a la primera fila de resultados
            const respuesta={
                nombre:product.nombre,
                apellido:product.apellido,
                usuario:product.usuario,
                clave:product.clave,
                saldo:product.saldo,
                roll:product.roll
            }
            res.send(respuesta)
        } else {
          console.log('Usuario incorrecto');
          res.send({ message: 'Uusario incorrecto' });
        }
      });
    } catch (error) {
      console.error(error);
    }
  };