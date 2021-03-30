import React, { useContext } from "react";
import { GlobalState } from "../GlobalState/GlobalState";
import Bars from "../../Assets/bars-solid.svg";
import Cart from "../../Assets/shopping-cart-solid.svg";
import Close from "../../Assets/times-solid.svg";
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
        <h1>
          <Link to="/"> Berserk Logo Here</Link>
        </h1>
      </div>

      <ul>
        <li>
          <Link to="/products"> Products</Link>
        </li>
        <li>
          <Link to="/login"> Login - Register </Link>
        </li>
        <li>
          <img src={Close} alt="close" width="30px" />
        </li>
      </ul>

      <div className="cart">
        <span>0</span>
        <Link>
          <img src={Cart} alt="close" width="30px" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
