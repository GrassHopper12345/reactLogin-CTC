const mongoose = require('mongoose');
require("dotenv").config();
console.log(process.env.DB);
module.exports = () => {
    const connectionsParams = {
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