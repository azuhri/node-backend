const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('users', {
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
        notEmpty: {
          msg: 'name cannot be empty',
        },
    },
  },
  email: {    
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
        notEmpty: {
          msg: 'email cannot be empty',
        },
    },
  },
  password: {    
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
    validate: {
        notEmpty: {
          msg: 'password cannot be empty',
        },
    },
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = User;