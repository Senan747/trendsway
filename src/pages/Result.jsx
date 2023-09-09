import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Products from "../Components/Products";
import Menu from "../Components/Menu";
import HomburgerMenu from "../Components/HomburgerMenu";

function Result() {
  return (
    <div>
      <Navbar />
      <Menu />
      <HomburgerMenu /> 
      <Products />
      <Footer />
    </div>
  );
}

export default Result;
