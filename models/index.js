const { model } = require('mongoose');
const RideSchema = require('./Rides');
const CategoriesSchema = require('./Categories');
const UserSchema = require('./Users');

const Rides = model('Ride', RideSchema);
const Categories = model('Categories', CategoriesSchema);
const Users = model('Users', UserSchema);

module.exports = {
  Rides,
  Categories,
  Users
};