const express = require('express');
const serviceCodigosPostales = require('../services/codigosPostales.service');

const router = express.Router();



router.get('/', serviceCodigosPostales.getCodigosPostales);
router.get('/:id', serviceCodigosPostales.getCodigoPostal);

module.exports = router;