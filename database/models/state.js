'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class State extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      State.belongsTo(models.Countries, {as: 'country', foreignKey: 'country_id'})
      State.hasMany(models.Cities, {as: 'city', foreignKey: 'state_id'})
    }
  }
  State.init({
    country_id: {
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'State',
    tableName: 'state'
  });
  return State;
};