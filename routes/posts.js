const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware');
const {
    postIndex,
    postNew,
    postCreate,
    postShow,
    postEdit,
    postUpdate
} = require('../controllers/posts');

router.get('/', asyncErrorHandler(postIndex));

router.get('/new', postNew);

router.post('/', asyncErrorHandler(postCreate));

router.get('/:id', asyncErrorHandler(postShow));

router.get('/:id/edit', asyncErrorHandler(postEdit));

router.put('/:id', asyncErrorHandler(postUpdate));

module.exports = router;
