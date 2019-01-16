const express = require('express');
const router = express.Router({mergeParams: true});

/* GET reviews index /reviews  */
router.get('/', (req, res, next) => {
    res.send('/reviews');
});

/* GET reviews index /reviews/new  */
router.get('/new', (req, res, next) => {
    res.send('/reviews');
});

/* review create /reviews */
router.post('/', (req, res, next) => {
    res.send('/reviews');
});

/* GET reviews to show /reviews/:id */
router.get('/:id', (req, res, next) => {
    res.send('/reviews');
});

/* GET reviews edit /reviews/:id/edit */
router.get('/:id/edit', (req, res, next) => {  
    res.send('/reviews/new');
});

/* GET reviews update /reviews */
router.put('/:id', (req, res, next) => {
    res.send('/reviews');
});

/* GET reviews delete /reviews */
router.delete('/:id', (req, res, next) => {
    res.send('/reviews');
});

module.exports = router;
