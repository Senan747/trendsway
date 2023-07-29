import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";

function Products() {
  const [products, setProducts] = useState([]);
  let location = useLocation();
  useEffect(() => {
    const url =
      "http://makeup-api.herokuapp.com/api/v1/products.json?rating_less_than=5";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const fetchedProducts = location.pathname.includes("rating")
          ? data
          : data.slice(0, 8);

        setProducts(fetchedProducts);
      });
  }, [location.pathname]);

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
    <div className="mx-auto p-4 flex flex-col items-end mt-[100px]">
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
              <div className="flex-end">
                <ul className="flex space-x-1">
                  {renderStars(product.rating)}
                </ul>
                <p className="text-lg font-semibold flex flex-row">
                  <p className="mr-1">{product.price}</p>
                  <p>
                    {product.price_sign === null ? "$" : product.price_sign}
                  </p>

                  {product.currency}
                </p>
                <div className="flex flex-row items-end justify-between">
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
                  <div className="rounded-[100%] hover:bg-gega-light-grey duration-300">
                    <SlBasket className="mr-[10px] text-5xl py-2" />
                  </div>
                </div>
              </div>
            </li>
          ) : null
        )}
      </ul>
      <div className="w-[100px] cursor-pointer mr-[50px] font-semibold">
        <Link to="/rating" className="flex items-center justify-around">
          <p>For more</p>
          <AiOutlineArrowRight />
        </Link>
      </div>
    </div>
  );
}

export default Products;
