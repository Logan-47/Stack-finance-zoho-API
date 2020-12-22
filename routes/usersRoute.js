const express = require('express');

const router = express.Router();
const usersController = require('../controllers/usersController');

router.route('').get(usersController.getAllUsers);
router.route('/:userId').get(usersController.getUser);
router.route('/create-user').post(usersController.createUser);

module.exports = router;
