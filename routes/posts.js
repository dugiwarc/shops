const express = require('express');
const router = express.Router();
const { errorHandler } = require('../middleware');
const {
    getPosts,
    newPost,
    createPost,
    showPost
} = require('../controllers/posts');

router.get('/', errorHandler(getPosts));

router.get('/new', newPost);

router.post('/', errorHandler(createPost));

router.get('/:id', errorHandler(showPost));

module.exports = router;
