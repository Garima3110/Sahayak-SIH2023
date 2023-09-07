const express = require("express");
const app = express();
const dotenv = require("dotenv")
dotenv.config();
const PORT = process.env.PORT || 7000;
const cors = require('cors');
const connectDB = require("./config/db")
app.use(cors());
app.use(express.json());



connectDB();
app.get("/", (req,res)=>{
    res.send("main landing page");
})

app.get("/login", (req,res)=>{
    res.send("loginpage");
})

app.get("/signup", (req,res)=>{
    res.send("signup");
})

app.get("/quizpage", (req,res)=>{
    res.send("quizpage");
})

app.get("/results", (req,res)=>{
    res.send("results");
})





app.listen(PORT, (req,res)=>{
    console.log("server is running");
})