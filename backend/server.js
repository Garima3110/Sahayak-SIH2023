const express = require("express");
const app = express();
const path = require('path');
const dotenv = require("dotenv")
dotenv.config();
const PORT = process.env.PORT || 7000;
const cors = require('cors');
const connectDB = require("./config/db")
const generateToken = require("./config/generateToken");
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
app.post('/login', function(req, res) {
    res.json(req.body); // handle the user form data
  });

  app.post("/signup", async (req, res) => {
    if((req.body.name) &&(req.body.password) && (req.body.number) && (req.body.email)){
      const user = await User.create({
        name: req.body.name,
        
        password: req.body.password,
        
        number : req.body.number,
        email: req.body.email,
      });
      return res.sendFile(path.join(__dirname, '../frontend/Authentication/login.html'));}
      else{
        return res.send("error");
      }
    });
  






app.get("/signup", (req,res)=>{
    res.sendFile(path.join(__dirname, '../frontend/Authentication/signup.html'));
})

// app.post('/signup', async (req, res) => {
//     const { name, email, password, number } = req.body;
  
//     const userExists = await User.findOne({ email });
  
//     if (userExists) {
//       return res.status(400).send("User already exists");
//     }
  
//     const user = await User.create({
//       name,
//       email,
//       password,
//       number,
//     });
  
//     if (user) {
//       return res.status(201).json({
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         number: user.number,
//         token: generateToken(user._id),
//       });
//     } else {
//       return res.status(400).send("User not found");
//     }
//   });
  



app.get("/quizpage", (req,res)=>{
    res.send("quizpage");
})

app.get("/results", (req,res)=>{
    res.send("results");
})





app.listen(PORT, (req,res)=>{
    console.log("server is running");
})