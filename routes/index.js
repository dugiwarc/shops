const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/register', (req, res, next) => {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/register', (req, res, next) => {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/login', (req, res, next) => {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/profile', (req, res, next) => {
  res.send('Get /profile');
});

router.get('/profile/:user_id', (req, res, next) => {
  res.send('Put /profile/:user_id');
});

router.get('/forgot', (req, res, next) => {
  res.send('hi');
});

router.put('/forgot', (req, res, next) => {
  res.send('hi');
});

router.get('/reset/:token', (req, res, next) => {
  res.send('hi');
});

router.put('/reset/:token', (req, res, next) => {
  res.send('hi');
});
module.exports = router;
