import React, { useContext } from "react";
import { GlobalState } from "../../GlobalState/GlobalState";

const Product = () => {
  const state = useContext(GlobalState);
  console.log("state is", state);

  return <div>I am product page</div>;
};

export default Product;
