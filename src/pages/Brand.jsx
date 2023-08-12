import React from "react";
import { useParams } from "react-router-dom";
import Products from "../Components/Products";
import Navbar from "../Components/Navbar";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";

function Brand() {
  const { brandName } = useParams();
  return <div>
    <Navbar />
    <Menu />
    <Products />
    <Footer />
  </div>;
}

export default Brand;
