const { Schema } = require('mongoose');

const Users = new Schema(
  {
    email: { type: String, required: false },
    name: { type: String, required: false },
    rides: { type: Array, required: false }
    },
  { timestamps: true }
);

module.exports = Users;
