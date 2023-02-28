const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Genre extends Model {}

Genre.init(
    {
      id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
      },
      name: {
          type: DataTypes.STRING,
          allowNull: false,
      }
    }
);

module.exports = Genre;