<<<<<<< HEAD
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

    static register = ({ username, password, confirmPassword }) => {
      if (password !== confirmPassword) {
        throw new Error('Password and Confirm Password not match')
      }

      const encryptedPassword = this.encrypt(password)

      console.log(encryptedPassword)

      return this.create({
        username,
        password: encryptedPassword,
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
    },
    {
      timestamps: true,
      sequelize,
      modelName: 'User',
      tableName: 'User',
    }
  )
  return User
}
=======
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
      const { UserBio } = models

      User.hasOne(UserBio, {
        foreignKey: 'userId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })
    }

    static encrypt = (password) => bcrypt.hashSync(password, 8)

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
    },
    {
      timestamps: true,
      sequelize,
      modelName: 'User',
      tableName: 'User',
    }
  )
  return User
}
>>>>>>> 5232273... add bio to register user
