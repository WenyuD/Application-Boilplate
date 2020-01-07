const Sequelize = require('sequelize');
require('dotenv').config();

const connect = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER_NAME,
  process.env.MYSQL_PASSWORD, {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    dialect: 'mysql'
});

module.exports = connect;