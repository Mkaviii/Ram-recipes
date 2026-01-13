
const express = require('express');
const ramRoutes = require('./routes/ramRoutes');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the RAM Management API');
});

app.use('/api/rams', ramRoutes);

module.exports = app;
