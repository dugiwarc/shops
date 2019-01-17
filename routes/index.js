const express = require('express');
const router = express.Router();
// destructuring **new** in ES6
const {
  postRegister,
  postLogin,
  getLogOut
} = require('../controllers');
const {
  asyncErrorHandler
} = require('../middleware');
// const { postLogin } = require('../middleware');


/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/register', (req, res, next) => {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/login', (req, res, next) => {
  res.send('login');
});

router.post('/register', asyncErrorHandler(postRegister));

router.post('/login', postLogin);

router.get('/logout', getLogOut);


module.exports = router;
