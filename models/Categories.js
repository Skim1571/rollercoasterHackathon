const { Schema } = require('mongoose');

const CategoriesSchema = new Schema(
  {
    type: { type: String, required: true },
    intensity: { type: Number, required: true },
    nausea: { type: Number, required: true },
    img: { type: String, require: true }
  },
  { timestamps: true }
);

module.exports = CategoriesSchema;
