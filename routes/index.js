const express = require('express');
const comments = require('./comments')
const posts = require('./posts');

const router = express.Router();

router.use('/posts', posts);
router.use('/comments', comments);

module.exports = router;