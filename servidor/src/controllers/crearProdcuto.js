const db = require('../models/db')

module.exports.crearProducto = (req,res)=>{
    const {titulo,precio,descripcion,url,categoria} = req.body;

    try {
        db.query('SELECT * FROM producto WHERE titulo = ?', [titulo],(err,result)=>{
            if (err) {
                console.log(err);
                res.status(500).send("Error al registrar producto");
            } else {
                if (result.length > 0) {
                    res.status(400).send("El producto ya existe")
                } else {
                    db.query('INSERT INTO producto(titulo,precio,descripcion,url,categoria) VALUES(?,?,?,?,?)',[titulo,precio,descripcion,url,categoria],(err,result)=>{
                        if (err) {
                            console.log(err); // Loguea el error a la consola
                            res.status(500).send("Error al registrar producto");
                        } else {
                            console.log("Producto registrado con éxito");
                            res.send("Producto registrado con éxito");
                        }
                    })
                }
            }
        })
        
    } catch (error) {
        console.error(error);
    }
}
