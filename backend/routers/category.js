const express = require("express");
const bcrypt = require("bcrypt");
const { Category, categorySchema } = require("../models/category");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");

const router = express.Router();
// routes

router.get("/", async (req, res) => {
  try {
    let categories = await Category.find();
    return res.json({ categories });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
});

router.post("/create", auth, authAdmin, async (req, res) => {
  try {
    const { name } = req.body;
    let category = await Category.findOne({ name });
    if (category)
      return res.status(404).json({ msg: "This category already exists" });
    category = new Category({ name });
    await category.save();
    return res.json({
      msg: `${name} category has been added into the database`,
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
});
module.exports = router;
