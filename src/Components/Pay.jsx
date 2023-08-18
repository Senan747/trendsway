import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUserData } from "../UserDataContext";

function Pay() {
  const { setProductData } = useUserData();
  const { setShowPay } = useUserData();
  const { showFinishNot, setShowFinishNot} = useUserData();
  const [selectedPayment, setSelectedPayment] = useState();

  const handleChange = (payment) => {
    setSelectedPayment(payment)
  }
  const handleNotficition = () => {
    setShowFinishNot(true);
    setTimeout(() => {
      setShowFinishNot(false);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-40">
      <div className="bg-white max-w-md w-full mx-4 p-6 rounded-lg shadow-lg">
        <h1 className="mb-6 text-2xl font-bold text-gray-800">
          Choose how to pay
        </h1>
        <div className="flex space-x-4 mb-6">
          <input type="radio" id="paypal" name="paymentMethod" onChange={() => handleChange("paypal")} />
          <label htmlFor="paypal">
            <img src="/paypal.png" className="w-12 h-12" alt="PayPal" />
          </label>
          <input type="radio" id="mastercard" name="paymentMethod" onChange={() => handleChange("mastercard")} />
          <label htmlFor="mastercard">
            <img src="/mastercard.png" className="w-12 h-12" alt="MasterCard" />
          </label>
          <input type="radio" id="visa" name="paymentMethod" onChange={() => handleChange("visa")} />
          <label htmlFor="visa">
            <img src="/visa.png" className="w-12 h-12" alt="visa" />
          </label>
          <input type="radio" id="fuad" name="paymentMethod" onChange={() => handleChange("fuad")}/>
          <label htmlFor="fuad">
            <img src="/fuad.jpeg" className="w-12 h-12" alt="fuad" />
          </label>
        </div>

        <button
          className="w-full bg-gega-pink text-white py-2 px-4 rounded-md hover:bg-gega-rose transition"
          onClick={() => {
            setProductData([]);
            setShowPay(false);
            handleNotficition();
          }}
          disabled={!selectedPayment}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default Pay;
