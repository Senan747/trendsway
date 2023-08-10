import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Rating from "./Rating";
import Basket from "./Basket";
import Result from "./Result";
import Product from './Product';

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/rating" element={<Rating />} />
      <Route path="/basket" element={<Basket />} />
      <Route path="/result/:type" element={<Result />} />
      <Route path="/result/:type/:category" element={<Result />} />
      <Route path="/result/:type/:tag-bytag" element={<Result />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  );
}

export default Pages;
