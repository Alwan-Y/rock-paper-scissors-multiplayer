'use strict'
const { Model } = require('sequelize')
const bcrypt = require('bcrypt')

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

    static encrypt = (password) => bcrypt.hashSync(password, 8)

    static register = ({
      username,
      password,
      confirmPassword,
      address,
      gender,
      age,
    }) => {
      if (password !== confirmPassword) {
        throw new Error('Password and Confirm Password not match')
      }

      const encryptedPassword = this.encrypt(password)

      return this.create({
        username,
        password: encryptedPassword,
        address,
        gender,
        age,
      })
    }
  }
  User.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
      },
      gender: {
        type: DataTypes.ENUM,
        values: ['m', 'f'],
      },
      age: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'User',
    }
  )
  return User
}
