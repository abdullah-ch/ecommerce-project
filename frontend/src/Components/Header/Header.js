import React, { useContext } from "react";
import { GlobalState } from "../GlobalState/GlobalState";

const Header = () => {
  const value = useContext(GlobalState);
  return <div>{value}</div>;
};

export default Header;
