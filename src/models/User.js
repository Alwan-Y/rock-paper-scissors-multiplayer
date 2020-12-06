'use strict'
const { Model } = require('sequelize')

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()

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

    static findByCredential = async (username, password) => {
      const user = await this.findOne({ where: { username } })

      if (!user) {
        throw new Error('Unable to Login')
      }

      const isMatch = await bcrypt.compareSync(password, user.password)

      if (!isMatch) {
        throw new Error('Unable to Login')
      }

      return user
    }

    generateAuthToken = async function () {
      const user = this
      const secret = process.env.SECRET

      const token = jwt.sign({ id: user.id }, secret, { expiresIn: 360000 })

      await user.update(
        {
          tokens: sequelize.fn('array_append', sequelize.col('tokens'), token),
        },
        { where: { id: user.ud } }
      )

      return token
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
      roleBase: {
        type: DataTypes.STRING,
        defaultValue: 'user',
      },
      tokens: {
        type: DataTypes.ARRAY(DataTypes.STRING),
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
