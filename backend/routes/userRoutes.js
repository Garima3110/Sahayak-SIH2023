const express = require("express")
const {registerUser, authUser} = require("../controllers/userControllers")
const router = express.Router();
const {protect} = require("../middleware/authMiddleware")


router.route("/")
router.route("/signup").post(registerUser)
router.post("/login", authUser);

module.exports = router;