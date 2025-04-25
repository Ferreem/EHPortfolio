import React from "react";
import Ahrefs from "./Ahrefs";
import Header from "./Header";

export default function Navbar() {
  return (
    <div className="w-full h-16 bgLinear flex items-center justify-between relative z-50">
      <Ahrefs />
      <Header color={"#ffffff"} >Úvod</Header>
    </div>
  );
}
