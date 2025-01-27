const mongoose = require('mongoose');


const patientSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
      type: String
    },
    age: {
      type: Number
    },
    wellnessGoals: {
      type: [String]
    },
    preventiveCareReminders: {
      type: [String],
      required: false, 
    },
    healthTips: {
        type: [String],
        required: false,
    }
  });

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;
