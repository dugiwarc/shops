const express = require('express');
const router = express.Router();

/* GET posts index /posts  */
router.get('/', (req, res, next) => {
    res.send('/posts');
});

/* GET posts index /posts/new  */
router.get('/new', (req, res, next) => {
    res.send('/posts');
});

/* POST create /posts */
router.post('/', (req, res, next) => {
    res.send('/posts');
});

/* GET posts to show /posts/:id */
router.get('/:id', (req, res, next) => {
    res.send('/posts');
});

/* GET posts edit /posts/:id/edit */
router.get('/:id/edit', (req, res, next) => {
    res.send('/posts/new');
});

/* GET posts update /posts */
router.put('/:id', (req, res, next) => {
    res.send('/posts');
});

/* GET posts delete /posts */
router.delete('/:id', (req, res, next) => {
    res.send('/posts');
});

module.exports = router;
