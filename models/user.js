// const mongoose = require('mongoose');

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
	
    country: {
        type: String,
        required: true
    },
	
    state: {
        type: String,
        required: true
    },
	
    city: {
        type: String,
        required: true
    },
    // attachment: {
    //     type: Buffer, // Assuming attachment will be stored as binary data
    //     required: true
    // },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;




