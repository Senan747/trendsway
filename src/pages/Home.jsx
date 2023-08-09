import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Menu from '../Components/Menu'
import HomeDesignPart from "../Components/HomeDesignPart";
import Products from "../Components/Products";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Menu />
      <HomeDesignPart />
      <Products />
      <Footer />
    </div>
  );
}

export default Home;
