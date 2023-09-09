const express = require("express")
const {registerUser, authUser,quizP} = require("../controllers/userControllers")
const router = express.Router();
const {protect} = require("../middleware/authMiddleware")


router.route("/")
router.route("/signup").post(registerUser).post(protect)
router.route('/login').post(authUser);


module.exports = router;