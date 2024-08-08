const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Idea = require('./idea');

const Comment = sequelize.define('Comment', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
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
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }, {
    timestamps: false,
    tableName: 'comments',
  });

  module.exports = Comment;
