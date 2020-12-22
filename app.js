const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const xss = require('xss-clean');

const usersRoute = require('./routes/usersRoute');
const recordsRoute = require('./routes/recordsRoute');
const notesRoute = require('./routes/notesRoute');
const refreshToken = require('./utils/refreshToken');

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

app.use('/users', usersRoute);
app.use('/records', recordsRoute);
app.use('/notes', notesRoute);

// global error handler
app.all('*', (req, res) => {
  res.status(404).send(`Can't find ${req.originalUrl} on this server`);
});

module.exports = app;
