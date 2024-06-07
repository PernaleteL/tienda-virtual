const db = require('../models/db')

module.exports.registro = (req,res)=>{
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const usuario = req.body.usuario;
    const clave = req.body.clave;

    try {
        db.query('SELECT * FROM usuarios WHERE usuario = ?', [usuario],(err,result)=>{
            if (err) {
                console.log(err);
                res.status(500).send("Error al registrar usuario");
            } else {
                if (result.length > 0) {
                    res.status(400).send("El usuario ya existe")
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
