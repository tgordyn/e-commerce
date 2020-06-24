const S = require("sequelize");
const db = require("../config/db");

class Carrito extends S.Model {}

Carrito.init(
  {
    valor_compra: {
      type: S.FLOAT,
      allowNull: false,
    },
    dir_entrega: {
      type: S.STRING,
      allowNull: false,
    },
    ciudad_entrega: {
      type: S.STRING,
      allowNull: false,
    },
    CP_entrega: {
      type: S.INTEGER,
      allowNull: false,
    },
    estado: {
      // estado pendiente || completado 
      type: S.STRING,
      defaultValue:'pendiente'
    },
  },
  {
    sequelize: db,
    modelName: "carrito",
  }
);

module.exports = Carrito;
