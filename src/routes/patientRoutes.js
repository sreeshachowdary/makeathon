// routes/patientRoutes.js
const express = require('express');
const Patient = require('../model/patientModel');
const { getPatient, updatePatient } = require('../controllers/patientController');

const router = express.Router();

// Update patient info
router.put('/:id', updatePatient);

// fetch patient info
router.get('/:id', getPatient);


module.exports = router;
