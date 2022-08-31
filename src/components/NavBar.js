import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {

  return (
    <div
      className="bg-emerald-400
      border-b-2
      px-8
      flex
      items-center
      justify-between
      border-sky-900"
      style={{ width: "100%", height: "10vh" }}
    >
      <img alt="img"  className="cursor-pointer" src="https://img.icons8.com/arcade/64/000000/experimental-tsunami-arcade.png"/>
      
      <NavLink to="/home" key='DATA' className="text-2xl cursor-pointer font-semibold underline">Home</NavLink>

      <a href="https://github.com/AjeetSingh2016/disaster" target="_blank" rel="noopener noreferrer">
          <img alt="img" className="cursor-pointer" src="https://img.icons8.com/glyph-neue/64/000000/github.png"/>
      </a>
  

      </div>
  );
};

export default NavBar;
