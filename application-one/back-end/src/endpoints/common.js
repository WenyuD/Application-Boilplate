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
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '60s' });
}

const authenticatedToken = (ctx, next) => {
  const token = ctx.request.querystring.split('=')[1];
  if (!token) {
    ctx.status = 401;
    ctx.response.body = 'No token';
    return;
  };
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      ctx.status = 403;
      ctx.response.body = 'Token not match';
    } else {
      ctx.request.user = user;
      next();
    }
  });
}

module.exports = {
  checkExists,
  authService,
  authenticatedToken
}
