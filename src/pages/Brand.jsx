import React from "react";
import { useParams } from "react-router-dom";
import Products from "../Components/Products";
import Navbar from "../Components/Navbar";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import HomburgerMenu from "../Components/HomburgerMenu";

function Brand() {
  const { brandName } = useParams();
  return <div>
    <Navbar />
    <Menu />
    <HomburgerMenu />
    <Products />
    <Footer />
  </div>;
}

export default Brand;
