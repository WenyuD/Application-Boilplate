const Router = require('koa-router');
const controller = require('./loginController');
const common = require('./common');

const router = Router();

router.post('/signup', controller.createNewUser);
router.post('/login', controller.signIn);
router.get('/dashboard', common.authenticatedToken, controller.checkUserToken);

module.exports = router;