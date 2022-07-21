const { Schema } = require('mongoose')

const ridesSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: String, required: true },
    wait: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = ridesSchema
