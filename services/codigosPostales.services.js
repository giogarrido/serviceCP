const   controlCodigosPostales = require('../controllers/codigosPostales.controller.js');
const asyncError = require('../utilities/asyncError.js');
const CustomeError = require('../utilities/customeError.js');

exports.getCodigosPostales = asyncError(async (req, res, next) => {
    const codigosPostales = await controlCodigosPostales.getCodigosPostales();
    if (!codigosPostales) {
        return next(new CustomeError('No se encontraron codigos postales', 404));
    }
    res.status(200).json({
        success: true,
        data: codigosPostales
    });
});

exports.getCodigoPostal = asyncError(async (req, res, next) => {
    const codigoPostal = await controlCodigosPostales.getCodigoPostal(req.params.id);
    if (!codigoPostal) {
        return next(new CustomeError('No se encontro el codigo postal', 404));
    }
    res.status(200).json({
        success: true,
        data: codigoPostal
    });
});

