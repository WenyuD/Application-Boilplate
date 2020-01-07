const Sequelize = require('sequelize');
const connect = require('./db');

const LoginAuth = connect.define('loginAuth', {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  user_password: {
    type: Sequelize.STRING,
    allowNull: false,
  }
}, {
  id: false,
  createdAt: false,
  updatedAt: false,
});

module.exports = LoginAuth;