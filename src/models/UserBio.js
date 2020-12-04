'use strict'
const { Model } = require('sequelize')
const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
  class UserBio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const { User } = models

      UserBio.belongsTo(User, {
        foreignKey: 'userId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })
    }
  }
  UserBio.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
      },
      fullName: {
        type: DataTypes.STRING,
        unique: true,
      },
      gander: {
        type: DataTypes.ENUM,
        values: ['m', 'f'],
      },
      age: {
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      sequelize,
      modelName: 'UserBio',
      tableName: 'UserBio',
    }
  )
  return UserBio
}
