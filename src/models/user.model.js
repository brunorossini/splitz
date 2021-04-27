"use strict";

import { Model } from "sequelize";
import bcrypt from "bcryptjs";

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    comparePassword(candidatePassword) {
      return bcrypt.compare(candidatePassword, this.password);
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      phone: DataTypes.STRING,
      type: DataTypes.ENUM("employee", "user"),
    },
    {
      sequelize,
      modelName: "User",
      tableName: "Users",
      hooks: {
        beforeCreate: function (user, options) {
          const salt = bcrypt.genSaltSync(8);
          return (user.password = bcrypt.hashSync(user.password, salt));
        },
      },
    }
  );
  return User;
};
