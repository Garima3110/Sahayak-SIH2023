const express = require("express")
const {registerUser, authUser} = require("../controllers/userControllers")
const router = express.Router();
const {protect} = require("../middleware/authMiddleware")


router.route("/").post(registerUser).get(protect)
router.post("/login", authUser);

module.exports = router;