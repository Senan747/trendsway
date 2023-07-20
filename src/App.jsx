import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import HomeDesignPart from './Components/HomeDesignPart';
import Products from './Components/Products';
import Star from './Components/star'
const App = () => {

  return (
    <div>
      <Navbar />
      <HomeDesignPart />
      <Products />
      <Star />
    </div>
  );
};

export default App;
