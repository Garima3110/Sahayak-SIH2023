const express = require("express");
const app = express();
const path = require('path');
const dotenv = require("dotenv")
dotenv.config();
const PORT = process.env.PORT || 7000;
const cors = require('cors');
const connectDB = require("./config/db")
app.use(cors());
app.use(express.json());
const userRouter = require("./routes/userRoutes")
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(express.static(path.join(__dirname, '../frontend')));
app.use(express.static(path.join(__dirname, '../frontend/Authentication')));
const bodyParser = require('body-parser');
const User = require("./models/userModel")
connectDB();


//api's -------


app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
})

app.get("/login", (req,res)=>{
    res.sendFile(path.join(__dirname, '../frontend/Authentication/login.html'));
})

app.get("/signup", (req,res)=>{
    res.sendFile(path.join(__dirname, '../frontend/Authentication/signup.html'));
})

app.use("/api/user", userRouter);

// app.get("/quizpage", (req,res)=>{
//     res.send("quizpage");
// })

app.get("/results", (req,res)=>{
    res.send("results");
})

app.get("/quizpage", (req,res)=>{
    res.sendFile(path.join(__dirname, '../frontend/quiz.html'));
})
app.get("/mcqpage", (req,res)=>{
    res.sendFile(path.join(__dirname, '../frontend/mcqpage.html'));
})



app.listen(PORT, (req,res)=>{
    console.log("server is running");
})