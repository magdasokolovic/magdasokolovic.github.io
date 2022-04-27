import React from "react";
import  MouseContextProvider  from "./src/context/mouseContext";

export const wrapRootElement = ({ element }) => {
  // element is the whoole gasby app

  return <MouseContextProvider>{element}</MouseContextProvider>;
};
