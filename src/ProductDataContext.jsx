import { createContext, useState, useContext } from "react";

const ProductDataContext = createContext();

export function ProductDataProvider({ children }) {
  const [productData, setProductData] = useState([]);

  return (
    <ProductDataContext.Provider value={{ productData, setProductData }}>
      {children}
    </ProductDataContext.Provider>
  );
}

export function useProductData() {
  return useContext(ProductDataContext);
}
