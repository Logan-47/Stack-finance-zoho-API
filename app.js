const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const xss = require('xss-clean');

const invoiceRoute = require('./routes/invoiceRoute');
const paymentOrderRoute = require('./routes/paymentOrderRoute');
const userRoute = require('./routes/userRoute');
const refreshToken = require('./utils/refreshToken');
const getrecords = require('./utils/getRecords');

const app = express();

// Set Security HTTP headers
app.use(helmet());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json({ limit: '10kb' }));

// Data Sanitization Against Cross Site Scripting
app.use(xss());

// routes
app.get('/create-access-token', refreshToken);
app.get('/get-records/:recordName', getrecords);

app.use('', invoiceRoute);
app.use('', userRoute);
app.use('', paymentOrderRoute);

// global error handler
app.all('*', (req, res) => {
  res.status(404).send(`Can't find ${req.originalUrl} on this server`);
});

module.exports = app;
