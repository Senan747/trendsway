import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Products from "../Components/Products";

function Result() {
  // const [products, setProducts] = useState([]);
  // const { category } = useParams();

  // useEffect(() => {
  //   const url =
  //     `http://makeup-api.herokuapp.com/api/v1/products.json?brand=&product_type=&product_category=${category}`;
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data));
  // }, [category]);
  return (
    <div>
      <Navbar />
      <Products />
      <Footer />
    </div>
  );
}

export default Result;
