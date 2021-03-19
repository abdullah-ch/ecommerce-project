const express = require("express");
const bcrypt = require("bcrypt");
const { Product, productSchema } = require("../models/product");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");

const router = express.Router();

class Features {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filtering() {
    const queryObject = this.queryString;
    console.log("before delete page", queryObject);
    const fields = ["page", "sort", "limit"];
    fields.forEach(function (field) {
      console.log("Field is ", field);
      console.log("Query Object is ", queryObject);
      console.log("queryObject[field] kiya haii", queryObject[field]);
      delete queryObject[field]; // deletes the property field holds from queryObject
      console.log(field);
    });

    console.log("after delete page", queryObject);
    //console.log("Thissss", this);
    return this;
  }
}

router.get("/", async (req, res) => {
  try {
    const features = new Features(Product.find(), req.query).filtering();
    const products = await features.query;
    return res.json({ products });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    let product = await Product.deleteOne({ _id: req.params.id });
    if (!product) return res.status(404).json({ msg: "ID not found" });
    return res.json({ msg: "Deleted the product" });
  } catch (error) {
    return res.status(500).json({ msg: err.message });
  }
});

router.post("/add", async (req, res) => {
  try {
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
    const { title, price, description, content, images, category } = req.body;
    let product = await Product.findOne({ _id: req.params.id });
    if (!product) return res.status(404).json({ msg: "ID not found" });

    product.set({
      title: title.toLowerCase(),
      price: price,
      description: description,
      content: content,
      images: images,
      category: category,
    });

    await product.save();
    return res.json({ product });
  } catch (error) {
    return res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
