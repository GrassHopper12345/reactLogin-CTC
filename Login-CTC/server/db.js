const mongoose = require('mongoose');

module.exports = () => {
    const connectionsParams = {
        useNewParser: true,
        useUnifiedTopology: true,
    };
    try{
        mongoose.connect(process.env.DB, connectionsParams);
        console.log('Connected to database successfully');
    }catch(err) {
        console.log(err);
        console.log('Failed to connect to database');
    }
};