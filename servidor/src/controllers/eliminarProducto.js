const db = require('../models/db');

module.exports.eliminarProducto=(req, res)=>{
    const id_producto = req.params.idP;

    try {
        console.log(id_producto)
        db.query('DELETE FROM producto WHERE id_producto = ?', [id_producto], (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error al eliminar el producto"); 
            } else {
                console.log("Producto eliminado con éxito");
                res.send(result); 
                
            }
        });
        
    } catch (error) {
        console.log(error)
    }
}
