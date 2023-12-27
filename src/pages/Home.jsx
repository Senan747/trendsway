import React from "react";
import Navbar from "../Components/Navbar";
import Menu from "../Components/Menu";
import HomeDesignPart from "../Components/HomeDesignPart";
import Products from "../Components/Products";
import Footer from "../Components/Footer";
import ForMore from "../Components/ForMore";
import HomburgerMenu from "../Components/HomburgerMenu";

function Home() {
  return (
    <div className="">
      <Navbar />
      <Menu /> 
      <HomburgerMenu />
      <HomeDesignPart />
      <Products />
      <ForMore />
      <Footer />
    </div>
  );
}

export default Home;
