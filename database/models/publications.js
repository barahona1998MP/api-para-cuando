'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Publications extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Publications.belongsTo(models.Cities, {as: 'city', foreignKey: 'city_id'})
      Publications.belongsTo(models.PublicationsTypes, {as: 'publicationsTypes', foreignKey: 'publication_type_id'})
      Publications.belongsTo(models.Profile, {as: 'profiles', foreignKey: 'profile_id'})
      
    }
  }
  Publications.init({
    profile_id: {
      type: DataTypes.UUID
    },
    publication_type_id: {
      type: DataTypes.INTEGER
    },
    city_id: {
      type: DataTypes.INTEGER
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    content: DataTypes.TEXT,
    picture: DataTypes.STRING,
    image_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Publications',
    tableName: 'publications'
  });
  return Publications;
};