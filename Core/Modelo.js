const { Sequelize, DataTypes } = require('sequelize');
//const sequelize = require('../config/database');

// Configuración de la conexión a la base de datos MySQL
const sequelize = new Sequelize('reto', 'sas', '31P1474N41', {
    host: '127.0.0.1',
    port: '3306',
    dialect: 'mysql',
  });

  // Database initialization
(async () => {
  try {
    await sequelize.sync();
    console.log('Database connection successful');
  } catch (error) {
    console.error('Database connection failed:', error);
  }
})();

const Modelo = sequelize.define(
  'Modelo',
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'modelos',
  }
);




module.exports = Modelo;

