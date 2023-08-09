import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Rating from "./Rating";
import Basket from "./Basket";
import Result from "./Result";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/rating" element={<Rating />} />
      <Route path="/basket" element={<Basket />} />
      <Route path="/result/:search" element={<Result />} />
    </Routes>
  );
}

export default Pages;
