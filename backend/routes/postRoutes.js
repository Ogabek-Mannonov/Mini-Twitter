const express = require("express");
const router = express.Router();

const { getPosts } = require("../controllers/postController")

router.get("/", (req, res) => {
});

module.exports = router;
