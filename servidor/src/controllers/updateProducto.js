const db = require('../models/db')

module.exports.updateProducto = (req, res) => {
    const { id_producto, titulo, precio, categoria, descripcion, url } = req.body;
  
    const consult = 'UPDATE producto SET titulo=?,precio=?,categoria=?,descripcion=?,url=? WHERE id_producto=?';
  
    try {
      db.query(consult, [titulo,precio,categoria,descripcion,url,id_producto], (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error al modificar el producto"); 
        } else {
            console.log("Producto modificado con éxito");
            console.log(titulo)
            console.log(precio)
            console.log(id_producto)
            res.send("Producto modificado con éxito"); 
        }
      });
    } catch (error) {
      console.error(error);
    }
  };