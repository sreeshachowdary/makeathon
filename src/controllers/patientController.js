const patientDatabase = require('../database/patientDatabase');

// Controller function to create a new patient
const createPatient = async (req, res) => {
  try {
    const patient = await patientDatabase.createPatient(req.body);
    res.status(201).json({ message: 'Patient created successfully', patient });
  } catch (err) {
    res.status(500).json({ message: 'Error creating patient', error: err.message });
  }
};

// Controller function to update patient info
const updatePatient = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedPatient = await patientDatabase.updatePatient(id, req.body);
    res.json({ message: 'Patient info updated successfully', patient: updatedPatient });
  } catch (err) {
    res.status(500).json({ message: 'Error updating patient', error: err.message });
  }
};

// Controller function to get patient info by ID
const getPatient = async (req, res) => {
  const { id } = req.params;
  try {
    const patient = await patientDatabase.getPatientById(id);
    if (!patient) return res.status(404).json({ message: 'Patient not found' });
    res.json(patient);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching patient', error: err.message });
  }
};

module.exports = {
  createPatient,
  updatePatient,
  getPatient,
};
