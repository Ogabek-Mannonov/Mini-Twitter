const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/authController");
const uploadProfilePic = require("../config/multerConfig");

router.post("/signup", uploadProfilePic, signup);
router.post("/login", login);

module.exports = router;
