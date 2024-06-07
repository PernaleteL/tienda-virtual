const express = require('express');
const router2 = express.Router();

const {balance} = require('../controllers/balanceController')

router2.get('/balance',balance);

module.exports = router2;