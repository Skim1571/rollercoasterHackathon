const { Schema } = require('mongoose');

const ridesSchema = new Schema(
  {
    name: { type: String, required: true },
    categories: { type: Schema.Types.ObjectId, ref: 'Categories' },
    price: { type: String, required: true },
    wait: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = ridesSchema;
