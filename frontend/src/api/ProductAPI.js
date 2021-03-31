import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductAPI = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    callProductsApi();
  }, []);

  const callProductsApi = async () => {
    const response = await axios.get("/products");
    console.log(response);
  };
  return { products: [products, setProducts] };
};

export default ProductAPI;
