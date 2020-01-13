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
      ctx.response.body = JSON.stringify('Created new user!');
    } catch {
      ctx.response.status(500).send();
    }
  } else {
    ctx.response.body = JSON.stringify('This email already exists!');
  }
}

const signIn = async ctx => {
  const checkExists = await common.checkExists(ctx.request.body.email);
  if (checkExists === null) {
    ctx.response.body = JSON.stringify('User email does not exist!');
  } else {
    try {
      if (await bcrypt.compare(ctx.request.body.password, checkExists.dataValues.user_password)) {
        ctx.response.body = JSON.stringify('User info Correct!');
      } else {
        ctx.response.body = JSON.stringify('Password incorrect!');
      };
    } catch {
      ctx.response.status(500).send();
    }
  }
}

module.exports = {
  createNewUser,
  signIn
}