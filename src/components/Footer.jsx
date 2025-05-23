import React from 'react'
import Ahrefs from './Ahrefs';

export default function Footer() {
  const shift = (offset) => () => {
    window.scrollTo({
      top: window.innerHeight * parseFloat(offset),
      behavior: 'smooth',
    });
  };

  return (
    <div className='w-full h-20 bg-eBlue flex items-center text-center  justify-between relative'>
        <Ahrefs/>
      <div className='text-white flex flex-shrink-1 justify-center absolute w-full '
      style={{
        fontFamily: '"Funnel Sans", sans-serif',
        fontOpticalSizing: 'auto',
        fontStyle: 'normal',
        fontWeight: '400'
      }} >
        © 2025 Eliska Havelkova
      </div>
      <div className='flex justify-between w-24 mr-8 z-50'>
        <button onClick={shift(0.08)} className='text-white text-sm cursor-pointer'>Úvod</button>
        <button onClick={shift(0.95)} className='text-white text-sm cursor-pointer'>Momentky</button>
      </div>
    </div>
  )
}
