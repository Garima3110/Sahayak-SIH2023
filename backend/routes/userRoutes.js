const express = require("express")
const {registerUser, authUser} = require("../controllers/userControllers")
const router = express.Router();
const {protect} = require("../middleware/authMiddleware");
const { quesCreate } = require("../controllers/quizControllers");


router.route("/")
router.route("/signup").post(registerUser).post(protect)
router.route('/login').post(authUser);
router.route('/mcqpageTeacher').post(quesCreate);

module.exports = router;