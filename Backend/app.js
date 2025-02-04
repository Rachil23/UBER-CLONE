const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');

const app = express();
const connectTODb = require('./db/db');

const cookieParser = require('cookie-parser');

const userRoutes = require('./routes/user.routes');

connectTODb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//ROUTE
//to be removed later 

app.get('/', (req, res)=> {
    res.send("Hello, world!");
});


app.use('/users', userRoutes);

module.exports = app;