import React, { useState } from "react";
import { Link } from "react-router-dom";

function Modal() {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {show && (
        <div className="bg-white max-w-md w-full mx-4 p-6 rounded-lg shadow-lg">
          <div className="absolute top-2 right-4 cursor-pointer" onClick={handleClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700 hover:text-gray-900 transition"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <h1 className="mb-6 text-2xl font-bold text-gray-800">Choose how to pay</h1>
          <div className="flex space-x-4 mb-6">
            <input type="radio" id="paypal" name="paymentMethod" />
            <label htmlFor="paypal">
              <img src="/paypal.png" className="w-12 h-12" alt="PayPal" />
            </label>
            <input type="radio" id="mastercard" name="paymentMethod" />
            <label htmlFor="mastercard">
              <img src="/mastercard.png" className="w-12 h-12" alt="MasterCard" />
            </label>
            <input type="radio" id="visa" name="paymentMethod" />
            <label htmlFor="visa">
              <img src="/visa.png" className="w-12 h-12" alt="visa" />
            </label>
            <input type="radio" id="fuad" name="paymentMethod" />
            <label htmlFor="fuad">
              <img src="/fuad.jpeg" className="w-12 h-12" alt="fuad" />
            </label>
          </div>
          <button className="w-full bg-gega-pink text-white py-2 px-4 rounded-md hover:bg-gega-rose transition">
            Continue
          </button>
        </div>
      )}
    </div>
  );
}

export default Modal;
