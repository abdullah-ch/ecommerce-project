import { useState, useEffect } from "react";
import axios from "axios";

const ProductAPI = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    callProductsApi();
  }, []);

  const callProductsApi = async () => {
    const response = await axios.get("/products");
    // console.log("products are", response.data.products);
    setProducts(response.data.products);
  };
  return { products: [products, setProducts] };
};

export default ProductAPI;
