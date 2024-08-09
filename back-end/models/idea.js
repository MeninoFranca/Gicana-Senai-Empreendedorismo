const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Idea = sequelize.define('Idea', {
  id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
  },
  title: {
      type: DataTypes.STRING,
      allowNull: false,
  },
  description: {
      type: DataTypes.TEXT,
      allowNull: false,
  },
  category: {
      type: DataTypes.STRING,
      allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'id',
    },
    field: 'user_id', 
  },
  created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: false,
  tableName: 'ideas', 
});

module.exports = Idea;