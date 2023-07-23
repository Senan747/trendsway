import React from 'react'
import Navbar from '../Components/Navbar';
import HomeDesignPart from '../Components/HomeDesignPart';
import Products from '../Components/Products';

function Home() {
  return (
    <div>
        <Navbar />
        <HomeDesignPart />
        <Products />
    </div>
  )
}

export default Home