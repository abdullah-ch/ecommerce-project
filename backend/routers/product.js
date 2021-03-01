const express = require("express");
const bcrypt = require("bcrypt");
const { Product, productSchema } = require("../models/product");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let products = await Product.find();
    return res.json({ products });
  } catch (error) {
    return res.status(500).json({ msg: err.message });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({ msg: err.message });
  }
});

router.post("/add", async (req, res) => {
  try {
    const {} = req.body;
  } catch (error) {
    return res.status(500).json({ msg: err.message });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
