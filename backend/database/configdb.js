const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.DBCONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('DB TFG online');
    } catch (error) {
        console.log(error);
        throw new Error('Error al iniciar la DB TFG');
    }
}

module.exports = {
    dbConnection
}