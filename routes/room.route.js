const express = require('express');
const Room = require('../models/rooms');
const { pgroom, getAllRooms } = require('../controllers/room.controller')
const router = express.Router();

router.post('/rooms', pgroom );
router.get('/getrooms', getAllRooms );


module.exports = router;