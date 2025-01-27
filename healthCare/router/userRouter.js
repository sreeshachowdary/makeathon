// const express = require('Express');
const {body} = require('express-validator')
const app = express();
const {LoginUser, RegisterUser} = require('./controller/userController')

const RegisterUser = app.post('register',  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').notEmpty().isEmail().withMessage('VEmail is required'),
    body('pwd').notEmpty().isLength({ min: 8 }).withMessage('Password must contain at least 8 characters'),
    body('phoneNumber').isLength({ min: 10, max: 10 }).withMessage('Mobile number must have 10 digits'),
    body('address').require(),
    body('bloodGroup').isString(),
    body('birthDate').require(),
    body('adharCardNumber').require(),
    body('role').notEmpty().isString().withMessage('Please select role'),
])


const LoginUser = app.post('/login', [
    body('email').notEmpty().isEmail().withMessage('VEmail is required'),
    body('pwd').notEmpty().isLength({ min: 8 }).withMessage('Password must contain at least 8 characters')
])

// const getPatient

// const getDoctor

