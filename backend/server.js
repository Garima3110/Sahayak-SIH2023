const express = require("express");
const app = express();
const dotenv = require("dotenv")
dotenv.config();
const PORT = process.env.PORT || 7000;
const cors = require('cors');

app.use(cors());
app.use(express.json());




app.get("/", (req,res)=>{
    res.send("main landing page");
})

app.listen(PORT, (req,res)=>{
    console.log("server is running");
})