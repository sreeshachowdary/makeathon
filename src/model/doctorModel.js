const mongoose = require('mongoose');
// const { type } = require('os');

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    pwd: { type: String, required: true },
    phoneNumber: {type: String, required: true, unique: true},
    address: {type: stringify, required: true},
    bloodGroup:{type: String, required: true},
    birthDate: {type: String, required: true},
    adharCardNumber: {type: String, required: true, unique: true},
    role: {type: String, required: true},
    specialization:{type: String, required: true},
    licenseNumber: {type: String, required: true},
    experience: {type: String, required: true},
    languagePreference: {type: String, required: true}
});

module.exports = mongoose.model('User', doctorSchema);
