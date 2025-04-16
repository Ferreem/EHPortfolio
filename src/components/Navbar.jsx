import React from "react";
import burgerMenu from "../assets/burgerMenu.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/Facebook.svg";
import linkedin from "../assets/Linkedin.svg";

export default function Navbar() {
  return (
    <div className="w-full h-28 bg-eBlue bg-gradient-to-r from-eYellow flex items-center relative z-50">
      <img className="absolute left-16 w-8" src={burgerMenu} alt="Menu" />
      <div className="absolute right-16 top-8 w-16 h-14 flex justify-between">
        <a href="https://www.facebook.com/elee.chan.5">
          <img className="w-3.5" src={facebook} alt="facebook" />
        </a>
        <a href="https://www.instagram.com/eliska._.elli/">
          <img className="w-3.5" src={instagram} alt="instagram" />
        </a>
        <a
          href="https://www.linkedin.com/in/eliška-havelková-5464b1284/">
          <img className="w-3.5" src={linkedin} alt="linkedIn" />
        </a>

      </div>

      <div className="absolute right-0 bottom-2 flex h-10 w-30 justify-end items-center">
        <h1 className="!mr-2 text-white text-2xl absolute left-2 top-0">Úvod</h1>
        <div className="bg-white h-1.5 w-14 absolute"></div>
      </div>
    </div>
  );
}
