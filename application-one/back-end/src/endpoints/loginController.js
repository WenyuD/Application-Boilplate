const loginAuth = require('../db/loginAuth');
const common = require('./common');

const createNewUser = async ctx => {
  const checkExists = await common.checkExists(ctx.request.body.email);
  if (checkExists === null) {
    await loginAuth.create({
      email: ctx.request.body.email,
      user_password: ctx.request.body.password
    });
    ctx.response.body = JSON.stringify('Created new user!');
  } else {
    ctx.response.body = JSON.stringify('This email already exists!');
  }
}

const signIn = async ctx => {
  const checkExists = await common.checkExists(ctx.request.body.email);
  if (checkExists === null) {
    ctx.response.body = JSON.stringify('User email does not exist!');
  } else if (checkExists.dataValues.user_password !== ctx.request.body.password) {
    ctx.response.body = JSON.stringify('Password incorrect!');
  } else {
    ctx.response.body = JSON.stringify('User info Correct!');
  }
}

module.exports = {
  createNewUser,
  signIn
}