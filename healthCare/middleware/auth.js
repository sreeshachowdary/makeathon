const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('./config/data')

const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization').split(' ')[1];
    if (!token) return res.status(401).send('Access Denied');

    try {
        const verified = jwt.verify(token, JWT_SECRET || process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        console.error('Invalid Token:', err);
        res.status(400).send('Invalid Token');
    }
};

module.exports = authenticateToken;