const Koa = require('koa');
const router = require('./endpoints/loginService');
const bodyParser = require('koa-bodyparser');
var cors = require('koa2-cors');

const server = new Koa();

server
  .use(cors({
    credentials: true,
    origin: '*',
    allowHeaders: ['Content-Type', 'Accept']
  }))
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

module.exports = server;
