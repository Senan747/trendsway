import { createContext, useState, useContext } from "react";

const UserDataContext = createContext();

export function UserDataProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const [product, setProduct] = useState(null);
  const [rating, setRating] = useState(null);
  const [length, setLength] = useState(null)

  return (
    <UserDataContext.Provider value={{ userData, setUserData, product, setProduct, rating, setRating }}>
      {children}
    </UserDataContext.Provider>
  );
}

export function useUserData() {
  return useContext(UserDataContext);
}
