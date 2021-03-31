import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { GlobalState } from "../GlobalState/GlobalState";
import "./ProductDetails.css";

const ProductDetails = () => {
  const params = useParams();

  const state = useContext(GlobalState);
  const [products] = state.productApi.products;
  const [details, setDetails] = useState([]);

  console.log(typeof params);
  useEffect(() => {
    if (params) {
      products.forEach((product) => {
        if (product._id === params.id) {
          setDetails(product);
        }
      });
    }
  }, [params, products]);

  if (details.length === 0) return null;
  return (
    <div className="detail">
      <img src={details.images.url} alt="" />
      <div className="box-detail">
        <div className="row">
          <h2>{details.title}</h2>
          <h6>#id: {details.productId}</h6>
        </div>
        <span>$ {details.price}</span>
        <p>{details.description}</p>
        <p>{details.content}</p>
        <p>Sold: {details.sold}</p>
        <Link to="/cart" className="cart">
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
