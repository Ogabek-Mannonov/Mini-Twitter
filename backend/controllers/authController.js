const pool = require("../config/db");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  try {
    const { firstname, lastname, username, password } = req.body;
    const profile_picture = req.file ? req.file.filename : null; 

    if (!password || password.length < 8) {
      return res.status(400).json({ error: "Parol kamida 8 ta belgi bo'lishi kerak!" });
    }

    const hashedPassword = await bcrypt.hash(password, 8);

    const newUser = await pool.query(
      `INSERT INTO users (firstname, lastname, username, profile_picture, password, created_at)
      VALUES ($1, $2, $3, $4, $5, NOW()) RETURNING *`,
      [firstname, lastname, username, profile_picture, hashedPassword]
    );

    res.json({ message: "Foydalanuvchi yaratildi!", user: newUser.rows[0] });

  } catch (error) {
    console.error("Xatolik:", error.message);
    res.status(500).json({ error: "Serverda xatolik yuz berdi" });
  }
};

const login = async (req, res) => {
  res.json({ message: "Login hali yozilmagan" });
};

module.exports = { signup, login };
