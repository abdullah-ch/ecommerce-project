const express = require("express");
const bcrypt = require("bcrypt");
const { Users, userSchema } = require("../models/user");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(name, email, password);
    //console.log(Users);
    //console.log(userSchema);
    let user = await Users.findOne({ email });
    if (user) return res.status(404).json({ msg: "The email already exists" });

    if (password.length < 6)
      return res.status(404).json({ msg: "The password is less than 6" });

    // Hashing password
    const newPassword = await bcrypt.hash(password, 10);

    // creating a user and saving in db
    user = await new Users({ name, email, password: newPassword });
    await user.save();

    // creating JWT token for authenticating the user
    const accessToken = createAccessToken({ id: user._id });
    const refreshToken = createRefreshToken({ id: user._id });

    return res.json({ password, newPassword, user, accessToken, refreshToken });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

const createAccessToken = (userID) => {
  return jwt.sign(userID, process.env.ACCESS_TOKEN, { expiresIn: "1 days" });
};

const createRefreshToken = (userID) => {
  return jwt.sign(userID, process.env.ACCESS_TOKEN, { expiresIn: "7 days" });
};
module.exports = router;
