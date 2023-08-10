import React from "react";
import { useUserData } from "../UserDataContext";

function Product() {
  const { product } = useUserData();

  return (
    <div className="border p-4 mb-10">
      <img
        src={product.image_link}
        alt={product.name}
        className="w-40 h-40 object-cover mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <div className="flex justify-between items-center">
        <div className="text-lg font-semibold">
          <p className="flex items-center">
            <span className="mr-1">{product.price}</span>
            <span>{product.price_sign === null ? "$" : product.price_sign}</span>
          </p>
        </div>
        <div className="flex items-center space-x-2">
          {product.product_colors.map((color, index) => (
            <div
              key={index}
              className="w-6 h-6 rounded-full"
              style={{ backgroundColor: color.hex_value }}
              title={color.colour_name}
            />
          ))}
        </div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
          Buy
        </button>
      </div>
    </div>
  );
}

export default Product;
