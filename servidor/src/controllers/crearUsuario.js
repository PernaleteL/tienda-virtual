const db = require('../models/db')

module.exports.crearUsuario = (req,res)=>{
    const {nombre,apellido,usuario,clave} = req.body;

    try {
        db.query('SELECT * FROM usuarios WHERE usuario = ?', [usuario],(err,result)=>{
            if (err) {
                console.log(err);
                res.status(500).send("Error al registrar usuario");
            } else {
                if (result.length > 0) {
                    res.status(400).send("El producto ya existe")
                } else {
                    db.query('INSERT INTO usuarios(nombre,apellido,usuario,clave) VALUES(?,?,?,?)',[nombre,apellido,usuario,clave],(err,result)=>{
                        if (err) {
                            console.log(err); // Loguea el error a la consola
                            res.status(500).send("Error al registrar usuario");
                        } else {
                            console.log("Usuario registrado con éxito");
                            res.send("Usuario registrado con éxito");
                        }
                    })
                }
            }
        })
        
    } catch (error) {
        console.error(error);
    }
}
