import { useState } from "react";
import { MyContext } from "./Context";

interface ChildrenContext {
  children: React.ReactNode;
}

const Provider = ({ children }: ChildrenContext) => {

  const contextValue = {

  };

  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
};

export default Provider;
