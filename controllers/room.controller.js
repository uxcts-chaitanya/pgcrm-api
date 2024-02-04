const Room = require('../models/rooms');


const pgroom = async (req, res) => {
    try {
        const { roomID, roomNumber, numberOfBeds, beds, washroom, shelfs } = req.body;
        const newRoom = new Room({ roomID, roomNumber, numberOfBeds, beds, washroom, shelfs });
        await newRoom.save();
        res.status(201).send(newRoom);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    }

const getAllRooms = async (req, res) => {
        try {
          const rooms = await Room.find();
          res.status(200).send(rooms);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      };



module.exports = {
   pgroom,
   getAllRooms
    }

    
