const Router = require('express');
const postController = require('../controllers/post.controller');
const PostController = require('../controllers/post.controller');

const router = new Router();

router.get('/post', postController.getPostsByUser);
router.post('/post', postController.createPost);

module.exports = router;
