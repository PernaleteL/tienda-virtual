const db = require('../models/db')

module.exports.ping = (req, res) =>{
  //  res.send('this is a ping test');
    const consult = 'SELECT * FROM usuarios';

    try {
        db.query(consult, (error, result)=>{
            console.log(result);
            res.json(result);
        })
    } catch (error) {
        console.log(error);
    }
}