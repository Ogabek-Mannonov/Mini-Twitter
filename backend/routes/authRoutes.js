const express = require("express");
const router = express.Router();

const { login, signup } = require("../controllers/authController")

router.post("/signup", (req, res) => {
});

router.post("/login", (req, res) => {
});

module.exports = router; 