'use strict'
const { Model } = require('sequelize')

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()

module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }

    static encrypt = (password) => bcrypt.hashSync(password, 8)

    static findByCredential = async (username, password) => {
      const admin = await this.findOne({ where: { username } })

      if (!admin) {
        throw new Error('Unable to Login')
      }

      const isMatch = await bcrypt.compareSync(password, user.password)

      if (!isMatch) {
        throw new Error('Unable to Login')
      }

      return admin
    }

    generateAuthToken = async function () {
      const admin = this
      const secret = process.env.SECRET

      const token = jwt.sign({ id: admin.id }, secret, { expiresIn: 360000 })

      await admin.update(
        {
          tokens: sequelize.fn('array_append', sequelize.col('tokens'), token),
        },
        { where: { id: admin.id } }
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
      tokens: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
    },
    {
      timestamps: true,
      sequelize,
      modelName: 'Admin',
      tableName: 'Admin',
    }
  )
  return Admin
}
