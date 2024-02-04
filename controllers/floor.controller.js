const Floor = require('../models/floor');


const pgfloor = async (req, res) => {


    const { floorName, floorNumber, commonWashroomCount } = req.body;
    const userId = req.user.id;
    console.log(userId)
    try {
        const newFloor = new Floor({
            // user: userId,
            floorName,
            floorNumber,
            commonWashroomCount
        });

        await newFloor.save();
        res.status(201).send({ message: "Floor added successfully!" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

    // const newFloor = new Floor({
    //     floorName: req.body.floorName,
    //     floorNumber: req.body.floorNumber,
    //     commonWashroomCount: req.body.commonWashroomCount,
    // });
    // try {
    //     await newFloor.save();
    //     res.status(201).send(pgfloor);
    //   } catch (error) {
    //     res.status(400).send(error.message);
    //   }
    // }

      const getAllFloors = async (req, res) => {
        try {
            const floors = await Floor.find();
            res.status(200).json(floors);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };


    const getFloorsbyUser = async (req, res) => {
        const userId = req.params.userId; // Extract user ID from URL parameters
        console.log('User ID:', userId); // Log the userId to the console
        try {
            const floors = await Floor.find({ user: userId });
            res.status(200).json(floors);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };
    

    // const getFloorsbyUser = async (req, res) => {
    //     try {
    //         const floors = await Floor.find();
    //         // add condition based on user
    //         res.status(200).json(floors);
    //     } catch (error) {
    //         res.status(500).json({ message: error.message });
    //     }
    // };

    // get floors by users


module.exports = {
   pgfloor,
   getAllFloors,
   getFloorsbyUser
    }

    
