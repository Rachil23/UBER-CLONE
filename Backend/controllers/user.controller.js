const { response } = require('../app');
const userModel = require('../models/user.model'); 
const userService = require('../services/user.service'); 
const { validationResult } = require('express-validator'); 
const bcrypt = require('bcrypt');
const blacklistTokenModel = require('../models/blacklistToken.model');

module.exports.registerUser = async (req ,res ,next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() });
    }

    const { fullname, email, password } = req.body ;
    
    //console.log(req.body);

    //const hashedPassword = await userModel.hashpassword(password);

    /*  this is extra part of code*/
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ error: "Email already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userService.createUser ({
        firstname : fullname.firstname, 
        lastname: fullname.lastname, 
        email, 
        password: hashedPassword 
    });

    const token = user.generateAuthToken();

    res.status(201).json({token , user });
 }

 module.exports.loginUser = async (req, res, next) => {
    //Debugging
    // console.log("Request Headers:", req.headers);
    console.log("Received request body:", req.body); 

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("Validation errors:", errors.array());
        return res.status(400).json({errors: errors.array()});
    }

    const { email, password } = req.body;
    const user = await userModel.findOne({email}).select("+password"); 

    if(!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }
    const isMatch = await user.comparePassword(password);

    if(!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = user.generateAuthToken(); 

    res.cookie('token', token);

    res.status(200).json({ token , user });
 };

 module.exports.getUserProfile = async (req, res, next) => {
    res.status(200).json(req.user);
 }

 module.exports.logoutUser = async (req, res, next) => {

    res.clearCookie('token');

    const token = req.cookies.token || req.headers.authrization.split(' ')[1];

    await blacklistTokenModel.create({ token });

    res.status(200).json({ message: 'User logged out' });
 }