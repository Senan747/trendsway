import React from "react";
import Navbar from "../Components/Navbar";
import Menu from "../Components/Menu";
import HomeDesignPart from "../Components/HomeDesignPart";
import Products from "../Components/Products";
import Footer from "../Components/Footer";
import ForMore from "../Components/ForMore";

function Home() {
  return (
    <div>
      <Navbar />
      <Menu />
      <HomeDesignPart />
      <Products />
      <ForMore />
      <Footer />
    </div>
  );
}

export default Home;
