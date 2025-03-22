const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const likesRoutes = require("./routes/likeRoutes");
const commentRoutes = require("./routes/commentRoutes");

dotenv.config();

const app = express();

app.use(cors()); 
app.use(express.json()); 

// Yuklangan fayllarni ochiq qilish
app.use("/uploads", express.static("uploads"));

// Routerlarni ulash
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/likes", likesRoutes);
app.use("/api/comments", commentRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server ${PORT}-portda ishlayapti.`));
