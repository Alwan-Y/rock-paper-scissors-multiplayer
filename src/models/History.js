const { Model } = require('sequelize')
const crypto = require('crypto')
const format = require('biguint-format')

module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const { Room } = models

      History.belongsTo(Room, {
        foreignKey: 'roomId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })
    }
  }
  History.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        unique: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
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
      roomId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'History',
      tableName: 'History',
    }
  )
  return History
}
