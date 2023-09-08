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
app.use(express.static(path.join(__dirname, 'frontend')));

connectDB();
app.get("/", (req,res)=>{
   res.send("server running")
})

// app.get("/login", (req,res)=>{
//     res.send("loginpage")
// })

// app.get("/signup", (req,res)=>{
//     res.send("signup");
// })
app.use("/api/v1/users", userRouter);

app.get("/quizpage", (req,res)=>{
    res.send("quizpage");
})

app.get("/results", (req,res)=>{
    res.send("results");
})





app.listen(PORT, (req,res)=>{
    console.log("server is running");
})