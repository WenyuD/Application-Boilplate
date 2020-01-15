require('dotenv').config();
var jwt = require('jsonwebtoken');
const loginAuth = require('../db/loginAuth');

const checkExists = email => 
  loginAuth.findOne({
    where: {
      email
    }
  });

const authService = email => {
  const user = { email: email };
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
}

const authenticatedToken = (ctx, next) => {
  const token = ctx.cookies.get('token');
  if (!token) {
    ctx.status = 401;
    return;
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      ctx.status = 403;
    } else {
      ctx.request.user = user;
      next();
    }
  })
}

module.exports = {
  checkExists,
  authService,
  authenticatedToken
}
