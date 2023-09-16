const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const questions = require("../models/questionModel")
const generateToken =  require("../config/generateToken")
const router = express.Router();


const quizP = expressAsyncHandler(async(res,req)=>{

})

const quesCreate =expressAsyncHandler(async(res,req)=>{
    try {
        const { quizid } = req.body
        const { questionId } = req.body
        const {questionText} =req.body
        const { options} = req.body
        const {answer} =req.body

    } catch (error) {
        return res.status(500).json({"error":error})
    }
})


router.route('/mcqpageTeacher').post(quesCreate);

module.exports= {quesCreate}
