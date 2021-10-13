'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Url extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Url.init({
    url: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    allUrlId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Url',
  });
  return Url;
};