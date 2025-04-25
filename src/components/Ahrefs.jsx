import React from "react";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/Facebook.svg";
import linkedin from "../assets/Linkedin.svg";

export default function Ahrefs() {
  return (
      <div className="w-42 h-14 flex items-center ml-2">
        <a className="size-11 flex items-center justify-center box-content" 
        href="https://www.facebook.com/elee.chan.5">
          <img className="size-6 cursor-pointer" src={facebook} alt="facebook" />
        </a>
        <a className="size-11 flex items-center justify-center box-content" 
        href="https://www.instagram.com/eliska._.elli/">
          <img className="size-6 cursor-pointer" src={instagram} alt="instagram" />
        </a>
        <a
          className="size-11 flex items-center justify-center box-content"
          href="https://www.linkedin.com/in/eliška-havelková-5464b1284/">
          <img className="size-6 cursor-pointer" src={linkedin} alt="linkedIn" />
        </a>
      </div>
  );
}