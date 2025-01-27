// const express = require('Express');
const User = require('./model/userSchema');
const {validationResult} = require('express-validator')

export const registerUser = async() => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { name, email, pwd, phoneNumber, address, bloodGroup, birthDate, adharCardNumber, role} = req.body;
   
    try {
        const hashedPassword = await bcrypt.hash(pwd, 10);

        const user = new User({ name, email, pwd: hashedPassword, phoneNumber, address, bloodGroup, birthDate, adharCardNumber, role});
        await user.save();

        console.log('User registered successfully !!', { email });
        res.status(201).send({message:'User registered successfully !!'});
    } catch (err) {
        console.error('Error while registering user:', err);
        res.status(400).send(err.message);
    }
}


export const loginUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { email, pwd } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).send('User not found');

        const isPasswordValid = await bcrypt.compare(pwd, user.password);
        if (!isPasswordValid) return res.status(400).send('Invalid password');

        const token = jwt.sign({ _id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

        console.log('User logged in successfully', { email });
        res.header('Authorization', token).send({ message: "user login successfully !!", "jwtToken": token });
    } catch (err) {
        logger.error('Error logging in user:', err);
        res.status(400).send(err.message);
    }
};

export const getPatient = async(req, res) => {
    try {
        const patientId = req.params.id;
        console.log('Fetching all patients');
        const users = await Patient.findById(patientId);
        if(!users){
            res.status(404).send({message: 'Patient is not found'})
        }
        res.json(users);
    } catch (err) {
        console.error('Error fetching patient:', err);
        res.status(500).send(err.message);
    }
}