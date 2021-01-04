const express = require("express");
const bcrypt = require("bcrypt");
const { Users, userSchema } = require("../models/user");

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

    const newPassword = await bcrypt.hash(password, 10);

    user = await new Users({ name, email, password: newPassword });
    await user.save();

    return res.json({ password, newPassword, user });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
