const express = require('express');

const router = express.Router();

const paymentOrderController = require('../controllers/paymentOrderController');

router
  .route('/create-payment-order')
  .post(paymentOrderController.createPaymentOrder);

module.exports = router;
