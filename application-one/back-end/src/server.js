require('dotenv').config();

const server = require('./index');

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`)
})