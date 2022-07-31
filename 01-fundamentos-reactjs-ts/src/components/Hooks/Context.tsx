import { createContext } from "react";

interface UserProps {
  user: {
    displayName: string;
    photoURL: string;
  };
};

export const MyContext = createContext({} as UserProps);
