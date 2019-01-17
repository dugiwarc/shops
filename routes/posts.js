const express = require('express');
const router = express.Router();
const { errorHandler } = require('../middleware');
const {
    getPosts,
    newPost,
    createPost
} = require('../controllers/posts');

router.get('/', errorHandler(getPosts));

router.get('/new', newPost);

router.post('/', errorHandler(createPost));

router.get('/:id', (req, res, next) => {
    res.send('Test_2');
});

module.exports = router;
