const express = require('express');
const Floor = require('../models/floor');
const { pgfloor, getAllFloors,getFloorsbyUser } = require('../controllers/floor.controller')
const router = express.Router();

router.post('/floors', pgfloor );
router.get('/getfloors', getAllFloors );
router.get('/getfloorsbyuser/:userId', getFloorsbyUser);


module.exports = router;