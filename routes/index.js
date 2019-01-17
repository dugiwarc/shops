const express = require('express');
const router = express.Router();
const passport = require('passport');
// destructuring **new** in ES6
const { postRegister } = require('../controllers');
const { errorHandler } = require('../middleware');


/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/register', (req, res, next) => {
  res.render('index', {
    title: 'Express'
  });
});

router.post('/register', errorHandler(postRegister));

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
})
);

router.get('/logout', (req, res, next) => {
  req.logout();
  res.redirect('/');
});


module.exports = router;
