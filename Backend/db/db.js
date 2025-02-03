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