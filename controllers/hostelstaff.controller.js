const Staff = require('../models/staff');


const pgstaff = async (req, res) => {


    const { user,
        username,
        aadharNumber,
        email,
        fullName,
        dateOfBirth,
        joiningDate,
        salaryDate,
        salaryAmount,
        phoneNumber,
        address,
        country,
        state,
        city, } = req.body;

    try {
        const newStaff = new Staff({
            user,
            username,
            aadharNumber,
            email,
            fullName,
            dateOfBirth,
            joiningDate,
            salaryDate,
            salaryAmount,
            phoneNumber,
            address,
            country,
            state,
            city,
        });

        await newStaff.save();
        res.status(201).send({ message: "Staff added successfully!" });
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

      const getAllstaff = async (req, res) => {
        try {
            const staffemp = await Staff.find();
            res.status(200).json(staffemp);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    


module.exports = {
    pgstaff,
    getAllstaff
    }

    
