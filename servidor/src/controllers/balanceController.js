const db = require('../models/db')

module.exports.balance = (req,res) =>{
    const { id_usuario } = req.query;
    console.log(id_usuario)
  
    const consult = 'SELECT * FROM usuarios WHERE id_usuario = ?';
  
    try {
      db.query(consult, [id_usuario], (err, results) => {
        if (err) {
          res.send(err);
        }
        if (results.length > 0) {
          const product = results[0]; // Accede a la primera fila de resultados
            const respuesta={
                saldo:product.saldo
            }
            res.send(respuesta)
            console.log(respuesta)
        } else {
          console.log('Usuario incorrecto');
          res.send({ message: 'Usario incorrecto' });
        }
      });
    } catch (error) {
      console.error(error);
    }
}