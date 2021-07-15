'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here     

      // hasOne is use here for get record of orders by user id

      /*
      // for one-to-one
      User.hasOne(models.Order, {
        foreignKey: "user_id",
        as: 'User_Orders'// This is FK in order table
      })
      */

      // for one-to-many
      User.hasMany(models.Order, {
        foreignKey: "user_id",
        as: 'User_Orders'// This is FK in order table
      })
    }
  };
  User.init({
    userName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};