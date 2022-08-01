import { useState } from "react";
import { MyContext } from "./Context";

interface ChildrenContext {
  children: React.ReactNode;
}

interface UserProps {
  displayName: string | null;
  photoURL: string | null;
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
