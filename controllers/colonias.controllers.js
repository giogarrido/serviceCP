const modelColonias = require("../models/colonias.models");

const getColonias = async () => {
  try {
    return await modelColonias.Colonia.findAll({
      raw: true,
      attributes: {
        exclude: ["id_ciudad", "id_codigo_postal"],
      },
      nest: true,
      include: [modelColonias.Ciudad, modelColonias.CodigoPostal],
    });
  } catch (error) {
    console.log(error);
    throw new Error("Error en la consulta de colonias");
  }
};

const getColonia = async (id) => {
  try {
    return await modelColonias.Colonia.findOne({
      raw: true,
      where: {
        id_colonia: id,
      },
      attributes: {
        exclude: ["id_ciudad", "id_codigo_postal"],
      },
      nest: true,
      include: [modelColonias.Ciudad, modelColonias.CodigoPostal],
    });
  } catch (error) {
    console.log(error);
    throw new Error("Error en la consulta de colonias");
  }
};

module.exports = {
    getColonias,
    getColonia,
};
