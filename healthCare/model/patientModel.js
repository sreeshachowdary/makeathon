const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: Number },
    address: { type: String },
    bloodGroup: { type: String },
    birthDate: { type: Date },  
    role: {type: String, required: true},
    adharCardNumber: {type: String, required: true, unique: true},
    height: {type: Number, required: true},
    weight: {type: Number, required: true},
    bloodPressure: {type: Number, required: true},
    heartRate: {type: Number, required: true},
    bmi: {type: Number, required: true},
    primaryPhysicianName: {type: String, required: true},
    primaryPhysicianContact: {type: String, required: true},
    allergies: {type: Array, required: true},
    currentMedicines: {type: Array, required: true},
    surgicalHistory: {type: String, required: true},
    familyMedicalHistory: {type: String, required: true},
    mentalHealthIssue: {type: String, required: true},
    physicalDissability: {type: String, required: true},
    dailySteps: {type: Number, required: true},
    dailyWaterIntake: {type: Number, required: true},
    sleepHours: {type: Number, required: true},
    languagePreference: {type: String, required: true}
});

module.exports = mongoose.model('Patients', patientSchema);

// name, email, pwd, phoneNumber, address,bloodGroup,birthDate,adharCardNumber, height, weight, BloodPressure, HeartRate, BMI, role, primaryPhysicianName, primaryPhysicianContact, allergies, currentMedicines, SurgicalHistory, familyMedicalHistory, MentalHealthIssue, PhysicalDissability, languagePreference, dailySteps, dailyWaterIntake, sleepHours
