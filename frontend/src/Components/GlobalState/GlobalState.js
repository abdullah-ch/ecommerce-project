import React, { createContext, useState } from "react";
import ProductAPI from "../../api/ProductAPI";

export const GlobalState = createContext();

const DataProvider = ({ children }) => {
  const [token, setToken] = useState(false);

  const state = {
    token: [token, setToken],
    productApi: ProductAPI(),
  };

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};

export default DataProvider;
