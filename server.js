const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const PORT = process.env.PORT || 3001;
const db = require('./db');

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger('dev'));

const { Categories, Rides } = require('./models');

app.get('/', (req, res) => {
  res.send('Root route!');
});

app.get('/categories', async (req, res) => {
  const categories = await Categories.find({});
  res.json(categories);
});

app.get('/categories/:id', async (req, res) => {
  const { id } = req.params;
  const category = await Categories.findById(id);
  res.json(category);
});

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});