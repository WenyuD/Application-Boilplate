const loginAuth = require('../db/loginAuth');
const common = require('./common');
const bcrypt = require('bcryptjs');

const createNewUser = async ctx => {
  const checkExists = await common.checkExists(ctx.request.body.email);
  if (checkExists === null) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(ctx.request.body.password, salt);
      await loginAuth.create({
        email: ctx.request.body.email,
        user_password: hashedPassword
      });
      ctx.status = 200;
      ctx.response.body = JSON.stringify('Created new user!');
    } catch {
      ctx.status = 500;
    }
  } else {
    ctx.status = 403;
    ctx.response.body = JSON.stringify('This email already exists!');
  }
}

const signIn = async ctx => {
  const checkExists = await common.checkExists(ctx.request.body.email);
  if (checkExists === null) {
    ctx.status = 404;
    ctx.response.body = JSON.stringify('User email does not exist!');
    return;
  }
  try {
    if (await bcrypt.compare(ctx.request.body.password, checkExists.dataValues.user_password)) {
      const token = common.authService(ctx.request.body.email);
      ctx.headers.authorization = `Bearer ${token}`;
      ctx.cookies.set('token', token, {
        httpOnly: true
      });
      ctx.status = 200;
      ctx.response.body = JSON.stringify('User information correct!');
    } else {
      ctx.status = 401;
      ctx.response.body = JSON.stringify('Password incorrect!');
    };
  } catch {
    ctx.status = 500;
  }
}

const checkUserToken = ctx => {
  const userEmail = ctx.request.user.email;
  ctx.status = 200;
  ctx.response.body = JSON.stringify(userEmail);
}

module.exports = {
  createNewUser,
  signIn,
  checkUserToken
}