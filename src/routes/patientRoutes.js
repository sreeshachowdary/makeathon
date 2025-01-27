// routes/patientRoutes.js
const express = require('express');
const Patient = require('../model/patientModel');

const router = express.Router();

// Update patient info
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, age, condition, wellnessGoals, preventiveCareReminders } = req.body;

  try {
    const patient = await Patient.findById(id);
    if (!patient) return res.status(404).json({ message: 'Patient not found' });

    patient.name = name || patient.name;
    patient.age = age || patient.age;
    patient.condition = condition || patient.condition;
    patient.wellnessGoals = wellnessGoals || patient.wellnessGoals;
    patient.preventiveCareReminders = preventiveCareReminders || patient.preventiveCareReminders;

    await patient.save();
    res.json({ message: 'Patient info updated successfully', patient });
  } catch (err) {
    res.status(500).json({ message: 'Error updating patient info', error: err });
  }
});

// fetch patient info
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const patient = await Patient.findById(id);
    if (!patient) return res.status(404).json({ message: 'Patient not found' });

    res.json({ patient });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching patient info', error: err });
  }
});

module.exports = router;
