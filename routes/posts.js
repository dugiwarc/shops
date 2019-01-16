const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('/posts');
});

router.get('/new', (req, res, next) => {
    res.send('/posts');
});

router.post('/', (req, res, next) => {
    res.send('/posts');
});

router.get('/:id', (req, res, next) => {
    res.send('/posts');
});

router.get('/:id/edit', (req, res, next) => {
    res.send('/posts/new');
});

router.put('/:id', (req, res, next) => {
    res.send('/posts');
});

router.delete('/:id', (req, res, next) => {
    res.send('/posts');
});

module.exports = router;
