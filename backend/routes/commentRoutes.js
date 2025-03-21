const express = require("express");
const router = express.Router();

const { addComment } = require("../controllers/commentController")

router.get("/", (req, res) => {
});

module.exports = router;
