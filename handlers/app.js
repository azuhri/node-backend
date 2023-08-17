const { use } = require("../routes");
const bcrypt = require("bcrypt");
const User = require('../models/User');
const { validationResult } = require('express-validator');


const testingFunction = async (req , res) => {
    let response = {
        code: 200,
        status: true,
        message: "success get data",
    };
    return res.status(response.code).json(response);
}

const createUser = async (req, res) => {
    let response = {
        code: 200,
        status: true,
    };
    
    try {
        console.log(req.body);
        let { name, email, password } = req.body;
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);
        const newUser = await User.create({name, email, password});
        response.data = newUser;
        return res.status(response.code).json(response);
    } catch (error) {
        response.message = "please check the parameter again";
        response.code = 400;
        response.status = false;
        if (error.name === "SequelizeValidationError") {
            const errors = error.errors.map((err) => err.message);
            response.error = errors;
        } else {
            console.log(error);
            response.error ="Internal server error";
        }
    }
    return res.status(response.code).json(response);
}

module.exports = {
 testingFunction,
 createUser 
}