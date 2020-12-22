const express = require('express');

const router = express.Router();
const notesController = require('../controllers/notesController');

router
  .route('')
  .get(notesController.getAllNotes)
  .post(notesController.createNote);
router.route('/:noteId').get(notesController.getNote);
router
  .route('/:moduleName/:recordId/Notes')
  .get(notesController.getRecordNotes);

module.exports = router;
