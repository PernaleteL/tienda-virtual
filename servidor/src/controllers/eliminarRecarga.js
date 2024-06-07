const db = require('../models/db');

module.exports.eliminarRecarga=(req, res)=>{
    const id_recarga = req.params.idR;

    try {
        console.log(id_recarga)
        db.query('DELETE FROM recargas WHERE id_recarga = ?', [id_recarga], (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error al eliminar el recarga"); 
            } else {
                console.log("Recarga eliminado con éxito");
                res.send(result); 
                
            }
        });
        
    } catch (error) {
        console.log(error)
    }
}
