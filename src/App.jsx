import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import HomeDesignPart from './Components/HomeDesignPart';
import Products from './Components/Products';
import Star from './Components/star'
import { BrowserRouter } from 'react-router-dom';
import Pages from './pages/Pages'
const App = () => {

  return (
    <div>
      <Pages />
    </div>
  );
};

export default App;
