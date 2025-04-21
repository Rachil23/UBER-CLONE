
const mongoose = require('mongoose');

function connectTODb() {
    
    /*

    mongoose.connect(process.env.DB_CONNECT , { useNewUrlParser: true,  useUnifiedTopology: true ,
        console.log( 'Connected to DB');
    }).catch(err => console.log(err));

    */

    mongoose.connect(process.env.DB_CONNECT
    ).then(() => {
        console.log('Connected to DB');
    }).catch(err => console.log(err));

}

module.exports = connectTODb;

/*
const mongoose = require('mongoose');

function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000 // Optional: Timeout for server selection
    })
    .then(() => {
        console.log(' Connected to MongoDB');
    })
    .catch(err => {
        console.error(' MongoDB connection error:', err.message);
    });
}

module.exports = connectToDb;
*/