import { createContext, useContext, useReducer } from "react";
import { userDataReducer } from "./userDataReducer";

const userDataContext = createContext({});

const UserDataProvider = ({ children }) => {
  const [userDataState, userDataDispatch] = useReducer(userDataReducer, {
    wishlist: [],
    cart: [],
    orders: [],
    addressList: [],
  });

  return (
    <userDataContext.Provider value={{ userDataState, userDataDispatch }}>
      {children}
    </userDataContext.Provider>
  );
};

const useUserData = () => useContext(userDataContext);

export { UserDataProvider, useUserData };
