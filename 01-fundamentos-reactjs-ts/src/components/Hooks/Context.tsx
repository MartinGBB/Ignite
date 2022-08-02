import { createContext } from "react";

interface UserProps {
  user: {
    displayName: string | null;
    photoURL: string | null;
  };
  setUser: (user: { displayName: string | null; photoURL: string | null }) => void;
  confirmDelete: boolean,
  setConfirmDelete: (confirmDelete: boolean) => void;
};

export const MyContext = createContext({} as UserProps);
