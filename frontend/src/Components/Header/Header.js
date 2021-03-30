import React, { useContext } from "react";
import { GlobalState } from "../GlobalState/GlobalState";
import Bars from "../../Assets/bars-solid.svg";
import Cart from "../../Assets/shopping-cart-solid.svg";
import Close from "../../Assets/times-solid.svg";
import Logo from "../../Assets/Asset_24x.png";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const value = useContext(GlobalState);
  return (
    <header>
      <div className="menu">
        <img src={Bars} alt="menu bars" width="30px" />
      </div>

      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="berserk logo" width="100px" height="100px" />
        </Link>
      </div>

      <ul>
        <li>
          <Link to="/products"> Products</Link>
        </li>
        <li>
          <Link to="/login"> Login - Register </Link>
        </li>
        <li>
          <img className="menu" src={Close} alt="close" width="30px" />
        </li>
      </ul>

      <div className="cart-icon">
        <span>0</span>
        <Link to="/cart">
          <img src={Cart} alt="cart" width="30px" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
