const db = require('../models/db')

module.exports.balanceUsuario = (req,res) =>{
    const { id_usuario } = req.body;
    console.log(id_usuario)
  
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
                saldo:product.saldo
            }
            res.send(respuesta)
            console.log(respuesta)
            console.log(id_usuario)
        } else {
          console.log('Usuario incorrecto');
          res.send({ message: 'Usario incorrecto' });
        }
      });
    } catch (error) {
      console.error(error);
    }
}