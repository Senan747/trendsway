import React from 'react'
import Navbar from '../Components/Navbar';
import HomeDesignPart from '../Components/HomeDesignPart';
import Products from '../Components/Products';
import Footer from '../Components/Footer'

function Home() {
  return (
    <div>
        <Navbar />
        <HomeDesignPart />
        <Products />
        <Footer />
    </div>
  )
}

export default Home