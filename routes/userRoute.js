const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');

router.route('/get-all-users').get(userController.getAllUsers);
router.route('/create-user').post(userController.createUser);

module.exports = router;
