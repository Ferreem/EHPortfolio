import React from 'react'
import instagram from "../assets/instagram.svg";
import facebook from "../assets/Facebook.svg";
import linkedin from "../assets/Linkedin.svg";

export default function Footer() {
  return (
    <div className='w-full h-20 bg-eBlue flex items-center justify-between'>
      <div className="w-22 h-12 flex justify-between items-center !ml-10">
        <a href="https://www.facebook.com/elee.chan.5">
          <img className="w-4" src={facebook} alt="facebook" />
        </a>
        <a href="https://www.instagram.com/eliska._.elli/">
          <img className="w-4" src={instagram} alt="instagram" />
        </a>
        <a
          href="https://www.linkedin.com/in/eliška-havelková-5464b1284/">
          <img className="w-4" src={linkedin} alt="linkedIn" />
        </a>
      </div>
      <div className='text-white w-xl flex justify-center' >
        © 2025 Eliska Havelkova
      </div>
      <div className='flex justify-between w-1/12 !mr-10'>
        <button className='text-white text-sm'>Uvod</button>
        <button className='text-white text-sm'>O mne</button>
        <button className='text-white text-sm'>Prace</button>
      </div>
    </div>
  )
}
