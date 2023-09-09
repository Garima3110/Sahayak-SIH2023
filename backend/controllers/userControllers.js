const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const User = require("../models/userModel")
const generateToken =  require("../config/generateToken")
const router = express.Router();

const registerUser = expressAsyncHandler(async (req,res)=>{
    const {name,email,password,number} = req.body;

    if(!name || !email || !password || !number){
        res.status(400);
        throw new Error("Please enter all fields");

    }

    const userExists = await User.findOne({email});

    if(userExists){
        res.status(400);
        throw new Error("user already exits");
    }


    const user = await User.create({
        name,
        email,
        password,
        number,
    })
    if(user){
        // res.status(201).json({
        //     _id: user._id,
        //     name: user.name,
        //     email: user.email,
        //     number: user.number,
        //     token: generateToken(user._id),

        // })
        res.send("Registered successfully");
    }
    else{
        res.status(400);
        throw new Error("user not found")
    }
});


const authUser = expressAsyncHandler(async(req,res)=>{
    const {email,password} = req.body;
//    console.log(email);
//    console.log(password);
    const user = await User.findOne({email});

    if(user && (await user.matchPassword(password)))
    {
        // res.json({
        //     _id: user._id,
        //     name: user.name,
        //     email: user.email,
        //     number: user.number,
        //     token: generateToken(user._id),
        // }
        res.send("login successfull")
    
    }
    else{
        res.status(401);
        throw new Error("invalid email or password");
    }

})


router.route('/signup').post(registerUser);
router.route('/login').post(authUser);
module.exports= {registerUser, authUser}
