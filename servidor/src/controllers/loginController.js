const db = require('../models/db')
const jwt = require('jsonwebtoken');

module.exports.login = (req, res) => {
    const { usuario, clave } = req.body;
  
    const consult = 'SELECT * FROM usuarios WHERE usuario = ? AND clave = ?';
  
    try {
      db.query(consult, [usuario, clave], (err, results) => {
        if (err) {
          res.send(err);
        }
        if (results.length > 0) {
          const user = results[0]; // Accede a la primera fila de resultados
          const token = jwt.sign(
            {
              usuario: user.usuario,
              nombre: user.nombre,
              apellido: user.apellido,
              saldo: user.saldo,
              id_usuario: user.id_usuario,
              admin: user.roll
            },
            "Stack",
            {
              expiresIn: "1h",
            }
          );
          res.send({ token });
          console.log({ token });
        } else {
          console.log('Usuario incorrecto');
          res.send({ message: 'Usuario incorrecto' });
        }
      });
    } catch (error) {
      console.error(error);
    }
  };