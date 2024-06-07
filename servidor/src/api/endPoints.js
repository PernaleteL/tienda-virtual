const express = require('express');
const router = express.Router();
const {ping} = require('../controllers/pingController');
const {productos} = require('../controllers/productosController');
const { registro } = require('../controllers/registroController');
const {login} = require('../controllers/loginController');
const {buy} = require('../controllers/buyController');
const {compra} = require('../controllers/compraController');
const {actualizar} = require('../controllers/actualizarController');
const {recargar} = require('../controllers/recargarController');
const {buscarProducto} = require('../controllers/buscarProducto');
const {updateProducto} = require('../controllers/updateProducto');
const {crearProducto} = require('../controllers/crearProdcuto');
const {eliminarProducto}=require('../controllers/eliminarProducto');
const {crearUsuario}=require('../controllers/crearUsuario');
const {buscarUsuario}=require('../controllers/buscarUsuario');
const {updateUsuario}=require('../controllers/updateUsuario');
const {crearRecarga}=require('../controllers/crearRecarga');
const {buscarRecarga}=require('../controllers/buscarRecarga');
const {updateRecarga}=require('../controllers/updateRecarga');
const {eliminarRecarga}=require('../controllers/eliminarRecarga');
const {compras}=require('../controllers/comprasController');

router.get('/ping', ping);

router.get('/productos', productos);

router.post('/create', registro);

router.post('/login', login);

router.put('/buy', buy);

router.post('/compra', compra);

router.get('/actualizar', actualizar);

router.post('/recargar', recargar);

router.post('/buscarproducto', buscarProducto);

router.post('/buscarrecarga', buscarRecarga);

router.post('/buscarusuario', buscarUsuario);

router.put('/updateproducto', updateProducto);

router.put('/updateusuario', updateUsuario);

router.post('/crearproducto', crearProducto);

router.post('/crearusuario', crearUsuario);

router.post('/crearrecarga', crearRecarga);

router.put('/updaterecarga', updateRecarga);

router.delete('/eliminarproducto/:idP', eliminarProducto);

router.delete('/eliminarrecarga/:idR', eliminarRecarga);

router.get('/compras/:idU',compras);


module.exports = router;