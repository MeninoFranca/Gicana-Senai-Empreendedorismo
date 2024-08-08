const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Idea = require('./idea');

const Like = sequelize.define('Like', {
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
  },
  idea: {
    type: DataTypes.INTEGER,
    references: {
      model: Idea,
      key: 'id',
    },
  },
}, {
  timestamps: false,
  tableName: 'likes',
});

module.exports = Like;