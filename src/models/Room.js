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

    static createRoom = (player1Username) => {
      const id = format(crypto.randomBytes(2), 'dec')

      return this.create({
        id,
        roomName: id,
        player1Username,
      })
    }

    getResult = async function () {
      const room = this
      const { player1Choice, player2Choice } = room

      try {
        if (player1Choice && player2Choice && player1Choice === 'rock') {
          player1Choice === player2Choice
            ? (room.result = 'Draw')
            : player2Choice === 'scissor'
            ? (room.result = 'Player 1 Win')
            : (room.result = 'Player 2 Win')
        }

        if (player1Choice && player2Choice && player1Choice === 'scissor') {
          player1Choice === player2Choice
            ? (room.result = 'Draw')
            : player2Choice === 'rock'
            ? (room.result = 'Player 2 Win')
            : (room.result = 'Player 1 Win')
        }

        if (player1Choice && player2Choice && player1Choice === 'paper') {
          player1Choice === player2Choice
            ? (room.result = 'Draw')
            : player2Choice === 'scissor'
            ? (room.result = 'Player 2 Win')
            : (room.result = 'Player 1 Win')
        }

        await room.save()
      } catch (err) {
        return err
      }
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
      player1Username: {
        type: DataTypes.STRING,
      },
      player2Username: {
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
