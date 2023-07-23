import React from 'react'
import Navbar from '../Components/Navbar';
import HomeDesignPart from '../Components/HomeDesignPart';
import Products from '../Components/Products';
import Star from '../Components/star'

function Home() {
  return (
    <div>
        <Navbar />
        <HomeDesignPart />
        <Products />
        <Star />
    </div>
  )
}

export default Home