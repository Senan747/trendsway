import React from "react";
import { useUserData } from "../UserDataContext";
import { useProductData } from "../ProductDataContext";

function Basket() {
  const { userData } = useUserData();
  const { productData } = useProductData();

  return (
    <div>
      <div className="flex flex-row justify-between items-center py-5 px-20 bg-gega-pink">
        <p className="text-gega-white text-3xl font-bold">Hello <span className="text-gega-rose">{userData.username}</span>, Thanks for choosing us!</p>
        <div className="max-h-[150px] max-w-[150px] ">
          <img src="../logo.png" alt="" className="w-full h-full" />
        </div>
      </div>
      <div>
      {
        productData === null ? (
          <span>No product selected</span>
        ) :
        (
          <ul className="flex flex-wrap flex-row justify-around">
          {productData.map((product) =>
            product.image_link !== null ? (
              <li
                key={product.id}
                className="border p-4 mb-10 rounded-lg shadow-md max-w-[300px] cursor-pointer"
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
                  <ul className="flex space-x-1">
                    {renderStars(product.rating)}
                  </ul>
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
                          className="w-6 h-6 rounded-full"
                          style={{ backgroundColor: color.hex_value }}
                          title={color.colour_name}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ) : null
          )}
        </ul>
        )
      }
      <ul className="flex flex-wrap flex-row justify-around">
        {productData.map((product) =>
          product.image_link !== null ? (
            <li
              key={product.id}
              className="border p-4 mb-10 rounded-lg shadow-md max-w-[300px] cursor-pointer"
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
                <ul className="flex space-x-1">
                  {renderStars(product.rating)}
                </ul>
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
                        className="w-6 h-6 rounded-full"
                        style={{ backgroundColor: color.hex_value }}
                        title={color.colour_name}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ) : null
        )}
      </ul>
      </div>
    </div>
  );
}

export default Basket;
