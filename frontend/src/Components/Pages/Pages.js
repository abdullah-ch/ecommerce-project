import React from "react";
import { Route, Switch } from "react-router";
import NotFound from "../../utils/NotFound/NotFound";
import Login from "./Auth/Login";
import Registration from "./Auth/Registration";
import Cart from "./Cart/Cart";
import Product from "./Products/Product";
import ProductDetails from "../ProductDetails/ProductDetails";

const Pages = () => {
  return (
    <Switch>
      <Route path="/" exact component={Product} />
      <Route path="/details/:id" exact component={ProductDetails} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Registration} />
      <Route path="/cart" exact component={Cart} />
      <Route path="*" exact component={NotFound} />
    </Switch>
  );
};

export default Pages;
