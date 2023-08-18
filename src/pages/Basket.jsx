import React, { useState, useRef, useEffect } from "react";
import { useUserData } from "../UserDataContext";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import Pay from "../Components/Pay";

function Basket() {
  const { userData } = useUserData();
  const { productData } = useUserData();
  const [counts, setCounts] = useState({});
  const [showFirstPrice, setShowFirstPrice] = useState(false);
  const { showPay, setShowPay } = useUserData();
  const [showNotficition, setShowNotficiton] = useState(false);
  const [zeroCost, setZeroCost] = useState(false);

  const handlePlus = (productId) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [productId]: (prevCounts[productId] || 0) + 1,
    }));
  };

  const handleMinus = (productId) => {
    if (counts[productId] > 0) {
      setCounts((prevCounts) => ({
        ...prevCounts,
        [productId]: prevCounts[productId] - 1,
      }));
    }
  };

  const getProductTotal = (productId, price) => {
    return (counts[productId] || 0) * price;
  };

  const getTotalCost = () => {
    let total = 0;
    productData.forEach((product) => {
      total += getProductTotal(product.id, product.price);
    });
    return total.toFixed(2);
  };

  const handleNotficition = () => {
    setShowNotficiton(true);
    setTimeout(() => {
      setShowNotficiton(false);
    }, 2500);
  };

  const handleFinish = (event) => {
    if (getTotalCost() == 0.00) {
      event.stopPropagation();
      setZeroCost(true);
    } else {
      setShowPay(true);
      event.stopPropagation();
    }
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
      <div className="flex flex-row justify-between items-center">
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
                  <div
                    className="text-3xl cursor-pointer"
                    onClick={() => {
                      handlePlus(product.id, product.price);
                      setShowFirstPrice(true);
                    }}
                  >
                    <AiOutlinePlusCircle />
                  </div>
                  <div className="text-lg font-semibold flex flex-row my-4">
                    {!showFirstPrice
                      ? "0"
                      : getProductTotal(product.id, product.price)}
                  </div>
                  <div
                    className="text-3xl cursor-pointer"
                    onClick={() => handleMinus(product.id, product.price)}
                  >
                    <AiOutlineMinusCircle />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
        <div className="flex items-center flex-col fixed top-[50%] right-[10%] border-2 px-2">
          <p className="my-10 text-2xl text-gega-rose">
            Total Cost: {getTotalCost()}
          </p>
          <button
            className="bg-gega-pink text-gega-white px-3 py-2 rounded-md mb-3"
            onClick={(event) => {
              handleFinish(event);
            }}
          >
            Finish
          </button>
          {zeroCost ? (<p className="text-gega-red text-lg">Cost is zero</p>) : " "}
        </div>
        <div>
          {showPay && (
            <>
              <div
                className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-10"
                onClick={() => setShowPay(false)}
              />
              <div className="fixed top-[22%] left-[38%] z-20">
                <div
                  className="text-3xl rounded-[100%] relative top-20 z-50 left-[380px] bg-gega-grey pb-2 px-3 text-center cursor-pointer"
                  onClick={() => setShowPay(false)}
                >
                  x
                </div>
                <Pay className="bg-gega-light" />
              </div>
            </>
          )}
        </div>
        <div>
          {showNotficition && (
            <div className="w-screen h-screen fixed">
              <div className="fixed w-[300px] bg-gega-rose text-gega-white text-xl text-center top-[89%] left-[38%] z-20 py-3 rounded-lg animate-pulse">
                The orders are finished
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Basket;
