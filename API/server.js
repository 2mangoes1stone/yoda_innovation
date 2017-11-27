require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const retroRouter = require('./routes/retro');
const teamsRouter = require('./routes/team');
const authRouter = require('./routes/auth');
const cors = require('cors');

const server = express();

// middleware
server.use(bodyParser.json());


// CORS
server.use(cors({
  origin: process.env.CORS_ORIGINS,
}));

// test route
server.get('/', function(request, response) {
  response.send('hello world');
});

// routes
server.use(authRouter);
server.use('/api', [
  retroRouter,
  teamsRouter
]);

// Handle errors by returning JSON
server.use((error, req, res, next) => {
  const status = error.status || 500;
  res.status(status).json({
    error: {message: error.message},
  });
});


server.listen(8000, () => {
  console.log('Server listening on port 8000');
});