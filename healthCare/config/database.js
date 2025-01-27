const mongoose = require('mongoose');

const mongoConnect = async (uri) => {
    try {
        await mongoose.connect(uri);
        console.log('MongoDB connected');
    } catch (err) {
        logger.error('MongoDB connection error:', err);
        process.exit(1);
    }
};

module.exports = mongoConnect;