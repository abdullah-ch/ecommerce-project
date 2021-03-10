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
    console.log("Heeelooooo");
    const {
      productId,
      title,
      price,
      description,
      content,
      images,
      category,
    } = req.body;

    if (!images) return res.status(404).json({ msg: "No image uploaded" });

    let product = await Product.findOne({ productId });
    if (product) return res.status(404).json({ msg: "Product already exists" });

    product = new Product({
      productId,
      title: title.toLowerCase(),
      price,
      description,
      content,
      images,
      category,
    });

    await product.save();
    res.json({ msg: "created new product" });
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
