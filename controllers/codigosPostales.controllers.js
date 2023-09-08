const modelCodigosPostales = require('../models/codigosPostales.models');

const getCodigosPostales = async () => {
    try{
        return await modelCodigosPostales.CodigoPostal.findAll({
            raw: true,
            attributes:{
                exclude: ['id_municipio']
            },
            nest: true,
            include: [modelCodigosPostales.Municipio]
        });
    } catch (error) {
        console.log(error);
        throw new Error('Error en la consulta de codigos postales');
    }
};

const getCodigoPostal = async (id) => {
    try{
        return await modelCodigosPostales.CodigoPostal.findOne({
            raw: true,
            where: {
                id_codigo_postal: id
            },
            attributes:{
                exclude: ['id_municipio']
            },
            nest: true,
            include: [modelCodigosPostales.Municipio]
        });
    } catch (error) {
        console.log(error);
        throw new Error('Error en la consulta de codigo postal');
    }
};

module.exports = {
    getCodigosPostales,
    getCodigoPostal
};

