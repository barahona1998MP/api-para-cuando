'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Countries extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Countries.hasMany(models.Profile, {as: 'profile', foreignKey: 'country_id'})
      Countries.hasMany(models.State, {as: 'state', foreignKey: 'country_id'})
    }
  }
  Countries.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Countries',
    tableName: 'countries'
  });
  return Countries;
};