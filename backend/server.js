const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const likesRoutes = require("./routes/likeRoutes");
const commentRoutes = require("./routes/commentRoutes");

// Environment variables yuklash
dotenv.config();


const app = express();

