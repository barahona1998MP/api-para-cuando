'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profile.belongsTo(models.Users, { foreignKey: 'user_id'})
      Profile.belongsTo(models.Roles, { foreignKey: 'role_id'})
      Profile.belongsTo(models.Countries, {as: 'country', foreignKey: 'country_id'})
      Profile.hasMany(models.Publications, {as: 'publications', foreignKey: 'profile_id'})
      //Profile.belongsToMany(models.Publications, { as: 'voted_publications', through: models.Votes, foreignKey: 'profile_id' })
    }
  }
  Profile.init({
    user_id: {
      type: DataTypes.UUID,
    },
    role_id: {
      type: DataTypes.INTEGER
    },
    country_id: {
      type: DataTypes.INTEGER
    },
    image_url: DataTypes.STRING,
    code_phone: DataTypes.INTEGER,
    phone: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Profile',
    tableName: 'profiles'
  });
  return Profile;
};