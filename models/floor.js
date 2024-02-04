const mongoose = require('mongoose');


const floorSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
    floorName: {
        type: String,
        required: false
      },
    floorNumber: {
      type: Number,
      required: true
    },
    commonWashroomCount: {
      type: Number,
      required: false
    }
  }, {timestamps: true});
  
  const Floor = mongoose.model('Floor', floorSchema);
  
  module.exports = Floor;