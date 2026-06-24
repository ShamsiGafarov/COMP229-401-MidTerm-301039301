const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  make: {
    type: String,
    required: [true, 'Make is required']
  },
  model: {
    type: String,
    required: [true, 'Model is required']
  },
  year: {
    type: Number,
    required: [true, 'Year is required']
  },
  color: {
    type: String,
    required: [true, 'Color is required']
  },
  price: {
    type: Number,
    required: [true, 'Price is required']
  },
  description: {
    type: String,
    required: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Car', carSchema);