const express = require('express');

const router = express.Router();
const recordsController = require('../controllers/recordsController');

router
  .route('/:moduleName')
  .get(recordsController.getRecords)
  .post(recordsController.addrecord);

module.exports = router;
