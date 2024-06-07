const db = require('../models/db')

module.exports.buscarProducto = (req, res) => {
    const { id_producto } = req.body;
  
    const consult = 'SELECT * FROM producto WHERE id_producto = ?';
  
    try {
      db.query(consult, [id_producto], (err, results) => {
        if (err) {
          res.send(err);
        }
        if (results.length > 0) {
          console.log(id_producto)
          const product = results[0]; // Accede a la primera fila de resultados
            const respuesta={
                titulo:product.titulo,
                descripcion:product.descripcion,
                categoria:product.categoria,
                precio:product.precio,
                url:product.url
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