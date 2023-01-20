'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PublicationsTypes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PublicationsTypes.hasMany(models.Publications, {as: 'publications', foreignKey: 'publication_type_id'})
    }
  }
  PublicationsTypes.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PublicationsTypes',
    tableName: 'publicationsTypes'
  });
  return PublicationsTypes;
};