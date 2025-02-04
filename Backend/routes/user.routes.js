const express = require('express');
const router = express.Router();
const { body } = require("express-validator")
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');

/*
router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isString().isLength({ min: 3 }).withMessage('First Name must be at least 3 characters long'),
    body('password').isString().isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
], userController.registerUser);



router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isString().isLength({ min: 6 }).withMessage(
        'Password must be at least 6 characters long'),
], userController.loginUser);
*/

router.post('/register', [
    body('email').trim().isEmail().withMessage('Invalid Email'),
    body('password').isString().isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], userController.registerUser);

router.post('/login', [
    body('email').trim().isEmail().withMessage('Invalid Email'),
    body('password').isString().notEmpty().withMessage('Password is required')
], userController.loginUser);

router.get('/profile', authMiddleware.authUser ,userController.getUserProfile);

router.get('/logout', authMiddleware.authUser, userController.logoutUser);


module.exports = router;