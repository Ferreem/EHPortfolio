import React from 'react'
import instagram from "../assets/instagram.svg";
import facebook from "../assets/Facebook.svg";
import linkedin from "../assets/Linkedin.svg";

export default function Footer() {
  const shift = (offset) => () => {
    window.scrollTo({
      top: window.innerHeight * parseFloat(offset),
      behavior: 'smooth',
    });
  };

  return (
    <div className='w-full h-20 bg-eBlue flex items-center justify-between'>
      <div className="w-22 h-12 flex justify-between items-center !ml-10">
        <a href="https://www.facebook.com/elee.chan.5">
          <img className="w-4 cursor-pointer" src={facebook} alt="facebook" />
        </a>
        <a href="https://www.instagram.com/eliska._.elli/">
          <img className="w-4 cursor-pointer" src={instagram} alt="instagram" />
        </a>
        <a
          href="https://www.linkedin.com/in/eliška-havelková-5464b1284/">
          <img className="w-4 cursor-pointer" src={linkedin} alt="linkedIn" />
        </a>
      </div>
      <div className='text-white w-xl flex justify-center 
      '
      style={{
        fontFamily: '"Funnel Sans", sans-serif',
        fontOpticalSizing: 'auto',
        fontStyle: 'normal',
        fontWeight: '400'
      }} >
        © 2025 Eliska Havelkova
      </div>
      <div className='flex justify-between w-1/12 !mr-10'>
        <button onClick={shift(0.08)} className='text-white text-sm cursor-pointer'>Úvod</button>
        <button onClick={shift(0.95)} className='text-white text-sm cursor-pointer'>Momentky</button>
        <button onClick={shift(1.55)} className='text-white text-sm cursor-pointer'>Práce</button>
      </div>
    </div>
  )
}
