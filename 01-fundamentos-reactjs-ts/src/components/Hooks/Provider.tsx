import { useState } from "react";
import { MyContext } from "./Context";

interface ChildrenContext {
  children: React.ReactNode;
}

interface UserProps {
  user: {
    displayName: string;
    photoURL: string;
  }
};

const Provider = ({ children }: ChildrenContext) => {
  const [user, setUser] = useState({} as UserProps);

  const contextValue = {
    user,
    setUser
  };

  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
};

export default Provider;
