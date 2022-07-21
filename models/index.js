const { model } = require('mongoose');
const RideSchema = require('./Rides');
const CategoriesSchema = require('./Categories');

const Rides = model('Ride', RideSchema);
const Categories = model('Categories', CategoriesSchema);

module.exports = {
  Rides,
  Categories
};