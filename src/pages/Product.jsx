import React from "react";
import { useUserData } from "../UserDataContext";
import Navbar from "../Components/Navbar";
import Menu from "../Components/Menu";
import HomburgerMenu from "../Components/HomburgerMenu";
import Stars from "../Components/Stars";

function Product() {
  const { product } = useUserData();

  return (
    <div>
      <Navbar />
      <Menu />
      <HomburgerMenu />
      <div className="flex flex-col gap-10 mt-10">
        <div className="flex flex-row items-center justify-center">
          <div className="w-[300px] h-[300px]">
            <img src={product.image_link} alt="" className="w-full " />
          </div>
          <div className="ml-10">
            <p className="text-2xl font-semibold">{product.name}</p>
            <p className="mt-5 text-3xl">
              {product.price}{" "}
              <span>
                {product.price_sign === null ? "$" : product.price_sign}
              </span>
            </p>
            <div className="flex space-x-2 pt-5">
              {product.product_colors.map((color, index) => (
                <div
                  key={index}
                  className="w-6 h-6 rounded-full"
                  style={{ backgroundColor: color.hex_value }}
                  title={color.colour_name}
                />
              ))}
            </div>
            <a href={product.product_link} className="">
              <button className="mt-10 bg-gega-pink text-gega-white px-16 py-2 rounded-lg">
                Buy
              </button>
            </a>
          </div>
        </div>
        <div className="p-10 text-justify">
          <h1 className="text-center text-lg font-semibold underline">
            Description
          </h1>
          <p>{product.description}</p>
          <ul className="pl-8 pt-5">
            {product.tag_list.map((tag) => (
              <li className="list-disc">{tag}</li>
            ))}
          </ul>
          <div className="flex flex-row mt-5">
            <Stars />
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default Product;
