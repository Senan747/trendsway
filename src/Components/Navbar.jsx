import React from 'react'

function Navbar() {
  const dropDown = () => {
    console.log("mouse enter")
  }
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
          <li className='flex flex-col items-center' onMouseEnter={() => dropDown()}>
              <div className='max-w-[30px] max-h-[30px]'>
                <img src='blush.svg' alt=""  className='w-full h-full'/>
              </div>
              <p className='text-center'>Blush</p>
            </li>
            <li className='flex flex-col items-center'>
              <div className='max-w-[30px] max-h-[30px]'>
                <img src="nailpolish.png" alt=""  className='w-full h-full'/>
              </div>
              <p className='text-center'>Nail polish</p>
            </li>
            <li className='flex flex-col items-center'>
              <div className='max-w-[30px] max-h-[30px]'>
                <img src="mascara.png" alt=""  className='w-full h-full'/>
              </div>
              <p className='text-center'>Mascara</p>
            </li>
            <li className='flex flex-col items-center'>
              <div className='max-w-[30px] max-h-[30px]'>
                <img src="lipstick.png" alt=""  className='w-full h-full'/>
              </div>
              <p className='text-center'>Lipstick</p>
            </li>
            <li className='flex flex-col items-center'>
              <div className='max-w-[30px] max-h-[30px]'>
                <img src="lipliner.png" alt=""  className='w-full h-full'/>
              </div>
              <p className='text-center'>Lip liner</p>
            </li>
            <li className='flex flex-col items-center'>
              <div className='max-w-[30px] max-h-[30px]'>
                <img src="foundation.png" alt=""  className='w-full h-full'/>
              </div>
              <p className='text-center'>Foundation</p>
            </li>
            <li className='flex flex-col items-center'>
              <div className='max-w-[30px] max-h-[30px]'>
                <img src="eyeshadow.png" alt=""  className='w-full h-full'/>
              </div>
              <p className='text-center'>Eyeshadow</p>
            </li>
            <li className='flex flex-col items-center'>
              <div className='max-w-[30px] max-h-[30px]'>
                <img src="eyeliner.png" alt=""  className='w-full h-full'/>
              </div>
              <p className='text-center'>Eyeliner</p>
            </li>
            <li className='flex flex-col items-center'>
              <div className='max-w-[30px] max-h-[30px]'>
                <img src="eyebrow.png" alt=""  className='w-full h-full'/>
              </div>
              <p className='text-center'>Eyebrow</p>
            </li>
            <li className='flex flex-col items-center'>
              <div className='max-w-[30px] max-h-[30px]'>
                <img src="bronzer.png" alt=""  className='w-full h-full'/>
              </div>
              <p className='text-center'>Bronzer</p>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar