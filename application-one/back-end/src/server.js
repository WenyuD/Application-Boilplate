require('dotenv').config();
const server = require('./index');
const connect = require('./db/db');

connect
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`)
})