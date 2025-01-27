const Patient = require('../models/patient');

// Function to create a new patient
const createPatient = async (data) => {
  const patient = new Patient(data);
  await patient.save();
  return patient;
};

// Function to update a patient
const updatePatient = async (id, data) => {
  const patient = await Patient.findById(id);
  if (!patient) throw new Error('Patient not found');
  Object.assign(patient, data); // Update patient fields
  await patient.save();
  return patient;
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
