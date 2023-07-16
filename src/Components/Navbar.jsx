import React from 'react'

function Navbar() {
  return (
    <div>
      <div className='max-h-[200px] bg-gega-green flex flex-row items-center justify-between '>
        <div className='max-h-[150px] max-w-[150px] '>
          <img src="../logo.png" alt="" className='w-full h-full' />
        </div>
        <div>
          <input type="search" className='border-1' />
        </div>
        <div>
          <button>Log in</button>
          <p>Sing up</p>
        </div>
      </div>
      <div className='pt-5'>
        <ul className='flex flex-row justify-around'>
          <li>Blush</li>
          <li>Bronzer</li>
          <li>Eyebrow</li>
          <li>Eyeliner</li>
          <li>Eyeshadow</li>
          <li>Foundation</li>
          <li>Lip liner</li>
          <li>Lipstick</li>
          <li>Mascara</li>
          <li>Nail polish</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar