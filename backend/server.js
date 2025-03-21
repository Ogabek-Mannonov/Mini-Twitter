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



  // Middleware

  app.use(express.json()); 
  app.use(cors());

  app.use("/api/auth", authRoutes)
  app.use("/api/posts", postRoutes)
  app.use("/api/likes", likesRoutes)
  app.use("/api/comments", commentRoutes)


  const Port = 5000;

  app.listen(Port, () => {
    console.log(`Server ${Port} da ishlayapti.`);
  })