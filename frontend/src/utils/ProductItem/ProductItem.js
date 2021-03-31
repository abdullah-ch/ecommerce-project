import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.images.url} alt="" />

      <div className="product-box">
        <h2>{product.title}</h2>
        <span>${product.price}</span>
        <p>{product.description}</p>
      </div>

      <div className="row-btn">
        <Link id="btn-buy" to="#!">
          Buy
        </Link>
        <Link id="btn-view" to={`details/${product._id}`}>
          View
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
