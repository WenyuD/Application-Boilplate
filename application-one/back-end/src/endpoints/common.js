const loginAuth = require('../db/loginAuth');

const checkExists = email => 
  loginAuth.findOne({
    where: {
      email
    }
  });

module.exports = {
  checkExists
}
