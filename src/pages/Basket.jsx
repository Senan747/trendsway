import React, { useState } from "react";
import { useUserData } from "../UserDataContext";
import { useProductData } from "../ProductDataContext";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";

function Basket() {
  const { userData } = useUserData();
  const { productData } = useProductData();
  const [count, setCount] = useState({}); 

  const handlePlus = (productId, price) => {
    setCount((prevCount) => ({
      ...prevCount,
      [productId]: (prevCount[productId] || 1) + 1,
    }));
  };
  

  const handleMinus = (productId, price) => {
    if (count[productId] > 1) {
      setCount((prevCount) => ({
        ...prevCount,
        [productId]: prevCount[productId] - 1,
      }));
    }
  };

  
  const getProductTotal = (productId, price) => {
    return ((count[productId] || 0) * price).toFixed(2);
  };

  
  const getTotalCost = () => {
    let total = 0;
    productData.forEach((product) => {
      total += parseFloat(getProductTotal(product.id, product.price)); 
    });
    return total.toFixed(2); 
  };


  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex flex-row w-full justify-between items-center py-5 px-20 bg-gega-pink">
        <p className="text-gega-white text-3xl font-bold">
          Hello <span className="text-gega-rose">{userData.username}</span>,
          Thanks for choosing us!
        </p>
        <div className="max-h-[150px] max-w-[150px] ">
          <img src="../logo.png" alt="" className="w-full h-full" />
        </div>
      </div>
      <div className="flex flex-col max-w-[800px] mt-10">
        {productData && Array.isArray(productData) ? (
          productData.map((product) => (
            <div className="flex flex-row items-center justify-between">
              <div
                key={product.id}
                className="border p-4 mb-10 rounded-lg shadow-md w-[80%] cursor-pointer"
              >
                <img
                  src={product.image_link}
                  alt={product.name}
                  className="w-40 h-40 object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">
                  {product.description.length > 70
                    ? product.description.slice(0, 70) + "..."
                    : product.description}
                </p>
                <div className="flex-end">
                  <div className="text-lg font-semibold flex flex-row">
                    <p className="mr-1">{product.price}</p>
                    <p>
                      {product.price_sign === null ? "$" : product.price_sign}
                    </p>
                  </div>

                  <div className="flex flex-row items-end justify-between">
                    <ul className="flex flex-wrap space-x-2">
                      {product.product_colors.map((color) => (
                        <li
                          key={color.colour_name}
                          className="w-6 h-6 rounded-full"
                          style={{ backgroundColor: color.hex_value }}
                          title={color.colour_name}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-between">
                <div className="text-3xl cursor-pointer" onClick={() => handlePlus(product.id, product.price)}>
                  <AiOutlinePlusCircle />
                </div>
                <div className="text-lg font-semibold flex flex-row my-4">
                  {getProductTotal(product.id, product.price)}
                </div>
                <div className="text-3xl cursor-pointer" onClick={() => handleMinus(product.id, product.price)}>
                  <AiOutlineMinusCircle />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products available</p>
          
        )}
      </div>
      <p className="my-10 text-2xl text-gega-rose">Total Cost: {getTotalCost()}</p> 
    </div>
  );
}

export default Basket;
