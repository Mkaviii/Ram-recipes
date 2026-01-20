const mongoose = require('mongoose');

const ramSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    ingredients: {
      type: [String],
      required: true
    },

    instructions: {
      type: String,
      required: true
    },

    prepTime: {
      type: Number // minutes
    },

    servings: {
      type: Number,
      default: 1
    },

    image: {
      type: String // image URL
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Ram', ramSchema);