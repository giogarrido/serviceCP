const controlCiudades = require('../controllers/ciudades.controller');
const asyncError = require('../utilities/asyncError.js');
const CustomeError = require('../utilities/customeError.js');

exports.getCiudades = asyncError(async (req, res, next) => {
    const ciudades = await controlCiudades.getCiudades();
    res.status(200).json({
        status: 'success',
        data: ciudades
    });
});

exports.getCiudad = asyncError(async (req, res, next) => {
    const ciudad = await controlCiudades.getCiudad(req.params.id);
    if (!ciudad) {
        return next(new CustomeError('No se encontró la ciudad', 404));
    }
    res.status(200).json({
        status: 'success',
        data: ciudad
    });
});
