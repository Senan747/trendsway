import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import HomeDesignPart from './Components/HomeDesignPart';
import Products from './Components/Products';
const App = () => {

  return (
    <div>
      <Navbar />
      <HomeDesignPart />
      <Products />
    </div>
  );
};

export default App;
