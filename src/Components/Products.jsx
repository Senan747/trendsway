import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url =
      "http://makeup-api.herokuapp.com/api/v1/products.json?rating_less_than=5";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data.slice(0, 8)));
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    let rate = Math.round(rating);

    for (let i = 0; i < rate; i++) {
      stars.push(<AiFillStar key={i} className="text-gega-star text-xl" />);
    }

    for (let i = 0; i < 5 - rate; i++) {
      stars.push(<AiOutlineStar key={i} className="text-gega-star text-xl" />);
    }
    return stars;
  };

  return (
    <div className="mx-auto p-4 flex flex-col items-end">
      <ul className="flex flex-wrap flex-row justify-around">
        {products.map((product) =>
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
              <ul className="flex space-x-1">{renderStars(product.rating)}</ul>
              <p className="text-lg font-semibold flex flex-row">
                <p className="mr-1">{product.price}</p>
                <p>{product.price_sign === null ? "$" : product.price_sign}</p>

                {product.currency}
              </p>
              <ul className="flex flex-wrap space-x-2">
                {product.product_colors.map((color, index) => (
                  <li
                    key={index}
                    className="w-6 h-6 rounded-full"
                    style={{ backgroundColor: color.hex_value }}
                    title={color.colour_name}
                  />
                ))}
              </ul>
            </li>
          ) : null
        )}
      </ul>
      <div className="flex w-[100px] items-center cursor-pointer mr-[50px] font-semibold">
        <p>For more</p>
        <AiOutlineArrowRight />
      </div>
    </div>
  );
}

export default Products;
