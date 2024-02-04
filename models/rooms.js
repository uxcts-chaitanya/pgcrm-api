const mongoose = require('mongoose');

const bedSchema = new mongoose.Schema({
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room',
    required: true
  },
  bedID: {
    type: Number,
    required: true
  }
});

const roomSchema = new mongoose.Schema({
  floor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Floor',
    required: true
  },
  roomID: {
    type: String,
    required: true
  },
  roomNumber: {
    type: String,
    required: true
  },
  numberOfBeds: {
    type: Number,
    required: true
  },
  beds: [bedSchema], // Embedding beds within the room schema
  washroom: {
    type: String,
    enum: ['Yes', 'No'],
    required: true
  },
  shelfs: {
    type: String,
    enum: ['Yes', 'No'],
    required: true
  }
});

const Room = mongoose.model('Room', roomSchema);
  
module.exports = Room;
