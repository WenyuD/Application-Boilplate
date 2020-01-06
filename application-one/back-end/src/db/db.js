const mysql = require('mysql');

const connect = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: MYSQL_USER_NAME,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
});

let promisedQuery = (sqlString, queryInput) => {
  new Promise((resolve, reject) => {
    connect.query(sqlString, queryInput, (error, result) => {
      if (error) {
        reject(error);
      }
      resolve(result);
    });
  });
};

module.exports = { promisedQuery };