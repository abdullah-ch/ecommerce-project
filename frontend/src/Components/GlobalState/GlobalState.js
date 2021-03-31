import React, { createContext, useState } from "react";
import ProductAPI from "../../api/ProductAPI";

export const GlobalState = createContext();

const DataProvider = ({ children }) => {
  ProductAPI();
  return (
    <GlobalState.Provider value={"Whiplash Value"}>
      {children}
    </GlobalState.Provider>
  );
};

export default DataProvider;
