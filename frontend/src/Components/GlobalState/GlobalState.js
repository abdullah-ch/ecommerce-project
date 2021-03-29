import React, { createContext, useState } from "react";

export const GlobalState = createContext();

const DataProvider = ({ children }) => {
  return (
    <GlobalState.Provider value={"Whiplash Value"}>
      {children}
    </GlobalState.Provider>
  );
};

export default DataProvider;
