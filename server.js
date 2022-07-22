const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const PORT = process.env.PORT || 3001;
const db = require('./db');

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger('dev'));

const { Categories, Rides, Users } = require('./models');

app.get('/', (req, res) => {
  res.send('Root route!');
});

app.get('/categories', async (req, res) => {
  const categories = await Categories.find({});
  res.json(categories);
});

app.get('/categories/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Categories.findById(id);
    if (!category) throw Error('Category not found!');
    res.json(category);
  } catch (e) {
    console.log(e);
    res.send('Category not found!');
  }
});

app.get('/rides', async (req, res) => {
  const rides = await Rides.find({});
  res.json(rides);
});

app.get('/ride/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const ride = await Rides.findById(id);
    if (!ride) throw Error('Ride not found!');
    res.json(ride);
  } catch (e) {
    console.log(e);
    res.send('Ride not found!');
  }
});

app.get('/rides/details/:id', async (req, res) => {
  try {
    const { id } = req.params;
    let userArray = [] 
    const users = await Users.find()
    users.filter((user) => {
      if(user.rides.indexOf(id !== -1)){
        userArray.push(user.name)
      }
    })
    res.send(userArray)
  } catch (e) {
    console.log(e)
  }
});

app.post('/reserve', async (req, res) => {
  const newUser = await Users.create(req.body);
  res.json(newUser);
});

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});