import { createContext } from "react";

export const UserContext = createContext<any>({
  userDetails: undefined,
  setUserDetails: () => {},
});
