const { Model } = require('sequelize')
const crypto = require('crypto')
const format = require('biguint-format')

module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}

    static createRoom = (player1Id) => {
      const id = format(crypto.randomBytes(2), 'dec')

      return this.create({
        id,
        roomName: id,
        player1Id,
      })
    }
  }
  Room.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      player1Id: {
        type: DataTypes.STRING,
      },
      player2Id: {
        type: DataTypes.STRING,
      },
      player1Choice: {
        type: DataTypes.STRING,
      },
      player2Choice: {
        type: DataTypes.STRING,
      },
      result: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: true,
      sequelize,
      modelName: 'Room',
      tableName: 'Room',
    }
  )
  return Room
}
