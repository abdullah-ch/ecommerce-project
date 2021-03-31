import React from "react";
import { Route, Switch } from "react-router";
import Login from "./Auth/Login";
import Registration from "./Auth/Registration";
import Cart from "./Cart/Cart";
import Product from "./Products/Product";

const Pages = () => {
  return (
    <Switch>
      <Route path="/" exact component={Product} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Registration} />
      <Route path="/cart" exact component={Cart} />
    </Switch>
  );
};

export default Pages;
