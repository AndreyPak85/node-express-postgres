const Router = require('express');
const UserController = require('../controllers/user.controller.js');

const router = new Router();

router.post('/user', UserController.createUser);
router.get('/user', UserController.getUsers);
router.get('/user/:id', UserController.getUserById);
router.put('/user', UserController.updateUser);
router.delete('/user/:id', UserController.deleteUser);

module.exports = router;
