const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect
        ('mongodb+srv://baxriddin:qArSX9BiGo6bYc2U@cluster0.3bba2ny.mongodb.net/fullstackdb?retryWrites=true&w=majority'); // oddiy qilib yozamiz
        console.log('MongoDB Atlas ulandi');
    } catch (error) {
        console.error('MongoDB ulanishda xatolik:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
