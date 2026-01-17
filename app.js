const express = require('express');
const authRoutes = require('./routes/authRoutes');
const ramRoutes = require('./routes/ramRoutes');

const app = express();
app.use(express.json());

app.get('/', (req,res) => res.send('Welcome to RAM Inventory API'));
app.use('/auth', authRoutes);
app.use('/api/rams', ramRoutes);

module.exports = app;
