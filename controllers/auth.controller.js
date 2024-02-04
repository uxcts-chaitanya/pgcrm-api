
const bcrypt = require('bcrypt');
// const Registration = require('./registrationModel');
const User = require('../models/user');
const multer = require('multer');
const  jwt =require('jsonwebtoken')
const { errorHandler } = require('../utils/error')

// Function to handle user registration

// Configure multer storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


const signup = async (req, res, next) => {
    
        // Hashing the password before saving it to the database
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            fullName: req.body.fullName,
            dateOfBirth: req.body.dateOfBirth,
            phoneNumber: req.body.phoneNumber,
            address: req.body.address,
            country: req.body.country,
            state: req.body.state,
            city: req.body.city,

            // attachment: req.file.buffer // Assuming req.file contains the attachment
        });
        try {
        await newUser.save();
        res.status(201).json({message: "Registration successful!"});
    } catch (error) {
      //   res.status(400).send(error.message);
      //   next(error);
        next(error);
    }
};


const signin = async (req, res, next) => {
    const {email, password}=req.body;
    try{
        const validUser=await User.findOne({email});
        if(!validUser) return next(errorHandler(404,'User not found'));
        const validPassword =bcrypt.compareSync(password,validUser.password);
        if(!validPassword) return next (errorHandler(401,'Wrong Credentials'));
        const token=jwt.sign({id:validUser._id},process.env.JWT_SECRET);
        const {password:hashedPassword, ...rest}=validUser._doc;
        const expiryDate=new Date(Date.now()+3600000);
        res.cookie('access_token',token,{httpOnly:true,expires:expiryDate}).status(200).json(rest)
    }catch(error){
        next(error);
    }
};

const logout = (req, res) => {
    // Clear the cookie containing the access token
    res.clearCookie('access_token').status(200).json({ message: 'Signout successful' });
};

module.exports = {
   signup,
   signin,
   logout,
    }

    