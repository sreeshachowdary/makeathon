const express = require('express');
const cors = require('cors');
const app = express();
const {body} = require('express-validator')
const { registerUser, loginUser, getDoctor, getPatient } = require('./controller/userController');
// const {PORT} = require('./config/data')
const mongoConnect  = require('./config/database')
const PORT = 8080;

app.use((req, res, next) => {
console.log("req--", req)
next();
})

app.use(cors());

app.use(express.json());

mongoConnect('mongodb://127.0.0.1:27017/db');

// Registration api
app.post('register',  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').notEmpty().isEmail().withMessage('VEmail is required'),
    body('pwd').notEmpty().isLength({ min: 8 }).withMessage('Password must contain at least 8 characters'),
    body('phoneNumber').isLength({ min: 10, max: 10 }).withMessage('Mobile number must have 10 digits'),
    body('address').require(),
    body('bloodGroup').isString(),
    body('birthDate').require(),
    body('adharCardNumber').require(),
    body('role').notEmpty().isString().withMessage('Please select role'),
], registerUser)

// Login api
app.post('/login', [
    body('email').notEmpty().isEmail().withMessage('VEmail is required'),
    body('pwd').notEmpty().isLength({ min: 8 }).withMessage('Password must contain at least 8 characters')
], loginUser)

// get patient
app.get(`/get-patient:${id}`, getPatient);

//get doctor
app.get(`/get-doctor:${id}`, getDoctor);

app.listen(PORT, () => {
    console.log(`App is connected to ${PORT}`)
})

