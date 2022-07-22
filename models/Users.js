const { Schema } = require('mongoose');

const Users = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    rides: { type: Array, required: true }
    },
  { timestamps: true }
);

module.exports = Users;
