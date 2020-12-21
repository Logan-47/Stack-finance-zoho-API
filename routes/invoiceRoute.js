const express = require('express');

const router = express.Router();

const invoiceContorller = require('../controllers/invoiceController');

router.route('/create-invoice').post(invoiceContorller.createInvoice);

module.exports = router;
