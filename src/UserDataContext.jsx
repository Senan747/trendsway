import { createContext, useState, useContext } from "react";

const UserDataContext = createContext();

export function UserDataProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const [product, setProduct] = useState(null);
  const [rating, setRating] = useState(null);
  const [productData, setProductData] = useState([]);
  const [showPay, setShowPay] = useState(false);
  const [showFinishNot, setShowFinishNot] = useState(false)

  return (
    <UserDataContext.Provider value={{ userData, setUserData, product, setProduct, rating, setRating, productData, setProductData, showPay, setShowPay }}>
      {children}
    </UserDataContext.Provider>
  );
}

export function useUserData() {
  return useContext(UserDataContext);
}
