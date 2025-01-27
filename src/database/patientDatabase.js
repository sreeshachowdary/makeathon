const Patient = require('../models/patient');

// Function to create a new patient
const createPatient = async (data) => {
  const patient = new Patient(data);
  await patient.save();
  return patient;
};

// Function to update a patient
const updatePatient = async (id, data) => {
  try{
  const response = await Patient.updateOne({id:id},{$set: data})
  return response
}
catch(e){
  throw new error(e.message)
}
};

// Function to get a patient by ID
const getPatientById = async (id) => {
  return await Patient.findById(id);
};

// Function to get all patients
const getAllPatients = async () => {
  return await Patient.find();
};

module.exports = {
  createPatient,
  updatePatient,
  getPatientById,
  getAllPatients,
};
