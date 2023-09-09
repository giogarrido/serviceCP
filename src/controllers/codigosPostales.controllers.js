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

const getColoniasByCodigoPostal = async (cp) => {
    try{
        const codigoPostal = await modelCodigosPostales.CodigoPostal.findOne({
            where: {
                codigo_postal: cp,
            },
            raw: false,
            nest: true,
            include: [
                {
                    model: modelCodigosPostales.Colonia,
                    required: true,
                },
            ],
        });
        const colonias = [];
        for (const colonia of codigoPostal.colonias) {
            colonias.push(colonia.nombre_colonia);  
        }
        const result = {
            id_codigo_postal: codigoPostal.id_codigo_postal,
            codigo_postal: codigoPostal.codigo_postal,
            colonias: colonias,
        };
        return result;
    } catch (error) {
        console.error(error);
        return error.message;
    }
};


module.exports = {
    getCodigosPostales,
    getCodigoPostal,
    getColoniasByCodigoPostal
};

