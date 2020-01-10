const Router = require('koa-router');
const controller = require('./loginController');

const router = Router();

router.post('/signup', controller.createNewUser);
router.post('/login', controller.signIn);

module.exports = router;