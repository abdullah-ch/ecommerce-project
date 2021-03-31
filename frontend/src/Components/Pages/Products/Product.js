import React, { useContext } from "react";
import ProductItem from "../../../utils/ProductItem/ProductItem";
import { GlobalState } from "../../GlobalState/GlobalState";

const Product = () => {
  const state = useContext(GlobalState);
  const [products] = state.productApi.products;
  console.log("products are", products);

  return (
    <div className="products">
      {" "}
      {products.map((product, i) => {
        return (
          <div key={i}>
            <ProductItem key={product._id} product={product} />
          </div>
        );
      })}
    </div>
  );
};

export default Product;
